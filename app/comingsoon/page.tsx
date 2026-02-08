import Footer from '@/components/footer'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex-col h-screen justify-between flex'>
      <div className='flex items-center container mx-auto justify-center'>
        <h1 className='text-7xl font-semibold mt-50 flex'>Coming soon...</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default page