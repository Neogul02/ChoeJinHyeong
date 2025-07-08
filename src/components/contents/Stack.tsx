// 기술 스택
export default function Stack() {
  return (
    <section>

      {/* 위 쪽 블럭: Frontend, Backend */}
      <div className='md:flex flex-col md:flex-row justify-between my-10 ml-10'>
        <div className='w-1/2 pr-6'>
          <div className='text-[22px] font-bold'>Frontend</div>
          <div className='text-[16px] ml-3'>
            <div>React / Zustand</div>
            <div>JavaScript / TypeScript</div>
            <div>Next.js / Tailwind CSS</div>
          </div>
        </div>
        <div className='w-1/2 md:pl-10'>
          <div className='text-[22px] font-bold'>Backend</div>
          <div className='text-[16px] ml-3'>
            <div>SpringBoot / Node.js</div>
            <div>FireBase</div>
          </div>
        </div>
      </div>

      {/* 아래 쪽 블럭: Deployment, Cooperration */}
      <div className='flex flex-col md:flex-row justify-between my-10 ml-10'>
        <div className='w-1/2 pr-6'>
          <div className='text-[22px] font-bold'>Deployment</div>
          <div className='text-[16px] ml-3'>
            <div>Docker / Git Action</div>
            <div>AWS EC2 / Jenkins</div>
          </div>
        </div>
        <div className='w-1/2 md:pl-10'>
          <div className='text-[22px] font-bold'>Cooperation</div>
          <div className='text-[16px] ml-3'>
            <div>Git / Notion</div>
            <div>Figma / Jira</div>
          </div>
        </div>
      </div>

    </section>
  )
}
