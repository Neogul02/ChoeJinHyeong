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
      className='text-lg w-10 h-10'
    >
      {theme === 'dark' ? (
        <img
          src='/light-icon.svg'
          alt='light-icon'
        />
      ) : (
        <img
          src='/dark-icon.svg'
          alt='dark-icon'
        />
      )}
    </button>
  )
}
