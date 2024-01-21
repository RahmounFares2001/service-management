"use client"

import React from 'react'

// components
import SideBar from './SideBar'
import Header from './Header'


export default function Dashboard() {

  return (
    <div className='flex w-screen h-screen'>
        <div className='w-2/12'>
            <SideBar />
        </div>

        <div className='w-10/12'>
          <Header />
        </div>
    </div>
  )
}