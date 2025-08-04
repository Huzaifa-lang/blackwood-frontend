import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MoveLeft, MoveRight } from "lucide-react";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import ClientReview from '../components/clientReview.jsx';


// Sample Reviews
const reviews = [
  {
    name: "Sam Dillow",
    date: "2025-04-19",
    profileImg: "unnamed.png",
    verifiedIcon: "ti-verified.svg",
    ratingIcon: "s.svg",
    starCount: 5,
    review: `Satya and her team are thoroughly professional and great to work with. Thank you for your support. 🙏`
  },
  {
    name: "Jessica Wayne",
    date: "2025-02-11",
    profileImg: "unnamed.png",
    verifiedIcon: "ti-verified.svg",
    ratingIcon: "s.svg",
    starCount: 4,
    review: `Amazing experience! They made the process smooth and easy. Highly recommend.`
  },
  {
    name: "Michael Johnson",
    date: "2025-01-15",
    profileImg: "unnamed.png",
    verifiedIcon: "ti-verified.svg",
    ratingIcon: "s.svg",
    starCount: 5,
    review: `Great service! Prompt, professional, and always ready to help. Will work again.`
  }
];



const TestimonialSection = () => {
    const swiperRef = useRef(null);
  
 

  return (
    <>
    <div className='TestimonialSection-container container  mt-[40px] lg:mt-[80px]'>
      <div className="testimonialSection-content flex flex-col items-center  mb-[50px] container">
          <a className="text-[17px] tracking-wider no-underline text-lightBlack capitalize font-bold">
            Be inspired
          </a>
          <div className="flex items-center justify-center  w-full  relative ">
            <h1 className="md:text-[70px] text-[35px] text- text-center font-dmserif text-black">
              Our Client <br className='flex lg:hidden'/>Testimonials
            </h1>
              <div className="hidden md:flex items-center min-h-8 gap-4 absolute right-0 ">
              <MoveLeft
                size={55}
                 strokeWidth={0.8}
                color={"#3C7460"}
                onClick={() => swiperRef.current?.slidePrev()}
                className="cursor-pointer"
              />
              <MoveRight
                size={55}
                 strokeWidth={0.8}   
                color={"#3C7460"}
                onClick={() => swiperRef.current?.slideNext()}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      <div className='flex container flex-col lg:flex-row gap-1 relative'>
        <div className='w-[100%] lg:w-[30%] flex flex-col items-center  justify-center mt-[0rem] lg:mt-[2rem] lg:justify-start   gap-1 '>
            <span className='font-black text-[20px]'>EXCELLENT</span>
            <div className='flex'> 
              <span><img src="s.svg" alt="" className="h-[30px] w-auto"/></span>
              <span><img src="s.svg" alt="" className="h-[30px] w-auto"/></span>
              <span><img src="s.svg" alt="" className="h-[30px] w-auto"/></span>
              <span><img src="s.svg" alt="" className="h-[30px] w-auto"/></span>
              <span><img src="h.svg" alt="" className="h-[30px] w-auto"/></span>
            </div>
            <span className='font-medium text-[15px]'>Based on <span className='font-black text-[15px] text-greenCustom'>132 reviews</span></span>
            <span><img src="logo.svg" alt="" className='h-[40px]'/></span>
        </div>
        <div className='w-[100%] lg:w-[70%] '>

              <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
         breakpoints={{
            0: {
              slidesPerView: 1,
            },

            800: {
              slidesPerView: 3,
            },
          }}
        modules={[Pagination]}
        className="mySwiperTestimonialSection"
      >
        {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <ClientReview review={review} />
        </SwiperSlide>
      ))}
      </Swiper>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default TestimonialSection;