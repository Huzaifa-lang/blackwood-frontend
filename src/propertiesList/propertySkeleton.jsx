export default function PropertySkeleton() {
  return (
    <div className="animate-pulse">
      {/* Top Slider Section */}
      <div className="h-[calc(100vh-100px)] flex gap-2 mb-[60px] mt-[100px] relative">
        {/* Main Slider */}
        <div className="w-full lg:w-[60%] h-full bg-gray-300 rounded-lg"></div>

        {/* Thumbnail Slider */}
        <div className="hidden lg:flex w-[40%] h-full flex-col gap-2">
          <div className="w-full h-[49%] bg-gray-300 rounded-lg"></div>
          <div className="w-full h-[49%] bg-gray-300 rounded-lg"></div>
        </div>

        {/* View All Button */}
        <div className="hidden lg:flex absolute bottom-[2rem] right-[3rem]">
          <div className="h-10 w-32 bg-gray-400 rounded"></div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container">
        <div className="flex flex-row lg:flex-col gap-11 lg:gap-2">
          {/* Left Column (Details) */}
          <div className="w-full lg:w-[70%]">
            <div className="flex flex-col gap-4 pr-4 pl-4 mb-4">
              {/* Price */}
              <div className="h-8 w-48 bg-gray-300 rounded"></div>

              {/* Icons */}
              <div className="flex gap-8 mt-2">
                <div className="h-6 w-20 bg-gray-300 rounded"></div>
                <div className="h-6 w-20 bg-gray-300 rounded"></div>
                <div className="h-6 w-20 bg-gray-300 rounded"></div>
              </div>

              {/* Location */}
              <div className="h-5 w-64 bg-gray-300 rounded"></div>

              {/* Subtitle */}
              <div className="h-4 w-80 bg-gray-200 rounded"></div>
            </div>

            {/* Description */}
            <div className="border-t ml-4 pt-4 w-full lg:w-[80%] flex flex-col gap-3">
              <div className="h-4 w-40 bg-gray-300 rounded"></div>
              <div className="h-24 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="w-full lg:w-[30%]">
            <div className="w-full min-h-[35rem] bg-gray-100 p-8 flex flex-col gap-4 rounded-lg">
              {/* Image */}
              <div className="w-full h-64 bg-gray-300 rounded-lg"></div>

              {/* Name */}
              <div className="h-6 w-32 bg-gray-300 rounded mx-auto"></div>
              <div className="h-4 w-16 bg-gray-300 rounded mx-auto"></div>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <div className="w-full h-10 bg-gray-300 rounded"></div>
                <div className="w-full h-10 bg-gray-300 rounded"></div>
              </div>

              {/* Social */}
              <div className="flex flex-col items-center gap-2 mt-3">
                <div className="h-5 w-32 bg-gray-300 rounded"></div>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 bg-gray-300 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
