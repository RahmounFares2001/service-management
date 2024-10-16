'use client'

import React, { createContext, useState } from 'react'
import SideBar from '../components/profile/SideBar'


// toaster
import { Toaster } from 'react-hot-toast';


// icons
import { IoMenu } from "react-icons/io5";

// components
import UserAccount from '../components/profile/UserAccount';
import BankCards from '../components/profile/BankCards';
import Security from '../components/profile/Security';
import Image from 'next/image';


// context
export const profileContext = React.createContext();


export default function Profile() {

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


  // component to render
  let componentToRender;

  switch (btn) {
    case "userAccount":
      componentToRender = <UserAccount />;
      break;

    case "bankCards":
      componentToRender = <BankCards />;
      break;

    case "security":
      componentToRender = <Security />;
      break;

    default:
      componentToRender = null;
  }

  return (
    <profileContext.Provider value={contextElement}>
    <div className="bg-forthly 2xl:flex 2xl:justify-center 2xl:items-center" > 
    <div className="2xl:w-2000" >


    {/* overlay when mobile menu is showed */}
    {showMenu && 
    <div className='fixed top-0 right-0 w-screen h-screen bg-gray-200/90 z-20 lg:hidden'
          onClick={()=> {setShowMenu(false)}}>
    </div> }

    {/* Menu Icon */}
    <div className='flex justify-end lg:hidden absolute top-1 right-3 z-10'
            onClick={()=> {setShowMenu(true)}}>
      <IoMenu className='w-16 h-16 text-gray-300' />
    </div> 

    {/* kyo logo on mobile */}
    <div className='flex items-center gap-2 sm:gap-3 absolute top-4 sm:top-3 left-3 z-10 lg:hidden'>
      <Image src="/images/home/logo.jpg" alt="KYO" 
            className='w-10 h-10 sm:w-14 sm:h-14' width={200} height={200} />
      <h1 className='text-gray-300 sm:text-xl'>KYO Conseil</h1>
    </div>

     

    <div className='flex lg:flex-row lg:justify-center lg:pl-72 xl:pl-56 lg:gap-24 bg-gray-10 bg-forthly
          font-mono h-full relative pt-20 lg:pt-0'>

    
      <SideBar />

      {/* other components */}
      {componentToRender}

      
      <Toaster />

    </div>
    </div>
    </div>
    </profileContext.Provider>
  )
}
