'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md';
import axios from 'axios';
import { adminDashboardContext } from '@/app/adminDashboard/[username]/page';

import {motion} from "framer-motion";

import {toast} from 'react-hot-toast';
import ShowAppInformations from './ShowAppInformations';


export default function ClientAppointments() {
  // contect
  const heads = ['Num','Type','Date','Status','Action'];

  // context
  const {clientUsername, 
          showInformations, 
          setShowInformations,
          setSelectedAppointment} = useContext(adminDashboardContext);

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


  // submit btn spin
  const [spinAccept, setSpinAccept] = useState(false);
  const [spinDecline, setSpinDecline] = useState(false);

  // accept app
  const onAction = async (action, appointment) => {
      try {
          if(action == 'accept') {setSpinAccept(true);} else if(action == 'decline'){setSpinDecline(true)};
          const response = await axios.post('/api/admin/setAppointment', {
                              action: action,
                              appointment: appointment});

          setSpinAccept(false);
          setSpinDecline(false);
          if(action == 'accept') {
            toast.success('Appointment accepted succesfly')
          } else if(action == 'decline'){
            toast.success('Appointment deleted succesfly')
          };
          await fetchApppointments();
      } catch (error) {
          toast.error('Some thing wrong');
          console.log(error);
          setSpinAccept(false);
          setSpinDecline(false);
      }
  }

  return (
    <div className='lg:mt-5 w-full lg:w-auto flex flex-col items-center lg:pl-16'>
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
                        <td className={`px-2 py-4 md:px-10 md:py-5 ${appointment.status == 'pending' ? 'text-yellow-700' :
                                                        appointment.status == 'confirmed' ? 'text-green-700' :
                                                        appointment.status == 'cancelled' ? 'text-red-700' : 'text-gray-700' } `} >{appointment.status}</td>
                        <td className='px-2 py-4 md:px-10 md:py-5'>{appointment.date}</td>
                        
                        <td className='px-2 py-4 md:px-10 md:py-5 flex flex-col gap-2'>
                            {appointment.status == 'pending'  && <>
                            <div className={`${spinAccept && 'button button-loading'} bg-green-800 hover:bg-green-900 px-3 py-1 rounded-md cursor-pointer text-sm`}
                                    onClick={()=> {onAction('accept', appointment)}}>
                                <div className='w-full h-full'><span className='button-text' >Accept</span></div>
                            </div>
                            <div className={`${spinDecline && 'button button-loading'} bg-red-800 hover:bg-red-900 px-3 py-1 rounded-md cursor-pointer text-sm`}
                                  onClick={()=> {onAction('decline', appointment)}}>
                                <div className='w-full h-full'><span className='button-text' >Decline</span></div>
                            </div> </> }
                            <div className='bg-yellow-800 hover:bg-yellow-900 px-3 py-1 rounded-md cursor-pointer text-sm'
                                  onClick={()=> {setSelectedAppointment(appointment);
                                                  setShowInformations(true)}} >
                                <div className='w-full h-full'>View</div>
                            </div>
                        </td>
                    </tr> ))}

                </tbody>
            </table>
            </div>


            {/* overlay */}
        {showInformations &&
        <div className='w-full h-screen fixed right-0 top-0 bg-gray-300/90 z-30'
              onClick={() => {setShowInformations(false) }}>
        </div> }

        {/* add developer form */}
        {showInformations &&
        <motion.div className='fixed top-0 w-full h-full flex justify-center items-center z-50'
                    initial={{opacity: 0, x: '-60vw'}}
                    animate={{opacity: 1, x: '0vw' }} >
            <ShowAppInformations />
        </motion.div> }
    </div>
  )
};