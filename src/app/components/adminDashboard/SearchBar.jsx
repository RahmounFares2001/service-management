import React from 'react'

// icons
import { MdSearch } from "react-icons/md";

import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { TiWorld } from "react-icons/ti";
import { RiLogoutBoxRLine } from 'react-icons/ri';




export default function SearchBar() {
  return (
    <div className='w-11/12 lg:w-4/5 h-max py-3 px-2 sm:px-5 bg-primary text-gray-300 flex items-center justify-between'>
        
        <div className='bg-gray-700/50 w-max h-max flex justify-center items-center rounded-md'>
            <MdSearch className='w-6 h-6' />
            <input type="text" className='bg-gray-700/50 p-1 border-none outline-none rounded-r-md
                                text-sm md:text-base'
                    placeholder='Search for a user' />
        </div>

        <div className='flex gap-3'>
            <MdMessage className='w-6 h-6 hover:text-white cursor-pointer hidden sm:block' />
            <IoIosNotifications className='w-6 h-6 hover:text-white cursor-pointer hidden sm:block' />
            <TiWorld className='w-6 h-6 hover:text-white cursor-pointer hidden sm:block' />

            <RiLogoutBoxRLine className='text-white w-6 h-6 group-hover:text-secondly cursor-pointer lg:hidden' />
        </div>
    </div>
  )
}
