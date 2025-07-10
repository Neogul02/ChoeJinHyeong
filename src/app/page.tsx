import React from 'react'

import CustomRotatingIntro from '@/components/CustomRotatingIntro'

import SectionLine from '@/components/SectionLine'
import SectionLineDivided from '@/components/SectionLineDivided'

import Stack from '@/components/contents/Stack'
import Career from '@/components/contents/Career'
import Activities from '../components/contents/Activities'
import Projects from '@/components/contents/Projects'
import Education from '@/components/contents/Education'
import AboutMore from '@/components/contents/AboutMore'

export default function Home() {
  return (
    <main className='min-h-screen relative'>
      <section className='flex flex-col-reverse md:flex-row items-center max-w-5xl mx-auto mt-25 px-4'>
        {/* 로테이트 텍스트 섹션 */}
        <section className='flex-1 z-10 ml-3 mt-6 md:mt-0'>
          <CustomRotatingIntro />
        </section>

        {/* 프로필 이미지 섹션 */}
        <section className='mb-4 md:mb-4 md:ml-8'>
          <img
            src='/images/profile.png'
            alt='Profile_Image'
            className='
              w-[300px]
              h-[300px]
              object-cover
            '
          />
        </section>
      </section>

      <section className='flex justify-center my-20'>
        <p className='text-center text-base md:text-[20px] leading-relaxed max-w-2xl'>
          기능을 넘어, 사용자에게 어떻게 전달할지를 고민하는 개발자 최진형입니다.
          <br />
          기술은 도구일 뿐, 개발의 목표는 사람에게 닿는 경험이라 생각합니다.
        </p>
      </section>

      <section className='max-w-5xl mx-auto mt-12 mb-12 px-4'>
        <SectionLine text='기술 스택' />
        <Stack />

        <SectionLineDivided text='이력' />
        <Career />

        <SectionLineDivided text='대외활동' />
        <Activities />

        <SectionLineDivided text='프로젝트' />
        <Projects />

        <SectionLineDivided text='교육' />
        <Education />

        <AboutMore />
      </section>
    </main>
  )
}
