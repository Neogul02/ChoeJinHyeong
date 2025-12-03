'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CustomRotatingIntro from '@/components/ui/CustomRotatingIntro'

export default function Contact() {
  return (
    <motion.main
      className='min-h-screen relative'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}>
      <section className='flex flex-col-reverse md:flex-row items-center max-w-5xl mx-auto mt-25 px-4 select-none'>
        {/* 텍스트 영역 */}
        <div className='flex-1 z-10 mt-6 md:mt-0'>
          <CustomRotatingIntro />
        </div>

        {/* 프로필 이미지 */}
        <div className='mb-4 md:mb-4 md:ml-8'>
          <Image
            src='/images/profile.png'
            alt='Profile_Image'
            width={280}
            height={280}
            className='object-cover'
            priority
          />
        </div>
      </section>

      <section className='flex flex-col text-[22px] font-bold p-[16px] max-w-5xl mx-auto select-none'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          Name. <span className='font-light'>최진형 </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          Email. <span className='font-light'>wlsgud2414@naver.com</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          Residence. <span className='font-light'>Seoul, South Korea </span>
        </motion.div>
      </section>

      <motion.section
        className='max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}>
        {/* <h2 className='text-xl md:text-2xl font-bold mb-6 md:mb-8'>자기소개</h2> */}

        <div className='space-y-4 md:space-y-6 text-sm md:text-base leading-relaxed text-center'>
          <p>
            안녕하세요, <span className='font-semibold '>경험을 설계하는 프론트엔드 개발자 최진형</span>입니다.
          </p>

          <p>
            저는 단순히 기능을 구현하는 것을 넘어, <span className='font-semibold '>사용자에게 어떻게 전달할지를 고민</span>합니다.
            <br /> 기술은 도구일 뿐, 개발의 진정한 목표는 사람에게 닿는 경험이라고 생각하기 때문입니다.
          </p>

          <p>
            <span className='font-semibold'>새로운 기술을 빠르게 습득하고 적용하는 것</span>을 좋아합니다. <br />
            아직 최신 기술이 닿지 않은 영역을 찾아 AI 모델과 소프트웨어를 빠르게 개발하고 실험합니다.
          </p>

          <p>
            <span className='font-semibold '>&quot;같이 일하면 재밌는 사람, 같이 일하고 싶은 사람&quot;</span>이라는 말을 많이 듣습니다. <br />저 또한 정적이지 않고 동적인 팀원이 되고자 노력합니다.
          </p>
        </div>
      </motion.section>
    </motion.main>
  )
}
