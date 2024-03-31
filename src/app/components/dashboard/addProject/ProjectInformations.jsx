import React, { useContext } from 'react'

import {motion} from "framer-motion";

// context
import { dashboardContext } from '@/app/dashboard/layout';


export default function ProjectInformations() {

  const { projectDescription,  setProjectDescription } = useContext(dashboardContext);

  return (
    <div className='w-full h-full bg-gray-300 rounded-b-xl pt-10 flex flex-col gap-4 sm:gap-7' >
        <motion.div className='flex flex-col items-center gap-3 text-center'
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}}
                    transition={{delay: 0.3}}>
            <h1 className='text-center text-xl sm:text-2xl font-bold text-gray-800'>Your project details</h1>
            <hr className='w-36 sm:w-44 border-2 border-rose-700' />
        </motion.div>


        <motion.div className='px-1 sm:px-8 md:px-10 lg:px-24 flex flex-col gap-5 items-center'
                      initial={{x: -100, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{delay: 0.3, duration: 0.4}} >
            <div className='flex sm:flex-row flex-col  gap-3 sm:gap-5' >
                <h1 className='text-center  md:text-xl lg:text-2xl text-gray-800'>book of specifications</h1>
                <input type='file' placeholder='fares' accept='application/pdf' required
                        className='text-slate-500 file:px-3 file:py-1 md:file:px-4 md:file:py-2 file:rounded-full file:border-0
                          file:bg-rose-700 file:text-gray-200 hover:file:bg-rose-800 file:cursor-pointer
                          text-xs' />
            </div>
          

            
            <textarea name="" cols="30" rows="3" placeholder='additional informations'
                        className='w-11/12 sm:w-4/5 px-5 py-2 sm:text-xl bg-gray-200 rounded-md 
                        border border-black text-black'
                  onChange={(event) => setProjectDescription(prevState => ({ ...prevState, informations: event.target.value }))}
                  value={projectDescription.informations} >

            </textarea>


        </motion.div>

        
    </div>
  )
}
