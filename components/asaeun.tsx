"use client"
import Image from 'next/image'
import React from 'react'

const Asaeun = () => {
  return (
     <div className='flex object-cover flex-col container mx-auto items-center justify-center h-70 rounded-2xl'>
        <Image className='flex object-cover h-24 top-40' alt='logo' width={400} height={100} src={"/logo.png"} />
        <span className='text-4xl font-semibold text-gray-900'>Transform the way you work with Asaeun  </span>
        <p className='flex font-semibold  text-center '>
          <br />a powerful software suite built for everyone. We believe tools should be intuitive, fast, and above all, private.
          <br /> Whether you’re starting a project or scaling a company, Asaeun provides the smart solutions you need to move forward, together.</p>
      </div>
  )
}

export default Asaeun