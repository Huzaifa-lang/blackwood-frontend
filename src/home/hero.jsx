import React from 'react'
import SearchBox from '../components/searchBox.jsx'

function Hero() {
  return (
    <>
    <div className="h-screen hero-container">
      <video
    autoPlay
    muted
    loop
    playsInline
    class="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="home_banner_video_a736cf348b.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        <div className="over-lay-container h-full w-full top-0 absolute "></div>

    <div className=' container h-full flex items-center justify-center relative z-10' >
      <div className="hero-content-container flex flex-col md:gap-4  gap-2 tems-center justify-center ">
        <h1 className='md:text-[70px] text-[40px] text- text-center font-dmserif text-white'>Professional. Transparent. Authentic.</h1>
        <p className='md:text-lg text-sm font-normal text-white text-center '>The award-winning brokerage provides a new standard of service.</p>
        <SearchBox/>
      </div>

    </div>

    </div>
      
    </>
  )
}

export default Hero