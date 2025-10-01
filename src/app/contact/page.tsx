'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CustomRotatingIntro from '@/components/CustomRotatingIntro'

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
      <section className='flex flex-col-reverse md:flex-row items-center max-w-5xl mx-auto mt-25 px-4'>
        {/* 텍스트 영역 */}
        <div className='flex-1 z-10 mt-6 md:mt-0'>
          <CustomRotatingIntro />
        </div>

        {/* 프로필 이미지 */}
        <div className='mb-4 md:mb-4 md:ml-8'>
          <img
            src='/images/profile.png'
            alt='Profile_Image'
            className='
              w-[280px]
              h-[280px]
              object-cover
            '
          />
        </div>
      </section>

      <section className='flex flex-col text-[22px] font-bold p-[16px] max-w-5xl mx-auto'>
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
    </motion.main>
  )
}
