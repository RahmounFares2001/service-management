'use client'

import React, { useState } from 'react'


// icons 
import { FaRegUser } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";

import { FiLogOut } from "react-icons/fi";

import { IoHomeOutline } from "react-icons/io5";
//menu
import { IoMenu } from "react-icons/io5";



export default function SideBar() {

    const [ showMenu, setShowMenu ] = useState(true)

  return (
    <div className='w-3/12 h-dvh pt-5 lg:flex flex-col gap-10 bg-forthl bg-forthl bg-thirdly
            hidden'>
        

         {/* profile photo */}
         <div className='flex flex-col gap-5 items-center'>
          <img src="./images/dashboard/header/profile.jpg" alt="photo"
              className='rounded-full w-20 h-20 cursor-pointer border-gray-300 border' />
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-2xl pointer-events-none text-gray-300'>Rahmoun Fares</h1>
            </div>
        </div>

        <ul className='flex flex-col text-gray-30 text-gray-300 font-bold'>

            {/* user account */}
            <li className='flex gap-3 items-center pl-10 bg-gray-100 text-black py-3'>
                <FaRegUser />
                <h1>User Account</h1>
            </li>

            {/* bank cards */}
            <li className='flex gap-3 items-center pl-10 hover:bg-gray-100 hover:text-black py-3'>
                <CiCreditCard1 />
                <h1>Bank Cards</h1>
            </li>

            {/* security */}
            <li className='flex gap-3 items-center pl-10 hover:bg-gray-100 hover:text-black py-3'>
                <GrSecure />
                <h1>Security Settings</h1>
            </li>

            {/* logout */}
            <li className='flex gap-3 items-center pl-10 hover:bg-gray-100 hover:text-black py-3'>
                <FiLogOut />
                <h1>Logout</h1>
            </li>
        </ul>

        <div className='flex justify-center font-bold'>
        <div  className='flex justify-center items-center gap-5 bg-gray-300 hover:bg-gray-100 text-black py-3 rounded-md cursor-pointer
                            w-4/5'>
            <IoHomeOutline className='text-black' />
            <span>Back to Home</span>
        </div>
        </div>
        

      
        
    </div>
  )
}
