'use client'

import React, { createContext, useState } from 'react'
import SideBar from '../components/profile/SideBar'




// icons
import { IoMenu } from "react-icons/io5";

// components
import UserAccount from '../components/profile/UserAccount';
import { useStepContext } from '@mui/material';
import BankCards from '../components/profile/BankCards';
import Security from '../components/profile/Security';


// context
export const profileContext = createContext();


export default function Proifle() {

  // menu state
  const [ showMenu, setShowMenu ] = useState(false);

  //
  const [btn, setBtn] = useState("userAccount");
  

  const contextElement = {
    showMenu,
    setShowMenu,
    btn,
    setBtn
  }


  return (
    <profileContext.Provider value={contextElement}>

    {/* overlay when mobile menu is showed */}
    {showMenu && 
    <div className='absolute top-0 right-0 w-screen h-screen bg-gray-200/90 z-10 lg:hidden'
          onClick={()=> {setShowMenu(false)}}>
    </div> }

    {/* Menu Icon */}
    <div className='flex justify-end lg:hidden absolute top-1 right-3 z-20'
            onClick={()=> {setShowMenu(true)}}>
      <IoMenu className='w-16 h-16' />
    </div>

     

    <div className='flex lg:flex-row lg:justify-normal lg:gap-24 bg-gray-100
          font-mono h-full relative pt-20 lg:pt-0'>

    
      <SideBar />

      {btn == "userAccount" && <UserAccount />}
      {btn == "bankCards" && <BankCards />}
      {btn == "security" && <Security />}
      


      

    </div>
    </profileContext.Provider>
  )
}
