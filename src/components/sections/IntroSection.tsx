'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import CustomRotatingIntro from '@/components/ui/CustomRotatingIntro'

export default function IntroSection() {
  return (
    <div id='intro'>
      <section className='flex flex-col-reverse md:flex-row items-center max-w-5xl mx-auto mt-20 md:mt-24 px-4'>
        <section className='flex-1 z-10 ml-3 mt-6 md:mt-0'>
          <CustomRotatingIntro />
        </section>
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
          사용자에게 어떻게 전달할지를 고민하는 개발자 최진형입니다.
          <br />
          기술은 도구일 뿐, 개발의 목표는 사람에게 닿는 경험이라 생각합니다.
        </p>
        <button
          className='cursor-pointer text-base font-semibold md:text-[20px] text-gray-400 hover:text-[#3182f6] transition-colors my-16'
          onClick={() =>
            window.open(
              'https://www.figma.com/design/WBaXINRDszR2CRStJTHpbI/choejinhyeong_resume?node-id=0-1&t=7DZc4iYEwVO0HI1X-1',
              '_blank'
            )
          }>
          이력서 보기
        </button>
        <p className='text-center text-gray-400'>(PC, Chrome에서 보시는 것을 권장드립니다.)</p>
      </motion.section>
    </div>
  )
}
