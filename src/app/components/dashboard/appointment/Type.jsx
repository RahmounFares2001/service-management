'use client'

import { dashboardContext } from '@/app/dashboard/layout';
import { type } from 'os';
import React, { useContext, useState } from 'react'
import { MdCoPresent } from 'react-icons/md'
import { VscRemoteExplorer } from 'react-icons/vsc'






export default function Type() {
 



  // context 
  const { typeAppointment, setTypeAppointment} = useContext(dashboardContext)

  return (
    <div className='w-full h-full flex justify-center bg-gray-300 pt-5 rounded-tr-xl'>
      <div className='w-11/12 sm:w-10/12 lg:w-4/5 h-full text-gray-200 flex flex-col gap-7 items-center pt-5 sm:pt-10 pb-20 sm:pb-0'>

        <h1 className='text-center text-xl sm:text-2xl font-bold text-black'>Chose type of your appointment</h1>
    

        <div className='flex gap-4 xl:gap-7 2xl:gap-10 w-full md:w-5/6 justify-center items-center'>
          {/* on site btn */}
          <button className={`px-7 lg:px-16 w-1/2 lg:w-auto h-36 sm:h-40 md:h-44 transition-colors duration-300
                  flex flex-col gap-3 md:gap-5 justify-center items-center rounded-xl hover:from-gray-500 hover:to-primary ${typeAppointment == 'on site' ? 'bg-thirdly' : 'bg-gradient-to-tr from-rose-950 to-rose-800'} `}
                  onClick={()=> {setTypeAppointment('on site')}}>
              <MdCoPresent className='w-10 h-10 lg:w-14 lg:h-14' />
              <span className='text-xl md:text-2xl lg:text-3xl'>On site</span>
          </button>

          {/* remote btn */}
          <button className={`px-7 lg:px-16 w-1/2 lg:w-auto h-36 sm:h-40 md:h-44 transition-colors duration-300
                  flex flex-col gap-3 md:gap-5 justify-center items-center rounded-xl hover:from-gray-500 hover:to-primary ${typeAppointment == 'remote' ? 'bg-thirdly' : 'bg-gradient-to-tr from-rose-950 to-rose-800'} `}
                 onClick={()=> {setTypeAppointment('remote')}}>
              <MdCoPresent className='w-10 h-10  lg:w-14 lg:h-14' /> 
              <span className='text-xl md:text-2xl lg:text-3xl'>Remote</span>
          </button>
        </div>
      

      </div>
    </div>
  )
}
