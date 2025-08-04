import React, { useState } from 'react'
import { CheckCheck } from 'lucide-react';
import { Link } from "react-router";


function ListPropertyBanner() {
        const [activeTab, setActiveTab] = useState(0);
    
  return (
    <div className='ListPropertyBanner-container mt-[40px] lg:mt-[60px] min-h-[80vh] flex items-center bg-black' id='lines-black'>
        <div className="container flex items-center justify-center h-full ">
            <div className='text-white  flex flex-col items-center justify-start  md:w-[50%] w-full h-full gap-2'>
               
                <h5 className='md:text-[50px] text-[40px]  text-center font-dmserif text-white '>List your Property</h5>
                <span className='text-center mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nesciunt, unde hic aliquid aperiam tempore blanditiis temporibus labore.</span>
               <div className='flex md:flex-row flex-col md:gap-5 gap-4 flex-wrap justify-center items-center  w-[50%] '>
                <div className='flex gap-2 '>
                     <CheckCheck color="#3e9392" size={24}  strokeWidth={2.2}/>
                    <span className='text-[17px] tracking-wider no-underline capitalize font-light'>Item 1</span>
                    </div>
                <div className='flex gap-2 '>
                     <CheckCheck color="#3e9392" size={24}  strokeWidth={2.2} />
                    <span className='text-[17px] tracking-wider no-underline capitalize font-light'>Item 1</span>
                    </div>
                <div className='flex gap-2 '>
                     <CheckCheck color="#3e9392" size={24}  strokeWidth={2.2} />
                    <span className='text-[17px] tracking-wider no-underline capitalize font-light'>Item 1</span>
                    </div>
                <div className='flex gap-2 '>
                     <CheckCheck color="#3e9392" size={24}  strokeWidth={2.2} />
                    <span className='text-[17px] tracking-wider no-underline capitalize font-light'>Item 1</span>
                    </div>
                </div>
            <div className="flex bg-[#f0f0f2] w-[226px] h-11 items-center justify-center border border-white rounded-sm mt-4 ">
  <Link to="/contact"
    className=" flex items-center justify-center w-full h-full text-custom12 tracking-wider font-bold uppercase cursor-pointer select-none text-white bg-greenCustom border-2 border-white rounded-sm shadow transition-all duration-300 ease-in-out "
    style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
  >
    Contact Us
  </Link>
                </div>


                
            </div>

        </div>
    </div>
  )
}

export default ListPropertyBanner