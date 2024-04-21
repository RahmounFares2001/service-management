'use client';

import React, { useContext } from 'react'

import styles from './consultProject.module.css';
import { FaLock } from 'react-icons/fa';
import { consultProjectContext } from '@/app/developerDashboard/MyProjects/[projectId]/page';

export default function ProjectsDeadline() {
  // context
  const {project} = useContext(consultProjectContext);

  return (
    <div className='w-full sm:w-9/12 flex flex-col justify-center items-center gap-10' >

      {/* Project deadline */}
      <div className={`${styles.fixedStyle} relative w-4/5 sm:w-1/2 flex `}>
                <input type="text" placeholder='' required='required'
                  className='py-2 pt-5 px-3 bg-gray-300 border border-gray-600 rounded-md w-full'
                  value={project ? project.deadline : ''}
                  disabled />
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>Project deadline</span>
              <FaLock className='absolute top-1/3 right-5 cursor-pointer' />
      </div>

      <button className='px-10 py-1 bg-forthly text-gray-300 rounded-sm hover:bg-primary
                lg:text-xl' >Save</button>

    </div>
  )
}
