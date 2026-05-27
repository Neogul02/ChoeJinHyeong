import Link from 'next/link'

const MODAL_FILES = [
  { title: 'DeunDeun', file: 'src/components/modals/projects/DeunDeunModal.tsx' },
  { title: 'Knock', file: 'src/components/modals/projects/KnockModal.tsx' },
  { title: 'Portfolio', file: 'src/components/modals/projects/PortfolioModal.tsx' },
  { title: 'Hanamory', file: 'src/components/modals/projects/HanamoryModal.tsx' },
  { title: '도망가자', file: 'src/components/modals/projects/RunawayModal.tsx' },
  { title: 'LikeionKNU', file: 'src/components/modals/projects/LikeionModal.tsx' },
]

export default function AdminProjects() {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-2'>Projects</h1>
      <p className='text-sm opacity-50 mb-8'>
        프로젝트는 코드에서 직접 관리됩니다. 아래 파일을 수정하세요.
      </p>

      <div className='space-y-2'>
        {MODAL_FILES.map((item) => (
          <div key={item.file} className='border border-[var(--foreground)]/10 rounded-2xl p-4 flex items-center justify-between hover:border-[var(--foreground)]/20 transition-colors'>
            <div>
              <div className='font-medium'>{item.title}</div>
              <div className='text-xs font-mono opacity-40 mt-0.5'>{item.file}</div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-8 border border-[var(--foreground)]/10 rounded-2xl p-5'>
        <div className='text-sm font-semibold mb-2'>카드 목록 순서 변경</div>
        <p className='text-xs opacity-50 leading-relaxed'>
          <code className='opacity-80'>src/components/sections/projectsData.ts</code> 파일에서
          배열 순서를 바꾸면 카드 순서가 변경됩니다.
          <br />
          GIF 추가는 각 모달 파일의 주석 처리된 {'<img>'} 태그를 해제하세요.
        </p>
      </div>
    </div>
  )
}
