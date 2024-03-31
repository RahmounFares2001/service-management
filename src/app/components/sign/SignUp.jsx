'use client'

import React, { useContext, useState } from 'react'

import {useRouter} from "next/navigation";
import axios from "axios";

// context
import { signContext } from '@/app/sign/page'

// icons
import { FaGoogle } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';


export default function SignUp() {

    // router
    const router = useRouter();

    // context
    const {
        signUpForm,
        signUpButton,
        setIt
    } = useContext(signContext)

    
    // user
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    // signUp btn
    const onSignUp = async () => {
        try {
            const response = await axios.post('/api/users/signUp', user);
            console.log('signUp succes', response.data); 
            router.push('/waitForVerifyEmail');
        } catch (error) {
            console.log(error);
        } 
    }

  return (
    <div className={`${signUpForm} w-full lg:w-1/2 fadeIn opacity-0`} >
        <div className='flex flex-col justify-center items-center  mx-4 sm:mx-8 pt-16 pb-20 sm:py-20 gap-5'>
            <h1 className='text-4xl font-bold w-80 text-center'>Sign Up</h1>
            <div className='flex gap-4'>
                <FaGoogle className='hover:text-rose-700 text-rose-70 w-8 h-8 text-gray-300' />
                <FaFacebookSquare className='hover:text-rose-700 text-rose-70 text-gray-300 w-8 h-8'/>
            </div>
            <h1 className='text-sm text-gray-400 w-80 text-center' >or create your account</h1>
            <div className='flex flex-col gap-4 justify-center items-center w-full'>

                {/* userName */}
                <input type="text" placeholder='Username' 
                        className='bg-gray-300/30 px-3 py-2 lg:w-72 md:w-3/6 sm:w-4/6 w-full text-sm'
                        onChange={(e) => setUser({...user, username: e.target.value})} />

                {/* email */}
                <input type="email" placeholder='Email' 
                        className='bg-gray-300/30 px-3 py-2 lg:w-72 md:w-3/6 sm:w-4/6 w-full text-sm'
                        onChange={(e) => setUser({...user, email: e.target.value})} />

                {/* password */}
                <input type="password" placeholder='Password' 
                        className='bg-gray-300/30 px-3 py-2 lg:w-72 md:w-3/6 sm:w-4/6 w-full text-sm'
                        onChange={(e) => setUser({...user, password: e.target.value})} />


            </div>

            <button className='font-bold text-sm py-3 px-12 lg:w-3/5 md:w-2/5 sm:w-3/5 w-52 rounded-3xl
                         text-black hover:text-white  bg-gray-300 hover:bg-rose-700'
                    onClick={onSignUp} >SIGN UP</button>

            {/* or sign in */}
            <h1 onClick={()=> {signUpButton(); setIt(false)}} className='cursor-pointer lg:hidden w-72 text-center hover:text-rose-700'>Or Sign In</h1>
        </div>
    </div>
  )
}