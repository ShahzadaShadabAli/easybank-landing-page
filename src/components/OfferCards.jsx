import React from 'react'

const OfferCards = ({img, title, desc}) => {
  return (
    <div className="flex flex-col gap-8 max-lg:gap-4 mt-12 md:pe-16 max-md:items-center max-md:text-center">
        <img src={`/images/${img}.svg`} width={78} alt="" />
        <h1 className='sans-semibold text-[1.4rem] text-color mb-0 max-md:text-xl'>{title}</h1>
        <p className="text-gray-400 sans-semibold text-[17px]">{desc}</p>
        </div>
  )
}

export default OfferCards
