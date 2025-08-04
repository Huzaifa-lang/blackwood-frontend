import React, { useState } from 'react'
import Hero from './hero.jsx'
import FeaturedProperties from './featuredProperties.jsx'
import ListPropertyBanner from './contactUsBanner.jsx'
import AboutusBanner from './aboutusBanner.jsx'
import TestimonialSection from './testimonial.jsx'
import Contact from './contact.jsx'

function Home() {
  

  return (
    <>
    <Hero/>
    <FeaturedProperties/>
    <ListPropertyBanner/>
    <AboutusBanner/>
    <TestimonialSection/>
    <Contact/>
    </>
    
  )
}

export default Home