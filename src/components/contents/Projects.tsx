'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/modals/Modal'
import { useThemeStore } from '@/store/useThemeStore'

import Project_Portfolio from '@/components/modals/Project_Portfolio'
import Project_Likelion from '@/components/modals/Project_Likelion'
import Project_Hanamory from '@/components/modals/Project_Hanamory'
import Project_Runaway from '@/components/modals/Project_Runaway'

export default function Projects() {
  const [openModal, setOpenModal] = useState<number | null>(null)
  const { theme } = useThemeStore()

  // 카드와 모달에 적용할 스타일
  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#2c2d2e' : '#e6e6e6',
    color: theme === 'dark' ? '#e6e6e6' : '#191f28',
  }

  const projects = [
    {
      id: 0,
      title: 'Portfolio',
      period: '2025.05 - 2025.06',
      image: '',
    },
    {
      id: 1,
      title: 'LikelionKNU: 부원 리쿠르팅 서비스',
      period: '2025.01 - 2025.03',
      image: '/images/likelion/likelion_main.png',
    },
    {
      id: 2,
      title: 'Hanamory: AI 꽃다발 인식 서비스',
      period: '2025.03 ~ 개발 중',
      image: '/images/hanamory/hanamory_main2.jpg',
    },
    {
      id: 3,
      title: '도망가자: 재난상황 대피소 제공 서비스 ',
      period: '2025.03 ~ 2025.04',
      image: '/images/runaway/runaway_main.png',
    },
  ]
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={cardStyle}
            className='w-full h-90 rounded-4xl p-4 shadow flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg '
            onClick={() => setOpenModal(idx)}
          >
            <div className={`w-full h-55 rounded-4xl mb-4 flex items-center justify-center text-lg overflow-hidden`}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className='w-full h-full object-cover rounded-4xl'
                  priority={false}
                />
              ) : (
                <span>{project.title}</span>
              )}
            </div>
            <div className='text-[22px] font-semibold p-2'>
              {project.title}
              <div className='text-[18px] pl-3'>{project.period}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 각 프로젝트별 모달 */}
      <Modal
        open={openModal === 0}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
      >
        <Project_Portfolio />
      </Modal>
      <Modal
        open={openModal === 1}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
      >
        <Project_Likelion />
      </Modal>
      <Modal
        open={openModal === 2}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
      >
        <Project_Hanamory />
      </Modal>
      <Modal
        open={openModal === 3}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
      >
        <Project_Runaway />
      </Modal>
      {/* 애니메이션 */}
      <style
        jsx
        global
      >{`
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
