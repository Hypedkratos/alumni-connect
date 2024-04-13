'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
const Checkroute = () => {
  const path = usePathname();
  const newPath = path.replace("/", " | ");
  // console.log(newPath);
  return (
    <>
      <title> Alumni-Connect | {newPath} </title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </>
  )
}
export default Checkroute
