'use client'
import Image from 'next/image'
import { useThemeStore } from '@/store/useThemeStore'

export default function DarkModeButton() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer
        ${theme === 'dark' ? 'bg-[#2c2d2e]' : 'bg-[#e6e6e6]'}`}>
      <Image
        src={theme === 'light' ? '/dark-icon.svg' : '/light-icon.svg'}
        alt={theme === 'light' ? 'dark-mode' : 'light-mode'}
        width={32}
        height={32}
      />
    </button>
  )
}
