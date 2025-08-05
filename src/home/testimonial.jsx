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
    name: "Sophie D.",
    date: "2025-07-28",
    profileImg: "/person/named(6).png",
    verifiedIcon: "ti-verified.svg",
    ratingIcon: "s.svg",
    starCount: 5,
    review: `Blackwood Marketing made my property listing experience so easy. Their team guided me through every step, answered all my questions promptly, and ensured everything was smooth. Highly recommend their services for anyone looking for a stress-free real estate experience!`
  },
  {
    name: "Daniel R.",
    date: "2025-07-15",
    profileImg: "/person/named.png",
    verifiedIcon: "ti-verified.svg",
    ratingIcon: "s.svg",
    starCount: 4,
review: `Great service! They helped me find a tenant quickly and handled all the details professionally. The communication was clear, and the process was stress-free. I’ll definitely use their services again and recommend them to anyone looking for a reliable real estate platform.`

},
  {
    name: "Thomas K.",
    date: "2025-07-10",
    profileImg: "/person/named (5).png",
    verifiedIcon: "ti-verified.svg",
    ratingIcon: "s.svg",
    starCount: 5,
    review: `Very transparent and reliable. I highly recommend them for anyone looking to rent or buy property! The team was always available and provided honest advice that really helped me make the right decision.`
  },
  {
    name: "Fatima Z.",
    date: "2025-07-02",
    profileImg: "/person/named (4).png",
    verifiedIcon: "ti-verified.svg",
    ratingIcon: "s.svg",
    starCount: 5,
    review: `Loved the professionalism and quick response. Listed my property and got inquiries within days. The process was much easier than I expected.`
  },
  {
    name: "Samuel P.",
    date: "2025-06-25",
    profileImg: "/person/named (3).png",
    verifiedIcon: "ti-verified.svg",
    ratingIcon: "s.svg",
    starCount: 4,
    review: `Excellent platform with great customer support. Everything from the listing to finalizing the deal went smoothly. Will definitely use Blackwood again for my future investments!`
  },
  {
    name: "Rebecca L.",
    date: "2025-06-18",
    profileImg: "/person/named (2).png",
    verifiedIcon: "ti-verified.svg",
    ratingIcon: "s.svg",
    starCount: 5,
    review: `Super easy to list and manage my property. The interface is user-friendly and efficient. I didn’t have to worry about anything.`
  },
  {
    name: "Alex G.",
    date: "2025-06-05",
    profileImg: "/person/named (1).png",
    verifiedIcon: "ti-verified.svg",
    ratingIcon: "s.svg",
    starCount: 5,
    review: `From start to finish, everything was smooth. Great service and trustworthy team! I was impressed by how quickly they responded and handled everything. Truly one of the best experiences I’ve had with a real estate platform.`
  },
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