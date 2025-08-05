import React, { useEffect, useState } from 'react'
import {Link} from 'react-router'
import { LayoutGrid, Bed, Bath, MapPin, Dribbble  } from "lucide-react";
import PreviewThumbProperty from '../propertiesList/previewThumbProperty.jsx';
import EditBtns from '../dashboard/editBtns.jsx'
import SkeletonSingleProperty from './SkeletonSingleProperty.jsx';
function SingleProperty({item , editOptions}) {

  const fullPath = window.location.href;
  const propertyURL = `${fullPath}${item._id}`;
  const phoneNumber = "923311111127"; // Your WhatsApp number
  const message = `I'm interested in this property: ${propertyURL}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const showEditOptions = editOptions ?? false;

  
   const [display, setDisplay] = useState(item)

   
  return (  
    <>
    {display ? (
      <div className="  w-full flex  lg:flex-row flex-col bg-lightWhite ">
            <PreviewThumbProperty item={item.images}/>
            {/* content */}
            <div className="w-[100%] lg:w-[70%]  h-full">
<div className="w-full flex justify-end items-center gap-2 pt-2 pr-3">
  {/* Property Type (Buy or Rent) */}
  <span
    className="bg-[#212121] text-white text-sm font-semibold px-4 py-1 rounded-lg capitalize cursor-pointer shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
  >
    {item.details.status}
  </span>

  {/* Featured Tag */}
  {item.details.isFeatured && (
    <span
      className="bg-greenCustom text-white text-xs font-bold px-3 py-1 rounded-full uppercase cursor-pointer shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
    >
      Featured
    </span>
  )}
</div>



      {/* your property UI */}
      {showEditOptions && (
        <EditBtns editOptions={true} itemId={item._id} propertyDetils={item}/>
      )}
                {/* Details */}
      <div className="flex justify-between mt-2 text-sm  flex-col items-start gap-1 pr-4 pl-4 mb-4">
        <h3 className="mt-2 text-[20px] font-bold">{item?.country === 'pakistan'
    ? `Rs ${Number(item?.price).toLocaleString('en-IN')}` 
    : `AED ${Number(item?.price).toLocaleString('en-AE')}`} </h3>
        
        <div className='flex gap-2'>
            <MapPin size={20} strokeWidth={3} color={"#3C7460"}/>
        <span className="text-gray-600 text-[15px] font-light">{`${item.location}, ${item.city}`}</span>

        </div>
      </div>
      {/* icons */}
      <Link to={`/property/${item._id}`} className="pl-4  text-[15px] font-bold text-black hover:underline ">{item.title}</Link>
      <div className='flex items-center justify-between lg:justify-start gap-11 pr-4 pl-4   mt-4 mb-2'>
      <ul className="flex md:flex-nowrap flex-wrap mt-3  p-0 gap-3  ">
        {/* Item 1 */}
        <li className="flex items-center gap-1 pr-3 border-r-[1px] border-black">
          <span className="flex items-center justify-center text-black ">
            <LayoutGrid size={15} strokeWidth={3} />
          </span>
          <span className="text-gray-600 text-[13px] font-medium">{`${item?.details?.size} ${item?.details?.sizeType}`}</span>
        </li>
        
        {/* Item 2 */}
        <li className="flex items-center gap-1  pr-3 border-r-[1px] border-black  ">
          <span className="flex items-center justify-center text-black ">
            <Bed size={15} strokeWidth={3} />
          </span>
          <span className="text-gray-600 text-[12px] font-medium">{item?.details?.bedrooms}</span>
        </li>
        
        {/* Item 3 */}
        <li className="flex items-center  gap-1 ">
          <span className="flex items-center justify-center text-[#222430]">
            <Bath size={15} strokeWidth={3} />
          </span>
          <span className="text-gray-600 text-[12px] font-medium">{item?.details?.bathrooms}</span>
        </li>
      </ul>
     <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="hidden lg:flex items-center justify-center text-white text-[12px] no-underline uppercase font-normal tracking-wider transition-all duration-300 bg-[#3a7f77] hover:bg-[#2f6f68]
        w-[4rem] h-[4rem] rounded-full
        md:w-auto md:h-auto md:rounded-full md:px-4 md:py-2 gap-2"
>
  <img
    src="/whatsappIcon.svg"
    alt="WhatsApp"
    className="w-5 h-5 " // Adjust size as needed
    
  />
  <span className="hidden md:flex text-[10px] font-medium">Whatsapp</span>
</a>

<div>
 <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="flex lg:hidden items-center justify-center text-white text-[12px] no-underline uppercase font-normal tracking-wider transition-all duration-300 bg-[#3a7f77] hover:bg-[#2f6f68]
        w-[3rem] h-[3rem] rounded-full
        md:w-auto md:h-auto md:rounded-full md:px-4 md:py-2 gap-2"
>
  <img
    src="/whatsappIcon.svg"
    alt="WhatsApp"
    className="w-[2.5rem] h-[2rem] " // Adjust size as needed
    
  />
</a>
</div>



      </div>
      <div className="preContent border-t ml-4 pt-4 w-[100%] lg:w-[70%]">
        <span className="text-[13px]">
    {item?.details?.description?.length > 500
      ? item?.details?.description.substring(0, 500) + "..."
      : item?.details?.description}
      </span>
         <Link to={`/property/${item._id}`} className='ti-read-more-link text-[10px] font-light text-[#8A8A8A] hover:text-black hover:underline text-sm mt-1 w-full text-left block mb-2'>
              Read More
            </Link>
      </div>
            </div>
    </div>

    ) : (

        

    <SkeletonSingleProperty/>
    )}
    
  

    </>
  )
}

export default SingleProperty