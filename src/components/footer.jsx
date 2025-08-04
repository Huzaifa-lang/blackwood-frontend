import React from 'react'
import {useLocation} from '../context/LocationContext'
import { Link } from 'react-router'

function Footer() {
  const {location} = useLocation()
  
  return (
    <div className='bg-[#F2F0EC] px-4 py-8 mt-[100px]'>
      <div className="container flex lg:flex-row flex-col-reverse justify-between gap-[3rem] lg:gap-[7rem]">
        {/* left */}
        <div className='w-[100%] lg:w-[40%] b flex flex-col gap-3 items-start' >
          <span className='h-12 w-auto  '><img src="Blackwoodgreenblack1.webp" alt="" className='w-full h-full'/></span>
          <span className='text-[12px] font-bold'>KAYE & CO REAL ESTATE LLC is a real estate company based in Dubai, UAE. We have a passion for real estate with innovative and creative concepts. KAYE & CO REAL ESTATE LLC has evolved into one of the fastest-growing and most innovative real estate companies in the UAE</span>
          <span className='text-[12px] font-bold'>We are regulated by the Real Estate Regulatory Agency under Office Registration Number 17029.</span>
          
        </div>
        {/* right */}
        <div className='w-[100%] lg:w-[60%]  flex justify-end gap-[3rem] lg:gap-[7rem]  lg:flex-row flex-col-reverse '>
            <div className='flex gap-[7rem]'>
          <div className=' flex flex-col items-start'>
            <h5 className='text-[15px] font-bold'>Quick Links</h5>
            <ul className='m-0 p-0 flex flex-col gap-2'>
              <li className='text-[14px] font-medium hover:underline cursor-pointer'><Link to={`/properties-list/${location}/buy` } className='text-inherit'>Buy</Link></li>
              <li className='text-[14px] font-medium hover:underline cursor-pointer'><Link to={`/properties-list/${location}/rent` } className='text-inherit'>Rent</Link></li>
            </ul>
            
          </div>
          <div className=' flex flex-col items-start'>
            <h5 className='text-[15px] font-bold'>About</h5>
            <ul className='m-0 p-0 flex flex-col gap-2'>
              <li className='text-[14px] font-medium hover:underline cursor-pointer'><Link to={`/about` } className='text-inherit'>Our Story</Link></li>
              <li className='text-[14px] font-medium hover:underline cursor-pointer'><Link to={`/about` } className='text-inherit'>Our Mission</Link></li>
              <li className='text-[14px] font-medium hover:underline cursor-pointer'><Link to={`/contact` } className='text-inherit'>Contact Us</Link></li>
            </ul>
            
          </div>
          </div>

          <div className='flex flex-col items-start justify-between '>
            <div className=' '>
            <h5 className='text-[15px] font-bold'>About</h5>
            <h6 className='text-[14px] font-medium hover:underline '>2401, 2410, Burlington Tower <br />
Business Bay, Dubai  UAE</h6>
            </div>
            <div className=''>
            <h6 className='text-[14px] font-medium hover:underline '>Email: info@kayeandco.ae</h6>
            <h6 className='text-[14px] font-medium hover:underline '>Phone: +923311111127</h6>
            <h6 className='text-[14px] font-medium hover:underline '>Hours: Mon-Sat 9:00AM - 6:00PM</h6>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer