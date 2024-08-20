import React from 'react'
import OfferCards from './OfferCards'

const SecondSection = () => {
  return (
    <section id='About' className='bg-[#f4f5f7] px-[9%] pt-28 pb-32 max-md:px-16 max-md:pt-16 max-md:pb-16'>
      <h1 className="text-5xl sans-semibold mb-7">Why choose Easybank?</h1>
      <p className="text-gray-400 sans-semibold text-[20px]">We leverage Open Banking to turn your bank account into your financial hub. <br className='max-lg:hidden' /> Control your finances like never before.</p>

      <div className="grid grid-cols-4 mt-5 max-lg:grid-cols-2 justify-center max-md:grid-cols-1">
      <OfferCards desc={"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."} title={"Online Banking"} img={"icon-online"} />
      <OfferCards desc={"See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."} title={"Simple Budgeting"} img={"icon-budgeting"} />
      <OfferCards desc={"We don’t do branches. Open your account in minutes online and start taking control of your finances right away."} title={"Fast Onboarding"} img={"icon-onboarding"} />
      <OfferCards desc={"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."} title={"Open API"} img={"icon-api"} />
      </div>

    </section>
  )
}

export default SecondSection
