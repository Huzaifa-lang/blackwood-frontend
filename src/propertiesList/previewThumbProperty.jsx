import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Pagination, Thumbs } from 'swiper/modules';

const SkeletonBox = () => (
  <div className="w-full h-full bg-gray-300 animate-pulse rounded-md"></div>
);

function PreviewThumbProperty({item}) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
      const isLoading = !item || item.length === 0;

  return (
    <div className="w-full lg:w-[40%] h-[20rem] lg:h-[25rem] flex flex-col gap-2">
      <div className="h-full lg:h-[calc(70%-0.5rem)] w-full">
        {isLoading ? (
          <SkeletonBox />
        ) : (
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
            {item.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-md" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="hidden lg:flex w-full h-[30%] relative">
        {isLoading ? (
          <>
            <SkeletonBox />
            <SkeletonBox />
            <SkeletonBox />
          </>
        ) : (
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={Math.min(item.length, 3)}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="PreviewThumbProperty2"
          >
            {item.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <div className="absolute top-0 left-0 h-full w-full over-lay-container z-50"></div>
                  <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover rounded-md" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default PreviewThumbProperty