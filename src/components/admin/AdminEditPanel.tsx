'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  open: boolean
  title: string
  onClose: () => void
  onSave: () => void
  saving: boolean
  form: ReactNode
  preview: ReactNode
}

export default function AdminEditPanel({ open, title, onClose, onSave, saving, form, preview }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='absolute inset-0 bg-black/50 backdrop-blur-sm'
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className='relative w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl z-10 flex flex-col overflow-hidden border border-white/10'
            style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>

            {/* Header */}
            <div className='flex items-center justify-between px-6 py-4 border-b border-[var(--foreground)]/10 flex-shrink-0'>
              <h2 className='font-bold text-base'>{title}</h2>
              <div className='flex items-center gap-3'>
                <button
                  onClick={onSave}
                  disabled={saving}
                  className='bg-[#3182f6] text-white px-5 py-2 rounded-xl text-sm font-medium disabled:opacity-50 hover:bg-[#2570e0] transition-colors'>
                  {saving ? '저장 중...' : '저장'}
                </button>
                <button
                  onClick={onClose}
                  className='w-8 h-8 flex items-center justify-center rounded-full opacity-50 hover:opacity-100 hover:bg-[var(--foreground)]/10 transition-all text-xl leading-none'>
                  ×
                </button>
              </div>
            </div>

            {/* Dual pane */}
            <div className='flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden'>
              {/* Form */}
              <div className='flex-1 p-6 overflow-y-auto border-b md:border-b-0 md:border-r border-[var(--foreground)]/10'>
                <div className='text-xs font-semibold uppercase tracking-widest opacity-30 mb-4'>편집</div>
                <div className='space-y-3'>{form}</div>
              </div>
              {/* Preview */}
              <div className='flex-1 p-6 overflow-y-auto'>
                <div className='text-xs font-semibold uppercase tracking-widest opacity-30 mb-4'>미리보기</div>
                {preview}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
