import React from 'react'
import {logo} from "../assets"
import {navLinks} from "../Constant/index"

const Navbar = () => {
  return (
    <header className='flex justify-between items-center px-12 py-4'>
      <img src={logo} className="md:w-28 yoyo object-contain" />
      <div className='hidden items-center lg:flex gap-x-6'>
        {
            navLinks.map(({id, title})=>(
                <p key={id} className='cursor-pointer rounded-md py-[6px] px-2 font-medium hover:bg-gray-200'>{title}</p>
            ))
        }
      </div>

      <div className='flex gap-x-4'>
        <p className=' cursor-pointer rounded-md py-[6px] px-2 font-medium hover:bg-gray-200'>Shop</p>
        <p className='cursor-pointer rounded-md py-[6px] px-2 font-medium hover:bg-gray-200'>Account</p>
        <p className='cursor-pointer rounded-md py-[6px] px-2 font-medium hover:bg-gray-200'>Menu</p>
      </div>
    </header>
  )
}

export default Navbar

