'use client';

import React from 'react';

import {motion} from "framer-motion";

// icons
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


export default function WaitForVerifyEmail() {
  return (
    <div className='flex justify-center items-center w-screen h-screen' >
      <motion.div className='w-11/12 sm:w-96 h-max bg-primary text-gray-200 pb-10 border border-red-800 shadow-md shadow-red-800'
                  initial={{y: '30vh', opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{duration: 0.4, stiffness: '40', type: 'spring'}} >

        <div className='w-full h-1/5 bg-red-800 flex justify-center items-center py-2'>
          <div className='bg-primary p-1 rounded-full' >
            <MdOutlineEmail className='w-9 h-9 text-red-800' />
          </div>
        </div>

        <div className='px-5 pt-5 flex flex-col gap-3' >
          <h1 className='text-xl sm:text-2xl' >Please check your email</h1>

          <div >
            <p className='text-sm' >hey user</p>
            <p className='text-xs' >You are almost set to start enjoying out website. Simply check your email and verify your account please and get started the link expires in 48 hours.</p>
          </div>


          <div className='flex justify-center items-center w-full pt-2' >
            <hr className='border-rose-700 w-4/5' />
          </div>

          {/* social media icons */}
          <div className='flex gap-3 w-full justify-center' >

            <div className='bg-blue-800 hover:bg-blue-900 shadow-xl shadow-blue-800 w-max h-max p-1 rounded-full cursor-pointer'>
              <FaFacebookF className='w-5 h-5' />
            </div>
            <div className='bg-red-800 hover:bg-red-900 shadow-xl shadow-red-800  w-max h-max p-1 rounded-full cursor-pointer'>
              <RiYoutubeLine className='w-5 h-5' />
            </div>
            <div className='bg-blue-800 hover:bg-blue-900 shadow-xl shadow-blue-800 w-max h-max p-1 rounded-full cursor-pointer'>
              <CiLinkedin className='w-5 h-5' />
            </div>
            <div className='bg-red-900 hover:bg-red-950 shadow-xl shadow-red-900 w-max h-max p-1 rounded-full cursor-pointer'>
              <FaInstagram className='w-5 h-5' />
            </div>

          </div>

        </div>


      </motion.div>
    </div>
  )
}
