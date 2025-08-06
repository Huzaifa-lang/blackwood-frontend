import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";

import { Search, SlidersHorizontal, X } from "lucide-react";

import { Offcanvas, Nav } from "react-bootstrap";
import { useNavigate, useParams , useLocation as useRouteLoaction} from 'react-router';
import { useLocation } from '../context/LocationContext';


function PropetiesPageSearchBoxMobile(porps) {
    const ReactLoaction = useRouteLoaction()
  const {setBothSearch, bothSearch} = porps
  const {location} = useLocation
    const { type } = useParams(); 
  const {
      register,
      handleSubmit,
      watch,
      setValue,
      formState: { errors },
    } = useForm();

    const navigate = useNavigate();
  const query = ReactLoaction.search.replace("?", "").trim();

const queryFilter = query
  ? query.split("&").map(param => param) // keep as strings like "key=value"
  : [];

const [filterBtns, setFilterBtns] = useState(queryFilter.length > 0 ? queryFilter : null);
     const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      useEffect(()=> {
        console.log(filterBtns)
      },[filterBtns])
 
  const onSubmitMobile = (data) => {
  const filteredData = Object.fromEntries(
  Object.entries(data)
    .filter(([key, value]) => key !== 'type' && value !== '') // Remove 'type' and empty values
    .map(([key, value]) => [key === 'searchMobile' ? 'search' : key, value]) // Rename key
);
  
    const {type } = data
    const query  = new URLSearchParams(filteredData).toString()
  console.log(query)
    navigate(`/properties-list/${location}/${type}${query != '' ? `?${query}` : ''}` )
    setFilterBtns(query !== '' ? query.split("&") : null)
    handleClose()

    
  };


    const handleFiltersBtns = (key) => {
    if(key === 'searchMobile') {
    setBothSearch('');        // ✅ Clear local input state
    setValue('searchMobile', '');   // ✅ Clear react-hook-form value
    handleSubmit(onSubmitMobile)()

    } else {

      setValue(key, '')
      handleSubmit(onSubmitMobile)()

    }
  }




  return (
    <div className='w-full'>

        <div className="flex lg:hidden flex-wrap gap-2">
                <div  className="min-h-4 min-w-4 flex items-center gap-3 bg-[#F2F0EC] p-2">
              <span>Looking to: <span className="font-bold">{type.charAt(0).toUpperCase() + type.slice(1)}</span></span>
             </div>
             { filterBtns?.map((item, index)=> ( 
              <div  key={`${item}-${index}`} className="min-h-4 min-w-4 flex items-center gap-3 bg-[#F2F0EC] p-2">
              <span>{item.split('=')[0].toLowerCase()}:<span className="font-bold">{item.split('=')[1]}</span></span>
              <span className="cursor-pointer" onClick={()=> handleFiltersBtns(item.split('=')[0])}> <X size={14}/></span>
             </div>
             ))}
            </div>

        {/* filter mobile btn */}
      <div className="flex h-[3.5rem]   w-[25%] gap-2 mt-2 cursor-pointer">
        <div
          className="h-full w-full flex items-center  border justify-center gap-2  border-gray-200 rounded-lg bg-white"
          onClick={handleShow}
        >
          <SlidersHorizontal size={18} />
          <span>Filter</span>
        </div>
      </div>
      {/* mobile form */}
      
        {/* Bootstrap Offcanvas for mobile full-screen menu */}
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="start"
          className="w-full"
          backdrop="true"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="text-lg">Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="flex flex-col items-start justify-start space-y-4">
            {/* filters desktop */}
            <form onSubmit={handleSubmit(onSubmitMobile)} className='w-full'>
            <div className=" h-full  w-[100%] flex flex-col gap-4">
              <div className="h-[3.5rem] w-[100%]  flex items-center border border-gray-200 rounded-sm bg-white">
                <Search className="absolute ml-2" size={22} color="#D1D2D4" />
                <input
                  type="text"
                 value={bothSearch}
         onChange={(e) => {
    setBothSearch(e.target.value)
    setValue("searchMobile", e.target.value) // react-hook-form ko bhi update karo
  }}
                  
                  className="w-[100%] pl-10 pr-4 h-full bg-transparent border-none text-gray-700 focus:outline-none"
                  placeholder="Community or building"
                />
              </div>

              <div className="field-group w-[100%]">
                <label className="block text-black font-light "></label>
                <div className="relative">
                  <select
                    className="w-full p-3 border border-none rounded-sm appearance-none bg-white "
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

              <div className="field-group w-[100%]">
                <label className="block text-black font-light "></label>
                <div className="relative">
                  <select
                    className="w-full p-3 border border-none rounded-sm appearance-none bg-white "
                    {...register("minPrice")}
                  >
                    <option value="">Min Price</option>
                    <option value="50000">$50,000</option>
                    <option value="100000">$100,000</option>
                    <option value="200000">$200,000</option>
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

              <div className="field-group w-[100%]">
                <label className="block text-black font-light "></label>
                <div className="relative">
                  <select className="w-full p-3 border border-none rounded-sm appearance-none bg-white " {...register("maxPrice")}>
                    <option value="">Max Price</option>
                    <option value="50000">$50,000</option>
                    <option value="100000">$100,000</option>
                    <option value="200000">$200,000</option>
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

              <div className="field-group w-[100%]">
                <label className="block text-black font-light "></label>
                <div className="relative">
                  <select className="w-full p-3 border border-none rounded-sm appearance-none bg-white " {...register("bedrooms")}>
                    <option value="">Bedrooms</option>
                    <option value="50000">1</option>
                    <option value="100000">2</option>
                    <option value="200000">3+</option>
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

              <div className="field-group w-[100%]">
                <label className="block text-black font-light "></label>
                <div className="relative">
                  <select className="w-full p-3 border border-none rounded-sm appearance-none bg-white " {...register("bathrooms")}>
                    <option value="">Bathroom</option>
                    <option value="50000">1</option>
                    <option value="100000">2</option>
                    <option value="200000">3</option>
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

              <div className="flex items-center justify-center border-none border-[#3C7460] h-[3.5rem]  rounded-sm bg-greenCustom w-[100%] px-2 cursor-pointer text-white">
                <input className="text-white" type='submit'/></div>
            </div>
            </form>
          </Offcanvas.Body>
        </Offcanvas>
      
    </div>
  )
}

export default PropetiesPageSearchBoxMobile