'use client'

import { useEffect, useState } from 'react'
import { createClient, AboutContent } from '@/lib/supabase'

export default function AdminAbout() {
  const [sections, setSections] = useState<AboutContent[]>([])
  const [saving, setSaving] = useState<string | null>(null)
  const supabase = createClient()

  const load = async () => {
    const { data } = await supabase.from('about_content').select('*').order('section_key')
    setSections((data as AboutContent[]) ?? [])
  }

  useEffect(() => { load() }, [])

  const save = async (section: AboutContent) => {
    setSaving(section.section_key)
    await supabase.from('about_content').upsert(section)
    setSaving(null)
  }

  const updateContent = (key: string, value: string) => {
    setSections((prev) => prev.map((s) => s.section_key === key ? { ...s, content_md: value } : s))
  }

  return (
    <div>
      <h1 className='text-2xl font-bold mb-6'>About</h1>
      <div className='space-y-6'>
        {sections.map((section) => (
          <div key={section.section_key} className='border rounded-xl p-6'>
            <h2 className='font-semibold mb-3 capitalize'>{section.section_key}</h2>
            <textarea
              value={section.content_md ?? ''}
              onChange={(e) => updateContent(section.section_key, e.target.value)}
              rows={section.section_key === 'bio' ? 12 : 6}
              className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent font-mono mb-3'
            />
            <button
              onClick={() => save(section)}
              disabled={saving === section.section_key}
              className='bg-[#3182f6] text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50'>
              {saving === section.section_key ? '저장 중...' : '저장'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
