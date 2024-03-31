'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdSearch } from 'react-icons/md';

export default function CurrentProjects() {

   const heads = ['Project name','Type','Status','Progression','Action'];


  return (
    <div className='w-full h-full flex flex-col gap-3 items-center pt-10 pb-56' >



        <div className='overflow-x-scroll sm:overflow-auto w-11/12 lg:w-4/5 scrollbar'>
            <table className='text-center bg-primary text-gray-300 w-full'>
                <thead>
                    <tr className='bg-gray-700/50 w-max h-max flex justify-center items-center rounded-md mt-3 ml-3'>
                        <MdSearch className='w-6 h-6' />
                        <input type="text" className='bg-gray-700/50 p-1 border-none outline-none rounded-r-md
                                            text-sm md:text-base'
                                placeholder='Search for a user' />
                    </tr>
                    <tr className='text-sm md:text-base'>
                        {heads.map((head, index) => (
                            <th key={index} className='px-2 py-4 md:px-10 md:py-5' >{head}</th>
                        ))}
                    </tr>
                </thead>

                <tbody className='text-xs sm:text-sm lg:text-base'>
                    <tr>
                        <td className='px-2 py-4 md:px-10 md:py-5 '>E-commerce</td>
                        <td className='px-2 py-4 md:px-10 md:py-5'>Website app</td>
                        <td className='px-2 py-4 md:px-10 md:py-5 text-green-700'>Accepted</td>
                        <td className='px-2 py-4 md:px-10 md:py-5'>In progress</td>
                        
                        <td className='px-2 py-4 md:px-10 md:py-5'>
                            <div className='bg-green-800 hover:bg-green-900 px-5 py-1 rounded-md cursor-pointer'>
                                <Link href='' className='w-full h-full'>View</Link>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
            </div>

    </div>
  )
}
