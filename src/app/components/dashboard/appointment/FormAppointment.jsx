'use client'

import React, { useContext, useState } from 'react'


// components
import Type from './Type'
import Date from './Date'
import InformationsAppointment from './InformationsAppointment'
import ConfirmationAppointment from './ConfirmationAppointment'


// context
import { dashboardContext } from '@/app/dashboard/layout'




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
        setShowMsg
       } = useContext(dashboardContext);



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

            <button className={`px-4 py-2 sm:px-10 sm:py-2
                              ${appoinmentComponentNumber == 4 ? 'bg-green-700' : 'bg-rose-700 hover:bg-rose-800'}
                              ${typeAppointment == '' && 'opacity-0'}`} 

                onClick={()=> { 
                    setAppoinmentComponentNumber(prev => 
                                          (prev == 1 && typeAppointment != '' ) ? prev + 1 : 
                                            (prev == 2 ) ? prev + 1 :
                                               (prev == 3 && informationsAppointment.length > 1 ) ? prev + 1 : prev);

                    setShowMsg((appoinmentComponentNumber == 3 &&informationsAppointment.length < 1) ? true : false)}}

                disabled={false}>{appoinmentComponentNumber == 4 ? 'Confirm' : 'Next Step'}</button>

        </div>

    </div>
  )
}
