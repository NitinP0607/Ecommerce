import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[3fr_1fr_1fr] gap-10 md:gap-14 my-10 mt-20 md:mt-40 text-sm px-5 md:px-0'>
        
        {/* Left Section */}
        <div>
          <img src={assets.logo} className='mb-5 w-28 md:w-32' alt="logo" />
          <p className='w-full sm:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis cumque consequatur, dolorem culpa blanditiis.
          </p>
        </div>

        {/* Company */}
        <div>
          <p className='text-lg md:text-xl font-medium mb-4 md:mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='hover:text-black cursor-pointer'>Home</li>
            <li className='hover:text-black cursor-pointer'>About us</li>
            <li className='hover:text-black cursor-pointer'>Delivery</li>
            <li className='hover:text-black cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className='text-lg md:text-xl font-medium mb-4 md:mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-1234567890</li>
            <li>contact@example.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          &copy; 2026 n-technologies. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer