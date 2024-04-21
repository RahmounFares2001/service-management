'use client'

import React, { useState } from 'react'

import axios from "axios";
import { useRouter } from 'next/navigation';

// icons
import { RiLogoutBoxRLine } from "react-icons/ri";

// components
import Developers from '@/app/components/adminDashboard/Developers';
    

import {toast} from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import AddDeveloper from '@/app/components/adminDashboard/AddDeveloper';


import {motion} from 'framer-motion';

export const developersContext = React.createContext();

export default function Developer() {

  // context
  const [showAdd, setShowAdd] = useState(false);


  const contextElements = {
    showAdd,
    setShowAdd
  };


  // router
  const router = useRouter();

  // logout btn
  const onLogout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success('Logout succes!');
      router.push('/sign');
      
    } catch (error) {
      toast.error('Some thing wrong!');
      console.log(error);
    }
  };

  return (
    <developersContext.Provider value={contextElements} >
        <div className='hidden lg:block w-max h-max p-3 bg-secondly rounded-full absolute top-3 right-3 cursor-pointer
         group hover:bg-white' 
             onClick={onLogout}  >
            <RiLogoutBoxRLine className='text-white w-10 h-10 group-hover:text-secondly' />
        </div>

        <Developers />

        <Toaster />

        {/* overlay */}
        {showAdd &&
        <div className='w-full h-screen fixed right-0 top-0 bg-gray-300/90'
              onClick={() => {setShowAdd(false) }}>
        </div> }

        {/* add developer form */}
        {showAdd &&
        <motion.div className='fixed top-0 w-full h-full flex justify-center items-center'
                    initial={{opacity: 0, x: '-60vw'}}
                    animate={{opacity: 1, x: '0vw' }} >
            <AddDeveloper />
        </motion.div> }

        

    </developersContext.Provider>
  )
}
