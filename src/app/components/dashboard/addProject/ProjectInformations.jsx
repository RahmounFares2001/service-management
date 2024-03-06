import React, { useContext } from 'react'


// context
import { dashboardContext } from '@/app/dashboard/layout';


export default function ProjectInformations() {

  const { projectDescription,  setProjectDescription } = useContext(dashboardContext);

  return (
    <div className='w-full h-full bg-gray-300 rounded-b-xl pt-10 flex flex-col gap-4 sm:gap-7' >
        <div className='flex flex-col items-center gap-3 text-center'>
            <h1 className='text-center text-xl sm:text-2xl font-bold text-gray-800'>Your project details</h1>
            <hr className='w-36 sm:w-44 border-2 border-rose-700' />
        </div>


        <div className='px-1 sm:px-8 md:px-10 lg:px-24 flex flex-col gap-5 items-center' >
            <div className='flex sm:flex-row flex-col  gap-3 sm:gap-5' >
                <h1 className='text-center  md:text-xl lg:text-2xl text-gray-800'>book of specifications</h1>
                <input type='file' placeholder='fares' accept='.pdf'
                        className='text-slate-500 file:px-3 file:py-1 md:file:px-4 md:file:py-2 file:rounded-full file:border-0
                          file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 file:cursor-pointer
                          text-xs
                            
                           ' />
            </div>
          

            
            <textarea name="" cols="30" rows="3" placeholder='additional informations'
                        className='w-11/12 sm:w-4/5 px-5 py-2 sm:text-xl bg-gray-200 rounded-md 
                        border border-black text-black'
                  onChange={(event) => setProjectDescription(prevState => ({ ...prevState, informations: event.target.value }))} >

            </textarea>


        </div>

        
    </div>
  )
}
