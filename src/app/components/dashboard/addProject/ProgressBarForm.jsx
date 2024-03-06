import React, { useContext } from 'react'


// context
import { dashboardContext } from '@/app/dashboard/layout';


export default function ProgressBarForm() {

  const { projectComponentNumber, setProjectComponentNumber } = useContext(dashboardContext);

  return (
    <div className='w-full h-5 rounded-t-xl bg-gray-600 flex justify-start border border-rose-700' >
      <div className={`${projectComponentNumber == 1 ? 'w-1/4' :
                          projectComponentNumber == 2 ? 'w-2/4' :
                            projectComponentNumber == 3 ? 'w-3/4' : 'w-full' } 
                        h-full bg-rose-700 rounded-tl-xl`} >            
      </div>
    </div>
  )
}