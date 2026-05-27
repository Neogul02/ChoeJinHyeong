export default function PortfolioModal() {
  return (
    <div>
      <div className='text-xl md:text-[24px] font-bold mb-1'>Portfolio</div>
      <div className='text-sm md:text-[16px] opacity-50 mb-6'>2025.05 - now</div>

      {/* GIF 미리보기 — 원하는 위치에 추가하세요 */}
      {/* <img src='/images/portfolio/preview.gif' alt='Portfolio 미리보기' className='w-full rounded-xl mb-6' /> */}

      <h2 className='text-xl md:text-[22px] font-bold mt-6 mb-2'>👋 프로젝트 소개</h2>
      <p className='text-sm md:text-[16px] mb-3 leading-relaxed'>
        개인 포트폴리오 웹사이트. Next.js App Router + Tailwind CSS + Supabase CMS.
      </p>

      <h2 className='text-xl md:text-[22px] font-bold mt-6 mb-2'>💻 기술 스택</h2>
      <ul className='text-sm md:text-[16px] space-y-1 mb-3'>
        <li>· Next.js 16, React 19, TypeScript</li>
        <li>· Tailwind CSS v4, Framer Motion</li>
        <li>· Zustand, Supabase</li>
      </ul>
    </div>
  )
}
