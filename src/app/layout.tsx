import './globals.css'
import Script from 'next/script'
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
        {/* Google Tag Manager */}
        <Script
          id='google-tag-manager'
          strategy='afterInteractive'>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N3RJ588L');`}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-N3RJ588L'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

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
