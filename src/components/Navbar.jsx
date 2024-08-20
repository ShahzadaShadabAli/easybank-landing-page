import React, { useEffect, useState } from 'react'
import Button from './Button'

const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState(0)

    const [toggled, setToggled] = useState(false)

    useEffect(() => {
        if (toggled) {
            const collapse = document.querySelector('.collapser')
            const overlay = document.querySelector('.overlay')
            collapse.classList.remove("animate-out")
            collapse.classList.add("animate-in")
            overlay.classList.remove('opacity-0', "hidden")
            overlay.classList.add('opacity-55')
            const navItems = document.querySelectorAll('.get-animate')
            console.log(navItems)
            navItems[0].classList.add('slide-in-1')
            navItems[1].classList.add('slide-in-2')
            navItems[2].classList.add('slide-in-3')
            navItems[3].classList.add('slide-in-4')
            navItems[4].classList.add('slide-in-5')
            navItems[0].classList.remove('slide-out-1')
            navItems[1].classList.remove('slide-out-2')
            navItems[2].classList.remove('slide-out-3')
            navItems[3].classList.remove('slide-out-4')
            navItems[4].classList.remove('slide-out-5')
        } else {
            const collapse = document.querySelector('.collapser')
            const overlay = document.querySelector('.overlay')
            collapse.classList.add("animate-out")
            collapse.classList.remove("animate-in")
            overlay.classList.add('opacity-0', "hidden")
            overlay.classList.remove('opacity-55')
            const navItems = document.querySelectorAll('.get-animate')
            navItems[0].classList.add('slide-out-1')
            navItems[1].classList.add('slide-out-2')
            navItems[2].classList.add('slide-out-3')
            navItems[3].classList.add('slide-out-4')
            navItems[4].classList.add('slide-out-5')
            navItems[0].classList.remove('slide-in-1')
            navItems[1].classList.remove('slide-in-2')
            navItems[2].classList.remove('slide-in-3')
            navItems[3].classList.remove('slide-in-4')
            navItems[4].classList.remove('slide-in-5')
        }
    }, [toggled])

    const navItems = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "About"
        },
        {
            id: 3,
            name: "Contact"
        },
        {
            id: 4,
            name: "Blog"
        },
        {
            id: 5,
            name: "Careers"
        },
    ]

  return (
    <div className='relative'>
      <nav className='flex justify-between bg-white z-30 items-center w-full fixed px-40 max-lg:px-10 max-md:px-5 mx-auto'>
      <div className="flex">
      <img src="/images/logo.svg" width={180} alt="" />
      </div>
      <ul className="flex gap-8 max-lg:gap-4 max-md:hidden">
        {navItems.map(n => (
        <li className=' py-[2.2rem] relative'>
            <a href={`#${n.name}`} onClick={() => setSelectedItem(n.id)} className={`cursor-pointer ${n.id === selectedItem ? "selected-nav text-black" : "text-gray-400"} text-[18px] max-lg:text-[15px] sans-semibold`}>
            {n.name}
            </a>
        </li>
        ))}
      </ul>
      {!toggled && <img src="/images/icon-hamburger.svg" className='md:hidden py-[2.2rem] w-10 cursor-pointer' onClick={() => {setToggled((prev) => !prev)}} alt="" />}
     {toggled && <img src="/images/icon-close.svg" className='md:hidden py-[2.2rem] pr-2 cursor-pointer' onClick={() => {setToggled((prev) => !prev)}} alt="" />}
      <ul className="flex-1 hidden max-lg:flex sans-semibold bg-white top-28 rounded-lg collapser border border-coral-red  absolute left-[4%] shadow-3xl z-50 p-10 flex-col w-[90vw] text-[20px] justify-center items-center gap-7">
                    {navItems.map(n => (
                      <li key={n.id} className="get-animate hover:text-coral-red">
                            <a href={`#${n.name}`} onClick={() => {setToggled((prev) => !prev)}} className="leading-normal text-lg text-slate-gray">
                            {n.name}
                            </a>
                        </li>
                    ))}
                </ul>
      <div className="max-md:hidden max-lg:scale-90">
      <Button content={"Request Invite"}/>
      </div>
    </nav>
      <div className="overlay w-full min-h-screen hidden bg-[#2c304b] fixed top-0 z-20 left-0 opacity-0"></div>
    </div>
  )
}

export default Navbar
