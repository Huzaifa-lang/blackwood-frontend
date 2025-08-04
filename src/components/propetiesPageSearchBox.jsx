import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, useLocation as useRouteLoaction} from "react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import axios from "axios";
import { useLocation } from "../context/LocationContext.jsx";
import PropetiesPageSearchBoxMobile from "./propetiesPageSearchBoxMobile.jsx";

function PropetiesPageSearchBox(props) {
    const {location} = useLocation()
    const ReactLoaction = useRouteLoaction()
    const params = new URLSearchParams(ReactLoaction.search);
    const queryObject = Object.fromEntries(params.entries());
   const {minPrice, maxPrice, bedrooms, bathroom, search} = queryObject
  const { type } = useParams(); // from URL: /properties-list/dubai/:type


  const [bothSearch, setBothSearch] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: search || "",
      type: type || "buy",
      minPrice: minPrice || '',
      maxPrice: maxPrice || '',
      bedrooms: bedrooms || '',
      bathroom: bathroom || '',
    },
  });
  const selectedType = watch("type");
  const selectedminPrice = watch("minPrice");
  const selectedmaxPrice = watch("maxPrice");
  const selectedbedrooms = watch("bedrooms");
  const selectedTypebathroom = watch("bathroom");



  const navigate = useNavigate();
  


  const onSubmitDesktop = (data) => {
   const filteredData = Object.fromEntries(
  Object.entries(data).filter(([key, value]) => key !== 'type' && value !== '')
);
    const {type } = data
    const query  = new URLSearchParams(filteredData).toString()

    navigate(`/properties-list/${location}/${type}${query != '' ? `?${query}` : ''}` )


    
  };

    useEffect(() => {
    if (selectedType) {
      handleSubmit(onSubmitDesktop)();
    }
  }, [selectedType, selectedminPrice, selectedmaxPrice, selectedbedrooms, selectedTypebathroom]); // jab bhi type change ho, submit call hoga

  

  return (
    <>
  

      <form className=" h-[3.5rem] flex gap-2  mb-[1rem]" onSubmit={handleSubmit(onSubmitDesktop)} >
        <div className="h-full w-[75%] md:w-[75%] lg:w-[37%] flex items-center border border-gray-200 rounded-lg bg-white">
          <Search className="absolute ml-2" size={22} color="#D1D2D4" />
          <input
            type="text"
            // value={bothSearch}
            value={bothSearch}
         onChange={(e) => {
    setBothSearch(e.target.value)
    setValue("search", e.target.value) // react-hook-form ko bhi update karo
  }}
            className="w-[100%] pl-10 pr-4 h-full bg-transparent border-none text-greenCustom font-bold text-[1rem] focus:outline-none"
            placeholder="Community or building"
          />
        </div>

        {/* filters desktop */}
        <div className="hidden md:hidden lg:flex h-full w-[55%]  gap-2">
           <div className="field-group w-[20%]">
            <label className="block text-black font-light"></label>
            <div className="relative">
              <select
                className="w-full p-3 border border-none rounded-lg appearance-none bg-white focus:no-underline"
                {...register("type")}
              >
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="field-group w-[20%]">
            <label className="block text-black font-light"></label>
            <div className="relative">
              <select
                className="w-full p-3 border border-none rounded-lg appearance-none bg-white focus:no-underline"
                {...register("minPrice")}
              >
                <option value="">Min Price</option>
                <option value="50000">50,000</option>
                <option value="100000">100,000</option>
                <option value="200000">200,000</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="field-group w-[20%]">
            <label className="block text-black font-light "></label>
            <div className="relative">
              <select
                className="w-full p-3 border border-none rounded-lg appearance-none bg-white "
                {...register("maxPrice")}
              >
                <option value="">Max Price</option>
                <option value="50000">50,000</option>
                <option value="100000">100,000</option>
                <option value="200000">200,000</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="field-group w-[20%]">
            <label className="block text-black font-light "></label>
            <div className="relative">
              <select
                className="w-full p-3 border border-none rounded-lg appearance-none bg-white "
                {...register("bedrooms")}
              >
                <option value="">Bedrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3+">3+</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="field-group w-[20%]">
            <label className="block text-black font-light "></label>
            <div className="relative">
              <select
                className="w-full p-3 border border-none rounded-lg appearance-none bg-white "
                {...register("bathroom")}
              >
                <option value="">Bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3+">3+</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        

        </div>

          <div className="flex items-center justify-center border border-[#3C7460]  rounded-lg bg-greenCustom w-[25%] lg:w-[8%] px-2 cursor-pointer text-white">
          <input className="text-white" type="submit" />
        </div>

        
      </form>
      
      <div className='flex md:flex lg:hidden'>
        <PropetiesPageSearchBoxMobile bothSearch={bothSearch} setBothSearch={setBothSearch}/>
      </div>
      
</>
  );
}

export default PropetiesPageSearchBox;
