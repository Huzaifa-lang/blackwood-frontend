import React, { useEffect, useState } from "react";
import { Search, SlidersHorizontal   } from "lucide-react";
import SingleProperty from "../components/singleProperty.jsx";
import { Offcanvas, Nav } from 'react-bootstrap';
import { useNavigate, useParams ,useLocation  } from "react-router";
import { useLocation as useRouteLoaction} from "../context/LocationContext.jsx";
import axios from "axios";
import SkeletonSingleProperty from "../components/SkeletonSingleProperty.jsx";
import PropetiesPageSearchBox from "../components/propetiesPageSearchBox.jsx";

const Properties = [
  {
    id: '1',
    name: 'W Residences - JLT buy',
    location: 'Jumeirah Lake Towers, Dubai',
    images: ['https://miraestate.ae/uploads/1728901999.0506663.jpg', 'https://miraestate.ae/uploads/1728901999.0506663.jpg'],
    details: {
      size: '1,800',
      sizeType: 'Sq Ft',
      bedrooms: '3',
      bathrooms: '3',
      discription: 'lorem123...'
    }
  },
  {
    id: '2',
    name: 'W Residences - JLT buy',
    location: 'Jumeirah Lake Towers, Dubai',
    images: ['https://miraestate.ae/uploads/1728901999.0506663.jpg', 'https://miraestate.ae/uploads/1728901999.0506663.jpg'],
    details: {
      size: '1,800',
      sizeType: 'Sq Ft',
      bedrooms: '3',
      bathrooms: '3',
      discription: 'lorem123...'
    }
  },
  {
    id: '3',
    name: 'W Residences - JLT buy',
    location: 'Jumeirah Lake Towers, Dubai',
    images: ['https://miraestate.ae/uploads/1728901999.0506663.jpg', 'https://miraestate.ae/uploads/1728901999.0506663.jpg'],
    details: {
      size: '1,800',
      sizeType: 'Sq Ft',
      bedrooms: '3',
      bathrooms: '3',
      discription: 'lorem123...'
    }
  },
  {
    id: '4',
    name: 'W Residences - JLT buy',
    location: 'Jumeirah Lake Towers, Dubai',
    images: ['https://miraestate.ae/uploads/1728901999.0506663.jpg', 'https://miraestate.ae/uploads/1728901999.0506663.jpg'],
    details: {
      size: '1,800',
      sizeType: 'Sq Ft',
      bedrooms: '3',
      bathrooms: '3',
      discription: 'lorem123...'
    }
  },
  {
    id: '5',
    name: 'W Residences - JLT buy',
    location: 'Jumeirah Lake Towers, Dubai',
    images: ['https://miraestate.ae/uploads/1728901999.0506663.jpg', 'https://miraestate.ae/uploads/1728901999.0506663.jpg'],
    details: {
      size: '1,800',
      sizeType: 'Sq Ft',
      bedrooms: '3',
      bathrooms: '3',
      discription: 'lorem123...'
    }
  },
  {
    id: '6',
    name: 'W Residences - JLT buy',
    location: 'Jumeirah Lake Towers, Dubai',
    images: ['https://miraestate.ae/uploads/1728901999.0506663.jpg', 'https://miraestate.ae/uploads/1728901999.0506663.jpg'],
    details: {
      size: '1,800',
      sizeType: 'Sq Ft',
      bedrooms: '3',
      bathrooms: '3',
      discription: 'lorem123...'
    }
  },
  {
    id: '7',
    name: 'W Residences - JLT buy',
    location: 'Jumeirah Lake Towers, Dubai',
    images: ['https://miraestate.ae/uploads/1728901999.0506663.jpg', 'https://miraestate.ae/uploads/1728901999.0506663.jpg'],
    details: {
      size: '1,800',
      sizeType: 'Sq Ft',
      bedrooms: '3',
      bathrooms: '3',
      discription: 'lorem123...'
    }
  },
  {
    id: '8',
    name: 'W Residences - JLT buy',
    location: 'Jumeirah Lake Towers, Dubai',
    images: ['https://miraestate.ae/uploads/1728901999.0506663.jpg', 'https://miraestate.ae/uploads/1728901999.0506663.jpg'],
    details: {
      size: '1,800',
      sizeType: 'Sq Ft',
      bedrooms: '3',
      bathrooms: '3',
      discription: 'lorem123...'
    }
  },
]


function AllProperties() {
  const locationReact = useLocation();
    const params = new URLSearchParams(locationReact.search);
    const {type} = useParams()
    const navigate = useNavigate();
    const [formsendRender, setFormsendRender] = useState(null)

    const {location} = useRouteLoaction()
    const [getAllData, setGetAllData] = useState(null)
    const [displayMessage, setDisplayMessage] = useState(null)

    useEffect( ()=> { 

      setGetAllData(null)
      const fetchData = async( ) => {
                      // console.log(`http://localhost:5000/properties-list/${location}/${type}${params.toString() != '' ? `?${params.toString()}` : '' }`)

        try {
                  console.log("sending req to backend")
            const fetch = await axios.get(`https://blackwood-backend-production.up.railway.app/properties-list/${location}/${type}${params.toString() != '' ? `?${params.toString()}` : '' }`)
          setGetAllData(fetch.data.properties)
          setDisplayMessage(fetch.data.message)
        } catch (error) {
          console.error("Error fetching home data", error);
          
        }

      }

      fetchData()
    },[locationReact.search,locationReact.pathname, location])

    useEffect(()=> {

      console.log(getAllData)

    },[getAllData])

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getAllData?.slice(indexOfFirstItem, indexOfLastItem) || [];
  // const [currentItems, setCurrentItems] = useState(getAllData?.slice(indexOfFirstItem, indexOfLastItem) || [])
  const totalPages = Math.ceil(getAllData?.length / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


    const [show, setShow] = useState(false);
  
    
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);

  const [AllProperties, setAllProperties] = useState(getAllData)


  const handleSubmit = (e)=> {
        

    console.log("form")
    e.preventDefault()
   const search = e.target.elements.search.value;
  const minPrice = e.target.elements.minPrice.value;
  const maxPrice = e.target.elements.maxPrice.value;
  const bedrooms = e.target.elements.bedrooms.value;
  const bathrooms = e.target.elements.bathrooms.value;

  if (search) params.append("search", search);
  if (minPrice) params.append("minPrice", minPrice);
  if (maxPrice ) params.append("maxPrice", maxPrice);
  if (bedrooms) params.append("bedrooms", bedrooms);
  if (bathrooms) params.append("bathrooms", bathrooms);
    
  console.log(params.toString())
    navigate(
    location === 'pakistan' 
    ? `/properties-list/buy?${params.toString()}` 
    : `/dubai/properties-list/buy?${params.toString()}`);


  }

  return (
    <div>
      <div className="w-full container mt-11 ">
        <PropetiesPageSearchBox/>
      

        {/* all properties */}
      {displayMessage && displayMessage !== 'properties found' && (
  <div className="min-h-12 w-full bg-red-50 border border-red-400 text-red-700 rounded-md p-3 flex items-center shadow-sm">
    <span className="font-medium">{displayMessage}</span>
  </div>
)}

        <div className="flex flex-col items-start mt-11  gap-11">
    {getAllData != null ? (
      currentItems.map((item) => (
    <SingleProperty key={item._id} item={item} />
     ))
    ) :  (
      [...Array(3)].map((_, index) => (
  <SkeletonSingleProperty key={index} />
))
    )
    }
        
        </div>

        <div className="flex items-center justify-center gap-4 w-full mt-11">
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

      </div>

    
    </div>
  );
}

export default AllProperties;
