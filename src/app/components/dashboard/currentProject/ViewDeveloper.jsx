'use client';
import React, { useContext, useEffect, useState } from 'react';
import { BiShow } from 'react-icons/bi';
import { FaRegEyeSlash } from 'react-icons/fa';

import axios from 'axios';
import {toast} from 'react-hot-toast';


import { FaCloudDownloadAlt } from "react-icons/fa";
import { currentProjectContext } from '@/app/dashboard/currentProjects/page';


export default function ViewDeveloper() {
  
    // context
    const {  viewDeveloper,
             setViewDeveloper,
             developerToShow,
             setDeveloperToShow } = useContext(currentProjectContext);


    // review exist ?
    const [developer, setDeveloper] = useState({
        name: '',
        email: ''
    });




    // check if review exist 
    const getDeveloper = async () => {
        try {
            const repsonse1 = await axios.post('/api/users/getDeveloper', {project: developerToShow});
            const repsonse = await axios.get('/api/users/getDeveloper');
            const developer = repsonse.data.developer;
            setDeveloper(developer);            
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() =>{
        getDeveloper();
    }, []);
    
  return (
    <div className='w-11/12 sm:w-4/6 md:w-4/5 lg:w-3/6 h-max relative rounded-tr-xl bg-thirdly
                rounded-md shadow-xl shadow-gray-300 py-10' >
        <ul className='flex flex-col gap-8 justify-center items-center px-3 sm:px-0'>
            <h1 className='text-xl sm:text-2xl md:text-3xl text-gray-300'>Your developer !</h1>
            {/* developer name */}
            <li className='inptFix relative w-full sm:w-4/5 lg:w-72 flex '>
                    <input type="text" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-thirdly border rounded-md w-full text-gray-300'
                        value={developer.name}
                        disabled />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm text-gray-300'>Developer Name</span>
            </li>

            {/* developer email */}
            <li className='inptFix relative w-full sm:w-4/5 lg:w-72 flex'>
                    <input type="text" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-thirdly border rounded-md w-full text-gray-300'
                        value={developer.email}
                        disabled />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm text-gray-300'>Developer Email</span>
            </li>



            <li className='w-full flex gap-3 justify-center items-center
                            flex-col-reverse sm:flex-row'>
                <button className='font-bold text-sm  hover:bg-red-800 bg-red-700
                                py-3 px-12  rounded-3xl'
                                onClick={()=> {setViewDeveloper(false)}}
                                    ><span className='button-text' >Go back</span></button>

            </li>
        </ul>
        
    </div>
  )
}