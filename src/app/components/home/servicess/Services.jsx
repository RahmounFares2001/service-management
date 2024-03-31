'use client'

import React from 'react'

import {motion} from "framer-motion";

// icons
import { FaLaptopCode } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";



export default function Services() {


  return (
    <motion.section className='pt-32 flex flex-col gap-20 services' >
        <motion.div className='flex flex-col gap-3 justify-center items-center font-bold'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.4, duration: 1}}
                    viewport={{once: true}} >
            <p className='text-rose-700 text-xl underline underline-offset-8' >Our Solutions</p>
            <h1 className='text-5xl text-gray-300'>Services</h1>
        </motion.div>

        {/* cards sercices */}
        <motion.div className='flex flex-col lg:flex-row gap-7 jusify-center items-center w-full md:px-32 md:mb-0
                    sm:px-10 '
                    initial={{opacity: 0, x: '-25vw'}}
                    whileInView={{opacity: 1, x: '0vw'}}
                    transition={{delay: 0.2, duration: 1}}
                    viewport={{once: true}}>
          {/* web dev */}
          <div className='text-gray-200 lg:w-2/6 w-11/12 sm:w-4/5 flex flex-col gap-5 p-5 rounded-xl hover:bg-gradient-to-br
                    hover:from-gray-800 hover:to-black' 
                style={{backgroundColor: '#191a1c'}}> 
            <div className='flex justify-between items-center'>
              <FaLaptopCode className='text-rose-700 w-16 h-16 sm:w-24 sm:h-24' />
              <h1 className='text-5xl text-rose-800'>01</h1>  
            </div>
            
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl'>Web Dev</h1>
              <p>Lorem ipsumet earum praese autem iusto commodi vero. Recusandae.</p>
            </div>
            
            <h1 className='text-end text-xl font-bold text-rose-700 cursor-pointer' >Read More</h1>
          </div>

          {/* mobile app */}
          <div className='text-gray-200 lg:w-2/6 w-11/12 sm:w-4/5 flex flex-col gap-5 p-5 rounded-xl hover:bg-gradient-to-br cursor-pointer
                    hover:from-gray-800 hover:to-black' 
                style={{backgroundColor: '#191a1c'}}> 
            <div className='flex justify-between items-center'>
              <FaAndroid className='text-rose-700 w-16 h-16 sm:w-24 sm:h-24' />
              <h1 className='text-5xl text-rose-800'>02</h1>  
            </div>
            
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl'>Mobile Apps</h1>
              <p>Lorem ipsumet earum praese autem iusto commodi vero. Recusandae.</p>
            </div>
            
            <h1 className='text-end text-xl font-bold text-rose-700 cursor-pointer' >Read More</h1>
          </div>

          {/* ui ux */}
          <div className='text-gray-200 lg:w-2/6 w-11/12 sm:w-4/5 flex flex-col gap-5 p-5 rounded-xl hover:bg-gradient-to-br
                    hover:from-gray-800 hover:to-black' 
                style={{backgroundColor: '#191a1c'}}> 
            <div className='flex justify-between items-center'>
              <SiMaterialdesignicons className='text-rose-700 w-16 h-16 sm:w-24 sm:h-24' />
              <h1 className='text-5xl text-rose-800'>03</h1>  
            </div>
            
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl'>UI/UX Design</h1>
              <p>Lorem ipsumet earum praese autem iusto commodi vero. Recusandae.</p>
            </div>
            
            <h1 className='text-end text-xl font-bold text-rose-700 cursor-pointer' >Read More</h1>
          </div>
        </motion.div>
       
    </motion.section>
  )
}