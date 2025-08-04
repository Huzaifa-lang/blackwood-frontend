import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import SingleProperty from '../components/singleProperty.jsx';
import apiClient from './clientApi.js'

function FeaturedPropertiesDashboard() {

    const [country, setCountry] = useState('pakistan')
      const [displayProperties, setDisplayProperties] = useState([])
    
    const navigate = useNavigate()

    
     useEffect(() => {
        navigate(`/dashboard?country=${country}`);

      const fetchdata = async()=> {
           try {
        const res = await apiClient.get(`http://localhost:5000/dashboard/featuredProperties?country=${country}`)
        console.log(res.data)
        const extractedProperties = res.data.map(item => ({
  _id: item._id,
  ...item.property
}));


        setDisplayProperties(extractedProperties)

        
      } catch (error) {

        console.log("Error is searchBox", error)
        
      }
      }
     

      fetchdata()
     },[country])
      
  return (
    <div>
        <div className="flex gap-4 mb-4  p-2 rounded-sm  w-[100%]   mt-4">
        <button
          className={`w-[7rem] h-[3rem] rounded-lg ${
            country === "pakistan" ? "bg-[#0D8755] text-white" : "bg-[#E3E3E3] text-black"
          } text-white`}
          onClick={() => setCountry("pakistan")}
        >
          Pakistan
        </button>
        <button
          className={`w-[7rem] h-[3rem] rounded-lg ${
            country === "dubai" ? "bg-[#0D8755] text-white" : "bg-[#E3E3E3] text-black"
          } `}
          onClick={() => setCountry("dubai")}
        >
          Dubai
        </button>
      </div>
       <div className="flex flex-col items-start mt-11  gap-11">
    {displayProperties.length > 0  ? ( displayProperties.map((item) => (
    <SingleProperty key={item.id} item={item} />
     ))) :  (
      <div className='bg-greenCustom w-full p-4 text-[1rem] '><span className='uppercase text-white font-bold'>No property FOUND</span></div>
  ) 
    }
        
        </div>
    </div>
  )
}

export default FeaturedPropertiesDashboard