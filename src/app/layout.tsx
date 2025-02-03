import type { Metadata } from 'next'
import './globals.css'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import {SideBarProvider} from '@/context/SideBarContext'
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
      <head>
        <link rel="icon" type="image/png" href="images-icons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="images-icons/favicon.svg" />
        <link rel="shortcut icon" href="images-icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="images-icons/apple-touch-icon.png" />
        <link rel="manifest" href="images-icons/site.webmanifest" />
      </head>
      <body className=''>
        <SideBarProvider>
          <TopBar/>
          {children}
          <Footer />
        </SideBarProvider>
      </body>
    </html>
  )
}
