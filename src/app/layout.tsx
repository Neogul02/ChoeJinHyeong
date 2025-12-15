import './globals.css'
import Script from 'next/script'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import SectionNavigation from '@/components/ui/tools/SectionNavigation'
import ThemeInitializer from '@/components/layout/ThemeInitializer'

import DarkModeButton from '@/components/ui/buttons/DarkModeButton'
import ScrollToTopButton from '@/components/ui/buttons/ScrollToTopButton'

export const metadata = {
  title: 'Choe JinHyeong',
  description: '경험을 설계하는 프론트엔드 개발자 최진형입니다.',
  keywords: ['최진형', 'ChoeJinHyeong', '프론트엔드', '개발자', 'Frontend Developer', 'Portfolio'],
  authors: [{ name: 'Choe JinHyeong' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://choe-jinhyeong.vercel.app/',
    title: 'Choe JinHyeong | Frontend Developer',
    description: '경험을 설계하는 프론트엔드 개발자 최진형입니다.',
    siteName: 'Choe JinHyeong Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Choe JinHyeong Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Choe JinHyeong | Frontend Developer',
    description: '경험을 설계하는 프론트엔드 개발자 최진형입니다.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='kr'>
      <body className='antialiased bg-background text-foreground'>
        <Script
          src='https://cdn.counter.dev/script.js'
          data-id='a9a6b5ea-808a-49cf-91b0-91681288e73a'
          data-utcoffset='9'
          strategy='afterInteractive'
        />
        <ThemeInitializer />
        {/* Section Navigation */}
        <SectionNavigation />

        {/* Sub */}
        <div className='fixed bottom-4 right-4 z-50 flex gap-3'>
          <DarkModeButton />
          <ScrollToTopButton />
        </div>

        {/* Contents */}
        <div className='w-full max-w-[960px] mx-auto px-4 sm:px-8'>
          <Nav />
          <div className='page-transition'>{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  )
}
