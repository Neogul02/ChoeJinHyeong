'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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

        
      </div>
    </nav>
  )
}
