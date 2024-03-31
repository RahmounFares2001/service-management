import React from 'react'

import {motion} from "framer-motion";

// icons
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <section style={{backgroundColor: "#010101"}}
                className='py-20 flex flex-col gap-10'> 
        <motion.div className='flex justify-center gap-3 sm:gap-10'
                    initial={{opacity: 0, y: '-5vh'}}
                    whileInView={{opacity: 1, y: '0vh'}}
                    transition={{delay: 0.2, duration: 0.6}}
                    viewport={{once: true}}>
            <a href="https://twitter.com/KYO_Conseil"><FaTwitter className='w-10 h-10 sm:w-14 sm:h-14 text-gray-200 hover:text-rose-700 transition-colors duration-500' /></a>
            <a href="https://www.facebook.com/KYOconseil/"><FaFacebook className='w-10 h-10 sm:w-14 sm:h-14 text-gray-200 hover:text-rose-700 transition-colors duration-500'/></a>
            <a href="https://www.linkedin.com/company/kyo-conseil"><FaLinkedin className='w-10 h-10 sm:w-14 sm:h-14 text-gray-200 hover:text-rose-700 transition-colors duration-500' /></a>
            <a href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"><FaGooglePlus className='w-10 h-10 sm:w-14 sm:h-14 text-gray-200 hover:text-rose-700 transition-colors duration-500' /></a>
            <a href="https://www.youtube.com/channel/UCH0lycJmdz74axY9b1KKVFA"><FaYoutube className='w-10 h-10 sm:w-14 sm:h-14 text-gray-200 hover:text-rose-700 transition-colors duration-500' /></a>
        </motion.div>
        
        <motion.h1 className='text-gray-300 text-center text-sm sm:text-xl'
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{delay: 0.4, duration: 1}}
                  viewport={{once: true}}>2024 © KYO Conseil. All rights reserved.</motion.h1>
    </section>
  )
}
