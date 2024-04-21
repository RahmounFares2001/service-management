'use client'


import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md';

import axios from 'axios';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import SearchBar from '@/app/components/dashboard/currentProject/SearchBar';

import {toast, Toaster} from 'react-hot-toast';


import {motion} from 'framer-motion';
import ViewDeveloper from '@/app/components/dashboard/currentProject/ViewDeveloper';


export const currentProjectContext = React.createContext();

export default function CurrentProjects() {

    // teble head
    const heads = ['Project name','Type','Status','Progression','Action'];



   // seach query
//    const [q, setQ] = useState('');
//    const hasEqualsSign = window.location.href.includes('=');
//    const startIndex = window.location.href.indexOf('=') + 1;

//    let startFrom;
//    useEffect(() => {
//        startFrom = window.location.href.slice(startIndex);
//        if(hasEqualsSign) {
//            setQ(startFrom);   
//        } else {setQ('')}
//    }, [window.location.href]);

//     if (typeof window !== 'undefined') {
//         const hasEqualsSign = window.location.href.includes('=');
//         const startIndex = window.location.href.indexOf('=') + 1;

//         let startFrom;
//         useEffect(() => {
//             startFrom = window.location.href.slice(startIndex);
//             if(hasEqualsSign) {
//                 setQ(startFrom);   
//             } else {
//                 setQ('');
//             }
//         }, [window.location.href]);
//     }

   
   const query = {q: ''}


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


    // submit btn spin
    const [spin, setSpin] = useState(false);

    // get project id to delete it
    const [projectToDelete, setProjectToDelete] = useState();

    // delete project 
    const onDelete = async () => {
        try {
            if(projectToDelete){
                setSpin(true);
                const response = await axios.post('/api/users/deleteProject', projectToDelete);
                toast.success('Project deleted succesfly');
                setSpin(false);
            }
        } catch (error) {
            setSpin(false);
            toast.error('Some thing wrong');
            console.log(error);
        }
    };

    // view selected project
    const [viewProject, setViewProject] = useState(false);

    // project to show
    const [projectToShow, setProjectToShow] = useState('');


    // developer
    const [developerToShow, setDeveloperToShow] = useState('');

    const [viewDeveloper, setViewDeveloper] = useState(false);

    // context elements
    const contextElements = {
        viewProject,
        setViewProject,
        projectToShow,
        viewDeveloper,
        setViewDeveloper
    };

  return (
    <currentProjectContext.Provider value={contextElements} >

    <div className='flex justify-center items-center pt-10' >
        <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl text-gray-300' >Current Projects</h1>
    </div>

    <div className='w-full h-full flex flex-col items-center pt-10 pb-56' >

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
                        <td className={`${project.progression == 'pending' || project.progression == 'in progress' ? 'text-yellow-700' :
                                            (project.progression == 'delivered' ) ? 'text-green-700' :
                                            'text-gray-300' } px-2 py-4 md:px-10 md:py-5`}>{project.progression}</td>
                        
                        <td className='px-2 py-4 md:px-10 md:py-5 flex flex-col gap-2'>
                        {project.progression == 'pending' ? 
                                <div className={`${spin && 'button button-loading'} bg-red-800 hover:bg-red-900 px-5 py-1 rounded-md cursor-pointer`}>
                                    <div className='w-full h-full'
                                            onClick={()=> {
                                                    setProjectToDelete(project);
                                                    onDelete()}}>
                                                            <span className='button-text' >Delete</span></div>
                                </div> :

                                project.progression == 'delivered' ?
                                <>
                                <div className='bg-green-800 hover:bg-green-900 px-5 py-1 rounded-md cursor-pointer'>
                                    <div className='w-full h-full'
                                                onClick={()=> {setViewProject(true);
                                                                setProjectToShow(project) }} >Final delivery</div>
                                </div>
                                <div className='bg-yellow-800 hover:bg-yellow-900 px-5 py-1 rounded-md cursor-pointer'>
                                            <div className='w-full h-full'
                                                    onClick={()=> {setViewDeveloper(true);
                                                                    setDeveloperToShow(project) }} >View developer</div>
                                </div> </> :

                                <div className='bg-yellow-800 hover:bg-yellow-900 px-5 py-1 rounded-md cursor-pointer'>
                                <div className='w-full h-full'
                                        onClick={()=> {setViewDeveloper(true);
                                                        setDeveloperToShow(project) }} >View developer</div>
                                </div> }
                        </td>
                    </tr> ))}

                </tbody>
            </table>
            </div>


        {/* overlay */}
        {(viewProject == true || viewDeveloper == true) &&
        <div className='w-full h-screen fixed right-0 top-0 bg-gray-300/90'
              onClick={() => {setViewProject(false) }}>
        </div> }

        {/* view project */}
        {viewProject && 
        <motion.div className='fixed top-0 w-full h-full flex justify-center items-center z-50'
                    initial={{opacity: 0, x: '-60vw'}}
                    animate={{opacity: 1, x: '0vw' }} >
            <ViewProject />
        </motion.div> }

        {/* view developer */}
        {viewDeveloper && 
        <motion.div className='fixed top-0 w-full h-full flex justify-center items-center z-50'
                    initial={{opacity: 0, x: '-60vw'}}
                    animate={{opacity: 1, x: '0vw' }} >
            <ViewDeveloper />
        </motion.div> }

        <Toaster />

    </div>
    </currentProjectContext.Provider>
  )
}