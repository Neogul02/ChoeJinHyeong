'use client'

import { useEffect, useState } from 'react'
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import { createClient, EducationEntry } from '@/lib/supabase'
import AdminEditPanel from '@/components/admin/AdminEditPanel'
import SortableItem from '@/components/admin/SortableItem'

const EMPTY: Omit<EducationEntry, 'id'> = { institution: '', period: '', department: '', content_md: '', sort_order: 0 }
const ic = 'w-full border border-[var(--foreground)]/15 rounded-xl px-4 py-2.5 text-sm bg-transparent focus:outline-none focus:border-[#3182f6] transition-colors'

function Preview({ e }: { e: Partial<EducationEntry> }) {
  return (
    <div className='py-2 space-y-1'>
      <div className='text-lg font-bold'>{e.institution || <span className='opacity-25 font-normal text-sm italic'>기관명</span>}</div>
      <div className='ml-3 space-y-0.5'>
        <div className='text-sm font-bold'>{e.period || <span className='opacity-25 font-normal'>기간</span>}</div>
        <div className='text-sm font-light opacity-70'>{e.department || <span className='opacity-25'>학과/전공</span>}</div>
      </div>
      {e.content_md && <div className='text-sm ml-3 mt-3 whitespace-pre-line opacity-80'>{e.content_md}</div>}
    </div>
  )
}

export default function AdminEducation() {
  const [items, setItems] = useState<EducationEntry[]>([])
  const [editing, setEditing] = useState<Partial<EducationEntry> | null>(null)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  const load = async () => {
    const { data } = await supabase.from('education').select('*').order('sort_order')
    setItems((data as EducationEntry[]) ?? [])
  }
  useEffect(() => { load() }, [])

  const save = async () => {
    if (!editing) return
    setSaving(true)
    await supabase.from('education').upsert(editing)
    setSaving(false)
    setEditing(null)
    load()
  }

  const remove = async (id: number) => {
    if (!confirm('삭제하시겠습니까?')) return
    await supabase.from('education').delete().eq('id', id)
    load()
  }

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const oldIndex = items.findIndex(i => i.id === active.id)
    const newIndex = items.findIndex(i => i.id === over.id)
    const reordered = arrayMove(items, oldIndex, newIndex)
    setItems(reordered)
    await Promise.all(reordered.map((item, idx) =>
      supabase.from('education').update({ sort_order: idx }).eq('id', item.id)
    ))
  }

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold'>Education</h1>
        <button onClick={() => setEditing({ ...EMPTY, sort_order: items.length })} className='bg-[#3182f6] text-white px-4 py-2 rounded-xl text-sm font-medium'>+ 추가</button>
      </div>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
          <div className='space-y-2'>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                <div className='border border-[var(--foreground)]/10 rounded-2xl p-4 flex items-center justify-between hover:border-[var(--foreground)]/20 transition-colors'>
                  <div>
                    <div className='font-medium'>{item.institution}</div>
                    <div className='text-sm opacity-50 mt-0.5'>{item.period} · {item.department}</div>
                  </div>
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

      <AdminEditPanel
        open={editing !== null}
        title={editing?.id ? '학력 수정' : '새 학력'}
        onClose={() => setEditing(null)}
        onSave={save}
        saving={saving}
        form={editing ? (
          <>
            <input placeholder='기관명' value={editing.institution ?? ''} onChange={(e) => setEditing({ ...editing, institution: e.target.value })} className={ic} />
            <input placeholder='기간 (예: 2020.03 ~ 2026.02)' value={editing.period ?? ''} onChange={(e) => setEditing({ ...editing, period: e.target.value })} className={ic} />
            <input placeholder='학과/전공' value={editing.department ?? ''} onChange={(e) => setEditing({ ...editing, department: e.target.value })} className={ic} />
            <textarea placeholder='내용 (줄바꿈으로 항목 구분)' value={editing.content_md ?? ''} onChange={(e) => setEditing({ ...editing, content_md: e.target.value })} rows={6} className={`${ic} font-mono resize-none`} />
          </>
        ) : null}
        preview={editing ? <Preview e={editing} /> : null}
      />
    </div>
  )
}
