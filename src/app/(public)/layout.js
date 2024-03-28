import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { Checkroute, Footer, Navbar } from '@/components'
import { Toaster } from 'react-hot-toast';
import Nav from '@/components/shared/Nav';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alumni-Connect',
  description: 'Designed for students to connect Alumni.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Checkroute/>
      
      <body className={inter.className}>
      <Toaster toastOptions={{ duration: 4000 }} />
        <Navbar />
        {/* <Nav/> */}

        {children}
        <Footer />
      </body>
    </html>
  )
}
