'use client'
import React, { useEffect, useState } from 'react'

import {motion} from 'framer-motion';


import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";


import axios from 'axios';

export default function Dashboard() {

  // get data
  const [data, setData] = useState([]);

    const fetch = async () => {
        try {
            const response = await axios.get('/api/users/dashboard');
            const counts = response.data.counts;
            setData(counts);
            console.log(counts);
        } catch (error) {
            console.error(error);
        }
    };
        
    useEffect(()=> {
        fetch();
    }, []);

  const cards = [
    {
        id: 1,
        title: 'Total projects',
        dt: data.projects,
        icon : MdOutlineAlignHorizontalLeft
    },
    {
        id: 2,
        title: 'Current projects',
        dt: 0,
        icon : MdOutlinePending
    },
    {
        id: 3,
        title: 'Completed projects',
        dt: 0,
        icon : IoCheckmarkDoneSharp

    }
]


const appCards = [
  {
      id: 1,
      title: 'Total projects',
      dt: data.projects,
      icon : MdOutlineAlignHorizontalLeft
  },
  {
      id: 2,
      title: 'Current projects',
      dt: 'Request is pending approval. will notify you once the approval process is complete...',
      icon : MdOutlinePending
  },
  {
      id: 3,
      title: 'Completed projects',
      dt: 'Complete your payment securely to finalize your order. Thank you for choosing our services!',
      icon : IoCheckmarkDoneSharp

  }
]

  return (
    <div className='flex flex-col gap-20 justify-center items-center px-3 sm:px-2 md:px-5 lg:px-5 xl:px-36 2xl:px-72 pt-20 py-10'>

      <div className='flex flex-col gap-6 items-center' >
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-300'>Projects</h1>
        {/* projects cards */}
        <div className='flex flex-col lg:flex-row w-full h-full gap-5 sm:gap-8 lg:gap-5 xl:gap-10 lg:justify-normal justify-center
                    items-center '>
            {cards.map((card, index) => (
                <motion.div className={`w-full sm:w-4/5 md:w-3/5 lg:w-1/3 h-32 flex items-center gap-3
                bg-gray-800 hover:bg-forthly border rounded-xl cursor-pointer group transition-all duration-500
                p-3 text-gray-300`}
                            key={index}
                            initial={{x: '100vw', opacity: 0}}
                            animate={{x: 0,  opacity: 1}}
                            transition={{duration: 0.2, delay: 0.1}} >
                
                    <div className='bg-forthly p-2 sm:p-3 h-full border rounded-xl flex justify-center items-center
                              border-rose-700'>
                        {React.createElement(card.icon, { className: 'text-rose-700 w-10 h-10 sm:w-16 sm:h-16 lg:w-10 lg:h-10 xl:w-16 xl:h-16 transition-colors duration-500' })}
                    </div>

                    <div className='flex flex-col w-4/5 gap-1 sm:gap-2 lg:gap-0'>
                        <h1 className='text-xl sm:text-3xl lg:text-lg xl:text-xl font-bold'>{card.title}</h1>
                        <p className='sm:text-xl md:text-2xl lg:text-3xl text-center'>{card.dt}</p>
                    </div>

                </motion.div>
            ))}
          </div>
      </div>

      {/* appointments cards */}
      <div className='flex flex-col gap-6 items-center' >
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-300'>Appointment</h1>
        {/* projects card */}
        <div className='flex flex-col lg:flex-row w-full h-full gap-5 sm:gap-8 lg:gap-5 xl:gap-10 lg:justify-normal justify-center
                    items-center '>
            {cards.map((card, index) => (
                <motion.div className={`w-full sm:w-4/5 md:w-3/5 lg:w-1/3 h-32 flex items-center gap-3
                bg-gray-800 hover:bg-forthly border rounded-xl cursor-pointer group transition-all duration-500
                p-3 text-gray-300`}
                            key={index}
                            initial={{x: '100vw', opacity: 0}}
                            animate={{x: 0,  opacity: 1}}
                            transition={{duration: 0.2, delay: 0.1}} >
                
                    <div className='bg-forthly p-2 sm:p-3 h-full border rounded-xl flex justify-center items-center
                              border-rose-700'>
                        {React.createElement(card.icon, { className: 'text-rose-700 w-10 h-10 sm:w-16 sm:h-16 lg:w-10 lg:h-10 xl:w-16 xl:h-16 transition-colors duration-500' })}
                    </div>

                    <div className='flex flex-col w-4/5 gap-1 sm:gap-2 lg:gap-0'>
                        <h1 className='text-xl sm:text-3xl lg:text-lg xl:text-xl font-bold'>{card.title}</h1>
                        <p className='sm:text-xl md:text-2xl lg:text-3xl text-center'>{card.dt}</p>
                    </div>

                </motion.div>
            ))}
          </div>
      </div>


    </div>
  )
}