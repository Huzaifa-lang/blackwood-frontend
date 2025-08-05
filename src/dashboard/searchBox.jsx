import React, { useEffect, useRef, useState } from "react";
import SingleProperty from '../components/singleProperty.jsx'
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import axios from "axios";
import SearchBoxmobile from "./searchBoxmobile.jsx";
import apiClient from './clientApi.js'


function SearchBox(props) {
  const listTopRef = useRef();

  const {setBothSearch, bothSearch , country, setCountry} = props

  const [displayProperties, setDisplayProperties] = useState([]);
const [currentPage, setCurrentPage] = useState(1);

const itemsPerPage = 5;

// Total pages
const totalPages = Math.ceil(displayProperties.length / itemsPerPage);

// Current page slice
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = displayProperties.slice(indexOfFirstItem, indexOfLastItem);

// Page click handler
const handlePageClick = (pageNumber) => {
  setCurrentPage(pageNumber);
listTopRef.current?.scrollIntoView({
  behavior: 'smooth',
  block: 'start', // 👈 yeh top pe lane ka option
});
};


  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  
//  useEffect(()=> {
//   console.log(displayProperties)
//  },[displayProperties])
 

  useEffect(() => {
      navigate(`/dashboard?country=${country}`);

      const fetchdata = async()=> {
           try {
        const res = await apiClient.get(`https://blackwood-backend-production.up.railway.app/dashboard?country=${country}`)
        // console.log(res.data)
        setDisplayProperties(res.data)

        
      } catch (error) {

        console.log("Error is searchBox", error)
        
      }
      }
     

      fetchdata()
    
  }, [country]);

  const onSubmitDesktop = (data) => {
    const filtertedData = Object.fromEntries(
      Object.entries(data).filter(([_, value])=> value !== '')
    )
    const query  = new URLSearchParams(filtertedData).toString()
    navigate(`/dashboard?country=${country}&${query}` )


       const fetchdata = async()=> {
           try {
        const res = await axios.get(`https://blackwood-backend-production.up.railway.app/dashboard?country=${country}&${query}`)
        console.log(`/dashboard?country=${country}&${query}`)
        setDisplayProperties(res.data)

        
      } catch (error) {

        console.log("Error is searchBox", error)
        
      }
      
    }

    fetchdata()
    
  };

  return (
    <>
      <div className="flex justify-start   gap-4 mb-4  p-2 rounded-sm  w-[100%] mt-4" ref={listTopRef}>
        <button
          className={`w-[7rem] h-[3rem] rounded-lg ${
            country === "pakistan" ? "bg-[#0D8755]  text-white" : "bg-[#E3E3E3] text-black" 
          }`}
          onClick={() => setCountry("pakistan")}
        >
          Pakistan
        </button>
        <button
          className={`w-[7rem] h-[3rem] rounded-lg ${
            country === "dubai" ? "bg-[#0D8755]  text-white" : "bg-[#E3E3E3] text-black"
          } `}
          onClick={() => setCountry("dubai")}
        >
          Dubai
        </button>
      </div>
            {/* desktop form */}

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
            className="w-[100%] pl-10 pr-4 h-full bg-transparent border-none text-gray-700 focus:outline-none"
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
        <SearchBoxmobile bothSearch={bothSearch} setBothSearch={setBothSearch} country={country} setCountry={setCountry}/>
      </div>
      

{/* ************** */}

{/* All properties list */}
{
  displayProperties.length > 0 ? (
    <div className="flex flex-col items-start mt-11 gap-11">
      {currentItems && currentItems.map((item) => (
        <SingleProperty key={item._id} item={item} editOptions={true} />
      ))}
    </div>
  ) : (
    <div className="bg-greenCustom w-full p-4 text-[1rem]">
      <span className="uppercase text-white font-bold">No property FOUND</span>
    </div>
  )
}


{/* Pagination buttons */}
{
  displayProperties.length > 0 && (
    
<div className="flex items-center justify-center gap-4 w-full mt-11 mb-11">
  {/* Previous button */}
  <div
    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
    className="p-2 bg-white border border-[#686868] h-10 w-10 flex items-center justify-center rounded-[5px] cursor-pointer"
  >
    <span className="text-[15px] font-medium">{"<"}</span>
  </div>

  {/* Page numbers */}
  {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
    <div
      key={pageNumber}
      onClick={() => handlePageClick(pageNumber)}
      className={`p-2 ${
        currentPage === pageNumber ? "bg-greenCustom text-white" : "bg-white border border-[#686868]"
      } h-10 w-10 flex items-center justify-center rounded-[5px] cursor-pointer`}
    >
      <span className="text-[15px] font-medium">{pageNumber}</span>
    </div>
  ))}

  {/* Next button */}
  <div
    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
    className="p-2 bg-white border border-[#686868] h-10 w-10 flex items-center justify-center rounded-[5px] cursor-pointer"
  >
    <span className="text-[15px] font-medium">{">"}</span>
  </div>
</div>
  ) 
}

    </>
  );
}

export default SearchBox;
