'use client'

import React, { useContext, useEffect, useState } from 'react'

import {motion} from "framer-motion";

// components 
import SideBarAppointment from '@/app/components/dashboard/appointment/SideBarAppointment'
import FormAppointment from '@/app/components/dashboard/appointment/FormAppointment'
import { RiReservedLine } from 'react-icons/ri'


// context
import { dashboardContext } from '../layout'
import HistoryAppointment from '@/app/components/dashboard/appointment/HistoryAppointment'

import axios from 'axios';




export default function Appointment() {

  // context
  const {showAppointmentForm, setShowAppointmentForm} = useContext(dashboardContext);

  const [appointmentExist, setAppointmentExist] = useState('');

  const checkAppoitnemntExist = async () => {
    try {
      const response = await axios.get('/api/users/reserveAppointment');
      const appointmentExist = response.data.appointmentExist;
      setAppointmentExist(appointmentExist);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(()=> {
    checkAppoitnemntExist();
  }, []);
  
  return (
    <div className='w-full h-full flex items-center justify-center flex-col gap-14
      pt-10'>

        <motion.div className='flex flex-col gap-3 justify-center items-center pt-10 sm:px-2 md:px-5 lg:px-5 xl:px-10 2xl:px-72'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.2, delay: 0.1}}>
            <h1 className='text-center text-2xl sm:text-4xl font-bold text-gray-100'>Reserve appointment</h1>
            <hr className='w-44 border-2 border-rose-700' />
        </motion.div>

        {appointmentExist ? 
            <motion.button className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 
            bg-gradient-to-tr from-green-700 to-green-950 hover:bg-gradient-to-bl px-10 py-3 sm:px-20 sm:py-5 rounded-xl border transition-colors duration-500
            flex gap-3 sm:gap-5 justify-center items-center' 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2, delay: 0.1}} >
                    <RiReservedLine className='w-6 h-6 sm:w-9 md:w-10 sm:h-9 md:h-10' />
                    <span>Modify appointment</span>
          </motion.button>  :

          <motion.button className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 
              bg-gradient-to-tr from-rose-700 to-rose-950 hover:bg-gradient-to-bl px-10 py-3 sm:px-20 sm:py-5 rounded-xl border transition-colors duration-500
              flex gap-3 sm:gap-5 justify-center items-center' 
                  onClick={()=> {setShowAppointmentForm(true)}}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.2, delay: 0.1}} >
                      <RiReservedLine className='w-6 h-6 sm:w-9 md:w-10 sm:h-9 md:h-10' />
                      <span>Reserve Now</span>
          </motion.button> }

        {showAppointmentForm &&
        <motion.div className='z-20 w-11/12 lg:w-4/5 sm:h-96 bg-white flex flex-col sm:flex-row rounded-xl border-2
                        fixed top-28 '
                        initial= {{x: '-100vw'}}
                        animate= {{x: 0}}
                        transition={{ duration: 0.5, delay: 0, stiffness: 50 , type: 'spring' }}>
            <SideBarAppointment />

            <FormAppointment />

        </motion.div> }


        <motion.div className='flex flex-col gap-3 justify-center items-center mt-20 px-2 sm:px-0 pb-20 '
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.2, delay: 0.6}}>
            <h1 className='text-center sm:text-start sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 pt-10'>Plan your business strategy with Our Experts</h1>
            <hr className='w-3/5 border-2 border-rose-700' />
        </motion.div>


        {/* history appointment */}
        <div className='w-full h-full bg-thirdly flex justify-center items-center pb-20 '>
            <HistoryAppointment />
        </div>


        {/* overlay */}
        {showAppointmentForm &&
        <div className='fixed top-0 right-0 w-full h-full bg-gray-800/95'
              onClick={()=> {setShowAppointmentForm(false)}} >
        </div> }

    </div>
  )
}
