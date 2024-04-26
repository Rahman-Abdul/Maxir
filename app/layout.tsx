import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from '@/lib/features/StoreProvider'
import Navbar from '../components/nav/Navbar'
import Footer from '../components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maxir',
  description: 'This app is created by Abdulrahman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <StoreProvider>{children}</StoreProvider>
        <Footer/>
        </body>
    </html>
  )
}
