import { Inter } from 'next/font/google'
import '../globals.css'
import { Checkroute } from '@/components'
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from 'react-hot-toast';

export const metadata = {
    title: 'Alumni-Connect',
    description: 'Designed for students to connect Alumni.',
  }

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <Checkroute/>
        <body className={inter.className}>
        <Toaster/>
          {children}
        </body>
      </html>
    )
  }