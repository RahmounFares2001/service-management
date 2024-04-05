'use client'

import React, { useState } from 'react';

import {motion} from "framer-motion";

// css
import styles from "./userAccount.module.css";

// icons
import { BiShow } from 'react-icons/bi';
import axios from 'axios';

import {toast} from 'react-hot-toast';
import bcryptjs from "bcryptjs";
import { FaRegEyeSlash } from 'react-icons/fa6';


export default function Security() {



  
  // submit btn spin
  const [spin, setSpin] = useState(false);

  // show password
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);


  const [oldPassword, setOldPassword] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');

  const [newPassword, setNewPassword] = useState('');

  const pass = {
    oldPassword: oldPassword,
    newPassword: newPassword
  };


  const onSubmit = async () => {
    try {
      setSpin(true);

      // get user real password
      const response1 = await axios.get('/api/users/me');
      const userRealPassword = response1.data.user.password;
      
      // new password to compare it with the real one 
      const isPasswordMatch = await bcryptjs.compare(oldPassword, userRealPassword)
      
      // check if password match
      if(isPasswordMatch) {
        // post new password and change it
        const response2 = await axios.post('/api/users/updatePassword', pass);
        toast.success('Password successfully updated!');
        setSpin(false);
        setOldPassword('');
        setNewPassword('');
        setPass1('');
        setPass2('');
      } else {
        // old password by user is false
        toast.error('Password not match!');
        setSpin(false);
      }

    } catch (error) {
      console.log(error)
    };
  };


  return (
    <motion.div className='text-black flex flex-col  lg:items-stretch gap-10 
    w-full sm:px-10 md:px-20 lg:px-10 lg:w-9/12 pt-5 sm:pt-10 lg:pt-20 my-5
    mx-2 sm:mx-4 lg:mx-0 rounded-md
    pb-20 lg:pb-20
    border border-gray-700'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 0.4}}>
      
      <div className='flex flex-col gap-10 '>
      
      <h1 className='text-gray-300 text-3xl sm:text-4xl font-bold text-center'>Security settings</h1>

      <ul className='flex flex-col gap-10 items-center text-gray-300'>

            {/* Old password */}
            <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-1/2 flex `}>
              <input type="password" placeholder='' required='required'
                className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                onChange={(e) => { setOldPassword(e.target.value) }}
                value={oldPassword} />
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>Old Password</span>
            </li>

            {/* New Password */}
            <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-1/2 flex `}>
              <input type={`${showPassword ? 'text' : 'password'}`} placeholder='' required='required'
                  className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                  onChange={(e) => { 
                    setNewPassword(e.target.value);
                    setPass1(e.target.value); }}
                  value={pass1} />
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>New Password</span>
              {showPassword ?
                    <BiShow className='absolute right-5 top-4 w-5 h-5 cursor-pointer'
                                onClick={()=> {setShowPassword(!showPassword)}}    /> :
                    <FaRegEyeSlash className='absolute right-5 top-4 w-5 h-5 cursor-pointer'
                                onClick={()=> {setShowPassword(!showPassword)}} /> }
            </li>
            {/* Repeat new password */}
            <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-1/2 `}>
              <input type={`${showPasswordRepeat ? 'text' : 'password'}`} placeholder='' required='required'
                  className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                  onChange={(e) => {setPass2(e.target.value)}}
                  value={pass2} />
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>Repeat New Password</span>
              {showPassword ?
                    <BiShow className='absolute right-5 top-4 w-5 h-5 cursor-pointer'
                                onClick={()=> {setShowPassword(!showPassword)}}    /> :
                    <FaRegEyeSlash className='absolute right-5 top-4 w-5 h-5 cursor-pointer'
                                onClick={()=> {setShowPassword(!showPassword)}} /> }
            </li>

             {/* sumbit btn */}
            <li className={`${(pass1 =='' || pass1 != pass2) && 'opacity-0'} flex justify-center sm:justify-normal text-black`} >
                <motion.button className={`${spin && 'button button-loading'} hover:bg-white px-20 py-2 text-xl bg-gray-300 rounded-md`}
                        onClick={onSubmit} ><span className='button-text' >Save</span></motion.button>
            </li> 
          </ul>
      </div>
    </motion.div>
  )
}
