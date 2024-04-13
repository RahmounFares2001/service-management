'use client';

import React from 'react'

import styles from './consultProject.module.css';
import { FaLock } from 'react-icons/fa';

export default function ProjectDetails() {
  return (
    <div className='w-full sm:w-9/12 flex flex-col justify-center items-center gap-10' >

      {/* Project name */}
      <div className={`${styles.fixedStyle} relative w-4/5 sm:w-1/2 flex `}>
                <input type="text" placeholder='' required='required'
                  className='py-2 pt-5 px-3 bg-gray-300 border border-gray-600 rounded-md w-full'
                  maxLength={20}
                  disabled />
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>Project name</span>
              <FaLock className='absolute top-1/3 right-5 cursor-pointer' />
      </div>

      {/* book of specifications */}
      <div className='flex gap-5 flex-col sm:flex-row'>
        <h1 className='sm:text-xl lg:text-2xl' >book of specifications</h1>
        <button className='px-5 py-1 bg-forthly text-gray-300 rounded-sm hover:bg-primary' >Download</button>
      </div>
      

    </div>
  )
}
