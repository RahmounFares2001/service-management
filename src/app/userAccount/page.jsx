'use client'

import React, { createContext, useState } from 'react'
import SideBar from '../components/profile/SideBar'


// css 
import styles from "./userAccount.module.css"

// icons
import { IoMenu } from "react-icons/io5";


// context
export const profileContext = createContext();


export default function UserAccount() {

  const [ showMenu, setShowMenu ] = useState(false);

  
  const width = window.innerWidth;


  const contextElement = {
    showMenu,
    setShowMenu
  }


  return (
    <profileContext.Provider value={contextElement}>

    {showMenu && 
    <div className='absolute top-0 right-0 w-screen h-screen bg-gray-200/90 z-10 lg:hidden'
          onClick={()=> {setShowMenu(false)}}>
    </div> }
     


    <div className='flex lg:flex-row lg:justify-normal lg:gap-24 bg-gray-100
          font-mono h-dvh relative'>
      <SideBar />
      

      <div className='flex justify-end lg:hidden absolute top-1 right-3'
            onClick={()=> {setShowMenu(true)}}>
        <IoMenu className='w-16 h-16' />
      </div>
      


      <form action="" className='text-gray-30 text-black flex flex-col  lg:items-stretch gap-10 
           w-full sm:px-10 md:px-20 lg:px-0 lg:w-6/12 pt-5 sm:pt-10 pb-20'>
        <h1 className='text-3xl font-bold text-center sm:text-start'>User Account</h1>

        {/* form details */}

        <ul className='flex flex-col gap-8 text-black'>

          {/* lign 1 */}
          <ul className='flex flex-col sm:flex-row gap-10 items-center'>
            {/* UserName */}
            <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2 flex `}>
              <input type="text" placeholder='' required='required'
                className='py-2 pt-5 px-3 bg-gray-100 border border-gray-600 rounded-md w-full'/>
            <span className='absolute top-1 left-2 pointer-events-none duration-500'>UserName</span>
            </li>
            {/* surName */}
            <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2 `}>
              <input type="text" placeholder='' required='required'
                  className='py-2 pt-5 px-3 bg-gray-100 border border-gray-600 rounded-md w-full'/>
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>Surname</span>
            </li>
          </ul>

          {/* lign 2 */}
            <ul className='flex flex-col sm:flex-row items-center gap-10'>
              {/* email */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2`}>
                  <input type="text" placeholder='' required='required'
                      className='py-2 pt-5 px-3 bg-gray-100 border border-gray-600 rounded-md w-full'/>
                  <span className='absolute top-1 left-2 pointer-events-none duration-500'>Email Adress</span>
              </li>

              {/* Phone */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2`}>
                  <input type="text" placeholder='' required='required'
                      className='py-2 pt-5 px-3 bg-gray-100 border border-gray-600 rounded-md w-full'/>
                  <span className='absolute top-1 left-2 pointer-events-none duration-500'>Phone Number</span>
              </li>
            </ul>

             {/* lign 3 */}
            <ul className='flex flex-col sm:flex-row items-center gap-10'>
              {/* adress */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-4/5`}>
                  <input type="text" placeholder='' required='required'
                      className='py-2 pt-5 px-3 bg-gray-100 border border-gray-600 rounded-md w-full'/>
                  <span className='absolute top-1 left-2 pointer-events-none duration-500'>Adress</span>
              </li>

              {/* Appartment */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-2/6`}>
                  <input type="text" placeholder='' required='required'
                      className='py-2 pt-5 px-3 bg-gray-100 border border-gray-600 rounded-md w-full'/>
                  <span className='absolute top-1 left-2 pointer-events-none duration-500'>Appartment</span>
              </li>
            </ul>

             {/* lign 3 */}
              {/* City */}
              <ul className='flex flex-col sm:flex-row items-center gap-10'>
                <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2`}>
                  <input type="text" placeholder='' required='required'
                      className='py-2 pt-5 px-3 bg-gray-100 border border-gray-600 rounded-md w-full'/>
                  <span className='absolute top-1 left-2 pointer-events-none duration-500'>Surname</span>
                </li>

                {/* State */}
                <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2`}>
                    <select name="" id="" className='py-2 pt-5 px-3 bg-gray-100 border border-gray-600 rounded-md w-full'>
                      <option value="">Alger</option>
                      <option value="">Oran</option>
                    </select>
                    <span className='absolute top-1 left-2 pointer-events-none duration-500'>State</span>
                </li>
              </ul>

             {/* lign 4 */}
              {/* Zip code */}
              <ul className='flex flex-col sm:flex-row items-center gap-10'>
                <li className={`${styles.inputBox} relative w-4/5 sm:w-2/6`}>
                    <input type="text" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-gray-100 border border-gray-600 
                          rounded-md w-full'/>
                    <span className='absolute top-1 left-2 pointer-events-none duration-500'>Zip code</span>
                </li>

                {/* Country */}
                <li className={`${styles.inputBox} relative w-4/5 sm:w-4/6`}>
                    <select name="" id="" className='py-2 pt-5 px-3 bg-gray-100 border border-gray-600
                         rounded-md w-full'>
                      <option value="">Alger</option>
                      <option value="">Oran</option>
                    </select>
                    <span className='absolute top-1 left-2 pointer-events-none duration-500'>Country</span>
                </li>
              </ul>

             
             
            </ul>


        </form>

    </div>
    </profileContext.Provider>
  )
}
