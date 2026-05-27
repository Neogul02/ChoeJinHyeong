'use client'

import { useEffect, useState } from 'react'
import { createClient, AboutContent } from '@/lib/supabase'
import AdminEditPanel from '@/components/admin/AdminEditPanel'
import MarkdownContent from '@/components/ui/MarkdownContent'

const ic = 'w-full border border-[var(--foreground)]/15 rounded-xl px-4 py-2.5 text-sm bg-transparent focus:outline-none focus:border-[#3182f6] transition-colors'

function ContactPreview({ content }: { content: string }) {
  return (
    <div className='space-y-1 py-2'>
      {content.split('\n').map((line, i) => (
        <div key={i} className='text-sm font-medium'>{line || <span className='opacity-0'>-</span>}</div>
      ))}
    </div>
  )
}

export default function AdminAbout() {
  const [sections, setSections] = useState<AboutContent[]>([])
  const [editing, setEditing] = useState<AboutContent | null>(null)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  const load = async () => {
    const { data } = await supabase.from('about_content').select('*').order('section_key')
    setSections((data as AboutContent[]) ?? [])
  }
  useEffect(() => { load() }, [])

  const save = async () => {
    if (!editing) return
    setSaving(true)
    await supabase.from('about_content').upsert(editing)
    setSaving(false)
    setEditing(null)
    load()
  }

  const LABEL: Record<string, string> = { bio: '자기소개 (bio)', contact: '연락처 (contact)' }

  return (
    <div>
      <h1 className='text-2xl font-bold mb-6'>About</h1>

      <div className='space-y-2'>
        {sections.map((section) => (
          <div key={section.section_key} className='border border-[var(--foreground)]/10 rounded-2xl p-4 flex items-center justify-between hover:border-[var(--foreground)]/20 transition-colors'>
            <div>
              <div className='font-medium'>{LABEL[section.section_key] ?? section.section_key}</div>
              <div className='text-sm opacity-40 mt-0.5 line-clamp-1'>{section.content_md?.slice(0, 60)}…</div>
            </div>
            <button
              onClick={() => setEditing(section)}
              className='text-sm border border-[var(--foreground)]/15 px-3 py-1.5 rounded-lg hover:border-[#3182f6] hover:text-[#3182f6] transition-colors flex-shrink-0 ml-4'>
              수정
            </button>
          </div>
        ))}
      </div>

      <AdminEditPanel
        open={editing !== null}
        title={editing ? (LABEL[editing.section_key] ?? editing.section_key) : ''}
        onClose={() => setEditing(null)}
        onSave={save}
        saving={saving}
        form={editing ? (
          <textarea
            value={editing.content_md ?? ''}
            onChange={(e) => setEditing({ ...editing, content_md: e.target.value })}
            rows={editing.section_key === 'bio' ? 14 : 8}
            className={`${ic} font-mono resize-none`}
          />
        ) : null}
        preview={editing ? (
          editing.section_key === 'bio'
            ? <MarkdownContent content={editing.content_md ?? ''} />
            : <ContactPreview content={editing.content_md ?? ''} />
        ) : null}
      />
    </div>
  )
}
