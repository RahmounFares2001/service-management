'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Pagination from './Pagination';
import axios  from 'axios';
import { useRouter } from 'next/navigation';
import Search2 from './Search2';
import { developersContext } from '@/app/adminDashboard/developers/page';


export default function Developers() {
    // context
    const {showAdd, setShowAdd} = useContext(developersContext)
    // router
    const router = useRouter();

    // seach query
    // const [q, setQ] = useState('');
    // const hasEqualsSign = window.location.href.includes('=');
    // const startIndex = window.location.href.indexOf('=') + 1;

    // if (typeof window !== 'undefined') {

    //     const hasEqualsSign = window.location.href.includes('=');
    //     const startIndex = window.location.href.indexOf('=') + 1;

    //     let startFrom;
    //     useEffect(() => {
    //         startFrom = window.location.href.slice(startIndex);
    //         if(hasEqualsSign) {
    //             setQ(startFrom);   
    //         } else {
    //             setQ('');
    //         }
    //     }, [window.location.href])
    // };
    

    const query = {q: ''};
 
    // table head
    const heads = ['Name','Email','Status','Role','Action'];

    // fetch users
    const [users, setUsers] = useState([]);

    const fetch = async () => {
        try {
            const response1 = await axios.post('/api/admin/fetchDevelopers', query);

            const response2 = await axios.get('/api/admin/fetchDevelopers');


            const users = response2.data.users;
            setUsers(users);
        } catch (error) {
            console.error(error);
        }
    };
        
    useEffect(()=> {
        fetch();
    }, [query]);
    
    // get user
    const [user, setUser] = useState('');
    const developer = {developer: user};
    
    // delete developer
    const onDelete = async () => {
            const response = await axios.post('/api/admin/deleteDeveloper', developer);
    };


  return (
    <div className='w-full h-full flex flex-col gap-3 items-center pt-7' >

        {/* search bar */}
        <Search2 />

        <div className='w-11/12 lg:w-4/5 h-max py-3 px-2 sm:px-5 bg-primary text-gray-300 
                    flex items-center sm:justify-end'>
            <div className='bg-yellow-700 hover:bg-yellow-800 px-5 py-1 rounded-md cursor-pointer'>
                    <div className='w-full h-full'
                            onClick={()=> {setShowAdd(true)}}>Add Developer</div>
            </div>
        </div>

        {/* users */}
        <div className='overflow-x-scroll sm:overflow-auto w-11/12 lg:w-4/5 scrollbar'>
        <table className='text-center bg-primary text-gray-300 w-full'>
            <thead>
                <tr className='text-sm md:text-base'>
                    {heads.map((head, index) => (
                        <th key={index} className='px-2 py-4 md:px-10 md:py-5' >{head}</th>
                    ))}
                </tr>
            </thead>

            <tbody className='text-xs sm:text-sm lg:text-base'>
                {users.map((user, index) => (
                <tr key={index} >
                    <td className='px-2 py-4 md:px-10 md:py-5 '>
                        <div className='flex gap-3 items-center' >
                            <Image width={100} height={100}
                                src='/images/dashboard/header/profile.jpg' 
                                className='w-8 h-8 lg:w-10 lg:h-10 rounded-full'/>
                            <h1 className='text-xs sm:text-sm lg:text-base text-nowrap pr-10 sm:pr-0'>{user.username}</h1>
                        </div>
                    </td>
                    <td className='px-2 py-4 md:px-10 md:py-5'>{user.email}</td>
                    <td className='px-2 py-4 md:px-10 md:py-5 text-green-700'>Active</td>
                    <td className='px-2 py-4 md:px-10 md:py-5'>{user.accountType}</td>
                    
                    <td className='px-2 py-4 md:px-10 md:py-5'>
                        <div className='bg-red-800 hover:bg-red-900 px-5 py-1 rounded-md cursor-pointer'>
                            <div className='w-full h-full'
                                    onClick={()=> {
                                            setUser(user.username);
                                            onDelete()}}>Delete</div>
                        </div>
                    </td>
                </tr> ))}

            </tbody>
        </table>
        </div>
        
        {/* pagination */}
        <Pagination />
    </div>
  )
}