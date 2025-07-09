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
          <div className='w-full h-50 bg-amber-400 rounded-4xl mb-4 flex items-center justify-center text-lg'>Choe Jinhyeong Portfolio</div>
          <div className='text-[22px] font-semibold mt-2'>LikelionKNU: 부원 리쿠르팅 서비스</div>
          <div className='text-[18px]'>2025.01 - 2025.03</div>
        </div>

        {/* 세 번째 프로젝트 */}
        <div
          style={cardStyle}
          className={modalStyle}
          onClick={() => setOpenModal(2)}
        >
          <div className='w-full h-50 rounded-4xl mb-4 flex items-center justify-center overflow-hidden'>
            {/* next/image 사용 권장 */}
            {/* 
            <Image
              src='/images/profile.png'
              alt='Hanamory'
              width={400} // 실제 표시될 영역의 픽셀 크기와 맞추세요
              height={200} // h-50이 약 200px(1rem=4px 기준)라면
              className='w-full h-full object-cover rounded-lg'
            />
            */}

            <img
              src='/images/profile.png'
              alt='Hanamory'
              className='w-full h-full object-cover rounded-4xl'
              width='auto'
              height={200}
              loading='lazy'
            />
          </div>
          <div className='text-[22px] font-semibold mt-2'>Hanamory: AI 꽃다발 인식 서비스</div>
          <div className='text-[18px] text-gray-400'>2025.03 ~ 개발 중</div>
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
          <img
            src='/images/profile.png'
            alt='Choe Jinhyeong Portfolio'
            className='w-full h-60 object-cover rounded-lg mt-4'
            loading='lazy'
          />
          <p className='mt-4 text-sm text-gray-500'>
            이 포트폴리오는 최진형 개발자의 기술과 경험을 보여주는 프로젝트입니다. 다양한 기술 스택과 프로젝트 경험을 통해 사용자 경험을 개선하고, 팀과의 소통을 통해 더 나은 UI/UX를 만들어가는 과정을
            담고 있습니다.
          </p>
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
