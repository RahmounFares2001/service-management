'use client';
import React, { useContext, useEffect, useState } from 'react';
import { BiShow } from 'react-icons/bi';
import { FaRegEyeSlash } from 'react-icons/fa';

import axios from 'axios';
import {toast} from 'react-hot-toast';


import { FaCloudDownloadAlt } from "react-icons/fa";

import { adminDashboardContext } from '@/app/adminDashboard/[username]/page';


export default function ShowAppInformations() {
  
    // context
    const {  showInformations,
            setShowInformations,
            selectedAppointment,
            setSelectedAppointment } = useContext(adminDashboardContext);


    // 
    const [informations, setInformations] = useState('');

    // check if review exist 
    const getInformations = async () => {
        try {
            const repsonse1 = await axios.post('/api/admin/getAppointmentInformations', selectedAppointment);
            const repsonse = await axios.get('/api/admin/getAppointmentInformations');
            const informations = repsonse.data.informations;
            setInformations(informations);
            
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() =>{
        getInformations();
    }, []);

    
  return (
    <div className='w-11/12 sm:w-4/6 md:w-4/5 lg:w-3/6 h-max relative rounded-tr-xl bg-thirdly
                rounded-md shadow-xl shadow-gray-300 py-10' >
        <ul className='flex flex-col gap-8 justify-center items-center px-3 sm:px-0'>
            <h1 className='sm:text-2xl md:text-3xl text-gray-300'>Appointment informations</h1>

            <textarea name="app" cols="20" rows="10"
                        className='py-2 pt-5 px-3 bg-thirdly border rounded-md w-11/12 text-gray-300
                        sm:w-4/5 lg:w-96' value={informations}
                        disabled ></textarea>


            <button className='font-bold text-sm  hover:bg-red-800 bg-red-700
                        py-3 px-12  rounded-3xl'
                        onClick={()=> {setShowInformations(false)}}
                            ><span className='button-text' >Go back</span></button>
                
        </ul>
        
    </div>
  )
}