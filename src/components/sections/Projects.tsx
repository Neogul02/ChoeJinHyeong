'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/modals/Modal'
import { useThemeStore } from '@/store/useThemeStore'
import { projectsData } from './projectsData'

export default function Projects() {
  const [openModal, setOpenModal] = useState<number | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isFirstOpen, setIsFirstOpen] = useState(true)
  const { theme, setIsModalOpen } = useThemeStore()

  // 네비게이션 함수들
  const handlePrevious = () => {
    if (openModal !== null) {
      setIsFirstOpen(false)
      setDirection('left')
      const prevIndex = openModal === 0 ? 5 : openModal - 1
      setOpenModal(prevIndex)
    }
  }

  const handleNext = () => {
    if (openModal !== null) {
      setIsFirstOpen(false)
      setDirection('right')
      const nextIndex = openModal === 5 ? 0 : openModal + 1
      setOpenModal(nextIndex)
    }
  }

  // 카드와 모달에 적용할 스타일
  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#2c2d2e' : '#e6e6e6',
    color: theme === 'dark' ? '#e6e6e6' : '#191f28',
  }

  const projects = projectsData(theme)

  return (
    <section className='flex justify-center mb-12 md:mb-20 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 my-6 md:my-8 max-w-4xl w-full'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={cardStyle}
            className='w-full h-64 md:h-80 rounded-2xl p-2 md:p-3 shadow flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg'
            onClick={() => {
              setIsFirstOpen(true)
              setOpenModal(idx)
              setIsModalOpen(true)
            }}>
            <div className={`w-full h-[70%] rounded-2xl mb-2 md:mb-3 flex items-center justify-center text-sm md:text-lg overflow-hidden`}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className='w-full h-full object-cover rounded-2xl'
                  priority={false}
                />
              ) : (
                <div
                  style={{ backgroundColor: project.bgColor }}
                  className='w-full h-full justify-center items-center flex text-center text-sm md:text-[18px] px-2'>
                  <span style={{ color: theme === 'dark' ? '#2c2d2e' : '#e6e6e6' }}>{project.title}</span>
                </div>
              )}
            </div>
            <div className='text-base md:text-[20px] font-semibold p-1 md:p-2'>
              {project.title}
              <div className='text-sm md:text-[16px] pl-1 md:pl-2'>{project.period}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 각 프로젝트별 모달 */}
      {projects.map((project) => {
        const ProjectComponent = project.component
        return (
          <Modal
            key={project.id}
            open={openModal === project.id}
            onClose={() => {
              setOpenModal(null)
              setIsFirstOpen(true)
              setIsModalOpen(false)
            }}
            style={cardStyle}
            onPrevious={handlePrevious}
            onNext={handleNext}
            showNavigation={true}
            direction={direction}
            isFirstOpen={isFirstOpen}>
            <ProjectComponent />
          </Modal>
        )
      })}
    </section>
  )
}
