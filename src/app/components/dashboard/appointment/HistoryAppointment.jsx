import React from 'react'

// components
import TableAppointment from './TableAppointment'

export default function HistoryAppointment() {
  return (
    <div className='w-full sm:w-max pt-20 text-gray-200 flex flex-col gap-10 justify-center items-center' >
        <h1 className='text-center text-2xl sm:text-4xl md:text-5xl font-bold'>Appointment History</h1>

        <TableAppointment />

    </div>
  )
}
