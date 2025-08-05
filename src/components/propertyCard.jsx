import React from 'react'
import { LayoutGrid, Bed, Bath, MapPin, Dribbble    } from 'lucide-react';
import { Link, useLocation as useLocationRoute } from "react-router";

function PropertyCard({item}) {
const fullPath = window.location.href;
  const propertyURL = `${fullPath}${item._id}`;
  const phoneNumber = "923311111127"; // Your WhatsApp number
  const message = `I'm interested in this property: ${propertyURL}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
              <div className="overflow-hidden relative transition-colors duration-300 group border-[2px] border-[#F0F0F0] rounded-lg pb-4 ">
  
      {/* Image container */}
      <div className=" relative z-10 pt-[60%] lg:pt-[100%]  w-[100%]">
        <div className="absolute inset-0 overflow-hidden rounded-sm ">
          <img
            src={`${item.images[0]}`}
            alt="W Residences - JLT"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
       <span className="my-text">
  {item?.country === 'pakistan'
    ? `Rs ${Number(item?.price).toLocaleString('en-IN')}` 
    : `AED ${Number(item?.price).toLocaleString('en-AE')}`}
</span>


        </div>
        <div className='absolute h-full w-full bg-transparent top-0 left-0 z-50 pointer-events-none'>
  <Link to={`/property/${item._id}`} className='w-full h-full block pointer-events-auto'></Link>
</div>

      </div>

    

      {/* Title */}

      {/* Details */}
      <div className="flex justify-between mt-2 text-sm  flex-col items-start gap-1 pr-4 pl-4">
        
        <Link to={`/property/${item._id}`} className="mt-2  mb-2 text-[18px] font-bold text-black text-start hover:underline">{`${item.title}`}</Link>
        <div className='flex gap-2'>
            <MapPin size={18} strokeWidth={3} color={"#3C7460"}/>
        <span className="text-gray-600 text-[13px] font-light">{`${item.location}, ${item.city}`}</span>

        </div>
      </div>
      {/* icons */}
      <div className='flex items-center justify-between pr-4 pl-4   '>
      <ul className="flex md:flex-nowrap flex-wrap mt-3  p-0 gap-3  ">
        {/* Item 1 */}
        <li className="flex items-center gap-1 pr-3 border-r-[1px] border-black">
          <span className="flex items-center justify-center text-black ">
            <LayoutGrid size={15} strokeWidth={3} />
          </span>
          <span className="text-gray-600 text-[13px] font-medium">{`${item.details.size} ${item.details.sizeType}`}</span>
        </li>
        
        {/* Item 2 */}
        <li className="flex items-center gap-1  pr-3 border-r-[1px] border-black  ">
          <span className="flex items-center justify-center text-black ">
            <Bed size={15} strokeWidth={3} />
          </span>
          <span className="text-gray-600 text-[12px] font-medium">{item.details.bedrooms} </span>
        </li>
        
        {/* Item 3 */}
        <li className="flex items-center  gap-1 ">
          <span className="flex items-center justify-center text-[#222430]">
            <Bath size={15} strokeWidth={3} />
          </span>
          <span className="text-gray-600 text-[12px] font-medium">{item.details.bathrooms} </span>
        </li>
      </ul>
     <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="flex lg:hidden items-center justify-center text-white text-[12px] no-underline uppercase font-normal tracking-wider transition-all duration-300 bg-[#3a7f77] hover:bg-[#2f6f68]
        w-[2.5rem] h-[2.5rem] rounded-full
        md:w-auto md:h-auto md:rounded-full md:px-4 md:py-2 gap-2"
>
  <img src="\whatsappIcon.svg" alt="" className='!h-[2rem] !w-[2rem]' />
  
  <span className="hidden md:flex text-[10px] font-medium">Whatsapp</span>
</a>

     <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="hidden lg:flex items-center justify-center text-white text-[12px] no-underline uppercase font-normal tracking-wider transition-all duration-300 bg-[#3a7f77] hover:bg-[#2f6f68]
        w-[4rem] h-[4rem] rounded-full
        md:w-auto md:h-auto md:rounded-full md:px-4 md:py-2 gap-2"
>
   <img src="\whatsappIcon.svg" alt="" className='!h-[1.3rem] !w-[1.3rem]' />
  <span className="hidden md:flex text-[10px] font-medium">Whatsapp</span>
</a>


      </div>
        {/* </a> */}
  </div>

  
  )
}

export default PropertyCard