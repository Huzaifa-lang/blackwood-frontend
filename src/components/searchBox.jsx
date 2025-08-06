// import React from 'react'
// import { useState } from 'react';
// import FilterDropdown from './filterDropdown.jsx';

// function SearchBox() {
//   const [showFilters, setShowFilters] = useState(false);
//   const [activeTab, setActiveTab] = useState('Buy');

//   const tabs = ['Buy', 'Rent', ];

//   return (
//     <div className="mt-10 relative">
//       {/* Tab buttons */}
//       <div className="flex  items-center justify-center  gap-2">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`flex items-center justify-center md:px-12 px-4 h-11 w-[40%] rounded-t-md  transition-all ${
//               activeTab === tab
//                 ? 'bg-greenCustom text-white'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           >
//             <span>{tab}</span>
//           </button>
//         ))}
//       </div>

//       {/* Search section */}
//       <div className="flex bg-white p-4  rounded-tl-none">
//         <form className="flex flex-1" autoComplete="off">
//           <div className="relative flex-1 ">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 16 16" fill="none">
//                 <path d="M14 14L10.0001 10M11.3333 6.6667C11.3333 9.24403 9.244 11.3334 6.66667 11.3334C4.08934 11.3334 2 9.24403 2 6.6667C2 4.08937 4.08934 2.00003 6.66667 2.00003C9.244 2.00003 11.3333 4.08937 11.3333 6.6667Z" stroke="#353A3F" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </div>
//             <input
//               type="text"
//               name="search"
//               className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:greenCustom focus:border-transparent"
//               placeholder="Community or building"
//             />
//           </div>
//         </form>

//         {/* Filter button */}
//         <button 
//           onClick={() => setShowFilters(!showFilters)}
//           className={`ml-3 px-4 py-3 h-full border rounded-lg text-gray-700  flex items-center ${
//             showFilters 
//               ? 'bg-green-100 border-blue-500' 
//               : 'border-gray-200 hover:bg-gray-100'
//           }`}
//         >
//           Filters
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             className={`h-4 w-4 text-gray-500 ml-2 transition-transform ${
//               showFilters ? 'rotate-180' : ''
//             }`}
//             viewBox="0 0 16 16" 
//             fill="none"
//           >
//             <path d="M4 6.00003L8 10L12 6.00003" stroke="#353A3F" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>

//         {/* Search button */}
//         <button className="ml-3 flex items-center justify-center bg-greenCustom text-white border rounded-lg  w-14 hover:bg-black transition-colors">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 16 16" fill="none">
//             <path d="M14 14L10.0001 10M11.3333 6.6667C11.3333 9.24403 9.244 11.3334 6.66667 11.3334C4.08934 11.3334 2 9.24403 2 6.6667C2 4.08937 4.08934 2.00003 6.66667 2.00003C9.244 2.00003 11.3333 4.08937 11.3333 6.6667Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//       </div>

//       {/* Filter dropdown */}
//       <FilterDropdown isOpen={showFilters} />
//     </div>
//   )
// }

// export default SearchBox


import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import FilterDropdown from './filterDropdown.jsx';
import { useNavigate } from 'react-router';
import { useLocation } from '../context/LocationContext.jsx';
import { Search, ChevronDown ,  } from 'lucide-react';


function SearchBox() {
  const {location} = useLocation()
  const navigate = useNavigate()
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('Buy');

  const { register, handleSubmit } = useForm();

  const tabs = ['Buy', 'Rent'];

  const onSubmit = (data) => {
    const formData = {
      ...data,
    };


    const filterData = Object.fromEntries(Object.entries(formData).filter(([_, value]) => value != '') )
    const params = new URLSearchParams(filterData).toString();
    
    try {
          navigate(`/properties-list/${location}/${activeTab.toLocaleLowerCase()}?${params}` )
      
    } catch (error) {
      
    }
  };

  return (
    <div className="mt-10 relative">
      {/* Tab buttons */}
      <div className="flex items-center justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex  items-center justify-center md:px-12 px-4 h-11 w-[40%] rounded-t-md transition-all ${
              activeTab === tab
                ? 'bg-greenCustom text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <span>{tab}</span>
          </button>
        ))}
      </div>

      {/* Search section */}
      <div className="flex bg-white p-4 rounded-tl-none">
        <form
          className="flex flex-1"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Search input */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                  <Search color='#A5A7AB' size={18} />

            </div>
            <input
              type="text"
              {...register('search')}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:greenCustom focus:border-transparent"
              placeholder="Community or building"
            />
          </div>

          {/* Filter button */}
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={`ml-3 hidden lg:flex px-4 py-3 h-full border rounded-lg text-gray-700 items-center ${
              showFilters
                ? 'bg-green-100 border-blue-500'
                : 'border-gray-200 hover:bg-gray-100'
            }`}
          >
            Filters
           
            <ChevronDown  color='#A5A7AB' size={18} className={`h-4 w-4 text-gray-500 ml-2 transition-transform ${
                showFilters ? 'rotate-180' : ''
              }`} />

          </button>

          {/* Search button */}
          <button
            type="submit"
            className="ml-3 flex items-center justify-center bg-greenCustom text-white border rounded-lg w-14"
          >
              <Search color='#F2F0EC' size={18} />

            
          </button>
        </form>
      </div>

      {/* Filter dropdown */}
      <FilterDropdown isOpen={showFilters} register={register} />
    </div>
  );
}

export default SearchBox;
