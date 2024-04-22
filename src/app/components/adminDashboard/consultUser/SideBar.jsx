'use client'

import React, { useContext} from 'react';

import {motion} from "framer-motion";


// icons 
import { FaRegUser } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";

import { RiProjectorLine } from "react-icons/ri";
import { RiReservedLine } from "react-icons/ri";


import { FiLogOut } from "react-icons/fi";

import { IoHomeOutline } from "react-icons/io5";
//menu
import { IoMenu } from "react-icons/io5";


// context
import Link from 'next/link';

import Image from 'next/image';

import {toast} from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { adminDashboardContext } from '@/app/adminDashboard/[username]/page';




export default function SideBar() {

  // show menu btn
  const { showMenu, setShowMenu ,btn, setBtn } = useContext(adminDashboardContext);
  const activeBtn = (id) => {
    return btn == id ? 'bg-gray-100 text-black' : ''
  };

   // router
   const router = useRouter();

   // logout btn
   const onLogout = async () => {
     try {
       await axios.get('/api/users/logout');
       toast.success('Logout succes!');
       router.push('/sign');
      // await axios.get('/api/admin/userData');
       
     } catch (error) {
       toast.error('Some thing wrong!');
       console.log(error);
     }
   };

  return (
    <>
    {showMenu ? <></> : 
    <motion.div className='w-10/12 sm:w-3/5 md:w-2/5 lg:w-3/1 lg:w-80 pt-5 flex-col gap-10 bg-forthly bg-rose-95 bg-whit
                absolute lg:fixed top-0 left-0 z-10 hidden lg:flex shadow-2xl shadow-black
                d rounded-r-sm h-full'
                initial={{x: '-80vw', opacity: 0.8}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5}}>
        

         {/* profile photo */}
         <div className='flex flex-col gap-5 items-center'>
          <Image src="/images/dashboard/header/profile.jpg" alt="photo"
              className='rounded-full w-20 h-20 cursor-pointer border-gray-300 border'
              width={100} height={100} />
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-2xl pointer-events-none text-gray-300'>Rahmoun Fares</h1>
            </div>
        </div>

        <ul className='flex flex-col text-gray-30 text-gray-300 font-bold'>

            {/* client account */}
            <li className={`flex gap-3 items-center pl-3 sm:pl-10 ${activeBtn('clientAccount')} hover:bg-gray-100 hover:text-black py-3 cursor-pointer`}
                        onClick={()=> {setBtn("clientAccount")}}>
                <FaRegUser />
                <h1>Client Account</h1>
            </li>

            {/* Projects */}
            <li className={`flex gap-3 items-center pl-3 sm:pl-10 ${activeBtn('clientProjects')} hover:bg-gray-100 hover:text-black py-3 cursor-pointer`}
                        onClick={()=> {setBtn("clientProjects")}}>
                <RiProjectorLine />
                <h1>Projects</h1>
            </li>

            {/* Appointments */}
            <li className={`flex gap-3 items-center pl-3 sm:pl-10 ${activeBtn('clientAppointments')} hover:bg-gray-100 hover:text-black py-3 cursor-pointer`}
                        onClick={()=> {setBtn("clientAppointments")}}>
                <RiReservedLine />
                <h1>Appointments</h1>
            </li>

            {/* logout */}
            <li className='flex gap-3 items-center pl-3 sm:pl-10 hover:bg-gray-100
                       hover:text-black py-3 cursor-pointer'
                onClick={onLogout}>
                <FiLogOut />
                <h1>Logout</h1>
            </li>
        </ul>

        <div className='flex justify-center font-bold'>
        <Link href='/adminDashboard' className='flex justify-center items-center gap-5 bg-gray-300 hover:bg-gray-100 text-black rounded-md cursor-pointer
                            w-5/6 sm:w-4/5 py-3'>
            <IoHomeOutline className='text-black' />
            <span>Back to Dashboard</span>
        </Link>
        </div>
    
    </motion.div> }

    
    {/* mobile */}

    {showMenu &&
    <motion.div className='w-10/12 sm:w-3/5 md:w-2/5 lg:w-3/12 pt-5 flex-col gap-10 bg-forthl bg-white
    fixed top-0 left-0 z-30 lg:hidden flex shadow-2xl shadow-black
    rounded-r-lg h-screen'
                initial={{x: '-80vw', opacity: 0.8}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5}}>
        

         {/* profile photo */}
         <div className='flex flex-col gap-5 items-center'>
          <Image width={400} height={400} src="/images/dashboard/header/profile.jpg" alt="photo"
              className='rounded-full w-20 h-20 cursor-pointer border-gray-300 border' />
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-2xl pointer-events-none text-black'>Rahmoun Fares</h1>
            </div>
        </div>

        <ul className='flex flex-col text-gray-30 text-black font-bold sm:text-xl'>


            {/* client account */}
            <li className={`flex gap-3 items-center pl-3 sm:pl-10 ${activeBtn('clientAccount')} hover:bg-gray-100 hover:text-black py-3`}
                    onClick={()=> {setBtn("clientAccount");
                                    setShowMenu(false)}}>
                <FaRegUser />
                <h1>Client Account</h1>
            </li>
            <hr className='w-full bg-rose-700/20' />

            {/* projects */}
            <li className={`flex gap-3 items-center pl-3 sm:pl-10 ${activeBtn('clientProjects')} hover:bg-gray-100 hover:text-black py-3`}
                    onClick={()=> {setBtn("clientProjects");
                                    setShowMenu(false)}}>
                <RiProjectorLine />
                <h1>Projects</h1>
            </li>
            <hr className='w-full bg-rose-700/20' />

            {/* Appointment */}
            <li className={`flex gap-3 items-center pl-3 sm:pl-10 ${activeBtn('clientAppointments')} hover:bg-gray-100 hover:text-black py-3`}
                    onClick={()=> {setBtn("clientAppointments");
                                    setShowMenu(false)}}>
                <RiReservedLine />
                <h1>Appointment</h1>
            </li>
            <hr className='w-full bg-rose-700/20' />

            {/* logout */}
            <li className='flex gap-3 items-center pl-3 sm:pl-10 hover:bg-gray-100 hover:text-black py-3'
                onClick={onLogout}>
                <FiLogOut />
                <h1>Logout</h1>
            </li>
            <hr className='w-full bg-rose-700/20' />
        </ul>

        {/* back to Dashboard btn */}
        <div className='flex justify-center font-bold'>
        <Link href='/adminDashboard'  className='flex justify-center items-center gap-5 bg-primary hover:bg-thirdly rounded-md cursor-pointer
                            w-5/6 sm:w-4/5 py-3 sm:text-xl'>
            <IoHomeOutline className='text-gray-300' />
            <span className='text-gray-300'>Back to Dashboard</span>
        </Link>
        </div>
    
    </motion.div> }

    </>
  )
}
