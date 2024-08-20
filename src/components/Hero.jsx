import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div id='Home' className='h-screen  bg-[#FAFAFA] gap-10 flex max-lg:flex-col-reverse items-center relative ps-40 max-lg:px-5'>
        <div className="flex flex-1 flex-col lg:w-[32rem] gap-8 max-lg:text-center pb-10">
            <h1 className="text-[4.1rem] max-lg:text-4xl sans-semibold mt-20 max-lg:mt-0 text-color leading-[4.9rem]">Next generation digital banking</h1>
            <p className="text-gray-400 sans-semibold text-[20px]">Take your financial life online. Your Easybank account will be a one-stop for spending, saving, budgeting, investing, and much more.</p>
            <div>
            <Button content={"Request Invite"}/>
            </div>
        </div>
        <div className="max-lg:hidden z-10 flex max-lg:flex-col max-lg:w-full justify-end max-lg:justify-center pb-28 md:overflow-hidden relative">
            <img src="/images/image-mockups.png" className='relative z-30 top-32  left-40 max-lg:left-0 w-[55rem]' alt="" />
            <img src="/images/bg-intro-desktop.svg" className='absolute -right-64 top-48 lg:scale-[1.7]  max-lg:top-0 max-lg:' width="" alt="" />
        </div>
        <div className="flex-1 lg:hidden relative">
            <img src="/images/bg-intro-desktop.svg" className='absolute ' width="" alt="" />
            <img src="/images/image-mockups.png" className='relative' alt="" />
        </div>
        

    </div>
  )
}

export default Hero
