'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import axios  from 'axios';
import { useRouter } from 'next/navigation';


export default function Projects() {
    // router
    const router = useRouter();


    const query = {q: ''};
 
    // table head
    const heads = ['Name','Type','Status','Is Taken','Action'];

    // fetch users
    const [projects, setProjects] = useState([]);

    const fetch = async () => {
        try {
            const response1 = await axios.post('/api/developer/fetchProjects', query);

            const response2 = await axios.get('/api/developer/fetchProjects');


            const projects = response2.data.projects.allProjects;
            setProjects(projects);
        } catch (error) {
            console.error(error);
        }
    };
        
    useEffect(()=> {
        fetch();
    }, [query]);
    

    // submit btn spin
    const [spin, setSpin] = useState(false);

    // get user
    const [project, setProject] = useState('');

    // take project
    const onTake = async (project) => {
        try {
            const response = await axios.post('/api/developer/takeProject', {project: project});
        } catch (error) {
            console.log(error);
        }
    }


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
                        <th key={index} className='px-2 py-4 md:px-10 md:py-5' >{head}</th>
                    ))}
                </tr>
            </thead>

            <tbody className='text-xs sm:text-sm lg:text-base'>
                {projects.map((project, index) => (
                <tr key={index} >
                    <td className='px-2 py-4 md:px-10 md:py-5 '>
                        <div className='flex gap-3 items-center' >
                            <Image width={100} height={100}
                                src='/images/dashboard/header/profile.jpg' 
                                className='w-8 h-8 lg:w-10 lg:h-10 rounded-full'/>
                            <h1 className='text-xs sm:text-sm lg:text-base text-nowrap pr-10 sm:pr-0'>{project.name}</h1>
                        </div>
                    </td>
                    <td className='px-2 py-4 md:px-10 md:py-5'>{project.type}</td>
                    <td className={`px-2 py-4 md:px-10 md:py-5 ${project.statuss == 'pending' ? 'text-yellow-700' :
                                                                project.statuss == 'confirmed' ? 'text-green-700' :
                                                                project.statuss == 'cancelled' ? 'text-gray-300': 'text-gray-300' } `}>{project.statuss}</td>
                    <td className={`px-2 py-4 md:px-10 md:py-5 ${project.taken ? 'text-red-900' : 'text-yellow-700'  } `}>{project.taken ? 'taken' : 'not takne'}</td>
                    
                    <td className='px-2 py-4 md:px-10 md:py-5 flex flex-col gap-2'>
                        {!project.taken && project.statuss != 'pending' ? 
                            <>
                            <div className='bg-green-800 hover:bg-green-900 px-5 py-1 rounded-md cursor-pointer'>
                                <div className='w-full h-full'
                                        onClick={()=> {
                                                onTake(project)}}><span className='button-text' >Take</span></div>
                            </div>
                            <div className={`${spin && 'button button-loading'} bg-yellow-800 hover:bg-yellow-900 px-5 py-1 rounded-md cursor-pointer `}>
                                <div className='w-full h-full'>Download</div>
                            </div> 
                            </> : 
                            <div className='bg-green-800 hover:bg-green-900 px-5 py-1 rounded-md cursor-pointer'>
                                <div className='w-full h-full'>Download</div>
                            </div>  }
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