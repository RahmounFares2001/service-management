import React from 'react'

// css
import styles from "./userAccount.module.css"

export default function Security() {
  return (
    <div className='text-black flex flex-col  lg:items-stretch gap-10 
    w-full sm:px-10 md:px-20 lg:px-10 lg:w-9/12 pt-5 sm:pt-10 lg:pt-20 my-5
    mx-2 sm:mx-4 lg:mx-0 rounded-md
    pb-20 lg:pb-20
    border border-gray-700'>
      
      <form action=""
          className='flex flex-col gap-10 '>
      
      <h1 className='text-gray-300 text-4xl font-bold text-center'>Security settings</h1>

      <ul className='flex flex-col gap-10 items-center text-gray-300'>

            {/* Old password */}
            <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-1/2 flex `}>
              <input type="password" placeholder='' required='required'
                className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
            <span className='absolute top-1 left-2 pointer-events-none duration-500'>Old Password</span>
            </li>

            {/* New Password */}
            <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-1/2 flex `}>
              <input type="password" placeholder='' required='required'
                className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
            <span className='absolute top-1 left-2 pointer-events-none duration-500'>New Password</span>
            </li>
            {/* Repeat new password */}
            <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-1/2 `}>
              <input type="password" placeholder='' required='required'
                  className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>Repeat New Password</span>
            </li>

             {/* sumbit btn */}
            <li className='flex justify-center sm:justify-normal text-black' >
                <button className='hover:bg-white px-20 py-2 text-xl bg-gray-300 rounded-md' >Save</button>
            </li>
          </ul>
      </form>
    </div>
  )
}
