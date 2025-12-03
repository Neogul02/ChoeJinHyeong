'use client'
import { useEffect } from 'react'
import { useThemeStore } from '@/store/useThemeStore'

export default function DarkModeButton() {
  const { theme, toggleTheme } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    console.log('[DarkModeBtn] current theme:', theme)
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer
        ${theme === 'dark' ? 'bg-[#2c2d2e]' : 'bg-[#e6e6e6]'}`}>
      {theme === 'light' ? (
        <img
          src='/dark-icon.svg'
          alt='dark-mode'
          className='w-8 h-8'
        />
      ) : (
        <img
          src='/light-icon.svg'
          alt='light-mode'
          className='w-8 h-8'
        />
      )}
    </button>
  )
}
