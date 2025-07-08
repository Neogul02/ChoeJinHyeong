'use client'
import { useEffect } from 'react'
import { useThemeStore } from '@/store/useThemeStore'

export default function DarkModeButton() {
  const { theme, toggleTheme } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'light')
    console.log('[DarkModeBtn] current theme:', theme)
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      className="text-lg w-10 h-10 transition-colors duration-300"
    >
      {theme === 'light' ? (
      <img
        src="/dark-icon.svg"
        alt="light-icon"
        className="transition-transform hover:scale-110"
      />
      ) : (
      <img
        src="/light-icon.svg"
        alt="dark-icon"
        className="transition-transform hover:scale-110"
      />
      )}
    </button>
  )
}
