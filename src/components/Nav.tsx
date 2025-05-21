'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className='flex justify-between items-center p-4'>
      <div className='text-2xl font-bold'>Choe jinHyeong</div>
      <div className='flex space-x-4'>
        <Link
          href='/'
          className='text-lg'
        >
          Home
        </Link>
        <Link
          href='/about'
          className='text-lg'
        >
          About
        </Link>
      </div>
    </nav>
  )
}
