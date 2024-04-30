import MyProjects from '@/app/components/developerDashboard/MyProjects'
import React from 'react'

import {Toaster} from 'react-hot-toast';

export default function MyPr() {
  return (
    <>
    <div className="bg-forthly 2xl:flex 2xl:justify-center 2xl:items-center" > 
    <div className="2xl:w-2000" >
        <MyProjects />

    <Toaster />

    </div>
    </div>
    </>
  )
}