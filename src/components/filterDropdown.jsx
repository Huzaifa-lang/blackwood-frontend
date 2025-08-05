// import React from 'react'


// function FilterDropdown({ isOpen }) {
  
//     if (!isOpen) return null;

//   return (
//     <div className="absolute top-[calc(100%+10px)] left-0 w-[calc(100%)] bg-white  shadow-xl p-4 z-20">
//       {/* Filter grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Minimum Price */}
//         <div className="field-group">
//           <label className="block text-black font-light mb-2">Minimum Price</label>
//           <div className="relative">
//             <select className="w-full p-3 border border-none rounded-lg appearance-none bg-white">
//               <option value="">Price Min</option>
//               <option value="50000">$50,000</option>
//               <option value="100000">$100,000</option>
//               <option value="200000">$200,000</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
//                 <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Maximum Price */}
//         <div className="field-group">
//           <label className="block text-black font-light  mb-2">Maximum Price</label>
//           <div className="relative">
//             <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white">
//               <option value="">Price Max</option>
//               <option value="500000">$500,000</option>
//               <option value="1000000">$1,000,000</option>
//               <option value="2000000">$2,000,000</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
//                 <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Property Type */}
//         <div className="field-group">
//           <label className="block text-black font-light mb-2">Property Type</label>
//           <div className="relative">
//             <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white">
//               <option value="">Property Type</option>
//               <option value="house">House</option>
//               <option value="apartment">Apartment</option>
//               <option value="villa">Villa</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
//                 <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Bedrooms */}
//         <div className="field-group">
//           <label className="block text-black font-light mb-2">Bedrooms</label>
//           <div className="relative">
//             <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white">
//               <option value="">Beds</option>
//               <option value="1">1+</option>
//               <option value="2">2+</option>
//               <option value="3">3+</option>
//               <option value="4">4+</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
//                 <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search button */}
//       <div className="flex justify-end mt-4">
//         <button className="bg-greenCustom hover:bg-black text-white font-medium py-2 px-6 rounded-full transition-colors">
//           Search
//         </button>
//       </div>
//     </div>
//   );
  
// }

// export default FilterDropdown


import React from 'react';

function FilterDropdown({ isOpen, register }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[calc(100%+10px)] left-0 w-[calc(100%)] bg-white shadow-xl p-4 z-20">
      {/* Filter grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Minimum Price */}
        <div className="field-group">
          <label className="block text-black font-light mb-2">Minimum Price</label>
          <div className="relative">
            <select
              {...register('minPrice')}
              className="w-full p-3 border border-none rounded-lg appearance-none bg-white"
            >
              <option value="">Price Min</option>
              <option value="50000">50,000</option>
              <option value="100000">100,000</option>
              <option value="200000">200,000</option>
            </select>
            {/* Custom Arrow using your SVG */}
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
    <img src="down-arrow-svgrepo-com.svg" alt="arrow" className="w-3 h-3" />
  </div>
          </div>
        </div>

        {/* Maximum Price */}
        <div className="field-group">
          <label className="block text-black font-light mb-2">Maximum Price</label>
          <div className="relative">
            <select
              {...register('maxPrice')}
              className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white"
            >
              <option value="">Price Max</option>
              <option value="500000">500,000</option>
              <option value="1000000">1,000,000</option>
              <option value="2000000">2,000,000</option>
            </select>
                {/* Custom Arrow using your SVG */}
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
    <img src="down-arrow-svgrepo-com.svg" alt="arrow" className="w-3 h-3" />
  </div>
          </div>
        </div>

        {/* Property Type */}
        <div className="field-group">
          <label className="block text-black font-light mb-2">Bedrooms</label>
          <div className="relative">
            <select
              {...register('badrooms')}
              className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white"
            >
              <option value="">Bedrs</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
                {/* Custom Arrow using your SVG */}
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
    <img src="down-arrow-svgrepo-com.svg" alt="arrow" className="w-3 h-3" />
  </div>
          </div>
        </div>

        {/* Bedrooms */}
        <div className="field-group">
          <label className="block text-black font-light mb-2">Badrooms</label>
          <div className="relative">
            <select
              {...register('bedrooms')}
              className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white"
            >
              <option value="">Badrs</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
                {/* Custom Arrow using your SVG */}
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
    <img src="down-arrow-svgrepo-com.svg" alt="arrow" className="w-3 h-3" />
  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterDropdown;
