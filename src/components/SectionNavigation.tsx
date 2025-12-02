'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useThemeStore } from '@/store/useThemeStore'

const sections = [
  { id: 'intro', label: '소개' },
  { id: 'stack', label: '기술 스택' },
  { id: 'career', label: '이력' },
  { id: 'activities', label: '대외활동' },
  { id: 'projects', label: '프로젝트' },
  { id: 'certification', label: '자격증' },
  { id: 'education', label: '교육' },
]

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isUserClicking, setIsUserClicking] = useState(false)
  const { theme } = useThemeStore()
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    // 클릭 시 즉시 활성화 상태 변경
    setActiveSection(sectionId)
    setIsUserClicking(true)

    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - 80 // 80px 위쪽 여백

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      // 스크롤 완료 후 자동 감지 재개 (1초 후)
      setTimeout(() => {
        setIsUserClicking(false)
      }, 1000)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      // 사용자가 클릭 중이면 스크롤 감지 무시
      if (isUserClicking) return

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
  }, [isUserClicking])

  // Contact, About 페이지에서는 섹션 네비게이션을 표시하지 않음
  if (pathname === '/contact' || pathname === '/about') {
    return null
  }

  return (
    <div className='fixed right-8 top-1/3 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 select-none'>
      {sections.map((section) => (
        <motion.div
          key={section.id}
          className='relative cursor-pointer p-1 flex items-center justify-center'
          onClick={() => scrollToSection(section.id)}
          initial='rest'
          whileHover='hover'
          variants={{
            rest: {},
            hover: {},
          }}>
          {/* Dash */}
          <motion.div
            className={`
              rounded-full
              ${activeSection === section.id ? (theme === 'dark' ? 'bg-white' : 'bg-gray-800') : theme === 'dark' ? 'bg-gray-400' : 'bg-gray-400'}
            `}
            initial={{ width: 24, height: 2 }}
            animate={{
              width: activeSection === section.id ? 32 : 24,
              height: activeSection === section.id ? 4 : 2,
              backgroundColor: activeSection === section.id ? (theme === 'dark' ? '#ffffff' : '#1f2937') : theme === 'dark' ? '#9ca3af' : '#9ca3af',
            }}
            whileHover={{
              width: 32,
              height: 4,
              backgroundColor: theme === 'dark' ? '#ffffff' : '#1f2937',
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />

          {/* Label tooltip */}
          <motion.div
            className={`
              absolute right-10 top-1/2 transform -translate-y-1/2
              px-3 py-1 rounded-md text-sm font-medium
              pointer-events-none whitespace-nowrap
              ${theme === 'dark' ? 'bg-white text-black border border-gray-300 shadow-md' : 'bg-white text-gray-800 border border-gray-300 shadow-md'}
            `}
            variants={{
              rest: { opacity: 0, x: 10 },
              hover: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}>
            {section.label}
            {/* Arrow */}
            <div
              className={`
                absolute left-full top-1/2 transform -translate-y-1/2
                w-0 h-0 border-l-4 border-y-4 border-y-transparent
                ${theme === 'dark' ? 'border-l-white' : 'border-l-white'}
              `}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
