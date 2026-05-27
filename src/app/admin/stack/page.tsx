'use client'

import { useEffect, useState } from 'react'
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import { createClient, StackItem } from '@/lib/supabase'
import AdminEditPanel from '@/components/admin/AdminEditPanel'
import SortableItem from '@/components/admin/SortableItem'

const CATEGORIES = ['Frontend', 'Backend', 'Infra', 'Cooperation'] as const
const EMPTY: Omit<StackItem, 'id'> = { category: 'Frontend', name: '', is_learning: false, sort_order: 0 }
const ic = 'w-full border border-[var(--foreground)]/15 rounded-xl px-4 py-2.5 text-sm bg-transparent focus:outline-none focus:border-[#3182f6] transition-colors'

function Preview({ e }: { e: Partial<StackItem> }) {
  return (
    <div className='py-2'>
      <div className='text-xs font-semibold uppercase tracking-widest opacity-40 mb-3'>{e.category || 'Category'}</div>
      <div className='text-base font-medium'>
        · {e.name || <span className='opacity-25 italic text-sm'>기술명</span>}
        {e.is_learning && <span className='ml-1'>🍅</span>}
      </div>
    </div>
  )
}

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

  const handleCategoryDragEnd = async (event: DragEndEvent, category: string) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const catItems = items.filter(i => i.category === category)
    const oldIndex = catItems.findIndex(i => i.id === active.id)
    const newIndex = catItems.findIndex(i => i.id === over.id)
    const reordered = arrayMove(catItems, oldIndex, newIndex)
    setItems(prev => {
      const others = prev.filter(i => i.category !== category)
      return [...others, ...reordered].sort((a, b) => {
        const ci = CATEGORIES.indexOf(a.category as typeof CATEGORIES[number])
        const cj = CATEGORIES.indexOf(b.category as typeof CATEGORIES[number])
        return ci !== cj ? ci - cj : 0
      })
    })
    await Promise.all(reordered.map((item, idx) =>
      supabase.from('stack_items').update({ sort_order: idx }).eq('id', item.id)
    ))
  }

  const grouped = CATEGORIES.reduce<Record<string, StackItem[]>>((acc, cat) => {
    acc[cat] = items.filter(i => i.category === cat)
    return acc
  }, {} as Record<string, StackItem[]>)

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold'>Stack</h1>
        <button
          onClick={() => {
            const cat = editing?.category ?? 'Frontend'
            setEditing({ ...EMPTY, sort_order: grouped[cat]?.length ?? 0 })
          }}
          className='bg-[#3182f6] text-white px-4 py-2 rounded-xl text-sm font-medium'>
          + 추가
        </button>
      </div>

      {CATEGORIES.map((cat) => (
        <div key={cat} className='mb-6'>
          <h2 className='text-xs font-semibold uppercase tracking-widest opacity-40 mb-2'>{cat}</h2>
          <DndContext collisionDetection={closestCenter} onDragEnd={(e) => handleCategoryDragEnd(e, cat)}>
            <SortableContext items={grouped[cat].map(i => i.id)} strategy={verticalListSortingStrategy}>
              <div className='space-y-2'>
                {grouped[cat].map((item) => (
                  <SortableItem key={item.id} id={item.id}>
                    <div className='border border-[var(--foreground)]/10 rounded-2xl p-4 flex items-center justify-between hover:border-[var(--foreground)]/20 transition-colors'>
                      <span className='text-sm'>{item.name}{item.is_learning ? ' 🍅' : ''}</span>
                      <div className='flex gap-2 flex-shrink-0'>
                        <button onClick={() => setEditing(item)} className='text-sm border border-[var(--foreground)]/15 px-3 py-1.5 rounded-lg hover:border-[#3182f6] hover:text-[#3182f6] transition-colors'>수정</button>
                        <button onClick={() => remove(item.id)} className='text-sm border border-[var(--foreground)]/15 px-3 py-1.5 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors'>삭제</button>
                      </div>
                    </div>
                  </SortableItem>
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      ))}

      <AdminEditPanel
        open={editing !== null}
        title={editing?.id ? '스택 수정' : '새 스택'}
        onClose={() => setEditing(null)}
        onSave={save}
        saving={saving}
        form={editing ? (
          <>
            <select value={editing.category ?? 'Frontend'} onChange={(e) => setEditing({ ...editing, category: e.target.value as StackItem['category'] })} className={ic}>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <input placeholder='기술명 (예: Next.js)' value={editing.name ?? ''} onChange={(e) => setEditing({ ...editing, name: e.target.value })} className={ic} />
            <label className='flex items-center gap-3 px-1 cursor-pointer'>
              <input type='checkbox' checked={editing.is_learning ?? false} onChange={(e) => setEditing({ ...editing, is_learning: e.target.checked })} className='w-4 h-4 accent-[#3182f6]' />
              <span className='text-sm'>학습 중 🍅</span>
            </label>
          </>
        ) : null}
        preview={editing ? <Preview e={editing} /> : null}
      />
    </div>
  )
}
