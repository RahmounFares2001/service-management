'use client'

import React, { useState } from 'react'

// components
import HeaderDash from '../components/dashboard/HeaderDash'
import Footer from '../components/home/footer/Footer';

// // context
export const dashboardContext = React.createContext()



export default function DashboardLayout({children}) {

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

    return(
        <>
        <dashboardContext.Provider value={contextElement}>

            <HeaderDash />

            <div className=' bg-primary'>
                {children}
            </div>

            <Footer />

        </dashboardContext.Provider>
        </>
    
    )
}