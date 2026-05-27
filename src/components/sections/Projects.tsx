'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/modals/Modal'
import { useThemeStore } from '@/store/useThemeStore'
import { projectsData } from './projectsData'
import DeunDeunModal from '@/components/modals/projects/DeunDeunModal'
import KnockModal from '@/components/modals/projects/KnockModal'
import PortfolioModal from '@/components/modals/projects/PortfolioModal'
import HanamoryModal from '@/components/modals/projects/HanamoryModal'
import RunawayModal from '@/components/modals/projects/RunawayModal'
import LikeionModal from '@/components/modals/projects/LikeionModal'
import ChoichoiPOSModal from '@/components/modals/projects/ChoichoiPOSModal'

const MODAL_COMPONENTS = [
  ChoichoiPOSModal,
  DeunDeunModal,
  KnockModal,
  // PortfolioModal,
  HanamoryModal,
  RunawayModal,
  LikeionModal,
]

export default function Projects() {
  const [openModal, setOpenModal] = useState<number | null>(null)
  const { theme, setIsModalOpen } = useThemeStore()

  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#2c2d2e' : '#e6e6e6',
    color: theme === 'dark' ? '#e6e6e6' : '#191f28',
  }

  const handlePrevious = () => {
    if (openModal !== null) {
      setOpenModal((openModal - 1 + projectsData.length) % projectsData.length)
    }
  }

  const handleNext = () => {
    if (openModal !== null) {
      setOpenModal((openModal + 1) % projectsData.length)
    }
  }

  return (
    <section className="flex justify-center mb-12 md:mb-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 my-6 md:my-8 max-w-4xl w-full">
        {projectsData.map((project, idx) => (
          <div
            key={project.id}
            style={cardStyle}
            className="w-full h-64 md:h-80 rounded-2xl p-3 md:p-4 shadow flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            onClick={() => {
              setOpenModal(idx)
              setIsModalOpen(true)
            }}
          >
            <div className="w-full h-[70%] rounded-2xl mb-2 md:mb-3 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div
                  style={{
                    backgroundColor:
                      theme === 'dark'
                        ? (project.bgDark ?? '#3a3b3c')
                        : (project.bgLight ?? '#d5d5d5'),
                  }}
                  className="w-full h-full flex items-center justify-center text-center px-2"
                >
                  <span className="text-sm md:text-[18px] font-medium">
                    {project.title}
                  </span>
                </div>
              )}
            </div>
            <div className={`${project.titleSize ?? 'text-base md:text-[20px]'} ${theme === 'dark' ? 'font-semibold' : 'font-bold'} p-1 md:p-2`}>
              {project.title}
              <div className="text-sm md:text-[16px] font-normal mt-0.5">
                {project.period}
              </div>
            </div>
          </div>
        ))}
      </div>

      {projectsData.map((project, idx) => {
        const ModalContent = MODAL_COMPONENTS[idx]
        return (
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
            showNavigation
          >
            <ModalContent />
          </Modal>
        )
      })}
    </section>
  )
}
