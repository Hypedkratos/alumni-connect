import { Inter } from 'next/font/google'
import '../globals.css'
import '../output.css'
import { Checkroute, Sidebar, Topbar } from '@/components'
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Alumni-Connect',
  description: 'Designed for students to connect Alumni.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-black text-white">
   
      <Checkroute />
      <body className={inter.className}>
        <Toaster />
        <div className='flex md:container mx-auto my-4'>
          <Sidebar />
          <div className='second w-full border-[1px] border-x-gray-600 border-y-black '>
          {/* <Topbar/> */}
          {children}
          </div>
        </div>
      </body>
    </html>
  )
}