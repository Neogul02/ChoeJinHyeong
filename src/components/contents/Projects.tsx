'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/modals/Modal'
import { useThemeStore } from '@/store/useThemeStore'

import Project_Portfolio from '@/components/modals/Project_Portfolio'
import Project_Likelion from '@/components/modals/Project_Likelion'
import Project_Hanamory from '@/components/modals/Project_Hanamory'
import Project_Runaway from '@/components/modals/Project_Runaway'
import Project_InternInMeta from '@/components/modals/Project_InternInMeta'
import Project_Knock from '@/components/modals/Project_Knock'

export default function Projects() {
  const [openModal, setOpenModal] = useState<number | null>(null)
  const { theme } = useThemeStore()

  // 네비게이션 함수들
  const handlePrevious = () => {
    if (openModal !== null) {
      const prevIndex = openModal === 0 ? 5 : openModal - 1
      setOpenModal(prevIndex)
    }
  }

  const handleNext = () => {
    if (openModal !== null) {
      const nextIndex = openModal === 5 ? 0 : openModal + 1
      setOpenModal(nextIndex)
    }
  }

  // 카드와 모달에 적용할 스타일
  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#2c2d2e' : '#e6e6e6',
    color: theme === 'dark' ? '#e6e6e6' : '#191f28',
  }

  const projects = [
    {
      id: 0,
      title: 'Knock: AI 등기부등본 분석 서비스 ',
      period: '2025.07 ~ 진행 중',
      image: '/images/knock/knock_main.png',
      bgColor: theme === 'dark' ? '#4a9eff' : '#2563eb',
    },
    {
      id: 1,
      title: 'internInMeta: React 쇼핑몰 웹사이트',
      period: '2025.07 ~ 2025.08',
      image: '/images/internInMeta/인턴in메타.png',
      bgColor: theme === 'dark' ? '#1877f2' : '#4267b2',
    },
    {
      id: 2,
      title: 'Portfolio',
      period: '2025.05 - 진행 중',
      image: '',
      bgColor: theme === 'dark' ? '#e6e6e6' : '#2c2d2e',
    },
    {
      id: 3,
      title: 'LikelionKNU: 부원 리쿠르팅 서비스',
      period: '2025.01 - 2025.04',
      image: '/images/likelion/likelion_main.png',
    },
    {
      id: 4,
      title: 'Hanamory: AI 꽃다발 인식 서비스',
      period: '2025.03 ~ 진행 중',
      image: '/images/hanamory/hanamory_main.jpg',
    },
    {
      id: 5,
      title: '도망가자: 재난상황 대피소 제공 서비스 ',
      period: '2025.02 ~ 2025.04',
      image: '/images/runaway/runaway_main.png',
    },
  ]
  return (
    <section className='flex justify-center mb-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-8 max-w-4xl'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={cardStyle}
            className='w-100 h-80 rounded-2xl p-3 shadow flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg '
            onClick={() => setOpenModal(idx)}>
            <div className={`w-full h-[70%] rounded-2xl mb-3 flex items-center justify-center text-lg overflow-hidden`}>
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
                  className='w-full h-full justify-center items-center flex text-center text-[18px]'>
                  <span style={{ color: theme === 'dark' ? '#2c2d2e' : '#e6e6e6' }}>{project.title}</span>
                </div>
              )}
            </div>
            <div className='text-[20px] font-semibold p-2'>
              {project.title}
              <div className='text-[16px] pl-2'>{project.period}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 각 프로젝트별 모달 */}
      <Modal
        open={openModal === 0}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showNavigation={true}>
        <Project_Knock />
      </Modal>
      <Modal
        open={openModal === 1}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showNavigation={true}>
        <Project_InternInMeta />
      </Modal>
      <Modal
        open={openModal === 2}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showNavigation={true}>
        <Project_Portfolio />
      </Modal>
      <Modal
        open={openModal === 3}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showNavigation={true}>
        <Project_Likelion />
      </Modal>
      <Modal
        open={openModal === 4}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showNavigation={true}>
        <Project_Hanamory />
      </Modal>
      <Modal
        open={openModal === 5}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showNavigation={true}>
        <Project_Runaway />
      </Modal>

      {/* 애니메이션 */}
      <style
        jsx
        global>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}
