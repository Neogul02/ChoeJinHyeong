'use client'
import { useEffect } from 'react'
import { useThemeStore } from '@/store/useThemeStore'

export default function DarkModeButton() {
  const { theme, toggleTheme } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    console.log('[DarkModeBtn] now theme:', theme)
  }, [theme])

  return <button onClick={toggleTheme}>{theme === 'dark' ? '라이트 모드' : '다크 모드'}</button>
}
