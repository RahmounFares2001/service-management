'use client'

import React, { useContext, useState } from 'react'
import { dashboardContext } from '@/app/dashboard/page';


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










import Link from 'next/link';



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
    return id == btn ? 'bg-primary' : ''
  }


  return (
    <div>

        {/* header */}

        <div className='flex justify-between px-20 lg:px-24 py-4'>

            <div className='flex gap-2 items-center cursor-pointer'>
                <img src="./images/home/logo.jpg" alt="logo" 
                        className='w-10 h-10'/>
                <h1 className='text-gray-300'>KYO CONSEIL</h1>
            </div>

            {/* profile */}
            <div className='flex gap-8 items-center'>
                <IoIosNotificationsOutline className='w-7 h-7 text-gray-300 hover:text-rose-700 cursor-pointer
                              hidden lg:block' />

                <div className='relative hidden lg:block'>
                  <img src="./images/dashboard/header/profile.jpg" alt="profile" 
                        className='rounded-full w-10 h-10 cursor-pointer' 
                        onClick={()=>{setShowProfileMenu(!showProfileMenu)}}/>

                    {/* menu drop down */}
                    {showProfileMenu && 
                    <ul className='w-44 h-max bg-secondly text-gray-300 text-sm 
                              absolute right-0 flex flex-col gap-2 py-3 '>
                        <li className='flex flex-col items-center gap-1'>
                          <img src="./images/dashboard/header/profile.jpg" alt="profile" 
                                className='rounded-full w-10 h-10 cursor-pointer' />
                          <h1>Rahmoun Fares</h1>
                        </li>

                        {/* list */}
                        <li className='flex items-center gap-3 cursor-pointer pl-5 pt-1 
                                  hover:text-rose-700 hover:bg-primary py-2'>
                          <MdOutlinePersonOutline className='w-5 h-5' />
                          <h1>My Profile</h1>                        
                        </li>

                        {/* Blog */}
                        <a  href='https://www.kyo-conseil.com/kyo-blog/'
                              className='flex items-center gap-3 cursor-pointer pl-5 pt-1 
                                  hover:text-rose-700 hover:bg-primary py-2'>
                          <SiBloglovin className='w-5 h-5' />
                          <h1>Blog</h1>                        
                        </a>

                        {/* Settings */}
                        <li className='flex items-center gap-3 cursor-pointer pl-5 pt-1 
                                  hover:text-rose-700 hover:bg-primary py-2'>
                          <IoMdSettings className='w-5 h-5' />
                          <h1>Settings</h1>                        
                        </li>

                        {/* Logout */}
                        <li className='flex items-center gap-3 cursor-pointer pl-5 pt-1 
                                  hover:text-rose-700 hover:bg-primary py-2'>
                          <VscSignOut className='w-5 h-5' />
                          <h1>Logout</h1>                        
                        </li>
                    </ul> }

                </div>
                
                {/* menu icon */}
                <IoMenu className='lg:hidden text-gray-300 w-10 h-10 cursor-pointer' 
                      onClick={()=> {setShowResponsiveHeader(!showResponsiveHeader)}} />

            </div>

        </div>

        {/* hr */}
        <hr className='border-gray-500 w-full' />



        {/* menu */}

        <div className='text-gray-400 px-24 py-4 justify-between text-sm 2xl:text-base
                  hidden lg:flex'>
          {/* dashboard */}
          <Link href=''
                className='flex gap-2 items-center hover:text-rose-700 cursor-pointer'>
              <RxDashboard className='w-5 h-5' />
              <h1>Dashboard</h1>
          </Link>

          {/* current projects */}
          <div className='relative'
                onMouseEnter={()=> {setShowCurrentMenu(true)}}
                onMouseLeave={()=> {setShowCurrentMenu(false)}}>

              <div className='flex gap-2 items-center hover:text-rose-700 cursor-pointer'>
                <AiOutlineFundProjectionScreen className='w-5 h-5' />
                <h1>Current Projects</h1>
                {showCurrentMenu ? 
                      <RiArrowDropUpLine  className='w-7 h-7' /> :
                      <RiArrowDropDownLine className='w-7 h-7' /> }
              </div>

              {/* Current menu Projects  */}
              {showCurrentMenu &&
              <ul className='w-max h-max bg-secondly text-gray-300 text-sm 
                              absolute flex flex-col gap-2 py-1 '>
                  {/* web dev current projects */}
                  <li className='flex items-center gap-3 cursor-pointer pt-1 
                                    hover:text-rose-700 hover:bg-primary py-2 px-7' >
                    <CgWebsite />
                    <h1>Web Dev</h1>
                  </li>

                  {/* mobile dev current projects */}
                  <li className='flex items-center gap-3 cursor-pointer pt-1 
                                    hover:text-rose-700 hover:bg-primary py-2 px-7' >
                    <FaMobileScreen />
                    <h1>Mobile Dev</h1>
                  </li>
              </ul> }
              
          </div>

          {/* add project */}
          <div className='relative' 
              onMouseEnter={()=> {setShowAddMenu(true)}}
              onMouseLeave={()=> {setShowAddMenu(false)}}>
            <div className='flex gap-2 items-center hover:text-rose-700 cursor-pointer' >
              <TiDocumentAdd className='w-5 h-5' />
              <h1>Add Project</h1>
              {showAddMenu ? 
                      <RiArrowDropUpLine  className='w-7 h-7' /> :
                      <RiArrowDropDownLine className='w-7 h-7' /> }
            </div>
              
            {/* Current menu Projects  */}
            {showAddMenu &&
              <ul className='w-max h-max bg-secondly text-gray-300 text-sm 
                        absolute flex flex-col gap-2 py-1'
                   >
                  {/* web dev current projects */}
                  <li className='flex items-center gap-3 cursor-pointer pt-1 
                                    hover:text-rose-700 hover:bg-primary py-2 px-7' >
                    <CgWebsite />
                    <h1>Web Dev</h1>
                  </li>

                  {/* mobile dev current projects */}
                  <li className='flex items-center gap-3 cursor-pointer pt-1 
                                    hover:text-rose-700 hover:bg-primary py-2 px-7' >
                    <FaMobileScreen />
                    <h1>Mobile Dev</h1>
                  </li>
              </ul> }

          </div>

          {/* reserve appointment  */}
          <Link href=''
                className='flex gap-2 items-center hover:text-rose-700 cursor-pointer'>
              <RiReservedLine className='w-5 h-5' />
              <h1>Reserve Appointment</h1>
          </Link>

          {/* Portfolio  */}
          <Link href='https://kyo-conseil.com/portfolio/' target='_blank'
                className='flex gap-2 items-center hover:text-rose-700 cursor-pointer'>
              <BiShow className='w-5 h-5' />
              <h1>Porfolio</h1>
          </Link>

          {/* settings  */}
          <Link href=''
                className='flex gap-2 items-center hover:text-rose-700 cursor-pointer'>
              <IoMdSettings className='w-5 h-5' />
              <h1>Settings</h1>
          </Link>

        </div>

      
      {/* overlay responsive header */}
      {showResponsiveHeader &&
      <div className='absolute w-screen h-screen top-0 bg-gray-200/50'
            onClick={()=> {setShowResponsiveHeader(false)}}></div>
      }

      {/* responsive header phone */}
      {showResponsiveHeader &&
      <div className='absolute w-5/6 sm:w-3/5 md:w-3/6 h-full bg-secondly text-gray-300 top-0 left-0 pt-10
                flex flex-col gap-7'>
        {/* profile pic */}
        <div className='flex gap-3 justify-center items-center'>
            <img src="./images/dashboard/header/profile.jpg" alt="profile" 
                                className='rounded-full w-10 h-10 cursor-pointer' />
            <h1>Rahmoun Fares</h1>
        </div>

        <hr className='border-gray-500' />
        
        {/* menu */}
        <ul className='flex flex-col sm:text-xl gap-2'>
          {/* dashboard */}
          <Link href=''
                className={`flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-gray-200
                  pl-3 sm:pl-6 py-2 ${clickedBtn('dashboard')}`}
                onClick={()=>{ setBtn('dashboard')}}>
              <RxDashboard className='w-5 h-5' />
              <h1>Dashboard</h1>
          </Link>

          {/* current projects */}
          <div className={`flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-gray-200
                   pl-3 sm:pl-6 py-2 ${clickedBtn('current')}`}
                    onClick={()=> {
                              setShowCurrentMenu(!showCurrentMenu);
                              setShowAddMenu(false);
                              setBtn('current')}}>
              <AiOutlineFundProjectionScreen className='w-5 h-5' />
              <h1>Current Projects</h1>
              {showCurrentMenu ? 
                      <RiArrowDropUpLine  className='w-7 h-7' /> :
                      <RiArrowDropDownLine className='w-7 h-7' /> }
          </div>

           {/* Current menu Projects  */}
           {showCurrentMenu && 
              <ul className='flex flex-col gap-2 pl-10' >
                  {/* web dev current projects */}
                  <li className='flex items-center gap-3 cursor-pointer hover:bg-primary hover:text-gray-200
                                pl-4 py-1' >
                    <CgWebsite />
                    <h1>Web Dev</h1>
                  </li>

                  {/* mobile dev current projects */}
                  <li className='flex items-center gap-3 cursor-pointer hover:bg-primary hover:text-gray-200
                                pl-4 py-1' >
                    <FaMobileScreen />
                    <h1>Mobile Dev</h1>
                  </li>
              </ul> }

          {/* Add projects */}
          <div className={`flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-gray-200
                   pl-3 sm:pl-6 py-2 ${clickedBtn('add')}`} 
                   onClick={()=> {
                              setShowAddMenu(!showAddMenu);
                              setShowCurrentMenu(false);
                              setBtn('add')}}>
              <TiDocumentAdd className='w-5 h-5' />
              <h1>Add Projects</h1>
              {showCurrentMenu ? 
                      <RiArrowDropUpLine  className='w-7 h-7' /> :
                      <RiArrowDropDownLine className='w-7 h-7' /> }
          </div>

          {/* Add menu Projects  */}
           {showAddMenu && 
              <ul className='flex flex-col gap-2 pl-10' >
                  {/* web dev add projects */}
                  <li className='flex items-center gap-3 cursor-pointer hover:bg-primary hover:text-gray-200
                                pl-4 py-1' >
                    <CgWebsite />
                    <h1>Web Dev</h1>
                  </li>

                  {/* mobile dev add projects */}
                  <li className='flex items-center gap-3 cursor-pointer hover:bg-primary hover:text-gray-200
                                pl-4 py-1' >
                    <FaMobileScreen />
                    <h1>Mobile Dev</h1>
                  </li>
              </ul> }

              {/* reserve appointment */}
              <Link href=''
                  className={`flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-gray-200
                  pl-3 sm:pl-6 py-2 ${clickedBtn('reserve')}`}
                        onClick={()=> {setBtn('reserve')}}>
                <RiReservedLine className='w-5 h-5' />
                <h1>Reserve Appointment</h1>
              </Link>

              {/* Portfolio */}
              <a href='https://kyo-conseil.com/portfolio/' target='_blank'
                  className={`flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-gray-200
                  pl-3 sm:pl-6 py-2 ${clickedBtn('portfolio')}`}
                      onClick={()=> {setBtn('portfolio')}} >
                <BiShow className='w-5 h-5' />
                <h1>Portfolio</h1>
              </a>

              {/* settings */}
              <Link href=''
                  className={`flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-gray-200
                  pl-3 sm:pl-6 py-2 ${clickedBtn('settings')}`}
                      onClick={()=> { setBtn('settings')}}>
                <IoMdSettings className='w-5 h-5' />
                <h1>Settings</h1>
              </Link>
        </ul>
        
      </div> }

      
    </div>
  )
}