import React, { useEffect, useRef, useState } from 'react';
import { useSwiper, useSwiperSlide } from 'swiper/react';


function ClientReview({review}) {


  const [expanded, setExpanded] = useState(false);
  const [needsExpand, setNeedsExpand] = useState(false);
  const [maxHeight, setMaxHeight] = useState('8 87px');
  const contentRef = useRef(null);

  // Your content
  const reviewContent = review.review;

  useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseInt(getComputedStyle(contentRef.current).lineHeight);
      const contentHeight = contentRef.current.scrollHeight;
      setNeedsExpand(contentHeight > 4 * lineHeight);
    }
  }, []);


  
  useEffect(() => {
    if (contentRef.current) {
      if (expanded) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setMaxHeight('87px');
      }
      console.log("YEs I am expanded", expanded)
    }
  }, [expanded]);



  return (
    <div className='px-2 py-4 flex flex-col gap-2 bg-[#F4F4F4]   rounded-sm 
  transition-all duration-300 ease-in-out 
  hover:-translate-y-1 hover:shadow-lg  cursor-pointer'>
      {/* Header section */}
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'> 
          <span><img src={review.profileImg} alt="" className='h-[1px] w-auto' /></span>
          <div className='flex flex-col items-start'>
            <span className='text-[15px] font-bold'>{review.name}</span>
            <span className='text-[9px] font-light text-[#8A8A8A]'>{review.date}</span>
          </div>
        </div> 
        <span><img src="icon.svg" alt="" className='!h-[20px]' /></span>
      </div>

      {/* Rating section */}
      <div className='flex items-center gap-2'>
        <div className='flex'> 
          {[...Array(5)].map((_, i) => (
            <img key={i} src="s.svg" alt="" className="!h-[15px] w-auto"/>
          ))}
        </div>
        <span><img src="ti-verified.svg" alt="" className="!h-[13px] w-auto" /></span>
      </div>
      {/* review mine */}
     {/* <div className="content flex items-start w-[90%]">
        <span className='text-[14px] text-start'>Satya and her team and thoroughly professional and great to work with. 
            <br />Thank you for your support. 🙏
</span>
     </div> */}

     {/* gpt */}

     <div className='content'>
      <div className='flex items-start gap-2'>
        <div className='' />
      </div>

      {/* Review Content */}
      <div className='ti-widget-container'>
        <div
          ref={contentRef}
          className='ti-review-content text-[15px] leading-[21.75px] text-left overflow-hidden transition-all duration-500 ease-in-out'
          style={{
            fontStyle: 'normal',
            paddingRight: 0,
            maxHeight: maxHeight,
          }}
        >
          {reviewContent}
        </div>

        {needsExpand && (
          <div className='ti-read-more'>
            <button
              onClick={() => setExpanded(!expanded)}
              className='ti-read-more-link text-[10px] font-light text-[#8A8A8A] hover:text-black hover:underline text-sm mt-1 w-full text-left'
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        )}
      </div>
    </div>

    </div>

  );
}

export default ClientReview