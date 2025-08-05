import React from 'react'

function BannerHero(props) {
  const {title, subheading, backgroundURL} = props
  return (
    <div style={{ backgroundImage: `url(${backgroundURL})`}} className='h-[60vh] max-h-[70vh] relative '>
        <div className="container h-full">
            <div className='flex flex-col items-center justify-center  h-full topSection relative' >
            <h1 className='text-center text-[1.5rem] lg:text-[2.5rem] text-white font-bold'>{title}</h1>
            <h4 className='text-[.85rem] lg:text-[1.05rem] font-medium text-white w-full lg:w-[50%] text-center '>{subheading}</h4>
            </div>
        </div>
        <div className="absolute  over-lay-container top-0 left-0 h-full w-full"></div>


    </div>
  )
}

export default BannerHero