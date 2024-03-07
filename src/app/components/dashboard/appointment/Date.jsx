import React from 'react'


//components
import Calender from "./Calender";


export default function Date() {
  return (
    <div className='w-full h-full flex justify-center bg-gray-300 pt-5 rounded-tr-xl' >
        <div className='w-4/5 h-full text-gray-200 flex flex-col gap-7 items-center'>

            <Calender />




        </div>
    </div>
  )
}
