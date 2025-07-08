'use client'
import React, { useEffect, useState } from 'react'

import { useThemeStore } from '@/store/useThemeStore'

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false)
  const { theme } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    // console.log('[ScrollToTopButton] current theme:', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform hover:scale-110
        ${theme === 'dark' ? 'bg-[#2c2d2e]' : 'bg-[#e6e6e6]'}`}
    >
      {`↑`}
    </button>
  )
}
