import React from 'react'

import {motion} from "framer-motion";

// icons
import { FaHandshake } from "react-icons/fa6";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";



export default function Facts() {


  return (
    <section className='text-gray-300 font-bold pt-24 flex flex-col gap-10 mb-24 md:mb-32 fun bg-forthly'>
        <motion.div className='text-center flex flex-col gap-3'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.4, duration: 1}}
                    viewport={{once: true}} >
            <p className='underline underline-offset-8 text-rose-700 sm:text-xl'>Care Study</p>
            <h1 className='text-3xl sm:text-5xl text-gray-200'>Fun Facts</h1>
        </motion.div>

        {/* cards */}
        <motion.div className='flex flex-col md:flex-row gap-8 justify-center px-6 sm:px-32 md:px-14 lg:px-32 '
                    >
            {/* projects completed */}
            <motion.div className='flex flex-col gap-2 md:gap-3 lg:gap-5 justify-center items-center rounded-xl w-full
             shadow-md shadow-rose-700 py-8 lg:py-14
             hover:bg-gradient-to-br hover:from-gray-800 hover:to-black'
                    style={{backgroundColor: '#0d0d0f'}}
                    initial={{opacity: 0, y: '25vh'}}
                    whileInView={{opacity: 1, y: '0vh'}}
                    transition={{delay: 0.2, duration: 1}}
                    viewport={{once: true}} >
                <FaHandshake className='w-16 h-16 lg:w-20 lg:h-20 text-rose-700' />
                <div>
                    <h1 className='text-4xl text-center'>150 +</h1>
                    <p className='text-base sm:text-xl text-center'>Project Completed</p>
                </div>
            </motion.div>
            
            {/* satisfied clients */}
            <motion.div className='flex flex-col gap-2 md:gap-3 lg:gap-5 justify-center items-center rounded-xl w-full
            shadow-md shadow-rose-700 py-8 lg:py-14
            hover:bg-gradient-to-br hover:from-gray-800 hover:to-black'
                        style={{backgroundColor: '#0d0d0f'}} 
                        initial={{opacity: 0, y: '25vh'}}
                        whileInView={{opacity: 1, y: '0vh'}}
                        transition={{delay: 0.2, duration: 1}}
                        viewport={{once: true}}>
                <BsEmojiSmileFill className='w-16 h-16 lg:w-20 lg:h-20 text-rose-700' />
                <div>
                    <h1 className='text-4xl text-center'>229 +</h1>
                    <p className='text-base sm:text-xl text-center'>Satisfied Clients</p>
                </div>
            </motion.div>

            {/* expert team */}
            <motion.div className='flex flex-col gap-2 md:gap-3 lg:gap-5 justify-center items-center rounded-xl w-full
            shadow-md shadow-rose-700 py-8 lg:py-14
            hover:bg-gradient-to-br hover:from-gray-800 hover:to-black'
                        style={{backgroundColor: '#0d0d0f'}}
                        initial={{opacity: 0, y: '25vh'}}
                        whileInView={{opacity: 1, y: '0vh'}}
                        transition={{delay: 0.2, duration: 1}}
                        viewport={{once: true}}>
                <IoIosPeople className='w-16 h-16 lg:w-20 lg:h-20 text-rose-700' />
                <div>
                    <h1 className='text-4xl text-center'>99 +</h1>
                    <p className='text-base sm:text-xl text-center'>Expert Teams</p>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}
