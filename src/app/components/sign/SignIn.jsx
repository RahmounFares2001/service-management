'use client';

import React, { useContext, useState } from 'react'
import Image from 'next/image';

import axios from "axios";
import {useRouter} from "next/navigation";

// context
import { signContext } from '@/app/sign/page'

// icons
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';

import { FaRegEyeSlash } from "react-icons/fa";
import { BiShow } from 'react-icons/bi';

import styles from "./sign.module.css";

import bcryptjs from 'bcryptjs'

import {toast} from 'react-hot-toast';


export default function SignIn() {
    // router
    const router = useRouter();
    
    // context
    const {
        signInForm,
        signInButton,
        setIt
    } = useContext(signContext)

    // user
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // sign In button
    const onSignIn = async () => {
        try {
            setSpin(true);
            // send email and pass to verify
            const response1 = await axios.post('/api/users/signIn', user);
            setSpin(false);

            // if login succes get user details to compare
            const response2 = await axios.get('/api/users/me');
            const userFromDb = response2.data.user;

            const isPasswordMatch = await bcryptjs.compare(user.password, userFromDb.password);

            if(isPasswordMatch && user.email == userFromDb.email) {
                toast.success('Login success!');
                setSpin(false);
                setTimeout(() =>{
                    router.push('/adminDashboard');
                }, 3000);
            } else {
                toast.error('Email or password wrong!');
                setSpin(false);
            }


        } catch (error) {
            toast.error('Email or password wrong!');
            setSpin(false);
            console.log('login failed');
            console.log(error);
        }
    };

    // show password
    const [showPassword, setShowPassword] = useState(true);

    // submit btn spin
    const [spin, setSpin] = useState(false);


  return (
    <div className={`${signInForm} w-full lg:w-1/2 fadeIn opacity-0`} >
        <div className='flex flex-col justify-center items-center mx-4 sm:mx-8 gap-5'>
            <h1 className='text-4xl font-bold w-80 text-center text-rose-700'>Sign In</h1>
            <div className='flex gap-4'>
                <FaGoogle className='hover:text-gray-300 text-rose-700 w-8 h-8 cursor-pointer' />
                <FaFacebookSquare className='hover:text-gray-300 text-rose-700 w-8 h-8 cursor-pointer'/>
            </div>
            
            <h1 className='text-sm text-gray-400 w-80 text-center'>or use your account</h1>

            <ul className='flex flex-col gap-7 justify-center items-center w-full py-2'>

                {/* email */}
                <li className={`${styles.inputBox} relative w-full sm:w-4/5 lg:w-72 flex  `}>
                    <input type="text" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-thirdly border border-gray-600 rounded-md w-full'
                        onChange={(e) => setUser({...user, email: e.target.value})} />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm'>Email</span>
                </li>

                {/* password */}
                <li className={`${styles.inputBox} relative w-full sm:w-4/5 lg:w-72 flex  `}>
                    <input type={`${showPassword ? 'text' : 'password'}`} placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-thirdly border border-gray-600 rounded-md w-full'
                        onChange={(e) => setUser({...user, password: e.target.value})} />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm'>Old Password</span>
                    {showPassword ?
                    <BiShow className='absolute right-5 top-4 w-5 h-5 cursor-pointer'
                                onClick={()=> {setShowPassword(!showPassword)}}    /> :
                    <FaRegEyeSlash className='absolute right-5 top-4 w-5 h-5 cursor-pointer'
                                onClick={()=> {setShowPassword(!showPassword)}} /> }
                </li>

                {/* email */}
                {/* <input type="email" placeholder='Email'
                        className='bg-gray-300/30 px-3 py-2 lg:w-72 md:w-3/6 sm:w-4/6 w-full text-sm'
                        onChange={(e) => setUser({...user, email: e.target.value})} /> */}

                {/* password */}
                {/* <input type="password" placeholder='Password' 
                        className='bg-gray-300/30 px-3 py-2 lg:w-72 md:w-3/6 sm:w-4/6 w-full text-sm'
                        onChange={(e) => setUser({...user, password: e.target.value})} /> */}
            </ul>

            {/* forgot password */}
            <h1 className='text-gray-400 w-80 text-center cursor-pointer hover:text-rose-700'>Forgot your password?</h1>

            {/* sign In button  */}
            <button className={`${spin && 'button button-loading'} font-bold text-sm  hover:bg-gray-300 hover:text-black bg-rose-700
                            py-3 px-12 lg:w-3/5 md:w-2/5 sm:w-3/5 w-52 rounded-3xl`}
                    onClick={onSignIn}><span className='button-text' >SIGN IN</span></button>

            {/* or sign Up */}
            <h1 onClick={()=> {signInButton(); setIt(true)}} className='cursor-pointer lg:hidden w-72 text-center hover:text-rose-700'>Or Sign Up</h1>
 
        </div>
    </div>
  )
}
