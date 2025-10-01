import React from 'react'

import CustomRotatingIntro from '@/components/CustomRotatingIntro'

import SectionLine from '@/components/SectionLine'
import SectionLineDivided from '@/components/SectionLineDivided'

import Stack from '@/components/contents/Stack'
import Career from '@/components/contents/Career'
import Activities from '../components/contents/Activities'
import Projects from '@/components/contents/Projects'
import Education from '@/components/contents/Education'
import Contact from '@/components/contents/Contact'

export default function Home() {
  return (
    <main className='min-h-screen relative animate-fadeIn'>
      <section className='flex flex-col-reverse md:flex-row items-center max-w-5xl mx-auto mt-25 px-4'>
        {/* 로테이트 텍스트 섹션 */}

        <section className='flex-1 z-10 ml-3 mt-6 md:mt-0'>
          <CustomRotatingIntro />
        </section>

        {/* 프로필 이미지 섹션 */}
        <section className='mb-2 md:mb-2 md:ml-2'>
          <img
            src='/images/profile.png'
            alt='Profile_Image'
            className='
              w-[280px]
              h-[280px]
              object-cover
            '
          />
        </section>
      </section>

      <section className='flex flex-col justify-center my-20'>
        <p className='text-center text-base font-semibold md:text-[20px] leading-relaxed'>
          기능을 넘어, 사용자에게 어떻게 전달할지를 고민하는 개발자 최진형입니다.
          <br />
          기술은 도구일 뿐, 개발의 목표는 사람에게 닿는 경험이라 생각합니다.
        </p>
        <p className='text-center mt-20 text-gray-400'>(PC, Chrome에서 보시는 것을 권장드립니다)</p>
      </section>

      <section className='max-w-5xl mx-auto mt-12 mb-12 px-4'>
        <SectionLine text='기술 스택' />
        <div id='stack'>
          <Stack />
        </div>

        <SectionLineDivided text='이력' />
        <div id='career'>
          <Career />
        </div>

        <SectionLineDivided text='대외활동' />
        <div id='activities'>
          <Activities />
        </div>

        <SectionLineDivided text='프로젝트' />
        <div id='projects'>
          <Projects />
        </div>

        <SectionLineDivided text='교육' />
        <div id='education'>
          <Education />
        </div>

        <Contact />
      </section>
    </main>
  )
}
