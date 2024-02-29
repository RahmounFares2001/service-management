'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'


// icons
import { GiHamburgerMenu } from "react-icons/gi";


export default function Header() {


  // show menu responsive
  const [menuPressed, setMenuPressed] = useState(false);
  const showMenu = () => {
    setMenuPressed(!menuPressed);
  }

  // scroll into sections
  const scrollBtn = (section) => {
    document.querySelector(`.${section}`).scrollIntoView({ behavior: "smooth" });
    };

  return (
    <nav className='flex justify-between items-center text-gray-200
              md:px-10 md:py-10 sm:px-6 sm:py-6 px-3 py-6 home' >

      
      {/* overlay */}
        {menuPressed && 
          <div className='fixed bg-gray-400/40 index-2 top-0 right-0 left-0 w-screen h-full'
                onClick={()=> setMenuPressed(false)}>
          </div>  }

      {/* logo */}
      <div className='flex items-center gap-2 cursor-pointer' >
          <Image width={400} height={400} src="/images/home/logo.jpg" alt="logo"
            className='md:w-10 md:h-10 w-10 h-10' />
            <h1 className='md:text-base text-sm'>KYO CONSEIL</h1>
      </div>
      
      <div className='flex flex-row-reverse gap-10'>
        <GiHamburgerMenu className='lg:hidden block w-10 h-10' onClick={showMenu} /> 
        {/* button showed on md */}
        <Link href="/sign"><div className='border-2 border-gray-300 px-7 py-1 hover:border-rose-500 hover:text-rose-500
                  sm:block hidden lg:hidden'>Get Started</div></Link>
      </div>

      
      {/* links */}
        <ul className='lg:flex items-center gap-7 xl:gap-10 hidden'>
          <li onClick={()=>{scrollBtn('home')}} className='cursor-pointer hover:text-rose-500 hover:border-b-2 hover:border-b-rose-500 pb-1'>Home</li>
          <li onClick={()=>{scrollBtn('services')}} className='cursor-pointer hover:text-rose-500 hover:border-b-2 hover:border-b-rose-500 pb-1'>Services</li>
          <li onClick={()=>{scrollBtn('about')}} className='cursor-pointer hover:text-rose-500 hover:border-b-2 hover:border-b-rose-500 pb-1'>About Us</li>
          <li onClick={()=>{scrollBtn('fun')}} className='cursor-pointer hover:text-rose-500 hover:border-b-2 hover:border-b-rose-500 pb-1'>Fun Facts</li>
          <li onClick={()=>{scrollBtn('contact')}} className='cursor-pointer hover:text-rose-500 hover:border-b-2 hover:border-b-rose-500 pb-1'>Contact</li>
          <a href='https://kyo-conseil.com/portfolio/' target='_blank' ><li className='cursor-pointer hover:text-rose-500 hover:border-b-2 hover:border-b-rose-500 pb-1'>Portfolio</li></a>
        </ul>

        {/* get started login signUp */}
        <Link href="/sign" className='hidden lg:block'><div className='border-2 border-gray-300 px-7 py-1 hover:border-rose-500 hover:text-rose-500
                '>Get Started</div></Link>

        {/* responsive menu show */}
        {menuPressed && 
          <div className='bg-white left-0 top-0 h-full md:w-2/5 sm:w-3/6 w-10/12
                    flex flex-col gap-5 fixed'>

            {/* logo */}
            <div className='flex items-center justify-center gap-3 cursor-pointer pt-10' >
                <Image width={400} height={400} src="/images/home/logo.jpg" alt="logo"
                  className='md:w-14 md:h-14 w-10 h-10' />
                  <h1 className='text-black font-bold'>KYO CONSEIL</h1>
            </div>

            <div className='w-full flex justify-center'>
              <hr className='w-full h-1 bg-rose-700' />
            </div>

            <div className='pt-5'>
              <ul className='flex flex-col items-start gap-1 text-black'>
                <li onClick={()=>{scrollBtn('home')}} className='cursor-pointer pl-4 hover:text-rose-500'>Home</li>
                <hr className='w-full bg-rose-700/20' />
                <li onClick={()=>{scrollBtn('services'); setMenuPressed(false)}} className='cursor-pointer pl-4 hover:text-rose-500 pt-3'>Services</li>
                <hr className='w-full bg-rose-700/20' />
                <li onClick={()=>{scrollBtn('about'); setMenuPressed(false)}} className='cursor-pointer pl-4 hover:text-rose-500 pt-3'>About Us</li>
                <hr className='w-full bg-rose-700/20' />
                <li onClick={()=>{scrollBtn('fun'); setMenuPressed(false)}} className='cursor-pointer pl-4 hover:text-rose-500 pt-3'>Fun Facts</li>
                <hr className='w-full bg-rose-700/20' />                 
                <li onClick={()=>{scrollBtn('contact'); setMenuPressed(false) }} className='cursor-pointer pl-4 hover:text-rose-500 pt-3'>Contact</li>
                <hr className='w-full bg-rose-700/20' />
                <a href="https://kyo-conseil.com/portfolio/" target='_blank'><li className='cursor-pointer pl-4 hover:text-rose-500 pt-3'>Portfolio</li></a>
                <hr className='w-full bg-rose-700/20' />  
              </ul>
            </div>

             {/* get started login signUp on responsive*/}
            <div className='flex justify-center pt-14'>
              <Link href='/sign' className='border-2 border-black bg-black mx-8 py-2 
                        hover:border-rose-500 hover:bg-rose-700
                        w-3/5 rounded-sm flex justify-center' ><span className='text-center'>Get Started</span></Link>
            </div>

          </div>
        }

    </nav>
  )
}
