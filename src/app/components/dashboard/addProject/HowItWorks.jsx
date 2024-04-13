'use client'

import React, { useState } from 'react'

import {motion} from "framer-motion";

import Image from 'next/image'
import Link from 'next/link'


import { MdOutlineBorderColor } from "react-icons/md";
import { SiCodereview } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";


// style
import styles from "./addProject.module.css";

export default function HowItWorks() {

    // show btn
    const [showBtn, setShowBtn] = useState(false)
    const [showBtn2, setShowBtn2] = useState(false)
    const [showBtn3, setShowBtn3] = useState(false)

    // cards data
    const cards = [
        {
            id: 1,
            title: '01 Place Order',
            dt: 'Ready to proceed? Head to our secure checkout. Provide project details, share your vision...',
            icon : MdOutlineBorderColor
        },
        {
            id: 2,
            title: '02 Wait for approve',
            dt: 'Request is pending approval. will notify you once the approval process is complete...',
            icon : SiCodereview

        },
        {
            id: 3,
            title: '03 Payement',
            dt: 'Complete your payment securely to finalize your order. Thank you for choosing our services!',
            icon : FaPaypal

        }
    ]
  return (
    <div className='w-full flex items-center justify-center flex-col gap-14
         px-3 sm:px-2 md:px-5 lg:px-5 xl:px-10 2xl:px-72 pt-10'>

        <motion.div className='flex flex-col items-center gap-3 text-center pt-5 sm:pt-10'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.2, delay: 0.1}}>
            <h1 className='text-3xl sm:text-4xl font-bold'>How it works</h1>
            <hr className='w-20 border-2 border-rose-700' />
        </motion.div>

        {/* cards */}
        <div className='flex flex-col lg:flex-row w-full h-full gap-5 sm:gap-8 lg:gap-5 xl:gap-10 lg:justify-normal justify-center
                    items-center '>

            {cards.map((card, index) => (
                <motion.div className={`${styles.hoverScale} w-full sm:w-4/5 md:w-3/5 lg:w-1/3 h-full flex items-center gap-3
                hover:bg-gray-700 bg-forthly border rounded-xl cursor-pointer group transition-all duration-500
                p-3`}
                            key={index}
                            initial={{x: '100vw', opacity: 0}}
                            animate={{x: 0,  opacity: 1}}
                            transition={{duration: 0.2, delay: 0.1}} >
                
                    <div className='bg-forthly p-2 sm:p-3 h-full border rounded-xl flex justify-center items-center
                             border-rose-700'>
                        {React.createElement(card.icon, { className: 'text-rose-700 w-10 h-10 sm:w-16 sm:h-16 lg:w-10 lg:h-10 xl:w-16 xl:h-16 transition-colors duration-500' })}
                    </div>

                    <div className='flex flex-col w-4/5 gap-1 sm:gap-2 lg:gap-0'>
                        <h1 className='text-xl sm:text-3xl lg:text-xl xl:text-2xl font-bold'>{card.title}</h1>
                        <p className='text-xs tsm:text-sm'>{card.dt}</p>
                    </div>

                </motion.div>
            ))}
            
        </div>

        <motion.div className='flex flex-col justify-center items-center gap-3 lg:gap-5 pt-5 sm:pt-10 pb-8 sm:pb-14'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.2, delay: 0.8}}>
            <h1 className='text-center sm:text-start sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Plan your business strategy with Our Experts</h1>
            <hr className='w-3/5 border-2 border-rose-700' />
        </motion.div>
        

           
  </div>
  )
}

