'use client'

import { useEffect, useState } from 'react'
import { createClient, Project } from '@/lib/supabase'

const EMPTY: Omit<Project, 'id' | 'updated_at'> = {
  title: '', period: '', image: '', bg_dark: '', bg_light: '',
  sort_order: 0, content_md: '', is_active: true,
}

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [editing, setEditing] = useState<Partial<Project> | null>(null)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  const load = async () => {
    const { data } = await supabase.from('projects').select('*').order('sort_order')
    setProjects((data as Project[]) ?? [])
  }

  useEffect(() => { load() }, [])

  const save = async () => {
    if (!editing) return
    setSaving(true)
    await supabase.from('projects').upsert({ ...editing, updated_at: new Date().toISOString() })
    setSaving(false)
    setEditing(null)
    load()
  }

  const remove = async (id: number) => {
    if (!confirm('삭제하시겠습니까?')) return
    await supabase.from('projects').delete().eq('id', id)
    load()
  }

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold'>Projects</h1>
        <button onClick={() => setEditing(EMPTY)} className='bg-[#3182f6] text-white px-4 py-2 rounded-lg text-sm'>+ 추가</button>
      </div>

      {editing && (
        <div className='border rounded-xl p-6 mb-6 space-y-3'>
          <h2 className='font-semibold text-lg'>{editing.id ? '수정' : '새 프로젝트'}</h2>
          <input placeholder='제목' value={editing.title ?? ''} onChange={(e) => setEditing({ ...editing, title: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <input placeholder='기간 (예: 2024.10 ~ 2024.12)' value={editing.period ?? ''} onChange={(e) => setEditing({ ...editing, period: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <input placeholder='이미지 경로 (예: /images/project/main.png)' value={editing.image ?? ''} onChange={(e) => setEditing({ ...editing, image: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <div className='flex gap-3'>
            <input placeholder='bg_dark (hex)' value={editing.bg_dark ?? ''} onChange={(e) => setEditing({ ...editing, bg_dark: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
            <input placeholder='bg_light (hex)' value={editing.bg_light ?? ''} onChange={(e) => setEditing({ ...editing, bg_light: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          </div>
          <input type='number' placeholder='순서' value={editing.sort_order ?? 0} onChange={(e) => setEditing({ ...editing, sort_order: Number(e.target.value) })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <textarea
            placeholder='내용 (Markdown)'
            value={editing.content_md ?? ''}
            onChange={(e) => setEditing({ ...editing, content_md: e.target.value })}
            rows={12}
            className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent font-mono'
          />
          <div className='flex items-center gap-2'>
            <input type='checkbox' id='active' checked={editing.is_active ?? true} onChange={(e) => setEditing({ ...editing, is_active: e.target.checked })} />
            <label htmlFor='active' className='text-sm'>활성화</label>
          </div>
          <div className='flex gap-3'>
            <button onClick={save} disabled={saving} className='bg-[#3182f6] text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50'>{saving ? '저장 중...' : '저장'}</button>
            <button onClick={() => setEditing(null)} className='border px-4 py-2 rounded-lg text-sm'>취소</button>
          </div>
        </div>
      )}

      <div className='space-y-3'>
        {projects.map((p) => (
          <div key={p.id} className='border rounded-xl p-4 flex items-center justify-between'>
            <div>
              <div className='font-medium'>{p.title}</div>
              <div className='text-sm text-gray-400'>{p.period} · 순서: {p.sort_order} {!p.is_active && '· 비활성'}</div>
            </div>
            <div className='flex gap-2'>
              <button onClick={() => setEditing(p)} className='text-sm border px-3 py-1 rounded-lg hover:border-[#3182f6] hover:text-[#3182f6]'>수정</button>
              <button onClick={() => remove(p.id)} className='text-sm border px-3 py-1 rounded-lg hover:border-red-500 hover:text-red-500'>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
