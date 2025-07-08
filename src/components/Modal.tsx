import React from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  style?: React.CSSProperties
}

export default function Modal({ open, onClose, children, style }: ModalProps) {
  if (!open) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* 어두운 배경 */}
      <div
        className='absolute inset-0 bg-[#000000aa] bg-opacity-60 transition-opacity'
        onClick={onClose}
      />
      {/* 모달 내용 */}
      <div
        className='relative rounded-xl p-8 shadow-lg z-10 max-w-lg w-full mx-4'
        style={style}
      >
        <button
          className='absolute top-3 right-3 text-gray-400 hover:text-white text-2xl'
          onClick={onClose}
          aria-label='닫기'
        >
          ×
        </button>
        {children}
      </div>
    </div>
  )
}
