import React from 'react'

import {motion} from "framer-motion";

//components
import Calender from "./Calender";


export default function Date() {
  return (
    <div className='w-full h-full flex justify-center bg-gray-300 pt-5 rounded-tr-xl' >

        <motion.div className='w-4/5 h-full text-gray-200 flex flex-col gap-7 items-center'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.2, delay: 0.1}}>

            <Calender />




        </motion.div>
    </div>
  )
}
