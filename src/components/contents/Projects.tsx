'use client'

import { useState } from 'react'
import Modal from '@/components/Modal'
import { useThemeStore } from '@/store/useThemeStore'

export default function Projects() {
  const [openModal, setOpenModal] = useState<number | null>(null)
  const { theme } = useThemeStore()

  // 카드와 모달에 적용할 스타일
  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#2c2d2e' : '#e6e6e6',
    color: theme === 'dark' ? '#e6e6e6' : '#191f28',
  }

  const modalStyle = `
    w-full h-90 rounded-4xl p-4 shadow flex flex-col  cursor-pointer 
    transition-all duration-300 hover:-translate-y-2 hover:shadow-lg
  `

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>

        {/* 첫 번째 프로젝트 */}
        <div
          style={cardStyle}
          className={modalStyle}
          onClick={() => setOpenModal(0)}
        >
          <div className='w-full h-50 bg-amber-400 rounded-4xl mb-4 flex items-center justify-center text-lg'>Choe Jinhyeong Portfolio</div>
          <div className='text-[22px] font-semibold mt-2'>Portfolio</div>
          <span className='text-[18px]'>2025.05 - 2025.06</span>
        </div>

        {/* 두 번째 프로젝트 */}
        <div
          style={cardStyle}
          className={modalStyle}
          onClick={() => setOpenModal(1)}
        >
          <div className='w-full h-32 bg-blue-200 rounded-lg mb-4 flex items-center justify-center text-lg font-semibold text-gray-700'>LikelionKNU</div>
          <div className='text-base font-semibold mt-2'>LikelionKNU: 부원 리쿠르팅 서비스</div>
          <div className='text-xs text-gray-400'>2025.01 - 2025.03</div>
        </div>

        {/* 세 번째 프로젝트 */}
        <div
          style={cardStyle}
          className={modalStyle}
          onClick={() => setOpenModal(2)}
        >
          <div className='w-full h-32 bg-green-200 rounded-lg mb-4 flex items-center justify-center text-lg font-semibold text-gray-700'>Hanamory</div>
          <div className='text-base font-semibold mt-2'>Hanamory: AI 꽃다발 인식 서비스</div>
          <div className='text-xs text-gray-400'>2025.03 ~ 개발 중</div>
        </div>
        
        {/* 네 번째 프로젝트 */}
        <div
          style={cardStyle}
          className={modalStyle}
          onClick={() => setOpenModal(3)}
        >
          <div className='w-full h-32 bg-purple-200 rounded-lg mb-4 flex items-center justify-center text-lg font-semibold text-gray-700'>도망가자</div>
          <div className='text-base font-semibold mt-2'>도망가자: 재난상황 대피소 안내 서비스</div>
          <div className='text-xs text-gray-400'>2025.03 ~ 개발 중</div>
        </div>
      </div>

      {/* 각 프로젝트별 모달 */}
      <Modal
        open={openModal === 0}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
      >
        <div className='animate-fadeIn'>
          <div className='text-xl font-bold mb-2'>Choe Jinhyeong Portfolio</div>
          <div className='mb-2'>2025.05 - 2025.06</div>
          <div>포트폴리오 상세 설명을 여기에 작성하세요.</div>
        </div>
      </Modal>
      <Modal
        open={openModal === 1}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
      >
        <div className='animate-fadeIn'>
          <div className='text-xl font-bold mb-2'>LikelionKNU: 부원 리쿠르팅 서비스</div>
          <div className='mb-2'>2025.01 - 2025.03</div>
          <div>리쿠르팅 서비스 상세 설명을 여기에 작성하세요.</div>
        </div>
      </Modal>
      <Modal
        open={openModal === 2}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
      >
        <div className='animate-fadeIn'>
          <div className='text-xl font-bold mb-2'>Hanamory: AI 꽃다발 인식 서비스</div>
          <div className='mb-2'>2025.03 ~ 개발 중</div>
          <div>Hanamory 상세 설명을 여기에 작성하세요.</div>
        </div>
      </Modal>
      <Modal
        open={openModal === 3}
        onClose={() => setOpenModal(null)}
        style={cardStyle}
      >
        <div className='animate-fadeIn'>
          <div className='text-xl font-bold mb-2'>도망가자: 재난상황 대피소 안내 서비스</div>
          <div className='mb-2'>2025.03 ~ 개발 중</div>
          <div>도망가자 상세 설명을 여기에 작성하세요.</div>
        </div>
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
