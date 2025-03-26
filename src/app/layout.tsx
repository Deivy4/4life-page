
import type { Metadata } from 'next'
import './globals.css'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import {AppProviders} from '@/context/AppProviders'

export const metadata: Metadata = {
  title: '4Life protección inmunitaria'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" href="images-icons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="images-icons/favicon.svg" />
        <link rel="shortcut icon" href="images-icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="images-icons/apple-touch-icon.png" />
        <link rel="manifest" href="images-icons/site.webmanifest" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://proteccionimnunitaria.com/"></meta>
        <meta property="og:title" content="Protección inmunitaria"></meta>
        <meta property="og:description" content="Descubre nuestra línea exclusiva de productos 4Life, diseñados para fortalecer tu sistema inmunológico y mejorar tu calidad de vida. Vive mejor, siéntete mejor."></meta>
        <meta property="og:image" content="https://proteccionimnunitaria.com/images-icons/imagen-shared.jpg"></meta>
        <meta property="og:image:alt" content="Icono"></meta>
        <meta property="og:image:type" content="image/jpeg"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
      </head>
      <body className=''>
        <AppProviders>
            <TopBar />
            {children}
            <Footer />
        </AppProviders>
      </body>
    </html>
  )
}
