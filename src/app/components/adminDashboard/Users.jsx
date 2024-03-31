import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar';
import Pagination from './Pagination';


export default function Users() {

  const heads = ['Name','Email','Status','Role','Action'];
  
  return (
    <div className='w-full h-full flex flex-col gap-3 items-center pt-7' >

        {/* search bar */}
        <SearchBar />


        {/* users */}
        <div className='overflow-x-scroll sm:overflow-auto w-11/12 lg:w-4/5 scrollbar'>
        <table className='text-center bg-primary text-gray-300 w-full'>
            <thead>
                <tr className='text-sm md:text-base'>
                    {heads.map((head, index) => (
                        <th className='px-2 py-4 md:px-10 md:py-5' >{head}</th>
                    ))}
                </tr>
            </thead>

            <tbody className='text-xs sm:text-sm lg:text-base'>
                <tr>
                    <td className='px-2 py-4 md:px-10 md:py-5 '>
                        <div className='flex gap-3 items-center' >
                            <Image width={100} height={100}
                                src='/images/dashboard/header/profile.jpg' 
                                className='w-8 h-8 lg:w-10 lg:h-10 rounded-full'/>
                            <h1 className='text-xs sm:text-sm lg:text-base text-nowrap pr-10 sm:pr-0'>Rahmoun Fares</h1>
                        </div>
                    </td>
                    <td className='px-2 py-4 md:px-10 md:py-5'>Rahmoun@gmail.com</td>
                    <td className='px-2 py-4 md:px-10 md:py-5 text-green-700'>Active</td>
                    <td className='px-2 py-4 md:px-10 md:py-5'>Client</td>
                    
                    <td className='px-2 py-4 md:px-10 md:py-5'>
                        <div className='bg-green-800 hover:bg-green-900 px-5 py-1 rounded-md cursor-pointer'>
                            <Link href='' className='w-full h-full'>View</Link>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
        </div>

        
        {/* pagination */}
        <Pagination />
    </div>
  )
}
