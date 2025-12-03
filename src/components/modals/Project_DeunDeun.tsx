import SectionLine from '@/components/ui/tools/SectionLine'

export default function Project_DeunDeun() {
  return (
    <div className='animate-fadeIn'>
      <div className='text-xl md:text-[24px] font-bold mb-2'>DeunDeun 프로젝트</div>
      <div className='text-base md:text-[18px] mb-2'>2025.XX ~ 개발 중</div>
      <div className='text-sm md:text-[16px] mb-2'>프로젝트 타입</div>
      <div className='text-sm md:text-[16px] font-bold flex flex-wrap gap-1'>
        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`Blog->`}
        </a>
        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='text-mainblue hover:underline'>
          {`GitHub->`}
        </a>
      </div>
      <br />
      <br />
      <section className='flex flex-col justify-center items-center'></section>
      <div className='text-lg md:text-[20px] font-bold my-2'>이 프로젝트는 무엇인가요?</div>
      <div className='text-sm md:text-[16px] mb-2'>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>· DeunDeun 프로젝트에 대한 설명을 작성해주세요.</div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>· 프로젝트의 목적과 주요 기능에 대해 설명해주세요.</div>
      </div>
      <SectionLine />
      <div className='text-lg md:text-[20px] font-bold my-2'>프로젝트 기능 </div>
      <div className='text-sm md:text-[16px] mb-2'>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>· 주요 기능 1을 설명해주세요.</div>
        <div className='my-1 md:m-2 ml-1 md:ml-2'>· 주요 기능 2를 설명해주세요.</div>
      </div>
      <SectionLine />
      <div className='text-lg md:text-[20px] font-bold my-2'>다음 기술 스택을 사용했어요</div>
      <div className='text-sm md:text-[16px] font-bold ml-1 md:ml-2'>기술 스택 1</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 기술 스택 1을 선택한 이유를 설명해주세요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>기술 스택 2</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 기술 스택 2를 선택한 이유를 설명해주세요.</div>
      <SectionLine />
      <div className='text-lg md:text-[20px] font-bold mb-2'>프로젝트 프리뷰</div>
      {/* 프로젝트 이미지를 추가하세요 */}
      {/* <Image
        src='/images/deundeun/deundeun_Preview.gif'
        alt='deundeun_Preview'
        width={1920}
        height={1080}
        className='w-full h-auto rounded-4xl mb-4'
        loading='lazy'
      /> */}
      <SectionLine />
      <div className='text-lg md:text-[20px] font-bold my-2'>어떻게 개발했을까요?</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 my-1 md:m-2 ml-1 md:ml-2'>개발 프로세스</div>
      <div className='text-sm md:text-base ml-1 md:ml-2'>· 개발 프로세스에 대해 설명해주세요.</div>
      <div className='text-sm md:text-[16px] font-bold mt-3 md:mt-5 ml-1 md:ml-2'>트러블 슈팅</div>
      <div className='text-sm md:text-base my-1 md:m-2 ml-1 md:ml-2'>· 개발 중 겪었던 문제와 해결 방법을 설명해주세요.</div>
    </div>
  )
}
