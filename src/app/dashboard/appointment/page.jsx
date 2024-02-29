'use client'

import React, { useState } from 'react'


// icons
import { VscRemoteExplorer } from "react-icons/vsc";
import { MdCoPresent } from "react-icons/md";

export default function Appointment() {

  const [ appointmentTypeChosed, setAppointmentTypeChosen] = useState(false);

  return (
    <div className='w-full h-full flex items-center justify-center flex-col gap-14
    px-3 sm:px-2 md:px-5 lg:px-5 xl:px-10 2xl:px-72 pt-10 pb-20'>

      <div className='flex flex-col gap-3 justify-center items-center'>
        <h1 className='text-2xl sm:text-4xl font-bold text-gray-100'>Reserve appointment</h1>
        <hr className='w-44 border-2 border-rose-700' />
      </div>
      
      {/* overlay */}
      {appointmentTypeChosed &&
      <div className='fixed top-0  w-full h-full bg-gray-300/90'
            onClick={()=> {setAppointmentTypeChosen(false)}}>

      </div> }

      <div className='w-full h-full bg-gray-20'>

        <form action='' 
                className='w-full h-full flex flex-col items-center gap-4 sm:gap-7 md:gap-10' >
            
            {/* chose Remote or onSite */}
            {appointmentTypeChosed ? 
              (
                <div className='w-11/12 sm:w-4/5 lg:w-4/6 xl:w-3/6 2xl:w-2/5 h-max 
                       flex flex-col gap-5 sm:gap-10 justify-center items-center bg-secondly
                       py-10 z-30 absolute top-16 rounded-xl border-2'>
                  
                  <h1 className='text-center text-sm sm:text-2xl font-bold text-gray-200'>Provide us with some informations</h1>

                  <input type="date" className='w-11/12 sm:w-3/5 px-5 py-2 bg-gray-300 rounded-md' />
                  <textarea name="" cols="30" rows="5" placeholder='Informations'
                      className='w-11/12 sm:w-4/5 px-5 py-2 sm:text-xl bg-gray-300 rounded-md'></textarea>
                  
                  <button className='px-20 py-2 text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-gray-200 to-gray-400 rounded-3xl text-gray-900
                      hover:bg-gradient-to-l hover:from-gray-200 hover:to-gray-400 border transition-colors duration-1000
                      mt-5 sm:mt-0'>Submit</button>
    
                </div> ) :
              
              (
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <div className='w-full sm:w-5/6 lg:w-max flex flex-col justify-center items-center gap-10 border-2 py-10 px-10 bg-secondly rounded-md'> 

                <h1 className='text-center sm:text-2xl md:text-3xl lg:text-4xl text-gray-200'>How do you want your appointment ?</h1>
                <div className='flex flex-col sm:flex-row gap-5 w-full sm:h-24 justify-center items-center px-0 sm:px-5 lg:px-24'>

                  <div className='w-full lg:w-72 h-14 sm:h-5/6 bg-gradient-to-r from-gray-200 to-gray-400 rounded-3xl text-gray-900
                      hover:bg-gradient-to-l hover:from-gray-200 hover:to-gray-400 border transition-colors duration-1000'
                        onClick={()=> {setAppointmentTypeChosen(true)}}>
                    <button className='flex gap-3 sm:gap-4 md:gap-5 justify-center items-center w-full h-full'>
                      <VscRemoteExplorer className='w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14' />
                      <h1 className='text-xl sm:text-2xl md:text-3xl'>Remote</h1>
                    </button>
                  </div>

                  <div className='w-full lg:w-72 h-14 sm:h-5/6 bg-gradient-to-r from-gray-200 to-gray-400 rounded-3xl text-gray-900
                      hover:bg-gradient-to-l hover:from-gray-200 hover:to-gray-400 border transition-colors duration-1000'
                      onClick={()=> {setAppointmentTypeChosen(true)}}>
                    <button className='flex gap-5 justify-center items-center w-full h-full'>
                      <VscRemoteExplorer className='w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14' />
                      <h1 className='text-xl sm:text-2xl md:text-3xl'>On Site</h1>
                    </button>
                  </div>

                </div>
              </div>

              <div className='flex flex-col gap-3 justify-center items-center mt-10'>
                <h1 className='text-center sm:text-start sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 pt-10'>Plan your business strategy with Our Experts</h1>
                <hr className='w-3/5 border-2 border-rose-700' />
              </div>
            </div> ) }



          
        </form>

      </div>
    
    </div>
  )
}
