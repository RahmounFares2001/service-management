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
    <div className='w-full h-full flex justify-center'>
      <div className='w-11/12 sm:w-10/12 lg:w-4/5 h-full text-gray-200 flex flex-col gap-7 items-center sm:pt-10 pt-0 pb-20 sm:pb-0'>

        <h1 className='text-center text-sm sm:text-2xl font-bold text-black'>Chose the date of your appointment</h1>
    

        <div className='flex gap-4 xl:gap-7 2xl:gap-10 w-5/6 justify-center items-center  flex-col md:flex-row'>
          {/* on site btn */}
          <button className={`px-6 sm:px-8 py-2 xl:px-14 xl:py-3 w-full sm:w-3/5 md:w-auto transition-colors duration-300
                  flex gap-3 sm:gap-5 justify-center items-center rounded-xl hover:bg-rose-800 ${typeAppointment == 'on site' ? 'bg-rose-700' : 'bg-thirdly'} `}
                  onClick={()=> {setTypeAppointment('on site')}}>
              <MdCoPresent className='w-6 h-6 sm:w-8 sm:h-8' />
              <span className='sm:text-xl'>On site</span>
          </button>

          {/* remote btn */}
          <button className={`px-6 sm:px-8 py-2 xl:px-14 xl:py-3 w-full sm:w-3/5 md:w-auto transition-colors duration-300
                 flex gap-3 sm:gap-5 justify-center items-center rounded-xl hover:bg-rose-800 ${typeAppointment == 'remote' ? 'bg-rose-700' : 'bg-thirdly'} `}
                 onClick={()=> {setTypeAppointment('remote')}}>
              <MdCoPresent className='w-6 h-6 sm:w-8 sm:h-8' />
              <span className='sm:text-xl'>Remote</span>
          </button>
        </div>
      

      </div>
    </div>
  )
}
