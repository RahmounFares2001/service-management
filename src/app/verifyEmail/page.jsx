'use client';
import React, { useEffect, useState } from 'react'

import axios from "axios";
import {useRouter} from "next/navigation"

import { motion } from "framer-motion";

// icons 
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";



export default function verifyEmail() {
  // router
  const router = useRouter();

  const [token, setToken] = useState('');
  const [verified, setVerified] = useState(false);

  // verify email
  const verifyUserEmail = async () => {
    try {
      await axios.post('/api/users/verifyEmail', {token});
      
    } catch (error) {
      console.log(error);
    }
  }

  // grap token
  useEffect(()=> {
    // get right url from the 0 
    const urlToken = window.location.search.split('=')[1];
    setToken(urlToken || '');
  }, []);

  //  verify email when geting token
  useEffect(()=> {
    if(token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  
  setTimeout(()=> {
    setVerified(true);
  }, 3000)

  setTimeout(()=> {
    router.push('/sign');
  }, 7000);

  return (
    <div className="bg-forthly 2xl:flex 2xl:justify-center 2xl:items-center" > 
    <div className="2xl:w-2000" >
    <div className='flex justify-center items-center w-screen h-screen' >
      <motion.div className={`w-11/12 sm:w-96 h-max bg-primary text-gray-200 pb-10 border shadow-md 
                        ${verified? 'border-green-800 shadow-green-800' : 'border-red-800 shadow-red-800'}`}
                  initial={{y: '30vh', opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{duration: 0.4, stiffness: '40', type: 'spring'}} >

        <div className={`w-full h-1/5 ${verified? 'bg-green-800': 'bg-red-800'} flex justify-center items-center py-2`}>
          <div className='bg-primary p-1 rounded-full' >
            <MdOutlineEmail className={`w-9 h-9 ${verified? 'text-green-800' : 'text-red-800'}`} />
          </div>
        </div>

        <div className='px-5 pt-5 flex flex-col gap-3' >
          <h1 className='text-xl sm:text-2xl' >Email Verification</h1>

          <div >
            <p className='text-sm' >hey user</p>
            <p className='text-xs' >You are set to start enjoying out website.  Simply you can now login and get started in our website.</p>
          </div>

          {/* Verification btn */}
          <div className='flex justify-center pt-2' >
            <button className={`${verified? 'bg-green-800 hover:bg-green-900': 'bg-red-800 hover:bg-red-900'} px-2 sm:px-5 py-1 w-4/5 sm:w-3/5 h-max 
                        text-sm sm:text-base`} >{verified ? 'Email verified' : 'loding ...'}</button>
          </div>


          <div className='flex justify-center items-center w-full pt-2' >
            <hr className={`${verified? 'border-green-800' : 'border-rose-700'} w-4/5`} />
          </div>

          {/* social media icons */}
          <div className='flex gap-3 w-full justify-center' >

            <div className='bg-blue-800 hover:bg-blue-900 shadow-xl shadow-blue-800 w-max h-max p-1 rounded-full cursor-pointer'>
              <FaFacebookF className='w-5 h-5' />
            </div>
            <div className='bg-red-800 hover:bg-red-900 shadow-xl shadow-red-800  w-max h-max p-1 rounded-full cursor-pointer'>
              <RiYoutubeLine className='w-5 h-5' />
            </div>
            <div className='bg-blue-800 hover:bg-blue-900 shadow-xl shadow-blue-900 w-max h-max p-1 rounded-full cursor-pointer'>
              <CiLinkedin className='w-5 h-5' />
            </div>
            <div className='bg-red-900 hover:bg-red-950 shadow-xl shadow-red-900 w-max h-max p-1 rounded-full cursor-pointer'>
              <FaInstagram className='w-5 h-5' />
            </div>

          </div>

        </div>


      </motion.div>
    </div>
    </div>
    </div>
  )
}
