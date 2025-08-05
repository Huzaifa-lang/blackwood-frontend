import React, { useEffect, useState } from "react";
import { LayoutGrid, Bed, Bath, MapPin, Copy, Phone  } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PropertySkeleton from "./propertySkeleton";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Pagination, Thumbs } from 'swiper/modules';
import { useParams } from "react-router";
import axios from "axios";


function Property() {
      const [thumbsSwiper, setThumbsSwiper] = useState(null);
      const [open, setOpen] = useState(false);
      const [displayProperty, setsetDisplayProperty] = useState(null)

      const [isExpanded, setIsExpanded] = useState(false);
        const toggleDescription = () => setIsExpanded(!isExpanded);
        const description = displayProperty?.property?.details?.description || "";



  const params = useParams()

  useEffect(()=> {
    console.log(displayProperty?.property.images.slice(0, 3))

    const text = displayProperty?.property?.images?.slice(0, 3).map((imgUrl, index) => (
        <SwiperSlide key={index}>
          <div className="h-full w-full absolute top-0 left-0 over-lay-container z-50"></div>
          <img
            src={imgUrl}
            alt={`Thumbnail ${index + 1}`}
            className="z-10 relative object-cover w-full h-full"
          />
        </SwiperSlide>
      ))

      console.log(text)
  },[displayProperty])
  
 
  useEffect( ()=> {

    const featchData = async()=> {
       try {

      const res = await axios.get(`https://blackwood-backend-production.up.railway.app/property/${params.id}`)
              setsetDisplayProperty(res.data)

      
    } catch (error) {
              console.log("Error is Property", error)

    }

    }

    featchData()
    
  },[])

  return (
    <>
    {displayProperty === null ? <PropertySkeleton/> : (
      <>
       <div className="h-[50vh] lg:h-[calc(100vh-100px)] flex gap-2 mb-[20px] lg:mb-[60px]  relative ">
       <div className="w-[100%] lg:w-[60%] h-full">
  {/* Main Swiper */}
  <Swiper
    style={{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }}
    spaceBetween={10}
    pagination={{ clickable: true }}
    thumbs={{ swiper: thumbsSwiper }}
    modules={[FreeMode, Pagination, Thumbs]}
    className="PreviewThumbProperty1"
  >
    {displayProperty?.property?.images?.slice(0, 3).map((imgUrl, index) => (
      <SwiperSlide key={index}>
        <img
          src={imgUrl}
          alt={`Property Image ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

{/* Thumbnail Swiper */}
<div className="hidden lg:flex w-[40%] h-full gap-2 !box-border">
  <div className="w-[100%] h-full">
    <Swiper
      direction="vertical"
      onSwiper={setThumbsSwiper}
      spaceBetween={10}
      slidesPerView={2}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Thumbs]}
      className="PreviewThumbProperty2"
    >
      {displayProperty?.property?.images?.slice(0, 3).map((imgUrl, index) => (
        <SwiperSlide key={index}>
          <div className="h-full w-full absolute top-0 left-0 over-lay-container z-50"></div>
          <img
            src={imgUrl}
            alt={`Thumbnail ${index + 1}`}
            className="z-10 relative object-cover w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

        <div className="hidden lg:flex absolute  bottom-[2rem] right-[3rem]  z-50 ">
          <button onClick={() => setOpen(true)} className="p-2 bg-greenCustom rounded-sm text-white text-[15px]">View All Photos</button>
        </div>
    </div>
        <div className="container">
      <div className="flex flex-col lg:flex-row gap-11 lg:gap-2 ">
        <div className="w-[100%] lg:w-[70%]  h-full">
          {/* Details */}
          <div className="flex justify-between mt-2 text-sm  flex-col items-start gap-1 pr-4 pl-4 mb-4">
            <h3 className="mt-2 text-[25px] font-bold">{displayProperty?.property?.country === 'pakistan'
    ? `Rs ${Number(displayProperty?.property?.price).toLocaleString('en-IN')}` 
    : `AED ${Number(displayProperty?.property?.price).toLocaleString('en-AE')}`}</h3>
            {/* icons */}

            <div className="flex items-center justify-start gap-11 ">
              <ul className="flex md:flex-nowrap flex-wrap  p-0 gap-3  ">
                {/* Item 1 */}
                <li className="flex items-center gap-2 pr-6 border-r-[1px] border-black">
                  <span className="flex items-center justify-center text-black ">
                    <LayoutGrid size={24} strokeWidth={2} color="#3C7460"/>
                  </span>
                  <span className="text-gray-600 text-[15px] font-medium">
                    {`${displayProperty.property.details.size} ${displayProperty.property.details.sizeType}`}
                  </span>
                </li>

                {/* Item 2 */}
                <li className="flex items-center gap-2  pr-6 border-r-[1px] border-black  ">
                  <span className="flex items-center justify-center text-black ">
                    <Bed size={24} strokeWidth={2} color="#3C7460" />
                  </span>
                  <span className="text-gray-600 text-[15px] font-medium">
                    {`${displayProperty.property.details.bedrooms} Bedrooms`}
                  </span>
                </li>

                {/* Item 3 */}
                <li className="flex items-center  gap-2 ">
                  <span className="flex items-center justify-center text-[#222430]">
                    <Bath size={24} strokeWidth={2} color="#3C7460" />
                  </span>
                  <span className="text-gray-600 text-[15px] font-medium">
                    {`${displayProperty.property.details.bedrooms} Bathrooms`}
                  </span>
                </li>
              </ul>
            </div>
            
            
            <div className="flex gap-2">
              {/* <MapPin size={20} strokeWidth={3} color={"#3C7460"} /> */}
              <span className="text-[16px] font-bold">
                {`${displayProperty.property.location}`}
              </span>
            </div>
            <span className=" text-gray-600 text-[15px] font-light">
             {`${displayProperty.property.title}`}
            </span>

          </div>

          <div className="preContent border-t ml-4 pt-4 w-[100%] lg:w-[80%] flex flex-col">
      <span className="text-[16px] font-bold text-greenCustom mb-4">
        PROPERTY DESCRIPTION
      </span>
      <span className="whitespace-pre-line">
        {isExpanded ? description : description.slice(0, 150) + (description.length > 150 ? "..." : "")}
      </span>

      {description.length > 150 && (
        <button
          onClick={toggleDescription}
          className="ti-read-more-link text-[10px] font-light text-[#8A8A8A] hover:text-black hover:underline text-sm mt-1 w-full text-left"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
        </div>

        {displayProperty?.property?.agent && (

             <div className="w-[100%] lg:w-[30%] ">
            <div className="w-full !min-h-[35rem] bg-[#F7F6F2] p-8 flex flex-col gap-2 rounded-lg">
                {/* img */}
                <div className="pt-[130%] bg-transparent rounded-lg relative"><img src="person.png" alt="" className="absolute top-0 left-0 w-full h-full rounded-lg" />
                <img src={displayProperty.property.agent.image} alt="" className="h-full w-full absolute top-0 left-0" />
                </div>
                {/* text */}
                <div className="flex flex-col items-center justify-center">
                    <span className="text-[17px] capitalize font-bold">{displayProperty.property.agent.name}</span>
                    <span>{displayProperty.property.agent.position}</span>
                </div>
                {/* btns */}
                <div className="flex items-start justify-between gap-2">
<a
  href={`tel:${displayProperty?.property?.agent?.number || ""}`}
  className="bg-greenCustom py-[10px] w-[50%] text-custom12 tracking-wider font-bold uppercase min-w-[113px] text-white flex items-center justify-center gap-2"
>
  <Phone size={20} />
  <span>Phone</span>
</a>
                              <button
  onClick={() => {
    if (displayProperty.property.agent.whatsapp) {
        const fullPath = window.location.href;
      const phone = displayProperty.property.agent.whatsapp; // WhatsApp number
      const propertyUrl = `${fullPath}`;
      const message = encodeURIComponent(`I'm interested in this property: ${propertyUrl}`);
      const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
      window.open(whatsappUrl, "_blank");
    } else {
      alert("WhatsApp contact not available");
    }
  }}
  className="bg-greenCustom py-[10px] w-[50%] text-custom12 tracking-wider font-bold uppercase min-w-[113px] text-white flex items-center justify-center gap-2"
>
  <img src="/whatsappIcon.svg" alt="" className="h-[1.25rem]" />
  <span>Whatsapp</span>
</button>



                </div>
               
            </div>
        </div>
        )}
       
      </div>
    </div>

    <Lightbox
  open={open}
  close={() => setOpen(false)}
  slides={
    displayProperty?.property?.images?.map((imgUrl) => ({
      src: imgUrl,
    })) || []
  }
/>



    </>

    
      
    )}
   

  
    </>
  );
}

export default Property;
