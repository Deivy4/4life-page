import type { Metadata } from 'next'
import './globals.css'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: '4Life protección inmunitaria'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        <TopBar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
