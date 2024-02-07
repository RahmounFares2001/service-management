import React from 'react'


// icons
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


// 
export default function Footer() {
  return (
    <section style={{backgroundColor: "#010101"}}
                className='py-20 flex flex-col gap-10'> 
        <div className='flex justify-center gap-3 sm:gap-10'>
            <a href=""><FaTwitter className='w-10 h-10 sm:w-14 sm:h-14 text-gray-200 hover:text-rose-700' /></a>
            <a href=""><FaFacebook className='w-10 h-10 sm:w-14 sm:h-14 text-gray-200 hover:text-rose-700'/></a>
            <a href=""><FaLinkedin className='w-10 h-10 sm:w-14 sm:h-14 text-gray-200 hover:text-rose-700' /></a>
            <a href=""><FaGooglePlus className='w-10 h-10 sm:w-14 sm:h-14 text-gray-200 hover:text-rose-700' /></a>
            <a href=""><FaYoutube className='w-10 h-10 sm:w-14 sm:h-14 text-gray-200 hover:text-rose-700' /></a>
        </div>
        
        <h1 className='text-gray-300 text-center text-sm sm:text-xl'>2024 © KYO Conseil. All rights reserved.</h1>
    </section>
  )
}
