'use client'

import React from 'react'

import axios from "axios";
import { useRouter } from 'next/navigation';

// icons
import { RiLogoutBoxRLine } from "react-icons/ri";

// components
import Users from '../components/adminDashboard/Users';

import {toast} from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';


export default function AdminDashboard() {
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
    <>
        <div className='hidden lg:block w-max h-max p-3 bg-secondly rounded-full absolute top-3 right-3 cursor-pointer
         group hover:bg-white' 
             onClick={onLogout}  >
            <RiLogoutBoxRLine className='text-white w-10 h-10 group-hover:text-secondly' />
        </div>

        <Users />

        <Toaster />


    </>
  )
}
