'use client'
import { useThemeStore } from '@/store/useThemeStore'

export default function Footer() {
  const { theme } = useThemeStore()
  return (
    <footer
      className='justify-center place-content-center h-[150px]'
      style={{ backgroundColor: theme === 'dark' ? '#2C2D2E' : '#f0f0f0' }}
    >
      <div className='text-lg lineheight-6 text-center'>
        Copyright 2025 | ChoeJinHyeong all right reserved
        <br />
        @Powered by Neogul02 | for my muffie
      </div>
    </footer>
  )
}
