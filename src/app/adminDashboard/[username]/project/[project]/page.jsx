'use client';


import React, { useState } from 'react'

// components
import DeliverProject from '@/app/components/adminDashboard/consultUser/consultProject/DeliverProject';
import ProjectDetails from '@/app/components/adminDashboard/consultUser/consultProject/ProjectDetails';
import ProjectsDeadline from '@/app/components/adminDashboard/consultUser/consultProject/ProjectsDeadline';
import SideBar from '@/app/components/adminDashboard/consultUser/consultProject/SideBar'


export const consultProjectContext = React.createContext();

export default function page() {
    // active btn
    const [btn, setBtn] = useState('details');

    // context
    const contextElements = {
        btn,
        setBtn
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
    </consultProjectContext.Provider>
  )
};