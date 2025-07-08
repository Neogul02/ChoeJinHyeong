'use client'
import React from 'react';
import { useThemeStore } from '@/store/useThemeStore';

export default function Footer() {
  const { theme } = useThemeStore();
  return (
    <footer
      className='justify-center place-content-center h-[150px]'
      style={{
        backgroundColor: theme === 'dark' ? '#2c2d2e' : '#e6e6e6',
        color: theme === 'dark' ? '#e6e6e6' : '#191f28',
      }}
    >
      <div className='text-lg lineheight-6 text-center'>
        Copyright 2025 | ChoeJinHyeong all right reserved
        <br />
        @Powered by Neogul02 | For muffie
      </div>
    </footer>
  )
}
