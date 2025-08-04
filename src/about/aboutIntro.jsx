import React from 'react'

function AboutIntro(props) {
    const {title , textPara, order, columnPosition} = props
  return (
    <div className=''>
        <div className={`container w-full  flex ${columnPosition} lg:flex-row h-full items-center justify-center p-10 lg:gap-12`}>
            <div className='w-[100%] lg:w-[50%] order-2'>
                <img src="Copy_of_DSC_07300_c35b50216f.png" alt="" />
            </div>
            <div className={`w-[100%] lg:w-[50%] ${order}`}>
                <h5 className='text-[1.2rem] lg:text-[1.8rem] text-greenCustom font-bold'>{title}</h5>
                <p className='text-[0.85rem] lg:text-[0.95rem] text-black whitespace-pre-line'>{textPara}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutIntro