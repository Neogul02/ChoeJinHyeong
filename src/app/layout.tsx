import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SectionNavigation from '@/components/SectionNavigation'
import ThemeInitializer from '@/components/ThemeInitializer'

import DarkModeButton from '@/components/DarkModeButton'
import ScrollToTopButton from '@/components/ScrollToTopButton'

export const metadata = {
  title: 'Choe JinHyeong',
  description: "Choe JinHyeong's personal portfolio",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='kr'>
      <body className='antialiased bg-background text-foreground'>
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
