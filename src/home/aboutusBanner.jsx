import React, { useState } from "react";
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import {Link} from 'react-router'


function AboutusBanner() {
      const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="AboutusBanner-container mt-[40px] lg:mt-[60px]">
      {/* color */}
      <div className=" h-full flex items-center ">
        {/* wrapper parent*/}
        <div className=" flex  xl:flex-row flex-col-reverse">
          {/* right childrent*/}

          <div className="flex flex-col w-[100%] xl:w-[50%] gap-2 lg:gap-4 items-start bg-black pl-8 md:pl-14 lg:pl-6 xl:pl-[8rem] pt-[3rem] pb-[3rem] lg:pt-[8rem] lg:pb-[8rem]">

           

              <span className="text-[12px] md:text-[18px]  text-lightBlack font-bold ">
                About Blackwood Marketing
              </span>
              <h4 className="text-[25px] lg:text-[40px] text-white font-bold w-[80%]   font-dmserif">
                Your trusted partner in real estate.
              </h4>
              <p className=" text-[12px] lg:text-[15px] text-white font-light w-[85%]">
                At Blackwood Marketing, we bring professionalism, transparency, and authenticity to the property market. Whether you're looking to buy, sell, or rent, we provide seamless solutions designed to meet your needs. <br /> <br />
                We empower property owners to list with ease and connect buyers and renters with their dream homes. Our mission is simple: to make real estate transactions smooth, secure, and stress-free.
              </p>
              <Link to='/about' className="bg-greenCustom py-[10px] px-[25px] text-custom12 tracking-wider font-bold uppercase min-w-[113px] text-white border-2">Read More</Link>
          </div>
          {/* left */}
          <div
            className="w-[100%] h-[40vh] xl:w-[50%] xl:h-auto bg-cover bg-no-repeat bg-red-900"
            style={{
              backgroundImage: 'url("/Copy_of_DSC_07300_c35b50216f.png")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AboutusBanner;
