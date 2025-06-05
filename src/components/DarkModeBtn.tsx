'use client'
import { useEffect } from 'react'
import { useThemeStore } from '@/store/useThemeStore'

export default function DarkModeButton() {
  const { theme, toggleTheme } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    console.log('[DarkModeBtn] now theme:', theme)
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      className='text-lg w-10 h-10'
    >
      {theme === 'dark' ? (
        <img
          src='/dark-icon.svg'
          alt='dark-icon'
        />
      ) : (
        <img
          src='/light-icon.svg'
          alt='light-icon'
        />
      )}
    </button>
  )
}
