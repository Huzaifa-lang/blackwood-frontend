import React, { useRef, useEffect, useState, useContext } from "react";
import axios from "axios";


import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { MoveLeft, MoveRight } from "lucide-react";
import PropertyCard from "../components/propertyCard.jsx";
import SkeletonFeaturedProperties from "../components/skeletonFeaturedProperties.jsx";
import { useLocation } from "../context/LocationContext.jsx";


function FeaturedProperties() {
    const {location} = useLocation();


  const [activeButton, setActiveButton] = useState('buy'); // 'buy' or 'sell'
  const swiperRef = useRef(null);

    const [homeData, setHomeData] = useState(null);

    useEffect(() => {
    
      setHomeData(null)

    const fetchHomeData = async () => {
      console.log("I ran the featured featch function")
      try {
        const res = await axios.get(`https://blackwood-backend-production.up.railway.app/?country=${location}&type=${activeButton}`);
        setHomeData(res.data);
        
      } catch (error) {
        console.error("Error fetching home data", error);
      }
    };

    setTimeout(() => {
          fetchHomeData();

    }, 1000);
  }, [activeButton, location  ]);



    if (!homeData) return <SkeletonFeaturedProperties/>;

  return (
    <div className="featuredProperties-container mt-[40px] lg:mt-[60px]">
      <div className="container">
        <div className="featuredProperties-content flex flex-col items-center">
          <span className="text-[17px] tracking-wider no-underline text-lightBlack capitalize font-bold">
            Be inspired
          </span>
          <div className="flex items-center justify-center  w-full  relative ">
            <h2 className="md:text-[70px] text-[40px] text- text-center font-dmserif text-black">
              Handpicked Properties
            </h2>
            
          </div>
        </div>

        <div className=" flex items-start justify-between">
      
      {/* Custom btns  */}
      <div className="flex items-center space-x-12 justify-center lg:justify-start mt-[1rem] mb-[1rem] w-full">
            <div className="relative flex w-[200px]  h-8  bg-[#f0f0f2]   items-center  border border-white  rounded-lg">
      {/* Sliding indicator */}
      <div 
        className={`absolute top-[-1.5px] w-1/2 h-8 bg-greenCustom border-2 border-white  rounded-lg shadow transition-all duration-300 ease-in-out ${
          activeButton === 'buy' ? 'left-[0%]' : 'left-[50%]'
        }`}
        style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
      />
      
      {/* Pakistan Button */}
      <button
        className={` flex items-center justify-center z-10 text-custom12 tracking-wider font-bold uppercase  w-[50%] cursor-pointer select-none transition-opacity  ${
          activeButton === 'buy' ? 'opacity-100 text-white ' : 'opacity-70 '
        }`}
        onClick={() => setActiveButton('buy')} 
      >
        Buy
      </button>
      
      {/* Dubai Button */}
      <button
        className={`flex items-center justify-center z-10 text-custom12 tracking-wider font-bold uppercase  w-[50%] cursor-pointer select-none transition-opacity ${

          activeButton === 'rent' ? 'opacity-100 text-white' : 'opacity-70'
        }`}
        onClick={() => setActiveButton('rent')}
      >
        sell
      </button>
        </div>
       
      </div>

<div className="hidden md:flex items-center min-h-8 gap-4">
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

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            800: {
              slidesPerView: 3,
            },
          }}
        > {
          homeData.map((item)=>(
            <SwiperSlide>
            <PropertyCard item={item} />
          </SwiperSlide>
          ))
        }
         
        </Swiper>
      </div>
    </div>
  );
}

export default FeaturedProperties;
