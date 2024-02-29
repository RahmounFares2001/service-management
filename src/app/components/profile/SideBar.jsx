'use client'

import React, { useContext} from 'react'


// icons 
import { FaRegUser } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";

import { FiLogOut } from "react-icons/fi";

import { IoHomeOutline } from "react-icons/io5";
//menu
import { IoMenu } from "react-icons/io5";


// context
import Link from 'next/link';
import { profileContext } from '../../profile/page';
import Image from 'next/image';



export default function SideBar() {

  const { showMenu, setShowMenu ,btn, setBtn } = useContext(profileContext);
  const activeBtn = (id) => {
    return btn == id ? 'bg-gray-100 text-black' : ''
  };

  return (
    <>
    {showMenu ? <></> : 
    <div className='w-10/12 sm:w-3/5 md:w-2/5 lg:w-3/1 lg:w-80 pt-5 flex-col gap-10 bg-forthly bg-rose-95 bg-whit
                absolute lg:fixed top-0 left-0 z-10 hidden lg:flex shadow-2xl shadow-black
                d rounded-r-sm h-screen'>
        

         {/* profile photo */}
         <div className='flex flex-col gap-5 items-center'>
          <img src="./images/dashboard/header/profile.jpg" alt="photo"
              className='rounded-full w-20 h-20 cursor-pointer border-gray-300 border' />
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-2xl pointer-events-none text-gray-300'>Rahmoun Fares</h1>
            </div>
        </div>

        <ul className='flex flex-col text-gray-30 text-gray-300 font-bold'>

            {/* user account */}
            <li className={`flex gap-3 items-center pl-3 sm:pl-10 ${activeBtn('userAccount')} hover:bg-gray-100 hover:text-black py-3`}
                        onClick={()=> {setBtn("userAccount")}}>
                <FaRegUser />
                <h1>User Account</h1>
            </li>

            {/* bank cards */}
            <li className={`flex gap-3 items-center pl-3 sm:pl-10 ${activeBtn('bankCards')} hover:bg-gray-100 hover:text-black py-3`}
                        onClick={()=> {setBtn("bankCards")}}>
                <CiCreditCard1 />
                <h1>Bank Cards</h1>
            </li>

            {/* security */}
            <li className={`flex gap-3 items-center pl-3 sm:pl-10 ${activeBtn('security')} hover:bg-gray-100 hover:text-black py-3`}
                        onClick={()=> {setBtn("security")}}>
                <GrSecure />
                <h1>Security Settings</h1>
            </li>

            {/* logout */}
            <li className='flex gap-3 items-center pl-3 sm:pl-10 hover:bg-gray-100 hover:text-black py-3'>
                <FiLogOut />
                <h1>Logout</h1>
            </li>
        </ul>

        <div className='flex justify-center font-bold'>
        <Link href='./dashboard' className='flex justify-center items-center gap-5 bg-gray-300 hover:bg-gray-100 text-black rounded-md cursor-pointer
                            w-5/6 sm:w-4/5 py-3'>
            <IoHomeOutline className='text-black' />
            <span>Back to Dashboard</span>
        </Link>
        </div>
    
    </div> }

    
    {/* mobile */}

    {showMenu &&
    <div className='w-10/12 sm:w-3/5 md:w-2/5 lg:w-3/12 pt-5 flex-col gap-10 bg-forthl bg-white
    fixed top-0 left-0 z-30 lg:hidden flex shadow-2xl shadow-black
    rounded-r-lg h-screen'>
        

         {/* profile photo */}
         <div className='flex flex-col gap-5 items-center'>
          <Image width={400} height={400} src="/images/dashboard/header/profile.jpg" alt="photo"
              className='rounded-full w-20 h-20 cursor-pointer border-gray-300 border' />
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-2xl pointer-events-none text-black'>Rahmoun Fares</h1>
            </div>
        </div>

        <ul className='flex flex-col text-gray-30 text-black font-bold sm:text-xl'>


            {/* user account */}
            <li className={`flex gap-3 items-center pl-3 sm:pl-10 ${activeBtn('userAccount')} hover:bg-gray-100 hover:text-black py-3`}
                    onClick={()=> {setBtn("userAccount");
                                    setShowMenu(false)}}>
                <FaRegUser />
                <h1>User Account</h1>
            </li>
            <hr className='w-full bg-rose-700/20' />

            {/* bank cards */}
            <li className={`flex gap-3 items-center pl-3 sm:pl-10 ${activeBtn('bankCards')} hover:bg-gray-100 hover:text-black py-3`}
                    onClick={()=> {setBtn("bankCards");
                                    setShowMenu(false)}}>
                <CiCreditCard1 />
                <h1>Bank Cards</h1>
            </li>
            <hr className='w-full bg-rose-700/20' />

            {/* security */}
            <li className={`flex gap-3 items-center pl-3 sm:pl-10 ${activeBtn('security')} hover:bg-gray-100 hover:text-black py-3`}
                    onClick={()=> {setBtn("security");
                                    setShowMenu(false)}}>
                <GrSecure />
                <h1>Security Settings</h1>
            </li>
            <hr className='w-full bg-rose-700/20' />

            {/* logout */}
            <li className='flex gap-3 items-center pl-3 sm:pl-10 hover:bg-gray-100 hover:text-black py-3'>
                <FiLogOut />
                <h1>Logout</h1>
            </li>
            <hr className='w-full bg-rose-700/20' />
        </ul>

        {/* back to Dashboard btn */}
        <div className='flex justify-center font-bold'>
        <Link href='/dashboard'  className='flex justify-center items-center gap-5 bg-primary hover:bg-thirdly rounded-md cursor-pointer
                            w-5/6 sm:w-4/5 py-3 sm:text-xl'>
            <IoHomeOutline className='text-gray-300' />
            <span className='text-gray-300'>Back to Dashboard</span>
        </Link>
        </div>
    
    </div> }

    </>
  )
}
