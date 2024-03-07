import React, { useContext } from 'react'


// context 
import { dashboardContext } from '@/app/dashboard/layout'


// icons
import { RiAlertLine } from "react-icons/ri";




export default function InformationsAppointment() {

  // context
  const { 
      informationsAppointment,
      setInformationsAppointment,

      showMsg,
      setShowMsg } = useContext(dashboardContext);

 
  const handleMsg = () => {
    setTimeout(() => {
      setShowMsg(false)
    }, 2000);
  } 
  {showMsg == true && handleMsg() };
 
  return (
    <div className='w-full h-full flex justify-center bg-gray-300 pt-5 lg:pt-10 rounded-tr-xl relative'>
      <div className='w-11/12 sm:w-10/12 lg:w-4/5 h-max flex flex-col gap-7 items-center text-black
                pb-20 sm:pb-0 pt-5 sm:pt-0'>
        <h1 className='text-center text-xl sm:text-2xl font-bold'>Provide us with some informations</h1>
        <textarea name="" cols="30" rows="5" placeholder='additional informations'
            className='w-11/12 sm:w-4/5 px-5 py-2 sm:text-xl bg-gray-200 rounded-md border border-black'
            onChange={(event) => setInformationsAppointment(event.target.value)}></textarea>

      </div>

      {showMsg &&
        <div className='fixed w-full h-full right-0 top-0 z-40  flex justify-center items-center' >
          <h1 className='text-center sm:text-2xl font-bold bg-gradient-to-tr from-rose-700 to-rose-950 text-gray-200 
                  rounded-xl hover:bg-gradient-to-bl
                  px-7 sm:px-10 py-3 sm:py-5 flex gap-3 sm:gap-5 justify-center items-center' >
                      <RiAlertLine className='w-10 h-10 sm:w-14 sm:h-14' />
                      <span>Please provide informations</span></h1>
        </div> }

      {showMsg && 
        <div className='fixed top-0 right-0 w-full h-full bg-gray-950/95 z-30'>

        </div> }
      
    </div>
  )
}
