import React, { useContext } from 'react'


// context 
import { dashboardContext } from '@/app/dashboard/layout'



export default function InformationsAppointment() {

  // context
  const { informationsAppointment, setInformationsAppointment } = useContext(dashboardContext)

  return (
    <div className='w-full h-full flex justify-center'>
      <div className='w-11/12 sm:w-10/12 lg:w-4/5 h-max flex flex-col gap-7 items-center text-black
                pb-20 sm:pb-0 pt-10 sm:pt-0'>
        <h1 className='text-center text-sm sm:text-2xl font-bold'>Provide us with some informations</h1>
        <textarea name="" cols="30" rows="5" placeholder='additional informations'
            className='w-11/12 sm:w-4/5 px-5 py-2 sm:text-xl bg-gray-200 rounded-md border border-black'
            onChange={(event) => setInformationsAppointment(event.target.value)}></textarea>

      </div>
    </div>
  )
}
