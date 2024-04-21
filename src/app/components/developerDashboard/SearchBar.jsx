import React from 'react'

import Link from 'next/link';

// icons
import { MdSearch } from "react-icons/md";

import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { TiWorld } from "react-icons/ti";
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import axios from 'axios';
import {toast} from 'react-hot-toast'

export default function SearchBar() {

  const router = useRouter();

  // const searchParams = useSearchParams();
  // const {replace} = useRouter();
  // const pathname = usePathname();

  // const handleSearch = (e) => {
  //   const params = new URLSearchParams(searchParams);
  //   if(e.target.value){
  //     params.set('q', e.target.value);
  //   } else {
  //     params.delete('q');
  //   }
  //   replace(`${pathname}?${params}`);
  // };


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
    <div className='w-11/12 lg:w-4/5 h-max py-3 px-2 sm:px-5 bg-primary text-gray-300 flex items-center justify-between'>
        
        <div className='flex flex-col gap-2 sm:block' >
          {/* search bar */}
          <div className='bg-gray-700/50 w-max h-max flex justify-center items-center rounded-md'>
            <input type="text" className='bg-gray-700/50 p-1 border-none outline-none rounded-r-md
                                  text-sm md:text-base'
                      placeholder='Search for a project'
                       />
            <MdSearch className='w-6 h-6' />
          </div>

          <div>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-900 py-1 px-4 rounded-md
                        hover:bg-gradient-to-br sm:hidden block' >All projects</button>
            <Link href='/developerDashboard/MyProjects' >
              <button className='bg-gradient-to-tr from-green-700 to-green-900 py-1 px-4 rounded-md
                          hover:bg-gradient-to-br sm:hidden block' >My project</button>
            </Link>
          </div>
        </div>

        <div className='flex gap-3'>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-900 py-1 px-4 rounded-md
                        hover:bg-gradient-to-br hidden sm:block' >All projects</button>

            <Link href='/developerDashboard/MyProjects' >
              <button className='bg-gradient-to-tr from-green-700 to-green-900 py-1 px-4 rounded-md
                          hover:bg-gradient-to-br hidden sm:block' >My project</button>
            </Link>
        </div>

        <div className='flex gap-3'>

            <div onClick={onLogout}>
              <RiLogoutBoxRLine className='text-white w-11 h-11 sm:w-8 sm:h-8 group-hover:text-secondly cursor-pointer lg:hidden' />
            </div>
        </div>
    </div>
  )
}
