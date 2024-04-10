import React, { useContext } from 'react'

import {motion} from "framer-motion";

// context 
import { dashboardContext } from '@/app/dashboard/layout'


// icons
import { RiAlertLine } from "react-icons/ri";




export default function InformationsAppointment() {

  // context
  const { 
      informationsAppointment,
      setInformationsAppointment,
      showMsg,
      setShowMsg } = useContext(dashboardContext);

 
  const handleMsg = () => {
    setTimeout(() => {
      setShowMsg(false)
    }, 2000);
  } 
  {showMsg == true && handleMsg() };
 
  return (
    <motion.div className='w-full h-full flex justify-center bg-gray-300 pt-5 lg:pt-10 rounded-tr-xl relative'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2, delay: 0.1}}>
      <div className='w-11/12 sm:w-10/12 lg:w-4/5 h-max flex flex-col gap-7 items-center text-black
                pb-20 sm:pb-0 pt-5 sm:pt-0'>
        <h1 className='text-center text-xl sm:text-2xl font-bold'>Provide us with some informations</h1>
        <textarea name="" cols="30" rows="5" placeholder='additional informations'
            className='w-11/12 sm:w-4/5 px-5 py-2 sm:text-xl bg-gray-200 rounded-md border border-black'
            onChange={(event) => setInformationsAppointment(event.target.value)}
            value={informationsAppointment}></textarea>

      </div>

      {showMsg &&
        <h1 className='absolute bottom-20 text-gray-900' >Please provide informations</h1>
      }


      
    </motion.div>
  )
}
