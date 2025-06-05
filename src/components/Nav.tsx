'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import DarkModeButton from '@/components/DarkModeBtn'

export default function Nav() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className='flex justify-between items-center p-4'>
      <div className='text-2xl font-bold cursor-pointer whitespace-nowrap'>
        <Link href='/'>
          <span className='block md:hidden'>C</span>
          <span className='hidden md:block'>ChoeJinHyeong</span>
        </Link>
      </div>
      <div className='flex space-x-3 md:space-x-5 items-center'>
        <Link
          href='/about'
          className='text-lg cursor-pointer'
        >
          About
        </Link>
        <Link
          href='https://www.linkedin.com/in/jinhyeong-choe-85195433a/'
          className='text-lg cursor-pointer'
        >
          LinkedIn
        </Link>
        <Link
          href='https://github.com/Neogul02'
          className='text-lg cursor-pointer'
        >
          Github
        </Link>
        <Link
          href='https://neogul02.tistory.com/'
          className='text-lg cursor-pointer'
        >
          Blog
        </Link>

        <div className='flex items-center '>
          <div className='hidden md:block absolute right-15 top-5'>
            <DarkModeButton />
          </div>
          <div className='block md:hidden absolute top-15 right-10'>
            <DarkModeButton />
          </div>
        </div>
      </div>
    </nav>
  )
}
