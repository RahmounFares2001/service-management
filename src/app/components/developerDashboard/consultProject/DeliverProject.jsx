'use client';

import React, { useContext, useState } from 'react'
import InputFile from './InputFile'
import { consultProjectContext } from '@/app/developerDashboard/MyProjects/[projectId]/page';

import axios from 'axios';

import styles from './consultProject.module.css';
import { FaLock } from 'react-icons/fa';

import { useRouter } from 'next/navigation';
import {toast} from 'react-hot-toast';


export default function DeliverProject() {
  const router = useRouter();

  // context
  const {project} = useContext(consultProjectContext);

  //
  const [githubRepo, setGithubRepo] = useState('');

  // submit btn spin
  const [spin, setSpin] = useState(false);

  // 
  const onDeliver = async () => {
    try {
      setSpin(true);
      const response = await axios.post('/api/developer/deliverProject', {
                          project: project,
                          delivery: {
                            githubRepo: githubRepo
                          } });
      setSpin(false);
      toast.success('Project delivered');
      router.push('/developerDashboard/MyProjects');

    } catch (error) {
      setSpin(false);
      toast.error('Email or password wrong!');
      console.log(error);
    }
  };

  return (
    <div className='w-full sm:w-9/12 flex flex-col justify-center items-center gap-10' >  

      <h1 className='sm:text-xl lg:text-2xl' >Deliver Project</h1>

       {/* github repo */}
       <div className={`${styles.inputBox} relative w-4/5 sm:w-1/2 flex `}>
                <input type="text" placeholder='' required='required'
                  className='py-2 pt-5 px-3 bg-gray-300 border border-gray-600 rounded-md w-full'
                  onChange={(e)=> {setGithubRepo(e.target.value)}} />
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>Github Repo</span>
              <FaLock className='absolute top-1/3 right-5 cursor-pointer' />
      </div>

      <InputFile />

      <button className={`${spin && 'button button-loading'} px-10 py-1 bg-gray-300 text-gray-900 sm:bg-forthly sm:text-gray-300 rounded-sm hover:bg-primary
                lg:text-xl`} 
              onClick={onDeliver}>Deliver</button>
      
    </div>
  )
}