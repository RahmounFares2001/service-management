'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md';
import axios from 'axios';
import { adminDashboardContext } from '@/app/adminDashboard/[username]/page';

export default function ClientAppointments() {


  // contect
  const heads = ['Num','Type','Date','Status','Action'];

  // context
  const {clientUsername} = useContext(adminDashboardContext);

  const clientusername = {clientUsername: clientUsername};


  // app
  const [appointments, setAppointments] = useState([]);



  const fetchApppointments = async () => {
    try {
      const response1 = await axios.post('/api/admin/fetchAppointments', clientusername);

      const response2 = await axios.get('/api/admin/fetchAppointments');
      const appointments = response2.data.appointments;
      setAppointments(appointments);    
      console.log(appointments)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchApppointments();
  }, []);

  return (
    <div className='lg:mt-5 w-full lg:w-auto flex flex-col items-center'>
      {/* search bar */}
      <div className='w-11/12 lg:w-10/12 xl:w-full bg-primary flex flex-col gap-5 px-5 pt-5 lg:ml-36 xl:ml-0' >
        <h1 className='text-gray-200 text-xl sm:text-2xl md:text-3xl' >Appointments list</h1>
      </div>

      <div className='overflow-x-scroll sm:overflow-auto scrollbar 
              w-11/12 lg:w-10/12 xl:w-full lg:ml-36 xl:ml-0 '>
            
            <table className='text-center bg-primary text-gray-300 w-full pt-5'>
                <thead>
                  <tr className='text-sm md:text-base'>
                      {heads.map((head, index) => (
                          <th key={index} className='px-2 py-4 md:px-10 md:py-5' >{head}</th>
                      ))}
                  </tr>
                </thead>
                <tbody className='text-xs sm:text-sm lg:text-base'>
                  {appointments.map((appointment, index) => (
                    <tr key={index}>
                        <td className='px-2 py-4 md:px-10 md:py-5 '>1</td>
                        <td className='px-2 py-4 md:px-10 md:py-5'>{appointment.type}</td>
                        <td className='px-2 py-4 md:px-10 md:py-5 text-yellow-700'>{appointment.status}</td>
                        <td className='px-2 py-4 md:px-10 md:py-5'>{appointment.date}</td>
                        
                        <td className='px-2 py-4 md:px-10 md:py-5 flex gap-2'>
                            {/* <div className='bg-green-800 hover:bg-green-900 px-5 py-1 rounded-md cursor-pointer'>
                                <Link href='' className='w-full h-full'>View</Link>
                            </div> */}
                            <div className='bg-green-800 hover:bg-green-900 px-3 py-1 rounded-md cursor-pointer text-sm'>
                                <div className='w-full h-full'>Accept</div>
                            </div>
                            <div className='bg-red-800 hover:bg-red-900 px-3 py-1 rounded-md cursor-pointer text-sm'>
                                <div className='w-full h-full'>Decline</div>
                            </div>
                        </td>
                    </tr> ))}

                </tbody>
            </table>
            </div>
    </div>
  )
};