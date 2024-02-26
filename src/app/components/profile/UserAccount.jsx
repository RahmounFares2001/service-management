import React from 'react'


// css 
import styles from "./userAccount.module.css"



export default function UserAccount() {
  return (
    <>
   

<form action="" className='text-black flex flex-col  lg:items-stretch gap-10 
          w-full sm:px-10 md:px-20 lg:px-10 lg:w-9/12 pt-5 sm:pt-10 lg:pt-5 my-5
          mx-2 sm:mx-4 lg:mx-0 rounded-md
          pb-20 lg:pb-5
          border border-gray-700'> 
        
        {/* mobile profile pic */}
        <div className='flex justify-center gap-5 items-center lg:hidden'>
          <img src="./images/dashboard/header/profile.jpg" alt="photo"
              className='rounded-full w-16 h-16 sm:w-20 sm:h-20 cursor-pointer border-gray-300 border' />
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-xl sm:text-2xl pointer-events-none text-gray-300'>Rahmoun Fares</h1>
            </div>
        </div>


        <h1 className='text-3xl font-bold text-center sm:text-start text-gray-300'>User Account</h1>

        {/* form details */}

        <ul className='flex flex-col gap-8'>

          {/* lign 1 */}
          <ul className='flex flex-col sm:flex-row gap-10 items-center text-gray-300'>
            {/* UserName */}
            <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2 flex `}>
              <input type="text" placeholder='' required='required'
                className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
            <span className='absolute top-1 left-2 pointer-events-none duration-500'>UserName</span>
            </li>
            {/* surName */}
            <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2 `}>
              <input type="text" placeholder='' required='required'
                  className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>Surname</span>
            </li>
          </ul>

          {/* lign 2 */}
            <ul className='flex flex-col sm:flex-row items-center gap-10 text-gray-300'>
              {/* email */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2`}>
                  <input type="email" placeholder='' required='required'
                      className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
                  <span className='absolute top-1 left-2 pointer-events-none duration-500'>Email Adress</span>
              </li>

              {/* Phone */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2`}>
                  <input type="number" placeholder='' required='required'
                      className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
                  <span className='absolute top-1 left-2 pointer-events-none duration-500'>Phone Number</span>
              </li>
            </ul>

            {/* adress */}
            <h1 className='text-2xl font-bold text-gray-300 text-center lg:text-start'>Adress</h1>

             {/* lign 3 */}
            <ul className='flex flex-col sm:flex-row items-center gap-10 text-gray-300'>
              {/* adress */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-4/5`}>
                  <input type="text" placeholder='' required='required'
                      className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
                  <span className='absolute top-1 left-2 pointer-events-none duration-500'>Adress</span>
              </li>

              {/* Appartment */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-2/6`}>
                  <input type="text" placeholder='' required='required'
                      className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
                  <span className='absolute top-1 left-2 pointer-events-none duration-500'>Appartment</span>
              </li>
            </ul>

             {/* lign 3 */}
              {/* City */}
              <ul className='flex flex-col sm:flex-row items-center gap-10 text-gray-300'>
                <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2`}>
                  <input type="text" placeholder='' required='required'
                      className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
                  <span className='absolute top-1 left-2 pointer-events-none duration-500'>City</span>
                </li>

                {/* State */}
                <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2`}>
                    <select name="" id="" className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'>
                      <option value="">Alger</option>
                      <option value="">Oran</option>
                    </select>
                    <span className='absolute top-1 left-2 pointer-events-none duration-500'>State</span>
                </li>
              </ul>

             {/* lign 4 */}
              {/* Zip code */}
              <ul className='flex flex-col sm:flex-row items-center gap-10 text-gray-300'>
                <li className={`${styles.inputBox} relative w-4/5 sm:w-2/6`}>
                    <input type="number" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-forthly border border-gray-600 
                          rounded-md w-full'/>
                    <span className='absolute top-1 left-2 pointer-events-none duration-500'>Zip code</span>
                </li>

                {/* Country */}
                <li className={`${styles.inputBox} relative w-4/5 sm:w-4/6`}>
                    <select name="" id="" className='py-2 pt-5 px-3 bg-forthly border border-gray-600
                         rounded-md w-full'>
                      <option value="">Alger</option>
                      <option value="">Oran</option>
                    </select>
                    <span className='absolute top-1 left-2 pointer-events-none duration-500'>Country</span>
                </li>
              </ul>

              {/* sumbit btn */}
              <ul className='flex justify-center sm:justify-normal' >
                <button className='hover:bg-white px-20 py-2 text-xl bg-gray-300 rounded-md' >Save</button>
              </ul>
              

             
            </ul>


        </form>


    </>
  )
}
