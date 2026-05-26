'use client'

import { useEffect, useState } from 'react'
import { createClient, ActivityEntry } from '@/lib/supabase'

const EMPTY: Omit<ActivityEntry, 'id'> = { organization: '', period: '', role: '', content_md: '', external_link: '', sort_order: 0 }

export default function AdminActivities() {
  const [items, setItems] = useState<ActivityEntry[]>([])
  const [editing, setEditing] = useState<Partial<ActivityEntry> | null>(null)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  const load = async () => {
    const { data } = await supabase.from('activities').select('*').order('sort_order')
    setItems((data as ActivityEntry[]) ?? [])
  }

  useEffect(() => { load() }, [])

  const save = async () => {
    if (!editing) return
    setSaving(true)
    await supabase.from('activities').upsert(editing)
    setSaving(false)
    setEditing(null)
    load()
  }

  const remove = async (id: number) => {
    if (!confirm('삭제하시겠습니까?')) return
    await supabase.from('activities').delete().eq('id', id)
    load()
  }

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold'>Activities</h1>
        <button onClick={() => setEditing(EMPTY)} className='bg-[#3182f6] text-white px-4 py-2 rounded-lg text-sm'>+ 추가</button>
      </div>

      {editing && (
        <div className='border rounded-xl p-6 mb-6 space-y-3'>
          <h2 className='font-semibold'>{editing.id ? '수정' : '새 항목'}</h2>
          <input placeholder='단체명' value={editing.organization ?? ''} onChange={(e) => setEditing({ ...editing, organization: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <input placeholder='기간' value={editing.period ?? ''} onChange={(e) => setEditing({ ...editing, period: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <input placeholder='역할' value={editing.role ?? ''} onChange={(e) => setEditing({ ...editing, role: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <input placeholder='외부 링크 (선택)' value={editing.external_link ?? ''} onChange={(e) => setEditing({ ...editing, external_link: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <input type='number' placeholder='순서' value={editing.sort_order ?? 0} onChange={(e) => setEditing({ ...editing, sort_order: Number(e.target.value) })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <textarea placeholder='내용 (줄바꿈으로 항목 구분)' value={editing.content_md ?? ''} onChange={(e) => setEditing({ ...editing, content_md: e.target.value })} rows={6} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent font-mono' />
          <div className='flex gap-3'>
            <button onClick={save} disabled={saving} className='bg-[#3182f6] text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50'>{saving ? '저장 중...' : '저장'}</button>
            <button onClick={() => setEditing(null)} className='border px-4 py-2 rounded-lg text-sm'>취소</button>
          </div>
        </div>
      )}

      <div className='space-y-3'>
        {items.map((item) => (
          <div key={item.id} className='border rounded-xl p-4 flex items-center justify-between'>
            <div>
              <div className='font-medium'>{item.organization}</div>
              <div className='text-sm text-gray-400'>{item.period} · {item.role}</div>
            </div>
            <div className='flex gap-2'>
              <button onClick={() => setEditing(item)} className='text-sm border px-3 py-1 rounded-lg hover:border-[#3182f6] hover:text-[#3182f6]'>수정</button>
              <button onClick={() => remove(item.id)} className='text-sm border px-3 py-1 rounded-lg hover:border-red-500 hover:text-red-500'>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
