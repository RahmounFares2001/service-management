'use client'


import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md';

import axios from 'axios';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import SearchBar from '@/app/components/dashboard/currentProject/SearchBar';


export default function CurrentProjects() {

    // teble head
    const heads = ['Project name','Type','Status','Progression','Action'];

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
    }


   // seach query
   const [q, setQ] = useState('');
   const hasEqualsSign = window.location.href.includes('=');
   const startIndex = window.location.href.indexOf('=') + 1;

//    let startFrom;
//    useEffect(() => {
//        startFrom = window.location.href.slice(startIndex);
//        if(hasEqualsSign) {
//            setQ(startFrom);   
//        } else {setQ('')}
//    }, [window.location.href]);

    if (typeof window !== 'undefined') {
        // Code that references window can go here
        const hasEqualsSign = window.location.href.includes('=');
        const startIndex = window.location.href.indexOf('=') + 1;

        let startFrom;
        useEffect(() => {
            startFrom = window.location.href.slice(startIndex);
            if(hasEqualsSign) {
                setQ(startFrom);   
            } else {
                setQ('');
            }
        }, [window.location.href]);
    }

   
   const query = {q: q}


   // projects
   const [projects, setProjects] = useState([]);

   // fetch projects
   const fetchProjects = async () => {
        try {
            const response1 = await axios.post('/api/users/fetchProjects', query);
            const response2 = await axios.get('/api/users/fetchProjects');
            const projects = response2.data.projects;
            setProjects(projects);
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(()=> {
        fetchProjects();
    }, [query]);


  return (
    <div className='w-full h-full flex flex-col items-center pt-10 pb-56' >

        {/* <div className='bg-gray-700/50 w-11/12 lg:w-4/5 flex justify-start items-center rounded-md py-2 pl-3'>
                        <MdSearch className='w-6 h-8 bg-gray-700/50' />
                        <input type="text" className='bg-gray-700/50 p-1 border-none outline-none rounded-r-md
                                            text-sm md:text-base text-gray-300'
                                placeholder='Search for a user'
                                onChange={handleSearch} />
        </div> */}
        <SearchBar />

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
                    {projects.map((project, index) => (
                    <tr key={index} >
                        <td className='px-2 py-4 md:px-10 md:py-5 '>{project.name}</td>
                        <td className='px-2 py-4 md:px-10 md:py-5'>{project.type}</td>
                        <td className={`${project.statuss == 'pending' ? 'text-yellow-700' :
                                            project.statuss == 'confirmed' ? 'text-green-700' :
                                            'text-gray-300' } px-2 py-4 md:px-10 md:py-5`}>{project.statuss}</td>
                        <td className={`${project.progression == 'pending' ? 'text-yellow-700' :
                                            project.progression == 'confirmed' ? 'text-green-700' :
                                            'text-gray-300' } px-2 py-4 md:px-10 md:py-5`}>{project.progression}</td>
                        
                        <td className='px-2 py-4 md:px-10 md:py-5'>
                            <div className='bg-green-800 hover:bg-green-900 px-5 py-1 rounded-md cursor-pointer'>
                                <Link href='' className='w-full h-full'>View</Link>
                            </div>
                        </td>
                    </tr> ))}

                </tbody>
            </table>
            </div>

    </div>
  )
}
