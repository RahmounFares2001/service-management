'use client'
import React, { useContext, useState } from 'react'

import {motion} from "framer-motion";

// components 
import { type } from 'os';

// icons
import { MdCoPresent } from 'react-icons/md'
import { VscRemoteExplorer } from 'react-icons/vsc'

// context
import { dashboardContext } from '@/app/dashboard/layout';




export default function Type() {
 

  // context 
  const { typeAppointment, setTypeAppointment} = useContext(dashboardContext)

  return (
    <div className='w-full h-full flex justify-center bg-gray-300 pt-5 rounded-tr-xl'>
      <div className='w-11/12 sm:w-10/12 lg:w-4/5 h-full text-gray-200 flex flex-col gap-7 items-center pt-5 sm:pt-10 pb-20 sm:pb-0'>

        <motion.h1 className='text-center text-xl sm:text-2xl font-bold text-black'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.3, duration: 0.4}}>Chose type of your appointment</motion.h1>
    

        <div className='flex gap-4 xl:gap-7 2xl:gap-10 w-full md:w-5/6 justify-center items-center'>
          {/* on site btn */}
          <motion.button className={`px-7 lg:px-16 w-1/2 lg:w-auto h-36 sm:h-40 md:h-44 transition-colors duration-300
                  flex flex-col gap-3 md:gap-5 justify-center items-center rounded-xl hover:from-gray-500 hover:to-primary ${typeAppointment == 'on site' ? 'bg-thirdly' : 'bg-gradient-to-tr from-rose-950 to-rose-800'} `}
                  onClick={()=> {setTypeAppointment('on site')}}
                  initial={{x: -300, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  transition={{delay: 0.3, duration: 0.4}}>
              <MdCoPresent className='w-10 h-10 lg:w-14 lg:h-14' />
              <span className='text-xl md:text-2xl lg:text-3xl'>On site</span>
          </motion.button>

          {/* remote btn */}
          <motion.button className={`px-7 lg:px-16 w-1/2 lg:w-auto h-36 sm:h-40 md:h-44 transition-colors duration-300
                  flex flex-col gap-3 md:gap-5 justify-center items-center rounded-xl hover:from-gray-500 hover:to-primary ${typeAppointment == 'remote' ? 'bg-thirdly' : 'bg-gradient-to-tr from-rose-950 to-rose-800'} `}
                onClick={()=> {setTypeAppointment('remote')}}
                initial={{x: -300, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 0.5, duration: 0.4}}>
              <MdCoPresent className='w-10 h-10  lg:w-14 lg:h-14' /> 
              <span className='text-xl md:text-2xl lg:text-3xl'>Remote</span>
          </motion.button>
        </div>
      

      </div>
    </div>
  )
}
