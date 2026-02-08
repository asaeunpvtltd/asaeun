import Footer from '@/components/footer'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-between h-screen  w-full'>
      <div className='container px-10 py-10 flex-col gap-10 flex mx-auto'>
        <h1 className='flex text-5xl font-bold'>Privacy policy </h1>
        <h3>Last Updated: February 8, 2026</h3>
        <div className='flex flex-wrap font-mono text-4xl space-y-4'>
          <p className='flex flex-wrap  text-2xl'> At Asaeun, led by Karan Bhilhatiya, your privacy is a priority from the very first line of code. We collect minimal personal data, such as your name and email, solely to provide a personalized experience and keep you updated on our progress.  We do not sell your information to third parties; instead, we focus on using industry-standard security to keep your data safe. You retain full rights to access or delete your information at any time. By using Asaeun, you agree to our data practices, which are designed to be as transparent and ambitious as the technology we build. For inquiries, please contact us directly. <span className='text-red-600 flex'>contact@asaeun.com</span>  </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page