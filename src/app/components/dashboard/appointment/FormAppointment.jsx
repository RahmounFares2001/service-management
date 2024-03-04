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
        componentNumber,
        setComponentNumber,
        typeAppointment,
        setTypeAppointment,
        dateAppointment,
        setDateAppointment,
        informationsAppointment,
        setInformationsAppointment } = useContext(dashboardContext);

    
    const condition = () => {

    }


  return (
    <div className='w-full sm:w-4/5 h-96 sm:h-full relative text-gray-200 pt-5'>


        {componentNumber == 1 &&  <Type />}
        {componentNumber == 2 &&  <Date />}
        {componentNumber == 3 &&  <InformationsAppointment /> }

      





        {/* next and back btns */}
        <div className='absolute w-full bottom-0 sm:text-xl flex justify-between px-2 sm:px-7 py-2' >
            <button className={`px-3 py-1 sm:px-10 sm:py-2 bg-gray-400 hover:bg-black 
                  hover:text-gray-200 text-black`} 
                  onClick={()=> { setComponentNumber(prev => (prev > 1 ? prev - 1 : prev))}}>Back</button>

            <button className={`px-3 py-1 sm:px-10 sm:py-2 bg-rose-700 hover:bg-rose-800`} 
                onClick={()=> { 
                    setComponentNumber(prev => 
                                          (prev == 1 && typeAppointment != '' ) ? prev + 1 : 
                                            (prev == 2 ) ? prev + 1 :
                                               (prev == 3 && informationsAppointment.length >3 ) ? prev + 1 : prev
                                          )}}
                disabled={false}>Next Step</button>

        </div>

    </div>
  )
}
