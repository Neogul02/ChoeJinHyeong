'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import DarkModeButton from '@/components/DarkModeButton'

export default function Nav() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const linkClassName = `text-lg cursor-pointer transition-colors duration-300 hover:text-[#3182f6]`

  return (
    <nav className='flex justify-between items-center p-4'>
      <div className='text-2xl font-bold cursor-pointer whitespace-nowrap'>
        <Link href='/'>
          <span className='block md:hidden transition-colors duration-300 hover:text-[#3182f6]'>CJH</span>
          <span className='hidden md:block transition-colors duration-300 hover:text-[#3182f6]'>ChoeJinHyeong</span>
        </Link>
      </div>
      <div className='flex space-x-3 md:space-x-5 items-center '>
        <Link
          href='/about'
          className={linkClassName}
        >
          About
        </Link>
        <Link
          href='https://neogul02.tistory.com/'
          className={linkClassName}
          target='_blank'
          rel='noopener noreferrer'
        >
          Posts
        </Link>
        <Link
          href='https://bit.ly/3IgXMel'
          className={linkClassName}
          target='_blank'
          rel='noopener noreferrer'
        >
          Profile
        </Link>
        <Link
          href='https://github.com/Neogul02'
          className={linkClassName}
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
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
