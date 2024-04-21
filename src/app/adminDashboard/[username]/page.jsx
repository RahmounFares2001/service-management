'use client';

import ClientAccount from '@/app/components/adminDashboard/consultUser/ClientAccount';
import ClientAppointments from '@/app/components/adminDashboard/consultUser/ClientAppointments';
import ClientProjects from '@/app/components/adminDashboard/consultUser/ClientProjects';
import SideBar from '@/app/components/adminDashboard/consultUser/SideBar';
import React, { useState } from 'react';


export const adminDashboardContext = React.createContext();

import {Toaster} from 'react-hot-toast';

export default function Username({params}) {

  // menu state
  const [ showMenu, setShowMenu ] = useState(false);

  //
  const [btn, setBtn] = useState("clientAccount");

  // get username form path
  const clientUsername = params.username;

  // 
  const [showUsers, setShowUsers] = useState(true);

  // show appointment informations 
  const [showInformations, setShowInformations] = useState(false);
  
  //
  const [selectedAppointment, setSelectedAppointment] = useState('');

  // context elements
  const contextElement = {
    showMenu,
    setShowMenu,
    btn,
    setBtn,
    clientUsername,
    showUsers,
    setShowUsers,
    showInformations,
    setShowInformations,
    selectedAppointment,
    setSelectedAppointment,
  };

  // component to render
  let componentToRender;

  switch (btn) {
    case "clientAccount":
      componentToRender = <ClientAccount />;
      break;

    case "clientProjects":
      componentToRender = <ClientProjects />;
      break;

    case "clientAppointments":
      componentToRender = <ClientAppointments />;
      break;

    default:
      componentToRender = null;
  }


  return (
    <adminDashboardContext.Provider value={contextElement}>

    <div className='flex lg:flex-row lg:justify-center lg:pl-72 xl:pl-56 lg:gap-24 bg-gray-10 bg-forthly
              font-mono h-full relative pt-20 lg:pt-0'>
        <SideBar />

        {/* other components */}
        {componentToRender}
        
        <Toaster />
      </div>

    </adminDashboardContext.Provider>
  )
}
