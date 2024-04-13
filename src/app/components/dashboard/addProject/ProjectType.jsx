import React, { useContext } from 'react'

// framer motion
import { motion } from "framer-motion";

// icon
import { SiSimilarweb } from "react-icons/si";
import { FaMobileScreenButton } from "react-icons/fa6";
import { dashboardContext } from '@/app/dashboard/layout';


export default function ProjectType() {

  const { typeProject, setTypeProject } = useContext(dashboardContext);


  return (
    <div className='w-full h-full bg-gray-300 rounded-b-xl pt-10 flex flex-col gap-5' >
      <motion.h1 
          className='text-center text-xl sm:text-2xl font-bold text-gray-800'
          initial={{opacity: 0}} 
          animate={{opacity: 1}}
          transition={{delay: 0.5}} >Chose your Project type
      </motion.h1>
    
      <div className='flex gap-2 sm:gap-10 md:gap-5 lg:gap-10 px-2 sm:px-8 md:px-20 lg:px-10 xl:px-32 justify-center items-center'>

        {/* web */}
        <motion.div className={`w-1/3 h-40 sm:h-44 flex flex-col justify-center items-center gap-3 rounded-xl cursor-pointer hover:bg-gradient-to-bl
                        ${typeProject == 'Web application' ? 'bg-gray-900 border-2' : 'bg-gradient-to-tr from-rose-950 to-rose-800'}  `} 
                        onClick={()=> {setTypeProject('Web application')}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.3, duration: 0.4}}
                         >
          <div className='bg-gray-600/50 p-2 sm:p-4 rounded-full' >
            <SiSimilarweb className='w-8 h-8 lg:w-14 lg:h-14' />
          </div>
          <h1 className='text-center text-xl md:text-xl font-bold' >Web App<span className='hidden md:inline' >lication</span></h1>
        </motion.div>

        {/* mobile */}
        <motion.div className={`w-1/3 h-40 sm:h-44 flex flex-col justify-center items-center gap-3 rounded-xl cursor-pointer hover:bg-gradient-to-bl
                        ${typeProject == 'Mobile application' ? 'bg-gray-900 border-2' : 'bg-gradient-to-tr from-rose-950 to-rose-800'}  `} 
                        onClick={()=> {setTypeProject('Mobile application')}}
                        initial={{x: -300, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: 0.3, duration: 0.4}} >
          <div className='bg-gray-600/50 p-2 sm:p-4 rounded-full' >
            <FaMobileScreenButton className='w-8 h-8 lg:w-14 lg:h-14' />
          </div>
          <h1 className='text-center text-xl md:text-xl font-bold' >Mob App<span className='hidden md:inline' >lication</span></h1>
        </motion.div>

        
      {/* both */}
      <motion.div className={`w-1/3 h-40 sm:h-44 flex flex-col justify-center items-center gap-3 rounded-xl cursor-pointer hover:bg-gradient-to-bl
                        ${typeProject == 'Web/Mob application' ? 'bg-gray-900 border-2' : 'bg-gradient-to-tr from-rose-950 to-rose-800'}  `} 
                        onClick={()=> {setTypeProject('Web/Mob application')}}
                        initial={{x: -300, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: 0.5, duration: 0.4}}>
          <div className='bg-gray-600/50 p-2 sm:p-4 rounded-full flex gap-2' >
            <SiSimilarweb className='w-8 h-8 lg:w-14 lg:h-14' />
            <FaMobileScreenButton className='w-8 h-8 lg:w-14 lg:h-14' />
          </div>
          <h1 className='text-center sm:text-xl md:text-xl font-bold' >Web & Mob</h1>
        </motion.div>

      </div>


    </div>
  )
}
