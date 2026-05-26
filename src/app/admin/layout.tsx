import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/admin', label: '대시보드' },
  { href: '/admin/projects', label: 'Projects' },
  { href: '/admin/stack', label: 'Stack' },
  { href: '/admin/education', label: 'Education' },
  { href: '/admin/career', label: 'Career' },
  { href: '/admin/activities', label: 'Activities' },
  { href: '/admin/certifications', label: 'Certification' },
  { href: '/admin/about', label: 'About' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='border-b px-6 py-3 flex items-center justify-between'>
        <Link href='/admin' className='font-bold text-lg hover:text-[#3182f6] transition-colors'>
          Portfolio Admin
        </Link>
        <nav className='flex flex-wrap gap-4 text-sm'>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className='hover:text-[#3182f6] transition-colors'>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className='flex-1 px-6 py-8 max-w-4xl mx-auto w-full'>{children}</main>
    </div>
  )
}
