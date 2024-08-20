import React from 'react'

const Button = ({content}) => {
  return (
    <button className='sans-bold text-white w-44 h-12 rounded-[200px] btn-gradient text-[18px]'>
        {content}
    </button>
  )
}

export default Button
