"use client"

import React, { useContext, useState } from 'react'

// components


import Side from "./Side";
import Main from './Main';

// context
export const dashboardContext = React.createContext()

export default function Dashboard() {
  const [menu, setMenu] = useState(false);


  return (
    <dashboardContext.Provider value={{menu, setMenu}}>
        <div className='w-screen h-screen flex gap-5 p-5' style={{backgroundColor: "#020030"}}>

          <div className='w-3/12'>
            <Side />
          </div>

          <div className='w-full'>
            <Main />
          </div>

        </div>
    </dashboardContext.Provider>
  )
}


  {/* <div className='flex w-screen h-screen'>
          <div className='w-2/12'>
              <SideBar />
          </div>

          <div className='w-10/12'>
            <Header />
          </div>
      </div> */}