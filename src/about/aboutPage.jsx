import React from 'react'
import BannerHero from '../components/bannerHero'
import AboutIntro from './aboutIntro'
import AboutMission from './AboutMission'

function AboutPage() {
  return (
    <>
    <BannerHero title={"About White & Co."} subheading={"Learn more about White & Co — Dubai’s fastest growing real estate agency built on trust, transparency, and exceptional service."}/>
    <AboutIntro title={"Who We Are"} textPara={`White & Co is more than just a real estate brokerage — we’re a team of passionate professionals on a mission to raise the standard of property services in Dubai.

We specialise in buying, selling, renting, and managing properties across Dubai — from apartments and villas to commercial spaces and off-plan investments. But what truly sets us apart is our commitment to doing things the right way — with honesty, energy, and a genuine desire to help.`}
order={'order-2'}
columnPosition={'flex-col-reverse'}
/>
    <AboutIntro title={"How We Work"} textPara={`White & Co is more than just a real estate brokerage — we’re a team of passionate professionals on a mission to raise the standard of property services in Dubai.

We specialise in buying, selling, renting, and managing properties across Dubai — from apartments and villas to commercial spaces and off-plan investments. But what truly sets us apart is our commitment to doing things the right way — with honesty, energy, and a genuine desire to help.`}
order={'order-1'} columnPosition={'flex-col'}
/>
<AboutMission/>
    </>
  )
}

export default AboutPage