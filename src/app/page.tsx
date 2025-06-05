import React from 'react'
import CustomRotatingIntro from '@/components/CustomRotatingIntro'

export default function Home() {
  return (
    <main className='min-h-screen relative'>
      <section className='flex flex-col-reverse md:flex-row items-center max-w-5xl mx-auto mt-25 px-4'>
        {/* 텍스트 영역 */}
        <div className='flex-1 z-10 mt-6 md:mt-0'>
          <CustomRotatingIntro />
        </div>

        {/* 프로필 이미지 */}
        <div className='mb-4 md:mb-4 md:ml-8'>
          <img
            src='/profile.png'
            alt='Profile_Image'
            className='
              w-[300px]
              h-[300px]
              object-cover
            '
          />
        </div>
      </section>

      <section className='flex justify-center mt-10 px-4'>
        <p className='text-center text-base md:text-lg leading-relaxed max-w-2xl'>
          기능을 넘어, 사용자에게 어떻게 전달할지를 고민하는 개발자 최진형입니다.
          <br />
          사용자 경험에서 출발하고, 팀과의 소통을 통해 더 나은 UI/UX를 만들어갑니다.
        </p>
      </section>

      <section className='max-w-5xl mx-auto mt-12 px-4'>{/* 기술 스택, 이력, 프로젝트, 교육 섹션 자리 */}</section>
    </main>
  )
}
