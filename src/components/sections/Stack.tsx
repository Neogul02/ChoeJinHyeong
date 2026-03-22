// 기술 스택
export default function Stack() {
  return (
    <section className='mb-12 md:mb-20'>
      {/* 위 쪽 블럭: Frontend, Backend */}
      <div className='text-sm md:text-[16px] flex flex-row justify-center px-4 mb-4 md:mb-0'>현재 공부하고 있는 기술 스택은 🍅 표시를 해두었어요, 항상 쉬지 않고 새로운 기술을 탐구하고 있습니다.</div>
      <div className='flex flex-row justify-between my-4 md:my-5 ml-4 md:ml-10 mr-4 md:mr-0'>
        <div className='w-1/2 pr-2 md:pr-6'>
          <div className='text-base md:text-[22px] font-bold'>Frontend</div>
          <div className='text-sm md:text-[16px] ml-2 md:ml-3 space-y-1'>
            <div> · TypeScript / React </div>
            <div> · Next.js 🍅</div>
            <div> · React Query</div>
            <div> · Zustand / Tailwind </div>
          </div>
        </div>
        <div className='w-1/2 pl-2 md:pl-10'>
          <div className='text-base md:text-[22px] font-bold'>Backend</div>
          <div className='text-sm md:text-[16px] ml-2 md:ml-3 space-y-1'>
            <div> · Java / Spring Boot 🍅</div>
            <div> · Python</div>
            <div> · MySQL / PostgreSQL</div>
          </div>
        </div>
      </div>

      {/* 아래 쪽 블럭: Deployment, Cooperration */}
      <div className='flex flex-row justify-between my-6 md:my-10 ml-4 md:ml-10 mr-4 md:mr-0'>
        <div className='w-1/2 pr-2 md:pr-6'>
          <div className='text-base md:text-[22px] font-bold'>Infra</div>
          <div className='text-sm md:text-[16px] ml-2 md:ml-3 space-y-1'>
            <div>· AWS (EC2, S3)</div>
            <div>· GitHub Actions (CI/CD)</div>
            <div>· Vite / Webpack (Build)</div>
            <div>· Docker / k8s 🍅</div>
          </div>
        </div>
        <div className='w-1/2 pl-2 md:pl-10'>
          <div className='text-base md:text-[22px] font-bold'>Cooperation</div>
          <div className='text-sm md:text-[16px] ml-2 md:ml-3'>
            <div>· Git / GitHub</div>
            <div>· Figma</div>
            <div>· Mattermost / Slack</div>
            <div>· Notion</div>
          </div>
        </div>
      </div>
    </section>
  )
}
