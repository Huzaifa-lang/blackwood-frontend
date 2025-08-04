import React from 'react'

function AboutMission() {
  return (
    <div className='bg-[#F2F0EC] py-16'>
        <div className='container w-full h-full'>
            <div className='pb-4 border-b-2  border-gray-300 mb-[2rem]'>
                                <h5 className='text-[1.2rem] lg:text-[1.8rem] text-greenCustom font-bold'>Our Mission</h5>
                                <p className='w-[80%] lg:w-[60%] text-[1.4rem] font-medium '>To make the property journey easier, clearer, and more rewarding — for everyone. Whether you’re a first-time buyer, a seasoned investor, or a landlord looking for support, we’re here to guide you with knowledge, care, and confidence.
</p>

            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Card 1 */}
  <div className="flex flex-col gap-2">
    <span className="text-[1.2rem] text-greenCustom font-bold">People First</span>
    <span className="text-[0.94rem] font-medium">
      We build relationships before we close deals.
    </span>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col gap-2">
    <span className="text-[1.2rem] text-greenCustom font-bold">Expert Guidance</span>
    <span className="text-[0.94rem] font-medium">
      Our team gives honest advice to help you make the best decision.
    </span>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col gap-2">
    <span className="text-[1.2rem] text-greenCustom font-bold">Transparency</span>
    <span className="text-[0.94rem] font-medium">
      Clear communication and zero hidden surprises.
    </span>
  </div>

  {/* Card 4 */}
  <div className="flex flex-col gap-2">
    <span className="text-[1.2rem] text-greenCustom font-bold">Trust & Care</span>
    <span className="text-[0.94rem] font-medium">
      We prioritize your needs to build long-term trust.
    </span>
  </div>
</div>

        </div>
    </div>
  )
}

export default AboutMission