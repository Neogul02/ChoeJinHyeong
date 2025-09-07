'use client'
import React from 'react'
import { useThemeStore } from '@/store/useThemeStore'

export default function ScrollToTopButton() {
  const { theme } = useThemeStore()

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110 text-[20px] cursor-pointer
        ${theme === 'dark' ? 'bg-[#2c2d2e]' : 'bg-[#e6e6e6]'}`}
    >
      {`↑`}
    </button>
  )
}
