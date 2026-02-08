import AllApps from '@/components/allApps'
import HeroSection from '@/components/heroSection'
import { Button } from '@/components/ui/button'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import React from 'react'
import Asaeun from '@/components/asaeun';
import Why from '@/components/why';
import Footer from '@/components/footer';


const page = () => {
  return (
    <div className='w-full space-y-8 h-screen justify-between container mx-auto justify-center grid'>
      <HeroSection />
      <Asaeun />
      <AllApps />
      <div className='flex justify-center object-cover rounded-4xl relative'>
        <video muted loop autoPlay className='h-150 w-full object-cover flex rounded-4xl' src={'/ready.mp4'}></video>
        <div className='flex container mx-auto  z-10 absolute inset-0  flex-col'>
          <span className=' p-12 text-6xl font-bold'>Ready to do<br /> your best?</span>
          <Link className=' flex w-40 h-12' href="/all-app">
            <Button className='flex w-40 mx-12 text-white h-12 bg-black'>Get Started</Button>
          </Link>
        </div>
      </div>
      <Why />
      <Footer />
    </div>
  )
}

export default page