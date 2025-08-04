import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import { Phone  , Mail , MapPin ,  MoveRight , AlertCircle  } from 'lucide-react';
import axios from 'axios';

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
   setIsSubmitting(true);
  console.log("Form Data:", data);

  try {
    const response = await axios.post("http://localhost:5000/contact/send-email", data);

    if (response.data.success) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email.");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Error sending email.");
  }

  setIsSubmitting(false);
  reset(); // Clear form after submit
  };


  return (
    <div className='min-h-[calc(100vh)] pt-[100px] lg:pt-[50px] relative flex flex-col items-center justify-center' >
        <div id='lines' className='h-full w-full top-0 left-0 absolute bg-black z-10'></div>

        <div className=" flex flex-col items-center mb-[50px] z-50 relative">
          <a className="text-[17px] tracking-wider no-underline text-lightBlack capitalize font-bold">
            Be inspired
          </a>
          <div className="flex items-center justify-center  w-full  relative ">
            <h1 className="md:text-[70px] text-[40px] text- text-center font-dmserif text-black">
              List your Property
            </h1>
            
          </div>
        </div>
        <div className="container flex flex-col lg:flex-row h-full items-center z-50 relative">
            <div className='w-[100%] lg:w-[50%] h-full flex flex-col justify-center mb-[50px] lg:mb-0'>

                     <span className="flex items-center gap-2">
                <span className='text-[12px] md:text-[18px]  text-lightBlack font-bold'>Allsopp & Allsopp Private Office</span>
                <MoveRight
                size={50}
                 strokeWidth={0.8}
                color={"#686868"}
                onClick={() => swiperRef.current?.slidePrev()}
                className="cursor-pointer"
              />
              </span>
              <h4 className="text-[0.89rem] md:text-[13px] text-[#222223] leading-5 font-light w-[80%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae molestias ex dolor recusandae cum quidem adipisci at assumenda repudiandae reiciendis. Rerum aut consectetur nulla earum beatae tempore adipisci explicabo mollitia fugit ab, facilis cum temporibus sed esse sequi magni cupiditate atque
              </h4>
              <div className='flex flex-col lg:flex-row items-start lg:items-center justify-start gap-11 mb-11 mt-11'>
                <div className='flex gap-2 lg:gap-3 items-center'>
                    <span className='h-12 w-12  bg-[#3C7460] flex items-center justify-center rounded-full'><Mail color='#FFFFFF' size={21} /></span>
                    <div className='flex flex-col text-black'>
                        <span className='text-[0.95rem] lg:text-[22px] font-medium'>Call:</span>
                        <span className='text-[0.95rem] lg:text-[15px] font-normal '>+971 4 876 2333</span>
                        </div>
                </div>
                <div className='flex gap-2 lg:gap-3 items-center'>
                    <span className='h-12 w-12  bg-[#3C7460] flex items-center justify-center rounded-full'><Phone color='#FFFFFF' size={21} /></span>
                    <div className='flex flex-col text-black'>
                        <span className='text-[0.95rem] lg:text-[22px] font-medium'>Email:</span>
                        <span className='text-[0.95rem] lg:text-[15px] font-normal'>info@whiteandcogroup.com</span>
                        </div>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row items-start lg:items-center justify-start gap-11 '>
                <div className='flex gap-2 lg:gap-3 items-center'>
                    <span className='h-12 w-12 lg:h-12 lg:w-12 bg-[#3C7460] flex items-center justify-center rounded-full'><Phone 
                    color='#FFFFFF' size={21}/></span>
                    <div className='flex flex-col text-black'>
                        <span className='text-[0.95rem] lg:text-[22px] font-medium'>Whatsapp:</span>
                        <span className='text-[0.95rem] lg:text-[15px] font-normal'>+971 4 876 2333</span>
                        </div>
                </div>
                <div className='flex gap-1 lg:gap-3 items-center  '>
                    <span className='h-12 w-12    bg-[#3C7460] flex items-center justify-center rounded-full '><MapPin 
                    color='#FFFFFF' size={21}/></span>
                    <div className='flex flex-col text-black'>
                        <span className='text-[0.95rem] lg:text-[22px] font-medium'>Address:</span>
                        <span className='text-[0.95rem] lg:text-[15px] font-normal  '>White & Co Real Estate LLC, 7th, 8th & 20th Floor, Control Tower, Motor City, Dubai, UAE</span>
                        </div>
                </div>
              </div>

                
            </div>

            {/* <div className='w-[100%] lg:w-[50%] h-full  pl-11 border-l-2 '>
                <form action="" className='flex flex-col gap-4  h-full justify-center'>
                    <div className='w-full h-[4rem] flex relative border-b-2'>
                    <label htmlFor="name" className='absolute text-black'>NAME</label>
                    <input type="text"  id='name' className='pt-8 bg-transparent text-black font-bold focus:outline-none focus:ring-0 focus:border-none active:outline-none active:ring-0 active:border-none'/>
                    </div>
                    <div className='w-full h-[4rem] flex relative border-b-2'>
                    <label htmlFor="email" className='absolute text-black'>EMAIL</label>
                    <input type="email"  id='email' className='pt-8 bg-transparent text-black font-bold focus:outline-none focus:ring-0 focus:border-none active:outline-none active:ring-0 active:border-none'/>
                    </div>
                    <div className='w-full flex relative border-b-2'>
                    <label htmlFor="message" className='absolute text-black'>MESSAGE</label>
                    <textarea
  id="message"
  rows="8"
  className="w-full pt-8 bg-transparent text-black font-bold outline-none ring-0 border-none focus:outline-none focus:ring-0 focus:border-none active:outline-none active:ring-0 active:border-none"
  placeholder=""
/>

                    </div>
                     <button className="bg-[#3C7460] py-[10px] w-[100%] text-custom12 tracking-wider font-bold uppercase min-w-[113px] text-white flex items-center justify-center gap-2"> <span>Submit</span>

                                </button>
                </form>
            </div> */}

            <div className="w-full lg:w-1/2 h-full pl-11 border-l-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 h-full justify-center"
      >
        {/* NAME FIELD */}
        <div className="w-full h-[4rem] flex relative border-b-2">
          <label htmlFor="name" className="absolute text-black">
            NAME
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="pt-8 bg-transparent text-black font-bold w-full focus:outline-none"
          />
          {errors.name && (
            <div className="absolute right-2 bottom-2 flex items-center text-red-500 text-xs">
              <AlertCircle size={16} className="mr-1" />
              {errors.name.message}
            </div>
          )}
        </div>

        {/* EMAIL FIELD */}
        <div className="w-full h-[4rem] flex relative border-b-2">
          <label htmlFor="email" className="absolute text-black">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address"
              }
            })}
            className="pt-8 bg-transparent text-black font-bold w-full focus:outline-none"
          />
          {errors.email && (
            <div className="absolute right-2 bottom-2 flex items-center text-red-500 text-xs">
              <AlertCircle size={16} className="mr-1" />
              {errors.email.message}
            </div>
          )}
        </div>

        {/* MESSAGE FIELD */}
        <div className="w-full flex relative border-b-2">
          <label htmlFor="message" className="absolute text-black">
            MESSAGE
          </label>
          <textarea
            id="message"
            rows="8"
            {...register("message", { required: "Message is required" })}
            className="w-full pt-8 bg-transparent text-black font-bold outline-none"
          />
          {errors.message && (
            <div className="absolute right-2 bottom-2 flex items-center text-red-500 text-xs">
              <AlertCircle size={16} className="mr-1" />
              {errors.message.message}
            </div>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-[#3C7460] py-[10px] w-full text-custom12 tracking-wider font-bold uppercase min-w-[113px] text-white flex items-center justify-center gap-2 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-[#2f5c4d]"
          }`}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
        </div>

    </div>
  )
}

export default Contact