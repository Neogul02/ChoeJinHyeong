import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Choe JinHyeong',
  description: "Choe JinHyeong's portfolio",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='kr'>
      <body className='antialiased bg-background text-foreground'>
        <div className='w-full max-w-[960px] mx-auto px-4 sm:px-8'>
          <Nav />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
