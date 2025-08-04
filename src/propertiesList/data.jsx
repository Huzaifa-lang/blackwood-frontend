  <form className=" h-[3.5rem] flex gap-2  mb-[2rem]" onSubmit={handleSubmit}>
          <div className="h-full w-[75%] lg:w-[48%] flex items-center border border-gray-200 rounded-lg bg-white">
            <Search className="absolute ml-2" size={22} color="#D1D2D4" />
            <input
              type="text"
              name="search"
              id="search"
              className="w-[100%] pl-10 pr-4 h-full bg-transparent border-none text-gray-700 focus:outline-none"
              placeholder="Community or building"
            />
          </div>

          {/* filters desktop */}
          <div className="hidden h-full  w-[52%] lg:flex gap-2">
           <div className="field-group w-[25%]">
          <label className="block text-black font-light " htmlFor="minPrie"></label>
          <div className="relative">
            <select className="w-full p-3 border border-none rounded-lg appearance-none bg-white " id="minPrice" name="minPrice">
              <option value="">Min Price</option>
              <option value="50000">$50,000</option>
              <option value="100000">$100,000</option>
              <option value="200000">$200,000</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          </div>
          
           <div className="field-group w-[25%]">
          <label className="block text-black font-light " htmlFor="maxPrice" ></label>
          <div className="relative">
            <select className="w-full p-3 border border-none rounded-lg appearance-none bg-white " id="maxPrice" name='maxPrice' >
              <option value="">Max Price</option>
              <option value="50000">$50,000</option>
              <option value="100000">$100,000</option>
              <option value="200000">$200,000</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
          
           <div className="field-group w-[25%]">
          <label className="block text-black font-light " htmlFor="bedrooms" ></label>
          <div className="relative">
            <select className="w-full p-3 border border-none rounded-lg appearance-none bg-white " id="bedrooms" name='bedrooms'>
              <option value="">Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3+">3+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
          
           <div className="field-group w-[25%]">
          <label className="block text-black font-light " htmlFor="bathrooms" ></label>
          <div className="relative">
            <select className="w-full p-3 border border-none rounded-lg appearance-none bg-white " id="bathrooms" name='bathrooms'>
              <option value="">Bathroom</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3+">3+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        </div>


          
          <div className="flex items-center justify-center border border-[#3C7460]  rounded-lg bg-greenCustom w-[25%] lg:w-[8%] px-2 cursor-pointer text-white">
            <button className="text-white" type='submit'>Find</button>
          </div>

          
      {/* Bootstrap Offcanvas for mobile full-screen menu */}
  <Offcanvas
    show={show}
    onHide={handleClose}
    placement="start"
    className="w-full"
    backdrop="true"
  >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title className="text-lg" >
        Filter
      </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body
      className="flex flex-col items-center justify-center space-y-4"
      
    >
                {/* filters desktop */}
          <div className=" h-full  w-[100%] flex flex-col gap-4">

            <div className="h-[3.5rem] w-[100%]  flex items-center border border-gray-200 rounded-sm bg-white">
            <Search className="absolute ml-2" size={22} color="#D1D2D4" />
            <input
              type="text"
              name="searchMobile"
              className="w-[100%] pl-10 pr-4 h-full bg-transparent border-none text-gray-700 focus:outline-none"
              placeholder="Community or building"
            />
          </div>
           <div className="field-group w-[100%]">
          <label className="block text-black font-light "></label>
          <div className="relative">
            <select className="w-full p-3 border border-none rounded-sm appearance-none bg-white ">
              <option value="">Min Price</option>
              <option value="50000">$50,000</option>
              <option value="100000">$100,000</option>
              <option value="200000">$200,000</option>  
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          </div>
          
           <div className="field-group w-[100%]">
          <label className="block text-black font-light "></label>
          <div className="relative">
            <select className="w-full p-3 border border-none rounded-sm appearance-none bg-white ">
              <option value="">Max Price</option>
              <option value="50000">$50,000</option>
              <option value="100000">$100,000</option>
              <option value="200000">$200,000</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
          
           <div className="field-group w-[100%]">
          <label className="block text-black font-light "></label>
          <div className="relative">
            <select className="w-full p-3 border border-none rounded-sm appearance-none bg-white ">
              <option value="">Bedrooms</option>
              <option value="50000">1</option>
              <option value="100000">2</option>
              <option value="200000">3+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
          
           <div className="field-group w-[100%]">
          <label className="block text-black font-light "></label>
          <div className="relative">
            <select className="w-full p-3 border border-none rounded-sm appearance-none bg-white ">
              <option value="">Bathroom</option>
              <option value="50000">1</option>
              <option value="100000">2</option>
              <option value="200000">3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

          <div className="flex items-center justify-center border-none border-[#3C7460] h-[3.5rem]  rounded-sm bg-greenCustom w-[100%] px-2 cursor-pointer text-white">
            <span className="text-white">Find</span>
          </div>
        </div>

      
    </Offcanvas.Body>
  </Offcanvas>

        </form>

        <div className="flex h-[3.5rem]   w-[25%] lg:hidden gap-2 mt-2 cursor-pointer">
             <div className="h-full w-full flex items-center  border justify-center gap-2  border-gray-200 rounded-lg bg-white" onClick={handleShow}>
                <SlidersHorizontal size={18}/>
              <span>Filter</span>
             </div>
        </div>