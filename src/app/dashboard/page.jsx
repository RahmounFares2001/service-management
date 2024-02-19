"use client"

import React, { useState } from 'react'

//components
import HeaderDash from '../components/dashboard/header/HeaderDash'



// // context
export const dashboardContext = React.createContext()




export default function Dashboard() {

     // profile drop menu
     const [ showProfileMenu, setShowProfileMenu ] = useState(false);
     const [ showCurrentMenu, setShowCurrentMenu ] = useState(false);
     const [ showAddMenu, setShowAddMenu ] = useState(false);

     // show responsive header
     const [ showResponsiveHeader, setShowResponsiveHeader ] = useState(false);

     const contextElement = {
      showProfileMenu,
      setShowProfileMenu,
      showCurrentMenu,
      setShowCurrentMenu,
      showAddMenu,
      setShowAddMenu,
      showResponsiveHeader,
      setShowResponsiveHeader
     }

  return (
    <div className='w-full h-screen bg-forthly'>
      <dashboardContext.Provider value={contextElement}>
        <HeaderDash />


      </dashboardContext.Provider>
    </div>
  )
}
