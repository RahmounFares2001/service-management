'use client';

import React, { useEffect, useState } from 'react';

import {motion} from "framer-motion";

import axios from "axios";


// css 
import styles from "./userAccount.module.css"
import Image from 'next/image'

// icons
import { FaLock } from "react-icons/fa";

// wilayas data 
import wilayas from "./wilayas";

import {toast} from 'react-hot-toast';


export default function UserAccount() {

  // get profile informations
  const getOldInformations = async () => {
    try {
      const response = await axios.get('/api/users/getProfileInformations');
      const oldData = response.data.oldInformations;

      await setUser({...userInformations,
        username: oldData.username,
        surname: oldData.surname,
        email: oldData.email,
        phone: oldData.phone,
        adress: oldData.adress,
        appartment: oldData.appartment,
        city: oldData.appartment,
        state: oldData.state,
        zipCode: oldData.zipCode
      });

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getOldInformations();
  }, []);
    

  // client informations
  const [userInformations, setUser] = useState({
    username: '',
    surname: '',
    email: '',
    phone: '',
    adress: '',
    appartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Algeria'
  });

  // save new data btn
  const onSave = async () => {
    try {
      setSpin(true);
      const response = await axios.post('/api/users/updateProfile', userInformations);
      toast.success('Informations updated succesfly!');
      setSpin(false);
      
    } catch (error) {
      setSpin(false);
      toast.error('Some thing wrong!');
      console.log(error);
    }
  };

  // submit btn spin
  const [spin, setSpin] = useState(false);
  
  
  return (
    <>
   

  <motion.div className='text-black flex flex-col  lg:items-stretch gap-10 
            w-full sm:px-10 md:px-20 lg:px-10 lg:w-9/12 pt-5 sm:pt-10 lg:pt-5 my-5
            mx-2 sm:mx-4 lg:mx-0 rounded-md
            pb-20 lg:pb-5
            border border-gray-700'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 0.4}}> 
          
          {/* mobile profile pic */}
          <div className='flex justify-center gap-5 items-center lg:hidden'>
            <Image width={400} height={400} src="/images/dashboard/header/profile.jpg" alt="photo"
                className='rounded-full w-16 h-16 sm:w-20 sm:h-20 cursor-pointer border-gray-300 border' />
              <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-xl sm:text-2xl pointer-events-none text-gray-300'>{userInformations.username}</h1>
              </div>
          </div>


          <h1 className='text-3xl font-bold text-center sm:text-start text-gray-300'>User Account</h1>

          {/* form details */}

          <ul className='flex flex-col gap-8'>

            {/* lign 1 */}
            <ul className='flex flex-col sm:flex-row gap-10 items-center text-gray-300'>
              {/* UserName */}
              <li className={`${styles.fixedStyle} relative w-4/5 sm:w-1/2 flex `}>
                <input type="text" placeholder='' required='required'
                  className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                  maxLength={20}
                  onChange={(e) => setUser({...userInformations, username: e.target.value})}
                  value={userInformations.username}
                  disabled />
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>UserName</span>
              <FaLock className='absolute top-1/3 right-5 cursor-pointer' />
              </li>

              {/* surName */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2 `}>
                <input type="text" placeholder='' required='required'
                    className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                    maxLength={20}
                    onChange={(e) => setUser({...userInformations, surname: e.target.value})}
                    value={userInformations.surname} />
                <span className='absolute top-1 left-2 pointer-events-none duration-500'>Surname</span>
              </li>
            </ul>

            {/* lign 2 */}
              <ul className='flex flex-col sm:flex-row items-center gap-10 text-gray-300'>
                {/* email */}
                <li className={`${styles.fixedStyle} relative w-4/5 sm:w-1/2`}>
                    <input type="email" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                        maxLength={30}
                        onChange={(e) => setUser({...userInformations, email: e.target.value})}
                        value={userInformations.email}
                        disabled />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500'>Email Adress</span>
                    <FaLock className='absolute top-1/3 right-5 cursor-pointer' />
                </li>

                {/* Phone */}
                <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2`}>
                    <input type="number" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                        onChange={(e) => setUser({...userInformations, phone: e.target.value})}
                        value={userInformations.phone} />
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
                        className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                        maxLength={30}
                        onChange={(e) => setUser({...userInformations, adress: e.target.value})}
                        value={userInformations.adress} />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500'>Adress</span>
                </li>

                {/* Appartment */}
                <li className={`${styles.inputBox} relative w-4/5 sm:w-2/6`}>
                    <input type="text" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                        maxLength={20}
                        onChange={(e) => setUser({...userInformations, appartment: e.target.value})}
                        value={userInformations.appartment} />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500'>Appartment</span>
                </li>
              </ul>

              {/* lign 3 */}
                {/* City */}
                <ul className='flex flex-col sm:flex-row items-center gap-10 text-gray-300'>
                  <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2`}>
                    <input type="text" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                        maxLength={25}
                        onChange={(e) => setUser({...userInformations, city: e.target.value})}
                        value={userInformations.city} />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500'>City</span>
                  </li>

                  {/* State */}
                  <li className={`${styles.inputBox} relative w-4/5 sm:w-1/2`}>
                      <select name="" id="" className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                              onChange={(e) => setUser({...userInformations, state: e.target.value})}
                              value={userInformations.state}>
                        {wilayas.map((wilaya, index) => (
                            <option key={index} value={wilaya.name}>{wilaya.name}</option>
                        ))}
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
                            rounded-md w-full'
                            onInput={(event) => {
                              const input = event.target.value;
                              if (input.length > 5) {
                                  event.target.value = input.slice(0, 5); 
                              }
                          }}
                          onChange={(e) => setUser({...userInformations, zipCode: e.target.value})}
                          value={userInformations.zipCode} />
                      <span className='absolute top-1 left-2 pointer-events-none duration-500'>Zip code</span>
                  </li>

                  {/* Country */}
                  <li className={`${styles.inputBox} relative w-4/5 sm:w-4/6`}>
                      <select name="" id="" className='py-2 pt-5 px-3 bg-forthly border border-gray-600
                          rounded-md w-full'>
                          <option value="Algeria">Algeria</option>
                      </select>
                      <span className='absolute top-1 left-2 pointer-events-none duration-500'>Country</span>
                  </li>
                </ul>

                {/* sumbit btn */}
                <ul className='flex justify-center sm:justify-normal' >
                  <button className={`${spin && 'button button-loading'} hover:bg-white px-20 py-2 text-xl bg-gray-300 rounded-md`}
                          onClick={onSave}><span className='button-text'>Save</span></button>
                </ul>
                

              
              </ul>


          </motion.div>


      </>
  )
}
