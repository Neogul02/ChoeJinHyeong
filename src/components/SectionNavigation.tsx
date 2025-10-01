'use client'

import { useState, useEffect } from 'react'
import { useThemeStore } from '@/store/useThemeStore'

const sections = [
  { id: 'stack', label: '기술 스택' },
  { id: 'career', label: '이력' },
  { id: 'activities', label: '대외활동' },
  { id: 'projects', label: '프로젝트' },
  { id: 'education', label: '교육' },
]

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState<string>('')
  const { theme } = useThemeStore()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - 10 // 80px 위쪽 여백

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // 100px offset for better detection

      // Check which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='fixed right-8 top-1/3 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4'>
      {sections.map((section) => (
        <div
          key={section.id}
          className='relative group cursor-pointer p-1 flex items-center justify-center'
          onClick={() => scrollToSection(section.id)}>
          {/* Dash */}
          <div
            className={`
              w-6 h-0.5 rounded-full transition-all duration-300 transform
              group-hover:w-8 group-hover:h-1
              ${activeSection === section.id ? (theme === 'dark' ? 'bg-white' : 'bg-gray-800') : theme === 'dark' ? 'bg-gray-400 group-hover:bg-white' : 'bg-gray-400 group-hover:bg-gray-800'}
            `}
          />

          {/* Label tooltip */}
          <div
            className={`
              absolute right-10 top-1/2 transform -translate-y-1/2
              px-3 py-1 rounded-md text-sm font-medium
              opacity-0 group-hover:opacity-100 transition-opacity duration-200
              pointer-events-none whitespace-nowrap
              ${theme === 'dark' ? 'bg-gray-800 text-white border border-gray-600' : 'bg-white text-gray-800 border border-gray-300 shadow-md'}
            `}>
            {section.label}
            {/* Arrow */}
            <div
              className={`
                absolute left-full top-1/2 transform -translate-y-1/2
                w-0 h-0 border-l-4 border-y-4 border-y-transparent
                ${theme === 'dark' ? 'border-l-gray-800' : 'border-l-white'}
              `}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
