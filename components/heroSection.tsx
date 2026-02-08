import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (

    <section className='space-y-4 gap-4 justify-between container mx-auto relative p-10 w-[1460px] grid '>
      <h1 className='text-7xl z-10 '>Where<br /> <span className='text-gray-900 '> simplicity wins. </span></h1>
      <div className='h-100 shadow-2xl w-110 flex z-10 p-4 rounded-2xl bg-white '>
        <span className='flex justify-center text-2xl font-semibold w-full '>Populer tools & apps</span>
      </div>
      <Image draggable='false' className='flex inset-0 select-none p-6 left-100 mt-10 shrink absolute' alt='hero' src={"/heropng.png"} width={1100} height={200} />
    </section>

  )
}

export default HeroSection