'use client'

import React, { useState } from 'react'


// icons
import { GiHamburgerMenu } from "react-icons/gi";


export default function Header() {


  // show menu responsive
  const [menuPressed, setMenuPressed] = useState(false);
  const showMenu = () => {
    setMenuPressed(!menuPressed);
  }

  return (
    <nav className='flex justify-between items-center text-gray-200
              md:px-10 md:py-10 sm:px-6 sm:py-6 px-3 py-6' >

      {/* logo */}
      <div className='flex items-center gap-2 cursor-pointer' >
          <img src="/images/home/logo.jpg" alt="logo"
            className='md:w-10 md:h-10 w-10 h-10' />
            <h1 className='md:text-base text-sm'>KYO CONSEIL</h1>
      </div>
      
      <div className='flex flex-row-reverse gap-10'>
        <GiHamburgerMenu className='lg:hidden block w-10 h-10' onClick={showMenu} /> 
        {/* button showed on md */}
        <button className='border-2 border-gray-300 px-7 py-1 hover:border-rose-500 hover:text-rose-500
                  sm:block hidden lg:hidden'>Get Started</button>
      </div>

      
      {/* links */}
        <ul className='lg:flex items-center gap-10 hidden'>
          <li className='cursor-pointer hover:text-rose-500 hover:border-b-2 hover:border-b-rose-500 pb-1'>Home</li>
          <li className='cursor-pointer hover:text-rose-500 hover:border-b-2 hover:border-b-rose-500 pb-1'>Services</li>
          <li className='cursor-pointer hover:text-rose-500 hover:border-b-2 hover:border-b-rose-500 pb-1'>About Us</li>
          <li className='cursor-pointer hover:text-rose-500 hover:border-b-2 hover:border-b-rose-500 pb-1'>Portfolio</li>
          <li className='cursor-pointer hover:text-rose-500 hover:border-b-2 hover:border-b-rose-500 pb-1'>Contact</li>
        </ul>

        {/* get started login signUp */}
        <button className='border-2 border-gray-300 px-7 py-1 hover:border-rose-500 hover:text-rose-500
                hidden lg:block'>Get Started</button>

        {/* responsive menu show */}
        {menuPressed && 
          <div className='absolute bg-white left-0 top-0 h-full md:w-2/5 sm:w-3/6 w-10/12
                    flex flex-col gap-5'>

            {/* logo */}
            <div className='flex items-center justify-center gap-3 cursor-pointer pt-10' >
                <img src="/images/home/logo.jpg" alt="logo"
                  className='md:w-14 md:h-14 w-10 h-10' />
                  <h1 className='text-black font-bold'>KYO CONSEIL</h1>
            </div>

            <div className='w-full flex justify-center'>
              <hr className='w-full h-1 bg-rose-700' />
            </div>

            <div className='pt-5'>
              <ul className='flex flex-col items-start gap-1 text-black'>
                <li className='cursor-pointer pl-4 hover:text-rose-500'>Home</li>
                <hr className='w-full bg-rose-700/20' />
                <li className='cursor-pointer pl-4 hover:text-rose-500 pt-3'>Services</li>
                <hr className='w-full bg-rose-700/20' />
                <li className='cursor-pointer pl-4 hover:text-rose-500 pt-3'>About Us</li>
                <hr className='w-full bg-rose-700/20' />                
                <li className='cursor-pointer pl-4 hover:text-rose-500 pt-3'>Portfolio</li>
                <hr className='w-full bg-rose-700/20' />                
                <li className='cursor-pointer pl-4 hover:text-rose-500 pt-3'>Contact</li>
                <hr className='w-full bg-rose-700/20' />
              </ul>
            </div>

             {/* get started login signUp on responsive*/}
            <div className='flex justify-center pt-14'>
                <button className='border-2 border-black bg-black mx-8 py-2 
                        hover:border-rose-500 hover:bg-rose-700
                        w-3/5 rounded-sm'>Get Started</button>
            </div>

          </div>
        }

      
    </nav>
  )
}
