import React from 'react'
import HeroSection from './HeroSection'
import Values from './Values'
import Mission from './Mission'
import LogoClouds from './LogoClouds'
import Testimonials from './Testimonials'
import NewsLetter from './NewsLetter'
import Footer from './Footer'

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <Mission/>
      <Values/>
      <LogoClouds/>
      <Testimonials/>
      <div className='flex flex-col space-y-0'>
        <NewsLetter/>
        <Footer/>
      </div> 
    </div>
  )
}

export default HomePage