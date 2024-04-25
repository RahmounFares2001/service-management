import Image from 'next/image'
import React from 'react'

import {motion} from "framer-motion";
import Link from 'next/link';

export default function Homee() {
  return (
    <section className='text-gray-300 flex gap-20 xl:gap-32 pt-20 lg:pt-14 justify-center items-center lg:pb-32 md:pb-36 sm:pb-48 pb-52' >

      {/* left */}
      <div className='flex flex-col gap-8 sm:gap-14 lg:gap-7 justify-center'>
        <motion.div className='flex flex-col gap-2 xl:text-6xl md:text-5xl sm:text-5xl text-3xl font-bold'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.4, duration: 0.2}}>
          <h1 className='text-center'>Creative & Minimal</h1>
          <h1 className='text-center lg:text-start'>IT AGENCY .</h1> 
        </motion.div>

        <motion.div className='flex justify-center lg:justify-start w-full'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.4, duration: 0.2}}>
          <p className='lg:w-96 w-4/5 text-center lg:text-start'>We build personalized websites and mobile apps using the latest technologies, ensuring client satisfaction and timely delivery for an enhanced digital presence.</p>
        </motion.div>

        {/* buttons */}
        <div className='text-2xl flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full px-10 sm:px-0'>

          <motion.button className='border-2 border-black bg-black  px-10 py-2 rounded-sm
              hover:text-black hover:bg-rose-700'
                  initial={{opacity: 0, x: '-10vw'}}
                  animate={{opacity: 1, x: '0vw'}}
                  transition={{delay: 0.7, duration: 0.2}}>
                    <Link href='/sign' >Pricing</Link></motion.button>

          <motion.button className='border-2 border-gray-300  px-10 py-2 rounded-sm 
              hover:text-black hover:bg-rose-700'
                  initial={{opacity: 0, x: '-10vw'}}
                  animate={{opacity: 1, x: '0vw'}}
                  transition={{delay: 0.9, duration: 0.2}}>
                    <Link href='/sign' >Projects</Link></motion.button>

        </div>
      </div>

      {/* right img */}
      <motion.div
            className='hidden lg:block'
            initial={{opacity: 0, x: '50vw'}}
            animate={{opacity: 1, x: '0vw'}}
            transition={{delay: 0.6, duration: 0.3}}>
        <Image width={600} height={600} src="/images/home/homeLogo.jpg" alt="logo" 
          className='w-96'/>
      </motion.div>
      
        
    </section>
  )
}