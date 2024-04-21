import React from 'react'

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { MdSearch } from 'react-icons/md';



export default function SearchBar() {
   // search params
   const searchParams = useSearchParams();
   const {replace} = useRouter();
   const pathname = usePathname();


   const handleSearch = (e) => {
   const params = new URLSearchParams(searchParams);
   if(e.target.value){
     params.set('q', e.target.value);
   } else {
     params.delete('q');
   }
   replace(`${pathname}?${params}`);
   };

  return (
    <div className='bg-gray-700/50 w-11/12 lg:w-4/5 flex justify-start items-center rounded-md py-2 pl-3'>
                <MdSearch className='w-6 h-8 bg-gray-700/50' />
                <input type="text" className='bg-gray-700/50 p-1 border-none outline-none rounded-r-md
                                    text-sm md:text-base text-gray-300'
                        placeholder='Search for a user'
                        onChange={handleSearch} />
    </div>
  )
}