"use client"

import Footer from '@/components/footer'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-between h-screen  w-full'>
      <div className='container px-10 py-10 flex-col gap-10 flex mx-auto'>
        <h1 className='flex text-5xl font-bold'>About us </h1>
        <h3>Last Updated: February 8, 2026</h3>
        <p className='flex flex-wrap font-mono text-2xl'> Asaeun is built on the belief that complex problems deserve elegant, tech-driven solutions. Founded by Karan Bhilhatiya, a Full Stack Developer and Machine Learning enthusiast, Asaeun is the product of a deep-seated ambition to push the boundaries of what modern technology can achieve. We are currently in the building phase, merging robust development practices with intelligent ML insights to create a platform that is as powerful as it is intuitive. While we are just getting started, our mission is clear: to transform ambitious ideas into functional reality. Stay tuned, because this is only the beginning, and more information about our core features is coming soon. </p>
      </div>
      <Footer/>
    </div>
  )
}

export default page