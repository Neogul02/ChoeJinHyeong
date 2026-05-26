'use client'

import { useEffect, useState } from 'react'
import { createClient, StackItem } from '@/lib/supabase'

const CATEGORIES = ['Frontend', 'Backend', 'Infra', 'Cooperation'] as const
const EMPTY: Omit<StackItem, 'id'> = { category: 'Frontend', name: '', is_learning: false, sort_order: 0 }

export default function AdminStack() {
  const [items, setItems] = useState<StackItem[]>([])
  const [editing, setEditing] = useState<Partial<StackItem> | null>(null)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  const load = async () => {
    const { data } = await supabase.from('stack_items').select('*').order('category').order('sort_order')
    setItems((data as StackItem[]) ?? [])
  }

  useEffect(() => { load() }, [])

  const save = async () => {
    if (!editing) return
    setSaving(true)
    await supabase.from('stack_items').upsert(editing)
    setSaving(false)
    setEditing(null)
    load()
  }

  const remove = async (id: number) => {
    if (!confirm('삭제하시겠습니까?')) return
    await supabase.from('stack_items').delete().eq('id', id)
    load()
  }

  const grouped = CATEGORIES.reduce<Record<string, StackItem[]>>((acc, cat) => {
    acc[cat] = items.filter((i) => i.category === cat)
    return acc
  }, {} as Record<string, StackItem[]>)

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold'>Stack</h1>
        <button onClick={() => setEditing(EMPTY)} className='bg-[#3182f6] text-white px-4 py-2 rounded-lg text-sm'>+ 추가</button>
      </div>

      {editing && (
        <div className='border rounded-xl p-6 mb-6 space-y-3'>
          <h2 className='font-semibold'>{editing.id ? '수정' : '새 항목'}</h2>
          <select value={editing.category ?? 'Frontend'} onChange={(e) => setEditing({ ...editing, category: e.target.value as StackItem['category'] })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent'>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
          <input placeholder='이름' value={editing.name ?? ''} onChange={(e) => setEditing({ ...editing, name: e.target.value })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <input type='number' placeholder='순서' value={editing.sort_order ?? 0} onChange={(e) => setEditing({ ...editing, sort_order: Number(e.target.value) })} className='w-full border rounded-lg px-3 py-2 text-sm bg-transparent' />
          <div className='flex items-center gap-2'>
            <input type='checkbox' id='learning' checked={editing.is_learning ?? false} onChange={(e) => setEditing({ ...editing, is_learning: e.target.checked })} />
            <label htmlFor='learning' className='text-sm'>학습 중 🍅</label>
          </div>
          <div className='flex gap-3'>
            <button onClick={save} disabled={saving} className='bg-[#3182f6] text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50'>{saving ? '저장 중...' : '저장'}</button>
            <button onClick={() => setEditing(null)} className='border px-4 py-2 rounded-lg text-sm'>취소</button>
          </div>
        </div>
      )}

      {CATEGORIES.map((cat) => (
        <div key={cat} className='mb-6'>
          <h2 className='font-semibold text-lg mb-2'>{cat}</h2>
          <div className='space-y-2'>
            {grouped[cat].map((item) => (
              <div key={item.id} className='border rounded-lg p-3 flex items-center justify-between'>
                <span className='text-sm'>{item.name}{item.is_learning ? ' 🍅' : ''} · 순서: {item.sort_order}</span>
                <div className='flex gap-2'>
                  <button onClick={() => setEditing(item)} className='text-xs border px-2 py-1 rounded hover:border-[#3182f6] hover:text-[#3182f6]'>수정</button>
                  <button onClick={() => remove(item.id)} className='text-xs border px-2 py-1 rounded hover:border-red-500 hover:text-red-500'>삭제</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
