// 기술 스택
export default function Stack() {
  return (
    <section>
      {/* 위 쪽 블럭: Frontend, Backend */}
      <div className='text-[16px] flex flex-row justify-center'>현재 공부하고 있는 기술 스택은 🍅 표시를 해두었어요, 항상 쉬지 않고 새로운 기술을 탐구하고 있습니다.</div>
      <div className='md:flex flex-col md:flex-row justify-between my-5 ml-10'>
        <div className='w-1/2 pr-6'>
          <div className='text-[22px] font-bold'>Frontend</div>
          <div className='text-[16px] ml-3 space-y-1'>
            <div> · React </div>
            <div> · TypeScript</div>
            <div> · Zustand</div>
            <div> · Next 🍅</div>
            <div> · Tailwind CSS 🍅</div>
          </div>
        </div>
        <div className='w-1/2 md:pl-10'>
          <div className='text-[22px] font-bold'>Backend</div>
          <div className='text-[16px] ml-3 space-y-1'>
            <div> · SpringBoot </div>
            <div> · Express</div>
          </div>
        </div>
      </div>
      {/* 아래 쪽 블럭: Deployment, Cooperration */}
      <div className='flex flex-col md:flex-row justify-between my-10 ml-10'>
        <div className='w-1/2 pr-6'>
          <div className='text-[22px] font-bold'>Deployment</div>
          <div className='text-[16px] ml-3 space-y-1'>
            <div>· GitHub Actions</div>
            <div>· Vercel</div>
            <div>· AWS EC2</div>
            <div>· Docker 🍅</div>
          </div>
        </div>
        <div className='w-1/2 md:pl-10'>
          <div className='text-[22px] font-bold'>Cooperation</div>
          <div className='text-[16px] ml-3'>
            <div>· Git</div>
            <div>· Notion</div>
            <div>· Figma</div>
          </div>
        </div>
      </div>
    </section>
  )
}
