import React from 'react'


// icons
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";



export default function Contact() {
  return (
    <section className='text-gray-300 flex flex-col justify-center items-center gap-10 mb-24'>
       <h1 className='text-center text-4xl sm:text-5xl font-bold'>CONTACT INFO</h1>

      <div className='flex flex-col gap-7'>
        <div className='flex gap-5 justify-start items-center px-5  sm:px-0'>
              <FaLocationDot className='text-rose-700 w-10 h-10' />
              <h1 className='text-xs sm:text-base md:text-xl'>Villa 16, Rue Matiben Les Sources, Bir Mourad Rais.</h1>
        </div>

        <div className='flex gap-5 justify-start items-center px-5  sm:px-0'>
              <IoIosMail className='text-rose-700 w-10 h-10' />
              <h1 className='text-xs sm:text-base md:text-xl'>contact@kyo-conseil.com</h1>
        </div>

        <div className='flex gap-5 justify-start items-center px-5  sm:px-0'>
              <CgWebsite className='text-rose-700 w-10 h-10' />
              <h1 className='text-xs sm:text-base md:text-xl'>www.kyo-conseil.com</h1>
        </div>

        <div className='flex gap-5 justify-start items-center px-5  sm:px-0'>
              <FaPhone className='text-rose-700 w-10 h-10' />
              <h1 className='text-xs sm:text-base md:text-xl'>+(213) 550-193-126</h1>
        </div>

        <div className='flex gap-5 justify-start items-center px-5  sm:px-0'>
              <FaStopwatch className='text-rose-700 w-10 h-10' />
              <div className='flex flex-col'>
                  <h1 className='text-xs sm:text-base md:text-xl'>Dimanche à Jeudi</h1>
                  <h1 className='text-xs sm:text-base md:text-xl'>9:00h à 17:00h</h1>
              </div>
              
        </div>
       </div>
    </section>
  )}
