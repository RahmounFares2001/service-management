import React, { useContext } from 'react'

import {motion} from "framer-motion";

// context
import { dashboardContext } from '@/app/dashboard/layout';

import styles from './addProject.module.css';
import InputFile from './InputFile';


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


        <motion.div className='px-1 sm:px-8 md:px-10 lg:px-24 flex flex-col gap-5 lg:gap-10 items-center'
                      initial={{x: -100, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{delay: 0.3, duration: 0.4}} >

            {/* Project name */}
            <li className={`${styles.fixedStyle} relative w-4/5 sm:w-1/2 flex `}>
                <input type="text" placeholder='' required='required'
                  className='py-2 pt-5 px-3 bg-gray-300 border border-gray-600 rounded-md w-full
                              text-gray-900'
                  maxLength={20}
                  onChange={(event) => setProjectDescription(prevState => ({ ...prevState, name: event.target.value }))}
                  value={projectDescription.name} />
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>Project name</span>
            </li>

            {/* book of specifications */}
            <div className='flex sm:flex-row flex-col  gap-3 sm:gap-5' >
                <h1 className='text-center  md:text-xl lg:text-2xl text-gray-800'>book of specifications</h1>

                <InputFile />
            </div>
          

        </motion.div>

    </div>
  )
}
