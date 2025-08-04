import React from 'react'

function SkeletonSingleProperty() {
  return (
    <div className="w-full flex lg:flex-row flex-col bg-purple-50 animate-pulse">
  {/* Image skeleton */}
  <div className="w-full lg:w-[30%] h-[200px] lg:h-auto bg-gray-300"></div>

  {/* Content skeleton */}
  <div className="w-full lg:w-[70%] p-4">
    {/* Price */}
    <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>

    {/* Location */}
    <div className="flex items-center gap-2 mb-3">
      <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
      <div className="h-4 w-40 bg-gray-300 rounded"></div>
    </div>

    {/* Title */}
    <div className="h-5 w-1/2 bg-gray-300 rounded mb-4"></div>

    {/* Icons */}
    <div className="flex items-center justify-between lg:justify-start gap-11 mb-4">
      <ul className="flex flex-wrap gap-3">
        <li className="flex items-center gap-1 pr-3">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="w-16 h-3 bg-gray-300 rounded"></div>
        </li>
        <li className="flex items-center gap-1 pr-3">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="w-8 h-3 bg-gray-300 rounded"></div>
        </li>
        <li className="flex items-center gap-1">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="w-8 h-3 bg-gray-300 rounded"></div>
        </li>
      </ul>

      {/* WhatsApp button */}
      <div className="hidden lg:flex items-center justify-center bg-gray-300 rounded-full w-[4rem] h-[4rem]"></div>
    </div>

    {/* Description */}
    <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
    <div className="h-4 w-11/12 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 w-10/12 bg-gray-300 rounded mb-4"></div>

    {/* Read more link */}
    <div className="h-3 w-16 bg-gray-300 rounded"></div>
  </div>
</div>

  )
}

export default SkeletonSingleProperty