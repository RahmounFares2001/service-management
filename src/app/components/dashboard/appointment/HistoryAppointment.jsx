import React from 'react'

import {motion} from "framer-motion";

// components
import TableAppointment from './TableAppointment'

export default function HistoryAppointment() {
  return (
    <div className='w-full sm:w-max pt-20 text-gray-200 flex flex-col gap-10 justify-center items-center' >
        <motion.h1 className='text-center text-2xl sm:text-4xl md:text-5xl font-bold'
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{delay: 0.4, duration: 1}}
                  viewport={{once: true}}>Appointment History</motion.h1>

        <motion.div
              initial={{opacity: 0, y: '25vh'}}
              whileInView={{opacity: 1, y: '0vh'}}
              transition={{delay: 0.4, duration: 0.6}}
              viewport={{once: true}}>
          <TableAppointment />
        </motion.div>
        

    </div>
  )
}
