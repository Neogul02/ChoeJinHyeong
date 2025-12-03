'use client'

import { useEffect } from 'react'
import { useThemeStore } from '@/store/useThemeStore'

export default function ThemeInitializer() {
  const { theme, initializeTheme } = useThemeStore()

  useEffect(() => {
    // 초기 테마 설정 (시스템 테마 감지)
    initializeTheme()
  }, [initializeTheme])

  useEffect(() => {
    // 테마 변경 시 HTML 클래스 업데이트
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // localStorage에 저장
    localStorage.setItem('theme', theme)
  }, [theme])

  return null
}
