'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md';
import axios from 'axios';
import { adminDashboardContext } from '@/app/adminDashboard/[username]/page';

import {toast} from "react-hot-toast"



export default function ClientProjects() {

  // table head
  const heads = ['Project name','Type','Status','Progression','Action'];

  // context
  const {clientUsername} = useContext(adminDashboardContext);

  const clientusername = {clientUsername: clientUsername};


  // projects
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response1 = await axios.post('/api/admin/fetchProjects', clientusername);

      const response2 = await axios.get('/api/admin/fetchProjects');
      const projects = response2.data.projects;
      setProjects(projects);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchProjects();
  }, []);

  // submit btn spin
  const [spinAccept, setSpinAccept] = useState(false);
  const [spinDecline, setSpinDecline] = useState(false);

  // accept project
  const onAction = async (action, project) => {
      try {
          if(action == 'accept') {setSpinAccept(true);} else if(action == 'decline'){setSpinDecline(true)};
          const response = await axios.post('/api/admin/projectStatus', {
                              action: action,
                              project: project});

          setSpinAccept(false);
          setSpinDecline(false);
          if(action == 'accept') {
            toast.success('Project accepted succesfly')
          } else if(action == 'decline'){
            toast.success('Project deleted succesfly')
          };

          await fetchProjects();
      } catch (error) {
          console.log(error);
          toast.error('Some thing wrong');
          setSpinAccept(false);
          setSpinDecline(false);
      }
  };

  // accept/decline delivery
  const onDelivery = async (action, project) => {
    try {
        if(action == 'accept') {setSpinAccept(true);} else if(action == 'decline'){setSpinDecline(true)};
        const response = await axios.post('/api/admin/developerDelivery', {
                            action: action,
                            project: project});
x
        setSpinAccept(false);
        setSpinDecline(false);
        if(action == 'accept') {
          toast.success('Delivery accepted succesfly');
        } else if(action == 'decline'){
          toast.success('Delivery deleted succesfly');
        };

        await fetchProjects();
    } catch (error) {
        console.log(error);
        toast.error('Some thing wrong');
        setSpinAccept(false);
        setSpinDecline(false);
    }
  };


  return (
    <div className='lg:mt-5 w-full lg:w-auto flex flex-col items-center lg:pl-16'>
      {/* search bar */}
      <div className='w-11/12 lg:w-10/12 xl:w-full bg-primary flex flex-col gap-5 px-5 pt-5 lg:ml-36 xl:ml-0' >
        <h1 className='text-gray-200 text-xl sm:text-2xl md:text-3xl' >Projects list</h1>
      </div>

      <div className='overflow-x-scroll sm:overflow-auto scrollbar
              w-11/12 lg:w-10/12 xl:w-full lg:ml-36 xl:ml-0 '>
            
            <table className='text-center bg-primary text-gray-300 w-full pt-5'>
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
                                          project.statuss == 'cancelled' ? 'text-red-700' :'text-gray-300' } px-2 py-4 md:px-10 md:py-5`}>{project.statuss}</td>
                        <td className={`${project.progression == 'Waiting for approve' || project.progression == 'In progress' ||project.progression == 'pending' ? 'text-yellow-700' :
                                            project.progression == 'deliverd' ? 'text-green-700' :
                                            'text-gray-300' } px-2 py-4 md:px-10 md:py-5`}>{project.statuss == 'pending' ? '/' : project.progression}</td>
                        
                        <td className='px-2 py-4 md:px-10 md:py-5 flex flex-col gap-2'>
                            {/* <div className='bg-green-800 hover:bg-green-900 px-5 py-1 rounded-md cursor-pointer'>
                                <Link href='' className='w-full h-full'>View</Link>
                            </div> */}
                            
                            {/* accept/decline project */}
                            {project.statuss == 'pending'  && <>
                            <div className={`${spinAccept && 'button button-loading'} bg-green-800 hover:bg-green-900 px-3 py-1 rounded-md cursor-pointer text-sm`}
                                    onClick={()=> {onAction('accept', project)}}>
                                <div className='w-full h-full'><span className='button-text' >Accept</span></div>
                            </div>
                            <div className={`${spinDecline && 'button button-loading'} bg-red-800 hover:bg-red-900 px-3 py-1 rounded-md cursor-pointer text-sm`}
                                  onClick={()=> {onAction('decline', project)}}>
                                <div className='w-full h-full'><span className='button-text' >Decline</span></div>
                            </div> </> }

                            {/* accept/decline delivery */}
                            { project.developerProgression == 'delivered' && <>
                                <div className={`${spinAccept && 'button button-loading'} bg-green-800 hover:bg-green-900 px-3 py-1 rounded-md cursor-pointer text-sm`}
                                        onClick={()=> {onDelivery('accept', project)}}>
                                    <div className='w-full h-full'><span className='button-text' >Accept</span></div>
                                </div>
                                <div className={`${spinDecline && 'button button-loading'} bg-red-800 hover:bg-red-900 px-3 py-1 rounded-md cursor-pointer text-sm`}
                                      onClick={()=> {onDelivery('decline', project)}}>
                                    <div className='w-full h-full'><span className='button-text' >Decline</span></div>
                                </div> </> }

                            <div className='bg-yellow-800 hover:bg-yellow-900 px-3 py-1 rounded-md cursor-pointer text-sm'>
                                <div className='w-full h-full'>Download</div>
                            </div>
                        </td>
                        
                    </tr> ))}
                        
                         
                </tbody>
            </table>
            </div>
    </div>
  )
};