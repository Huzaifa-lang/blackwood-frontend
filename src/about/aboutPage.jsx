import React from 'react'
import BannerHero from '../components/bannerHero'
import AboutIntro from './aboutIntro'
import AboutMission from './aboutMission'

function AboutPage() {
  return (
    <>
    <BannerHero backgroundURL={"/bUY.png"} title={"About White & Co."} subheading={"Learn more about White & Co — Dubai’s fastest growing real estate agency built on trust, transparency, and exceptional service."}/>
  <AboutIntro 
  title={"Who We Are"} 
  textPara={`Blackwood Marketing is more than just a real estate platform — we’re your trusted partner in property transactions. Our mission is to make buying, selling, and renting properties seamless, secure, and transparent.

We specialize in connecting property owners with genuine buyers and renters, offering a platform that is easy to use and backed by professional support. What sets us apart is our commitment to authenticity, integrity, and delivering results that matter.`} 
  order={'order-2'} 
  columnPosition={'flex-col-reverse'} 
/>

  <AboutIntro 
  title={"How We Work"} 
  textPara={`At Blackwood Marketing, we believe in making real estate simple and stress-free. Our process is designed to connect you with the right property or the right buyer quickly and transparently.

We start by understanding your goals — whether you're buying, selling, renting, or listing your property. From there, our platform and team work together to provide tailored solutions, professional guidance, and reliable support at every step. 

What makes us different? We combine advanced technology with a human touch, ensuring every transaction is smooth, secure, and built on trust.`} 
  order={'order-1'} 
  columnPosition={'flex-col'} 
/>

<AboutMission/>
    </>
  )
}

export default AboutPage