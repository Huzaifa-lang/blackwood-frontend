import React, { useState } from "react";
import { CheckCheck } from "lucide-react";
import { Link } from "react-router";

function ListPropertyBanner() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className="ListPropertyBanner-container mt-[40px] lg:mt-[60px] min-h-[80vh] flex items-center bg-black"
      id="lines-black"
    >
      <div className="container flex items-center justify-center h-full ">
        <div className="text-white  flex flex-col items-center justify-start  md:w-[50%] w-full h-full gap-2">
          <h5 className="md:text-[50px] text-[40px]  text-center font-dmserif text-white ">
            List your Property
          </h5>
          <span className="text-center mb-4">
            Ready to sell or rent your property? We make it simple and fast.
            Showcase your property to thousands of potential buyers and renters
            with just a few clicks.
          </span>
          <div className="grid md:grid-cols-2 gap-4 place-items-start lg:place-items-center">
            <div className="flex gap-2">
              <CheckCheck color="#3e9392" size={24} strokeWidth={2.2} />
              <span className="text-[17px] tracking-wider capitalize font-light">
                Reach a wide audience of genuine buyers and tenants
              </span>
            </div>
            <div className="flex gap-2">
              <CheckCheck color="#3e9392" size={24} strokeWidth={2.2} />
              <span className="text-[17px] tracking-wider capitalize font-light">
                Easy and hassle-free listing process
              </span>
            </div>
            <div className="flex gap-2 md:col-span-2 justify-center ">
              <CheckCheck color="#3e9392" size={24} strokeWidth={2.2} />
              <span className="text-[17px] tracking-wider capitalize font-light">
                Professional support every step of the way
              </span>
            </div>
          </div>

          <div className="flex bg-[#f0f0f2] w-[226px] h-11 items-center justify-center border border-white rounded-sm mt-4 ">
            <Link
              to="/contact"
              className=" flex items-center justify-center w-full h-full text-custom12 tracking-wider font-bold uppercase cursor-pointer select-none text-white bg-greenCustom border-2 border-white rounded-sm shadow transition-all duration-300 ease-in-out "
              style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPropertyBanner;
