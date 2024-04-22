import Image from 'next/image'
import React from 'react'

import {motion} from "framer-motion";

export default function About() {
  return (
    <motion.section className='flex gap-14 lg:gap-5 justify-center md:px-28 md:mb-24 mb-20 flex-col-reverse lg:flex-row about'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.4, duration: 1}}
                    viewport={{once: true}} >
        {/* left */}
        <div className='text-gray-200 w-full lg:w-1/2 flex flex-col gap-2 sm:gap-5 justify-center sm:px-7 px-4'>

            <div className='flex flex-col gap-4 md:gap-2'>
              <p className='underline underline-offset-8 text-rose-700 sm:text-xl font-bold'>Get to Know</p>
              <h1 className='text-3xl sm:text-5xl font-bold'>About Us</h1>
            </div>
            

            <h1 className='text-base sm:text-2xl font-bold'>We Do Design, Code & Develop Software Finally Launch.</h1>

            <p className='text-sm sm:text-base' >Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Class onlin aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec lacinia placerat felis non aliquam.</p>

            {/* card */}
            <motion.div className='flex flex-col gap-5 font-bold rounded-3xl px-10 md:py-6 sm:py-4 py-3 shadow-lg shadow-rose-700/70
                        mt-5 sm:mt-0 hover:bg-gradient-to-br hover:from-gray-800 hover:to-black'
                    style={{backgroundColor: '#0d0d0e'}}
                    initial={{opacity: 0, y: '10vh'}}
                    whileInView={{opacity: 1, y: '0vh'}}
                    transition={{delay: 0.2, duration: 0.7}}
                    viewport={{once: true}}>
                <div className='flex items-center gap-2 cursor-pointer' >
                    <Image width={400} height={400} src="/images/home/logo.jpg" alt="logo"
                        className='md:w-10 md:h-10 w-10 h-10' />
                        <h1 className='md:text-xl text-base'>KYO CONSEIL</h1>
                </div>
                <div className='sm:text-xl text-base '
                            >
                  <h1>Best Creative IT Agency And Solutions</h1>
                  <h1 className='text-rose-700'>Since 2011.</h1>
                </div>
                
            </motion.div>
        </div>

        {/* right img */}
        <motion.div className='w-full lg:w-1/2 h-full  flex items-center justify-center'
                    initial={{opacity: 0, y: '25vw'}}
                    whileInView={{opacity: 1, y: '0vw'}}
                    transition={{delay: 0.2, duration: 1}}
                    viewport={{once: true}}>
          <Image width={400} height={400} src="/images/home/about.jpg" alt="img"
                className='w-11/12 h-72 sm:h-96 rounded-tl-3xl' />
        </motion.div>
       

    </motion.section>
  )
}
