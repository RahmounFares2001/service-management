import React, { useContext } from 'react'

// icon
import { SiSimilarweb } from "react-icons/si";
import { FaMobileScreenButton } from "react-icons/fa6";
import { dashboardContext } from '@/app/dashboard/layout';


export default function ProjectType() {

  const { typeProject, setTypeProject } = useContext(dashboardContext);


  return (
    <div className='w-full h-full bg-gray-300 rounded-b-xl pt-10 flex flex-col gap-5' >
      <h1 className='text-center text-xl sm:text-2xl font-bold text-gray-800'>Chose your Project type</h1>
    
      <div className='flex gap-3 sm:gap-10 px-2 sm:px-8 md:px-20 lg:px-32 justify-center items-center'>

        {/* web */}
        <div className={`w-1/2 h-44  flex flex-col justify-center items-center gap-3 rounded-xl cursor-pointer hover:bg-gradient-to-bl
                        ${typeProject == 'web' ? 'bg-gray-900 border-2' : 'bg-gradient-to-tr from-rose-950 to-rose-800'}  `} 
                        onClick={()=> {setTypeProject('web')}}>
          <div className='bg-gray-600/50 p-2 sm:p-4 rounded-full' >
            <SiSimilarweb className='w-8 h-8 sm:w-14 sm:h-14' />
          </div>
          <h1 className='text-center sm:text-xl md:text-2xl font-bold' >Web Application</h1>
        </div>

        {/* mobile */}
        <div className={`w-1/2 h-44  flex flex-col justify-center items-center gap-3 rounded-xl cursor-pointer hover:bg-gradient-to-bl
                        ${typeProject == 'mobile' ? 'bg-gray-900 border-2' : 'bg-gradient-to-tr from-rose-950 to-rose-800'}  `} 
                        onClick={()=> {setTypeProject('mobile')}}>
          <div className='bg-gray-600/50 p-2 sm:p-4 rounded-full' >
            <FaMobileScreenButton className='w-8 h-8 sm:w-14 sm:h-14' />
          </div>
          <h1 className='text-center sm:text-xl md:text-2xl font-bold' >Mob Application</h1>
        </div>
      </div>

    </div>
  )
}
