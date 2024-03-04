import React, { useContext } from 'react'

// context
import { dashboardContext } from '@/app/dashboard/layout';

export default function SideBarAppointment() {

  // component number render
  const { componentNumber, setComponentNumber } = useContext(dashboardContext);
  

  return (
    <div className='bg-thirdly text-gray-200 lg:w-1/5 h-1/5 sm:h-full px-3 sm:px-0 rounded-t-xl sm:rounded-r-none sm:rounded-l-xl'>
      <ul className='w-full lg:pl-3 xl:pl-5 lg:pr-0 lg:pt-5 pt-3 pb-3 lg:pb-0 sm:pl-5 sm:pr-5  flex sm:flex-col gap-5 font-bold'>

        {/* type */}
        <li className='flex items-center justify-center sm:justify-normal gap-3 w-full cursor-pointer'>
            <span className={`${componentNumber == 1 ? 'bg-rose-700' : 'bg-secondly'} flex justify-center items-center  rounded-full p- font-bold w-8 sm:w-10 h-8 sm:h-10 text-center text-sm transition-colors duration-500`}>01</span>
            <span className={`${componentNumber == 1 && 'text-rose-700'} hidden lg:block transition-colors duration-500`}>Type</span>
        </li>

        {/* date */}
        <li className='flex items-center justify-center sm:justify-normal  gap-3 w-full h-full cursor-pointer'>
            <span className={`${componentNumber == 2 ? 'bg-rose-700' : 'bg-secondly'} flex justify-center items-center rounded-full p-2 font-bold w-8 sm:w-10 h-8 sm:h-10 text-center text-sm transition-colors duration-500`}>02</span>
            <span className={`${componentNumber == 2 && 'text-rose-700'} hidden lg:block transition-colors duration-500`}>Date</span>
        </li>


        {/* informations */}
        <li className='flex items-center justify-center sm:justify-normal gap-3 w-full cursor-pointer'>
            <span className={`${componentNumber == 3 ? 'bg-rose-700' : 'bg-secondly'} flex justify-center items-center rounded-full p-2 font-bold w-8 sm:w-10 h-8 sm:h-10 text-center text-sm transition-colors duration-500`}>03</span>
            <span className={`${componentNumber == 3 && 'text-rose-700'} hidden lg:block transition-colors duration-500`}>Informations</span>
        </li>


        {/* confirmation */}
        <li className='flex items-center justify-center sm:justify-normal  gap-3 w-full cursor-pointer'>
            <span className={`${componentNumber == 4 ? 'bg-rose-700' : 'bg-secondly'} flex justify-center items-center  rounded-full p-2 font-bold w-8 sm:w-10 h-8 sm:h-10 text-center text-sm transition-colors duration-500`}>04</span>
            <span className={`${componentNumber == 4 && 'text-rose-700'} hidden lg:block transition-colors duration-500`}>Confirmation</span>
        </li>

      </ul>

    </div>
  )
}
