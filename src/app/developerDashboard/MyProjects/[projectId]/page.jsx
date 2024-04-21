'use client';

import React, { useEffect, useState } from 'react'


// components
import DeliverProject from '@/app/components/developerDashboard/consultProject/DeliverProject';
import ProjectDetails from '@/app/components/developerDashboard/consultProject/ProjectDetails';
import ProjectsDeadline from '@/app/components/developerDashboard/consultProject/ProjectsDeadline';
import SideBar from '@/app/components/developerDashboard/consultProject/SideBar';


import axios from 'axios';


export const consultProjectContext = React.createContext();

export default function ProjectId({params}) {

    // get projectId form path
    const projectId = params.projectId;

    const [project, setProject] = useState();
    // fetch data
    const fetchData = async () => {
      try {
        const response1 = await axios.post('/api/developer/getProject', {projectId: projectId});

        const response2 = await axios.get('/api/developer/getProject');
        const project = response2.data.project;
        setProject(project);        
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(()=>{
      fetchData();
    }, [])

    // active btn
    const [btn, setBtn] = useState('details');

    // context
    const contextElements = {
        btn,
        setBtn,
        project
    };

  // component to render
  let componentToRender;

  switch (btn) {
    case "details":
      componentToRender = <ProjectDetails />;
      break;

    case "deadline":
      componentToRender = <ProjectsDeadline />;
      break;

    case "deliver":
      componentToRender = <DeliverProject />;
      break;

    default:
      componentToRender = null;
  };

  

  return (
    <consultProjectContext.Provider value={contextElements} >
    <div className="bg-forthly 2xl:flex 2xl:justify-center 2xl:items-center" > 
    <div className="2xl:w-2000" >
        <div className='w-full h-screen flex justify-center items-center' >

            <div className='w-full mx-1 lg:w-10/12 xl:w-4/6 h-72 sm:h-96
               bg-gray-300 shadow-md shadow-gray-300
                 flex flex-col sm:flex-row gap-10' >

                {/* Side bar */}
                <SideBar />

                {/* other components */}
                {componentToRender}

            </div>

        </div>
    </div>
    </div>
    </consultProjectContext.Provider>
  )
};