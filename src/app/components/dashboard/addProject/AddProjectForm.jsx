'use client'

import React, { useContext } from 'react'

// framer motion
import { motion } from "framer-motion";


// components
import ProgressBarForm from './ProgressBarForm'
import ProjectType from './ProjectType'
import PackegeProject from './PackegeProject';


// context
import { dashboardContext } from '@/app/dashboard/layout';
import ProjectInformations from './ProjectInformations';
import ConfirmationProject from './ConfirmationProject';


export default function AddProjectForm() {
  
  const { 
      showAddProjectForm,
      setShowAddProjectForm,
      projectComponentNumber,
      setProjectComponentNumber,

      typeProject,
      setTypeProject,
      projectDescription,
      setProjectDescription,
      chosenPackege,
      setChosenPackage } = useContext(dashboardContext);

      const {book, informations} = projectDescription;
      console.log(book);
  
  return (
    <>
    {showAddProjectForm &&
    <div className='fixed top-0 z-20 w-full h-full flex justify-center items-center' >

        <motion.div  
              className='z-30 w-full px-1 sm:w-11/12 lg:w-4/5 2xl:w-3/5 h-96 flex flex-col rounded-xl relative'
              initial= {{x: '-100vw'}}
              animate= {{x: 0}}
              transition={{ duration: 0.5, delay: 0, stiffness: 50 , type: 'spring' }} >

            <ProgressBarForm />
            
            {projectComponentNumber == 1 && <ProjectType /> }
            {projectComponentNumber == 2 && <ProjectInformations /> }
            {projectComponentNumber == 3 && <PackegeProject /> }
            {projectComponentNumber == 4 && <ConfirmationProject /> }


            <div className='absolute bottom-5 w-full h-10 flex justify-between px-5' >
              {/* back */}
              <button className={`px-4 py-2 sm:px-10 sm:py-2 bg-gray-400 hover:bg-black 
                    hover:text-gray-200 text-black
                    ${projectComponentNumber == 1 && 'opacity-0'} `}
                    onClick={()=> {setProjectComponentNumber(prev => (prev > 1 ? prev - 1 : prev))}}
              >Back</button>

              {/* next  */}
              <button className={`px-4 py-2 sm:px-10 sm:py-2 
                          ${projectComponentNumber == 4 ? 'bg-green-700' : 'bg-rose-700 hover:bg-rose-800'} 
                           `} 
                        disabled={false}
                        onClick={()=> {setProjectComponentNumber(prev => 
                                          (prev == 1 && typeProject != '' ) ? prev +1 :
                                          ( prev == 2 && (book != '' && informations != '' ) )  ? prev + 1 :
                                          (prev == 3 && chosenPackege != '' ) ? prev +1 :  prev   ) }}>Next Step</button>

            </div>

        </motion.div> 



        {/* overlay */}
   
        <div className='fixed top-0 right-0 bg-gray-950/95 w-full h-full' 
              onClick={()=> {setShowAddProjectForm(false)}}>
                
        </div>
    </div>  }

    </>
  )
}
