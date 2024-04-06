'use client';

import React, { useContext, useState } from 'react'

import styles from "./sign.module.css";
import { signContext } from '@/app/sign/page';

import axios from 'axios';
import {toast} from 'react-hot-toast';


export default function SendMail() {

    // context
    const {
        showSendMail,
        setShowSendMail,
        showResponsiveSendMail,
        setShowResponsiveSendMail
    } = useContext(signContext);

    // email
    const [emailToSend, setEmailToSend] = useState('');

    const userInput = {emailToSend: emailToSend}
    // send btn
    const onSend = async () => {
        try {
            const response = await axios.post('/api/users/sendResetPassword', userInput);
            toast.success('succes');
            
        } catch (error) {
            toast.error('failed');
            console.log(error);
        }
    }

  return (
    <>
    <div className='w-1/2 flex-col gap-5 hidden lg:flex'>
        <h1 className='text-gray-300 text-xl'>Send email to reset password</h1>

        <div className='flex gap-2 items-center' >
            {/* email */}
            <li className={`${styles.inputBox} relative w-full sm:w-4/5 lg:w-72 flex  `}>
                <input type="text" placeholder='' required='required'
                            className='py-2 pt-5 px-3 bg-thirdly border border-gray-600 rounded-md w-full'
                            onChange={(e) => {setEmailToSend(e.target.value)}} />
                <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm'>Email</span>
            </li>

            <button className='w-max h-10 px-3 py-1 bg-gradient-to-tr from-gray-300 to-bg-gray-500
                     text-gray-900 rounded-md'
                     onClick={onSend} >Send</button>
            <button onClick={() => {setShowSendMail(false)}}>Cancel</button>

        </div>
        
    </div>

    {showResponsiveSendMail ? <></> : 
        <div className='lg:hidden w-full flex flex-col gap-5 justify-center items-center' >

            <h1 className='text-gray-300 text-xl'>Send email to reset password</h1>

            {/* email */}
            <li className={`${styles.inputBox} relative w-11/12 sm:w-4/5 lg:w-72 flex  `}>
                <input type="text" placeholder='' required='required'
                            className='py-2 pt-5 px-3 bg-thirdly border border-gray-600 rounded-md w-full'/>
                <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm'>Email</span>
            </li>

            <div className='flex gap-5' >
                <button className='w-max h-10 px-5 py-1 bg-gradient-to-tr from-gray-300 to-bg-gray-500
                        text-gray-900 rounded-md'
                        onClick={onSend}>Send</button>
                <button onClick={() => {setShowSendMail(false);
                                        setShowResponsiveSendMail(true)}}>Cancel</button>
            </div>
            

    
        </div> }

    </>
  )
}
