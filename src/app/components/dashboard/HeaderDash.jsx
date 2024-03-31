'use client'

import React, { useContext, useState } from 'react'

import { motion } from "framer-motion";


// icons
import { IoIosNotificationsOutline } from "react-icons/io";

import { RxDashboard } from "react-icons/rx";
import { RiReservedLine } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TiDocumentAdd } from "react-icons/ti";
import { BiShow } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

// menu icons
import { IoMenu } from "react-icons/io5";

// drop menu icons
// profile
import { MdOutlinePersonOutline } from "react-icons/md";
import { SiBloglovin } from "react-icons/si";
import { VscSignOut } from "react-icons/vsc";

// web & mobile
import { CgWebsite } from "react-icons/cg";
import { FaMobileScreen } from "react-icons/fa6";
// down
import { RiArrowDropDownLine } from "react-icons/ri";
// up
import { RiArrowDropUpLine } from "react-icons/ri";



// css
import styles from "./headerDash.module.css"



import Link from 'next/link';
import Image from 'next/image';

// context
import { dashboardContext } from '/src/app/dashboard/layout.jsx';



export default function HeaderDash() {

  // context
  const {
    showProfileMenu,
    setShowProfileMenu,
    showCurrentMenu,
    setShowCurrentMenu,
    showAddMenu,
    setShowAddMenu,
    showResponsiveHeader,
    setShowResponsiveHeader } = useContext(dashboardContext);


  // active btn
  const [btn, setBtn] = useState('dashboard');
  const clickedBtn = (id) => {
    return id == btn ? 'bg-gray-300 text-black' : ''
  }

  const clickedBtnPc = (id) => {
    return id == btn ? 'text-rose-700' : ''
  }


  return (
    <div className='bg-forthly'>

        {/* header */}

        <motion.div className='flex justify-between py-4 px-3 sm:px-8 md:px-20 lg:px-10  2xl:px-24'
                    initial={{y: '-30vh', opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.15, stiffness: '40', type: 'spring'}}>

            <div className='flex gap-2 items-center cursor-pointer'>
                <Image src="/images/home/logo.jpg" alt="logo" 
                        className='w-10 h-10 2xl:w-14 2xl:h-14' width={100} height={100} />
                <h1 className='text-gray-300 text-sm sm:text-base 2xl:text-2xl'>KYO CONSEIL</h1>
            </div>

            {/* profile */}
            <div className='flex gap-8 items-center'>
                <IoIosNotificationsOutline className='w-7 h-7 2xl:w-10 2xl:h-10 text-gray-300 hover:text-rose-700 cursor-pointer
                              hidden lg:block' />

                <div className='relative hidden lg:block'>
                  <Image src="/images/dashboard/header/profile.jpg" alt="profile" 
                        className='rounded-full w-10 h-10 2xl:w-20 2xl:h-20 cursor-pointer' 
                        width={100} height={100}
                        onClick={()=>{setShowProfileMenu(!showProfileMenu)}}/>

                    {/* menu drop down */}
                    {showProfileMenu && 
                    <motion.ul className={` w-44 2xl:w-72 h-max bg-secondly text-gray-300 text-sm 
                              absolute right-0 flex flex-col gap-2 py-3 2xl:text-2xl z-50 border`}
                               initial={{height: 0}}
                               animate={{height: 'max-content'}} >
                        <li className='flex flex-col items-center gap-1'>
                          <Image src="/images/dashboard/header/profile.jpg" alt="profile" 
                                className='rounded-full w-10 h-10 cursor-pointer' width={100} height={100} />
                          <h1>Rahmoun Fares</h1>
                        </li>

                        {/* list */}
                        <motion.div initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{ duration: 0.2 }}>
                          <Link href='/profile' className='flex items-center gap-3 cursor-pointer pl-5 pt-1 
                                    hover:text-rose-700 hover:bg-primary py-2'>
                            <MdOutlinePersonOutline className='w-5 h-5' />
                            <h1>My Profile</h1>                        
                          </Link>
                        </motion.div>

                        {/* Blog */}
                        <motion.a  href='https://www.kyo-conseil.com/kyo-blog/' target='_blank'
                              className='flex items-center gap-3 cursor-pointer pl-5 pt-1 
                                  hover:text-rose-700 hover:bg-primary py-2'
                                  initial={{opacity: 0}}
                                  animate={{opacity: 1}}
                                  transition={{delay: 0.1, duration: 0.2 }}>
                          <SiBloglovin className='w-5 h-5' />
                          <h1>Blog</h1>                        
                        </motion.a>

                        {/* Settings */}
                        <motion.div initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 0.2, duration: 0.2 }}>
                          <Link href='/profile' className='flex items-center gap-3 cursor-pointer pl-5 pt-1 
                                    hover:text-rose-700 hover:bg-primary py-2'>
                            <IoMdSettings className='w-5 h-5' />
                            <h1>Settings</h1>                        
                          </Link>
                        </motion.div>

                        {/* Logout */}
                        <motion.li className='flex items-center gap-3 cursor-pointer pl-5 pt-1 
                                  hover:text-rose-700 hover:bg-primary py-2'
                                  initial={{opacity: 0}}
                                  animate={{opacity: 1}}
                                  transition={{delay: 0.3, duration: 0.2 }}>
                          <VscSignOut className='w-5 h-5' />
                          <h1>Logout</h1>                        
                        </motion.li>
                    </motion.ul> }

                </div>
                
                {/* menu icon */}
                <IoMenu className='lg:hidden text-gray-300 w-10 h-10 cursor-pointer' 
                      onClick={()=> {setShowResponsiveHeader(!showResponsiveHeader)}} />

            </div>

        </motion.div>

        {/* hr */}


        {/* menu */}

        <motion.div className='text-gray-300 px-10 py-4 justify-between text-s 2xl:text-2xl
                  hidden lg:flex 2xl:flex-wrap 2xl:px-24 font-bold border-t border-b bg-forthly z-0'> 
          {/* dashboard */}
          <motion.div initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{delay: 0.3, duration: 0.1}}>
            <Link href='/dashboard'
                  className={`flex gap-2 items-center hover:text-rose-700 cursor-pointer ${clickedBtnPc('dashboard')}`}
                  onClick={()=>{ setBtn('dashboard')}}>
                <RxDashboard className='w-5 h-5' />
                <h1>Dashboard</h1>
            </Link>
          </motion.div>

          {/* current projects */}
          <motion.div className='relative'
                onClick={()=> {setBtn('currentProjects')}}
                initial={{x: '-15vw', opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 0.35, duration: 0.15, stiffness: '40', type: 'spring'}} >

              <Link href='/dashboard/currentProjects'
                    className={`flex gap-2 items-center hover:text-rose-700 cursor-pointer ${clickedBtnPc('currentProjects')}`}>
                <AiOutlineFundProjectionScreen className='w-5 h-5 2xl:w-10 2xl:h-10' 
                                                  />
                <h1>Current Projects</h1>
              </Link>

              
          </motion.div>

          {/* add project */}
          <motion.div initial={{x: '-15vw', opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{delay: 0.4, duration: 0.15, stiffness: '40', type: 'spring'}}>
            <Link href='/dashboard/addProject'
                className={`flex gap-2 items-center hover:text-rose-700 cursor-pointer ${clickedBtnPc('addProject')}`}  
                onClick={()=> {setBtn('addProject')}}>
              <TiDocumentAdd className='w-5 h-5 2xl:w-10 2xl:h-10' />
              <h1>Add Project</h1>
                

            </Link>
          </motion.div>

          {/* reserve appointment  */}
          <motion.div initial={{x: '-15vw', opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.45, duration: 0.15, stiffness: '40', type: 'spring'}}>
            <Link href='/dashboard/appointment'
                  className={`flex gap-2 items-center hover:text-rose-700 cursor-pointer ${clickedBtnPc('reserve')}`}
                  onClick={()=> {setBtn('reserve')}}>
                <RiReservedLine className='w-5 h-5 2xl:w-10 2xl:h-10' />
                <h1>Reserve Appointment</h1>
            </Link>
          </motion.div>

          {/* Portfolio  */}
          <motion.div initial={{x: '-15vw', opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{delay: 0.50, duration: 0.15, stiffness: '40', type: 'spring'}}>
            <Link href='https://kyo-conseil.com/portfolio/' target='_blank'
                  className={`flex gap-2 items-center hover:text-rose-700 cursor-pointer ${clickedBtnPc('portfolio')}`}
                  onClick={()=> {setBtn('portfolio')}}>
                <BiShow className='w-5 h-5 2xl:w-10 2xl:h-10' />
                <h1>Porfolio</h1>
            </Link>
          </motion.div>

          {/* settings  */}
          <motion.div initial={{x: '-15vw', opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{delay: 0.55, duration: 0.15, stiffness: '40', type: 'spring'}}
                      className='z-0'>
            <Link href='/profile'
                  className={`flex gap-2 items-center hover:text-rose-700 cursor-pointer ${clickedBtnPc('settings')}`}
                  onClick={()=> {setBtn('settings')}}>
                <IoMdSettings className='w-5 h-5 2xl:w-10 2xl:h-10' />
                <h1>Settings</h1>
            </Link>
          </motion.div>

        </motion.div>

      
      {/* overlay responsive header */}
      {showResponsiveHeader &&
      <div className='fixed w-screen h-screen top-0 bg-gray-200/50'
            onClick={()=> {setShowResponsiveHeader(false)}}></div>
      }

      {/* responsive header phone */}
      {showResponsiveHeader &&
      <motion.div className='fixed w-5/6 sm:w-3/5 md:w-3/6 h-full bg-white text-black top-0 left-0 pt-10
                flex flex-col gap-7 z-50'
                initial={{x: '-80vw', opacity: 0.8}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5}}>
        {/* profile pic */}
        <div className='flex gap-3 justify-center items-center'>
            <Image src="/images/dashboard/header/profile.jpg" alt="profile" 
                        className='rounded-full w-10 h-10 cursor-pointer'  width={100} height={100} />
            <h1>Rahmoun Fares</h1>
        </div>

        <hr className='border-gray-500' />
        
        {/* menu */}
        <ul className='flex flex-col sm:text-xl gap-2'>
          {/* dashboard */}
          <Link href='/dashboard'
                className={`flex gap-2 items-center cursor-pointer hover:bg-gray-300 hover:text-black
                  pl-3 sm:pl-6 py-2 ${clickedBtn('dashboard')}`}
                onClick={()=>{ setBtn('dashboard');
                          setShowResponsiveHeader(false)}}>
              <RxDashboard className='w-5 h-5' />
              <h1>Dashboard</h1>
          </Link>
          <hr className='w-full bg-rose-700/20' />

          {/* current projects */}
          <Link href='/dashboard/currentProjects'
                className={`flex gap-2 items-center cursor-pointer hover:bg-gray-300 hover:text-black
                   pl-3 sm:pl-6 py-2 ${clickedBtn('current')}`}
                    onClick={()=> {
                              setBtn('current');
                              setShowResponsiveHeader(false)}}>
              <AiOutlineFundProjectionScreen className='w-5 h-5' />
              <h1>Current Projects</h1>

          </Link>
          <hr className='w-full bg-rose-700/20' />

          
          {/* Add projects */}
          <Link href='/dashboard/addProject'
                className={`flex gap-2 items-center cursor-pointer hover:bg-gray-300 hover:text-black
                   pl-3 sm:pl-6 py-2 ${clickedBtn('add')}`} 
                   onClick={()=> {
                              setBtn('add');
                              setShowResponsiveHeader(false)}}>
              <TiDocumentAdd className='w-5 h-5' />
              <h1>Add Projects</h1>
          
          </Link>
          <hr className='w-full bg-rose-700/20' />

              {/* reserve appointment */}
              <Link href='/dashboard/appointment'
                  className={`flex gap-2 items-center cursor-pointer hover:bg-gray-300 hover:text-black
                  pl-3 sm:pl-6 py-2 ${clickedBtn('reserve')}`}
                        onClick={()=> {setBtn('reserve')
                        setShowResponsiveHeader(false)}}>
                <RiReservedLine className='w-5 h-5' />
                <h1>Reserve Appointment</h1>
              </Link>
              <hr className='w-full bg-rose-700/20' />

              {/* Portfolio */}
              <a href='https://kyo-conseil.com/portfolio/' target='_blank'
                  className={`flex gap-2 items-center cursor-pointer hover:bg-gray-300 hover:text-black
                  pl-3 sm:pl-6 py-2 ${clickedBtn('portfolio')}`}
                      onClick={()=> {setBtn('portfolio');
                      setShowResponsiveHeader(false)}} >
                <BiShow className='w-5 h-5' />
                <h1>Portfolio</h1>
              </a>
              <hr className='w-full bg-rose-700/20' />

              {/* settings */}
              <Link href='/profile'
                  className={`flex gap-2 items-center cursor-pointer hover:bg-gray-300 hover:text-black
                  pl-3 sm:pl-6 py-2 ${clickedBtn('settings')}`}
                      onClick={()=> { setBtn('settings');
                      setShowResponsiveHeader(false)}}>
                <IoMdSettings className='w-5 h-5' />
                <h1>Settings</h1>
              </Link>
              <hr className='w-full bg-rose-700/20' />

        </ul>
        
      </motion.div> }

      
    </div>
  )
}