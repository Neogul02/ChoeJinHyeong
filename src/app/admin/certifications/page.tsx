'use client'

import { useEffect, useState } from 'react'
import { createClient, CertificationEntry } from '@/lib/supabase'

const EMPTY: Omit<CertificationEntry, 'id'> = { title: '', date_text: '', issuer: '', sort_order: 0 }

export default function AdminCertifications() {
  const [items, setItems] = useState<CertificationEntry[]>([])
  const [editing, setEditing] = useState<Partial<CertificationEntry> | null>(null)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  const load = async () => {
    const { data } = await supabase.from('certifications').select('*').order('sort_order')
    setItems((data as CertificationEntry[]) ?? [])
  }

  useEffect(() => { load() }, [])

  const save = async () => {
    if (!editing) return
    setSaving(true)
    await supabase.from('certifications').upsert(editing)
    setSaving(false)
    setEditing(null)
    load()
  }

  const remove = async (id: number) => {
    if (!confirm('삭제하시겠습니까?')) return
    await supabase.from('certifications').delete().eq('id', id)
    load()
  }

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold'>Certification</h1>
        <button onClick={() => setEditing(EMPTY)} className='bg-[#3182f6] text-white px-4 py-2 rounded-lg text-sm'>+ 추가</button>
      </div>

      {editing && (
        <div className='border rounded-xl p-6 mb-6 space-y-3'>
          <h2 className='font-semibold'>{editing.id ? '수정' : '새 항목'}</h2>
          <input placeholder='자격증명' value={editing.title ?? ''} onChange={(e) => setEditing({ ...editing, title: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <input placeholder='취득일 (예: 2025.09)' value={editing.date_text ?? ''} onChange={(e) => setEditing({ ...editing, date_text: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <input placeholder='발급기관' value={editing.issuer ?? ''} onChange={(e) => setEditing({ ...editing, issuer: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <input type='number' placeholder='순서' value={editing.sort_order ?? 0} onChange={(e) => setEditing({ ...editing, sort_order: Number(e.target.value) })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
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
              <div className='font-medium'>{item.title}</div>
              <div className='text-sm text-gray-400'>{item.date_text} · {item.issuer}</div>
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
