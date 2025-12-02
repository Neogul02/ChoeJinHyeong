'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import CustomRotatingIntro from '@/components/CustomRotatingIntro'

import SectionLine from '@/components/SectionLine'
import SectionLineDivided from '@/components/SectionLineDivided'

import Stack from '@/components/contents/Stack'
import Career from '@/components/contents/Career'
import Activities from '../components/contents/Activities'
import Projects from '@/components/contents/Projects'
import Education from '@/components/contents/Education'
import Certification from '@/components/contents/Certification'
import About from '@/components/contents/About'

export default function Home() {
  return (
    <motion.main
      className='min-h-screen relative select-none'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}>
      <div id='intro'>
        <section className='flex flex-col-reverse md:flex-row items-center max-w-5xl mx-auto mt-25 px-4'>
          {/* 로테이트 텍스트 섹션 */}
          <section className='flex-1 z-10 ml-3 mt-6 md:mt-0'>
            <CustomRotatingIntro />
          </section>

          {/* 프로필 이미지 섹션 */}
          <section className='mb-2 md:mb-2 md:ml-2'>
            <Image
              src='/images/profile.png'
              alt='Profile_Image'
              width={280}
              height={280}
              className='object-cover'
              priority
            />
          </section>
        </section>

        <motion.section
          className='flex flex-col justify-center my-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <p className='text-center text-base font-semibold md:text-[20px] leading-relaxed'>
            기능을 넘어, 사용자에게 어떻게 전달할지를 고민하는 개발자 최진형입니다.
            <br />
            기술은 도구일 뿐, 개발의 목표는 사람에게 닿는 경험이라 생각합니다.
          </p>
          <button
            className='cursor-pointer  text-base font-semibold md:text-[20px] text-gray-400 hover:text-[#3182f6] transition-colors py-16'
            onClick={() => window.open('https://www.figma.com/design/WBaXINRDszR2CRStJTHpbI/choejinhyeong_resume?node-id=0-1&t=7DZc4iYEwVO0HI1X-1', '_blank')}>
            이력서 보기
          </button>
          <p className='text-center text-gray-400'>(PC, Chrome에서 보시는 것을 권장드립니다.)</p>
        </motion.section>
      </div>

      {/* 기술 스택 섹션 */}
      <motion.section
        className='max-w-5xl mx-auto py-16 px-4'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}>
        <SectionLine text='기술 스택' />
        <div id='stack'>
          <Stack />
        </div>
      </motion.section>

      {/* 이력 섹션 */}
      <motion.section
        className='max-w-5xl mx-auto py-16 px-4'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}>
        <SectionLineDivided text='이력' />
        <div id='career'>
          <Career />
        </div>
      </motion.section>

      {/* 대외활동 섹션 */}
      <motion.section
        className='max-w-5xl mx-auto py-16 px-4'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}>
        <SectionLineDivided text='대외활동' />
        <div id='activities'>
          <Activities />
        </div>
      </motion.section>

      {/* 프로젝트 섹션 */}
      <motion.section
        className='max-w-5xl mx-auto py-16 px-4'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}>
        <SectionLineDivided text='프로젝트' />
        <div id='projects'>
          <Projects />
        </div>
      </motion.section>

      {/* 자격증 섹션 */}
      <motion.section
        className='max-w-5xl mx-auto py-16 px-4'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}>
        <SectionLineDivided text='자격증' />
        <div id='certification'>
          <Certification />
        </div>
      </motion.section>

      {/* 교육 섹션 */}
      <motion.section
        className='max-w-5xl mx-auto py-16 px-4'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}>
        <SectionLineDivided text='교육' />
        <div id='education'>
          <Education />
        </div>
      </motion.section>

      {/* About 섹션 */}
      <motion.section
        className='max-w-5xl mx-auto py-16 px-4'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}>
        <About />
      </motion.section>
    </motion.main>
  )
}
