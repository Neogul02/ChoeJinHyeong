'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/modals/Modal'
import ProjectModal from '@/components/modals/ProjectModal'
import { useThemeStore } from '@/store/useThemeStore'
import { Project } from '@/lib/supabase'

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [openModal, setOpenModal] = useState<number | null>(null)
  const { theme, setIsModalOpen } = useThemeStore()

  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#2c2d2e' : '#e6e6e6',
    color: theme === 'dark' ? '#e6e6e6' : '#191f28',
  }

  const handlePrevious = () => {
    if (openModal !== null) {
      setOpenModal((openModal - 1 + projects.length) % projects.length)
    }
  }

  const handleNext = () => {
    if (openModal !== null) {
      setOpenModal((openModal + 1) % projects.length)
    }
  }

  return (
    <section className='flex justify-center mb-12 md:mb-20 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 my-6 md:my-8 max-w-4xl w-full'>
        {projects.map((project, idx) => (
          <div
            key={project.id}
            style={cardStyle}
            className='w-full min-h-64 md:min-h-80 rounded-2xl p-3 md:p-4 shadow flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg'
            onClick={() => {
              setOpenModal(idx)
              setIsModalOpen(true)
            }}>
            <div className='w-full h-[70%] rounded-2xl mb-2 md:mb-3 flex items-center justify-center text-sm md:text-lg overflow-hidden'>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className='w-full h-full object-cover rounded-2xl'
                />
              ) : (
                <div
                  style={{ backgroundColor: theme === 'dark' ? (project.bg_dark ?? '#2c2d2e') : (project.bg_light ?? '#e6e6e6') }}
                  className='w-full h-full justify-center items-center flex text-center text-sm md:text-[18px] px-2'>
                  <span style={{ color: theme === 'dark' ? '#2c2d2e' : '#e6e6e6' }}>{project.title}</span>
                </div>
              )}
            </div>
            <div className='text-base md:text-[20px] font-semibold p-1 md:p-2'>
              {project.title}
              <div className='text-sm md:text-[16px]'>{project.period}</div>
            </div>
          </div>
        ))}
      </div>

      {projects.map((project, idx) => (
        <Modal
          key={project.id}
          open={openModal === idx}
          onClose={() => {
            setOpenModal(null)
            setIsModalOpen(false)
          }}
          style={cardStyle}
          onPrevious={handlePrevious}
          onNext={handleNext}
          showNavigation={true}>
          <ProjectModal project={project} />
        </Modal>
      ))}
    </section>
  )
}
