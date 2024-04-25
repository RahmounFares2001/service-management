'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { consultProjectContext } from '@/app/developerDashboard/MyProjects/[projectId]/page';


export default function SideBar() {

    // active btn
    const {btn, setBtn} = useContext(consultProjectContext);
    const activeBtn = (id) => {
        return btn == id ? 'bg-gray-300 text-black' : ''
    };

  return (
    <div className='w-full sm:w-3/12 sm:h-full bg-forthly text-gray-300 sm:pt-10 flex flex-row sm:flex-col' >

        {/* Project details */}
        <button className={`lg:text-xl hover:bg-gray-300 hover:text-gray-900 text-sm sm:text-base
                    w-full py-2 lg:py-3 ${activeBtn('details')}`}
                onClick={()=> {setBtn("details")}} ><span className='hidden sm:inline' >Project</span>Details</button>

        {/* Project deadline */}
        <button className={`lg:text-xl hover:bg-gray-300 hover:text-gray-900 text-sm sm:text-base
                    w-full py-2 lg:py-3 ${activeBtn('deadline')}`}
                onClick={()=> {setBtn("deadline")}} ><span className='hidden sm:inline' >Project</span> deadline</button>

        {/* Deliver project */}
        <button className={`lg:text-xl hover:bg-gray-300 hover:text-gray-900 text-sm sm:text-base
                    w-full py-2 lg:py-3 ${activeBtn('deliver')}`}
                onClick={()=> {setBtn("deliver")}} >Deliver <span className='hidden sm:inline' >Project</span></button>

        {/* Back to dashboard */}
        <Link href='/developerDashboard/MyProjects' >
            <button className='lg:text-xl hover:bg-gray-300 hover:text-gray-900 text-sm sm:text-base
                        w-full py-2 lg:py-3'>
                <span className='hidden sm:inline' >Back to </span>dashboard
            </button>
        </Link>

    </div>
  )
}
