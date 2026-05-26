import Link from 'next/link'

const SECTIONS = [
  { href: '/admin/projects', label: 'Projects', desc: '프로젝트 카드 및 모달 내용 관리' },
  { href: '/admin/stack', label: 'Stack', desc: '기술 스택 항목 관리' },
  { href: '/admin/education', label: 'Education', desc: '학력 정보 관리' },
  { href: '/admin/career', label: 'Career', desc: '경력 정보 관리' },
  { href: '/admin/activities', label: 'Activities', desc: '대외활동 정보 관리' },
  { href: '/admin/certifications', label: 'Certification', desc: '자격증 정보 관리' },
  { href: '/admin/about', label: 'About', desc: '자기소개 및 연락처 관리' },
]

export default function AdminDashboard() {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-6'>대시보드</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {SECTIONS.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className='border rounded-xl p-5 hover:border-[#3182f6] hover:text-[#3182f6] transition-colors'>
            <div className='font-semibold text-lg'>{section.label}</div>
            <div className='text-sm text-gray-400 mt-1'>{section.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
