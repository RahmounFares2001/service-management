'use client';

import React, { useEffect, useState } from 'react'

// styles
import styles from './reset.module.css';
import { BiShow } from 'react-icons/bi';
import { FaRegEyeSlash } from 'react-icons/fa6';
import axios from 'axios';

import {toast} from 'react-hot-toast';
import { useRouter } from 'next/navigation'; 


export default function ResetPassword() {
  // router
  const router = useRouter();

  // show password
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // new password data
  const [newPassword, setNewPassword] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');


  // submit btn spin
  const [spin, setSpin] = useState(false);




  // get token from url
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // Find index of '='
  const tokenStartIndex = currentUrl.indexOf('=') + 1;
  const passwordToken = currentUrl.slice(tokenStartIndex);

  const data = { 
    passwordToken: passwordToken,
    newPassword: newPassword};


  const onSave = async () => {
    try {
      setSpin(true);
      const response = await axios.post('/api/users/resetPassword', data);
      toast.success('Password reset succesfly!')
      setSpin(false);
      router.push('/sign');

    } catch (error) {
      toast.error('Some thing wrong!')
      setSpin(false);
      console.log(error);
    }
  }

  return (
    <div style={{backgroundColor: '#0d0d0f'}} className='w-full h-screen flex justify-center items-center'>
      <ul className='flex flex-col justify-center items-center gap-10 w-10/12 sm:w-4/5 md:w-3/5 lg:w-2/5'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl text-gray-300' >Reset password</h1>

          {/* password 1 */}
          <li className={`${styles.inputBox} relative w-full sm:w-4/5 lg:w-72 flex text-gray-300 `}>
                <input type={`${showPassword ? 'text' : 'password'}`} placeholder='' required='required'
                    className='py-2 pt-5 px-3 bg-thirdly border border-gray-600 rounded-md w-full'
                    onChange={(e) => { 
                      setNewPassword(e.target.value);
                      setPass1(e.target.value); }} />
                <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm'>new password</span>
                {showPassword ?
                <BiShow className='absolute right-5 top-4 w-5 h-5 cursor-pointer'
                            onClick={()=> {setShowPassword(!showPassword)}}    /> :
                <FaRegEyeSlash className='absolute right-5 top-4 w-5 h-5 cursor-pointer'
                            onClick={()=> {setShowPassword(!showPassword)}} /> }
          </li>

          {/* password 2 */}
          <li className={`${styles.inputBox} relative w-full sm:w-4/5 lg:w-72 flex  text-gray-300`}>
                <input type={`${showPassword2 ? 'text' : 'password'}`} placeholder='' required='required'
                    className='py-2 pt-5 px-3 bg-thirdly border border-gray-600 rounded-md w-full'
                    onChange={(e) => {setPass2(e.target.value)}}/>
                <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm'>Repeat password</span>
                {showPassword2 ?
                <BiShow className='absolute right-5 top-4 w-5 h-5 cursor-pointer'
                            onClick={()=> {setShowPassword2(!showPassword2)}}    /> :
                <FaRegEyeSlash className='absolute right-5 top-4 w-5 h-5 cursor-pointer'
                            onClick={()=> {setShowPassword2(!showPassword2)}} /> }
          </li>

          {/* save btn */}
          <button className={`${(pass1 =='' || pass1 != pass2) && 'opacity-0'} ${spin && 'button button-loading'}
                             font-bold text-sm  hover:bg-rose-700 hover:text-black bg-gray-300
                              py-3 px-12 lg:w-3/5 md:w-2/5 sm:w-3/5 w-52 rounded-3xl`}
                  onClick={onSave}><span className='button-text' >Save</span></button>
      </ul>
    </div>
  )
}
