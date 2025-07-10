import React from 'react'
import CustomRotatingIntro from '@/components/CustomRotatingIntro'

import SectionLine from '@/components/SectionLine'
import Stack from '@/components/contents/Stack'
import Education from '@/components/contents/Education'

export default function About() {
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
            src='/images/profile.png'
            alt='Profile_Image'
            className='
              w-[300px]
              h-[300px]
              object-cover
            '
          />
        </div>
      </section>
      <section className='flex flex-col text-[22px] font-bold p-[16px]'>
        <div>
          Name. <span className='font-light'>최진형 </span>
        </div>

        <div>
          Email. <span className='font-light'>wlsgud2414@naver.com</span>
        </div>

        <div>
          Residence. <span className='font-light'>Seoul, South Korea </span>
        </div>
      </section>

      <section className='max-w-5xl mx-auto mt-12 px-4'>
        {/* 기술 스택, 이력, 프로젝트, 교육 섹션 자리 */}

        {/* <SectionLine text='취미' />

        <SectionLine text='장학/수상내역' /> */}

      </section>
    </main>
  )
}
