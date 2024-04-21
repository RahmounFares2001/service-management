'use client'

import React, { useContext, useState } from 'react'


// components
import Type from './Type'
import Date from './Date'
import InformationsAppointment from './InformationsAppointment'
import ConfirmationAppointment from './ConfirmationAppointment'


// context
import { dashboardContext } from '@/app/dashboard/layout'

import axios from 'axios';
import {toast} from 'react-hot-toast';



export default function FormAppointment() {

   // component number render
   const { 
        appoinmentComponentNumber,
        setAppoinmentComponentNumber,
        typeAppointment,
        setTypeAppointment,
        dateAppointment,
        setDateAppointment,
        informationsAppointment,
        setInformationsAppointment,
        showMsg,
        setShowMsg,
        setShowAppointmentForm
       } = useContext(dashboardContext);

    const appointmentData = {
      typeAppointment: typeAppointment,
      dateAppointment: dateAppointment,
      informationsAppointment: informationsAppointment
    };

    // on confirm
    const onConfirm =  async () => {
      try {
        setSpin(true);
        const response = await axios.post('/api/users/reserveAppointment', appointmentData);
        toast.success('Appointment reserved!');
        setSpin(false);
        setShowAppointmentForm(false);
      } catch (error) {
        setSpin(false);
        toast.error('Some thing wrong!');
        console.log(error);
      }
    };

    // submit btn spin
    const [spin, setSpin] = useState(false);


  return (
    <div className='w-full lg:w-4/5 h-96 sm:h-full relative text-gray-200 rounded-tr-xl'>


        {appoinmentComponentNumber == 1 &&  <Type />}
        {appoinmentComponentNumber == 2 &&  <Date />}
        {appoinmentComponentNumber == 3 &&  <InformationsAppointment /> }
        {appoinmentComponentNumber == 4 &&  <ConfirmationAppointment /> }




        {/* next and back btns */}
        <div className='absolute w-full bottom-3  sm:bottom-0 sm:text-xl flex justify-between px-2 sm:px-7 py-2' >
            <button className={`px-4 py-2 sm:px-10 sm:py-2 bg-gray-400 hover:bg-black 
                  hover:text-gray-200 text-black
                  ${appoinmentComponentNumber == 1 && 'opacity-0'}`} 
                  onClick={()=> { setAppoinmentComponentNumber(prev => (prev > 1 ? prev - 1 : prev))}}>Back</button>


            {appoinmentComponentNumber == 4 ?
              <button className={`${spin && 'button button-loading'} px-4 py-2 sm:px-10 sm:py-2 bg-green-700`}
                      onClick={()=> { onConfirm() }} ><span className='button-text'>Confirm</span></button> :

              <button className={`px-4 py-2 sm:px-10 sm:py-2 bg-rose-700 hover:bg-rose-800
                                ${typeAppointment == '' && 'opacity-0'}`} 

                  onClick={()=> { 
                      setAppoinmentComponentNumber(prev => 
                                            (prev == 1 && typeAppointment != '' ) ? prev + 1 : 
                                              (prev == 2 ) ? prev + 1 :
                                                (prev == 3 && informationsAppointment.length > 1 ) ? prev + 1 : prev);

                      setShowMsg((appoinmentComponentNumber == 3 && informationsAppointment.length < 1) ? true : false)}}

                  disabled={false}>Next Step</button> }


        </div>

    </div>
  )
}