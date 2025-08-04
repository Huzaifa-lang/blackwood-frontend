import React from "react";

function SkeletonFeaturedProperties() {
  return (
    <div className="featuredProperties-container mt-[40px] lg:mt-[60px]">
      <div className="container">
        {/* Heading skeleton */}
        <div className="flex flex-col items-center mb-6">
          <div className="h-4 bg-gray-300 rounded w-32 mb-3 animate-pulse"></div>
          <div className="h-10 bg-gray-300 rounded w-[20rem] animate-pulse"></div>
        </div>

        {/* Buttons and nav skeleton */}
        <div className="flex items-start justify-between mb-6">
          {/* Toggle buttons */}
          <div className="flex items-center space-x-12 justify-center lg:justify-start mt-[1rem] mb-[1rem] w-full">
            <div className="relative flex w-[200px] h-8 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>

        
        </div>

        {/* Skeleton cards */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="border-[2px] border-[#F0F0F0] rounded-lg overflow-hidden animate-pulse"
            >
              {/* Image placeholder */}
              <div className="bg-gray-300 h-48 w-full"></div>

              {/* Text placeholders */}
              <div className="p-4 space-y-3">
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>

                {/* Icons placeholder */}
                <div className="flex gap-4 mt-3">
                  <div className="h-4 bg-gray-200 rounded w-10"></div>
                  <div className="h-4 bg-gray-200 rounded w-10"></div>
                  <div className="h-4 bg-gray-200 rounded w-10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:hidden grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div
              className="border-[2px] border-[#F0F0F0] rounded-lg overflow-hidden animate-pulse"
            >
              {/* Image placeholder */}
              <div className="bg-gray-300 h-48 w-full"></div>

              {/* Text placeholders */}
              <div className="p-4 space-y-3">
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>

                {/* Icons placeholder */}
                <div className="flex gap-4 mt-3">
                  <div className="h-4 bg-gray-200 rounded w-10"></div>
                  <div className="h-4 bg-gray-200 rounded w-10"></div>
                  <div className="h-4 bg-gray-200 rounded w-10"></div>
                </div>
              </div>
            </div>

        </div>

        
      </div>
    </div>
  );
}

export default SkeletonFeaturedProperties;
