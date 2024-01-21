"use client"

import React, { useContext, useState } from 'react'

// components
import SideBar from './SideBar'
import Header from './Header'

// context
export const dashboardContext = React.createContext()

export default function Dashboard() {
  const [menu, setMenu] = useState(false);


  return (
    <dashboardContext.Provider value={{menu, setMenu}}>

      <div className='flex w-screen h-screen'>
          <div className='w-2/12'>
              <SideBar />
          </div>

          <div className='w-10/12'>
            <Header />
          </div>
      </div>

    </dashboardContext.Provider>
  )
}