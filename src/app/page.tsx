import React from 'react'
import Navbar from '@/components/NavBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'

function page() {
  return (
    <div>
      <Navbar />
      <div className=' relative top-[70px] md:top-[70px] lg:top-[75px]'>
      <Hero />
      <About />
      <Features />
      </div>
    </div>
  )
}

export default page
