'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ReactNode } from 'react'

interface Props {
  id: number
  children: ReactNode
}

export default function SortableItem({ id, children }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.4 : 1 }}
      className='flex items-center gap-2'>
      <button
        {...attributes}
        {...listeners}
        className='cursor-grab active:cursor-grabbing p-2 opacity-25 hover:opacity-60 transition-opacity touch-none flex-shrink-0'
        tabIndex={-1}>
        <svg width='10' height='18' viewBox='0 0 10 18' fill='currentColor'>
          <circle cx='2.5' cy='2.5' r='1.5' />
          <circle cx='7.5' cy='2.5' r='1.5' />
          <circle cx='2.5' cy='9' r='1.5' />
          <circle cx='7.5' cy='9' r='1.5' />
          <circle cx='2.5' cy='15.5' r='1.5' />
          <circle cx='7.5' cy='15.5' r='1.5' />
        </svg>
      </button>
      <div className='flex-1 min-w-0'>{children}</div>
    </div>
  )
}
