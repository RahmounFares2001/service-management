"use client"

import React, { useState } from 'react'

// icons
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

// css
import "./sign.css";


export default function Sign() {



    // switch signIn / signUp
    const [signIn, setSignIn] = useState("hidden lg:block");
    const [signUp, setSignUp] = useState("hidden");

    const [ signInForm, setsignInForm ] = useState("")
    const [signUpForm, setSignUpForm] = useState("hidden")

    
    const signInButton = () => {
        setSignIn("hidden")
        setSignUp("hidden lg:block")
        
        setsignInForm("hidden")
        setSignUpForm("")
    };
    const signUpButton = () => {
        setSignUp("hidden")        
        setSignIn("hidden lg:block")

        setSignUpForm("hidden")
        setsignInForm("")
    };

    // change shadow color signIn / signUp
    const [isClickedChangeShadow, setIt] = useState(false);



  return (
    <div className='flex justify-center items-center pt-10 2xl:pt-20'>

        {/* sign in  */}
        {/* sign in form */}
        <div className={`flex justify-center items-center shadow-lg ${isClickedChangeShadow? 'shadow-gray-300' : 'shadow-rose-700/50' }    
                         rounded-xl text-gray-300 relative w-11/12 sm:w-4/5 max-h-max md:h-4/5 lg:h-4/5 2xl:h-3/5`}
                        style={{backgroundColor: '#0d0d0f'}}>
            
            <div className='absolute sm:top-5 top-7 justify-center items-center gap-5 cursor-pointer
                            hidden lg:flex'>
                <img src="./images/home/logo.jpg" alt="logo" 
                    className=' w-10 h-10'/>
                <h1 className='text-xl text-rose-700 font-bold'>KYO CONSEIL</h1>
            </div>
            

            <div className={`${signInForm} w-full lg:w-1/2 fadeIn opacity-0`} >
                <form action="" className='flex flex-col justify-center items-center mx-4 sm:mx-8 py-8 sm:py-20 gap-5'>
                    <h1 className='text-4xl font-bold w-80 text-center text-rose-700'>Sign In</h1>
                    <div className='flex gap-4'>
                        <FaGoogle className='hover:text-gray-300 text-rose-700 w-8 h-8' />
                        <FaFacebookSquare className='hover:text-gray-300 text-rose-700 w-8 h-8'/>
                    </div>
                    <h1 className='text-sm text-gray-400 w-80 text-center'>or use your account</h1>
                    <div className='flex flex-col gap-4 justify-center items-center w-full '>
                        <input type="email" placeholder='Email' className='bg-gray-300/30 px-3 py-2 lg:w-72 md:w-3/6 sm:w-4/6 w-full text-sm' />
                        <input type="password" placeholder='Password' className='bg-gray-300/30 px-3 py-2 lg:w-72 md:w-3/6 sm:w-4/6 w-full text-sm' />
                    </div>
                    <h1 className='text-gray-400 w-80 text-center cursor-pointer hover:text-rose-700'>Forgot your password?</h1>
                    <button className='font-bold text-sm  hover:bg-gray-300 hover:text-black bg-rose-700 py-3 px-12 lg:w-3/5 md:w-2/5 sm:w-3/5 w-52 rounded-3xl'>SIGN IN</button>
                    <h1 onClick={()=> {signInButton(); setIt(true)}} className='cursor-pointer lg:hidden w-72 text-center hover:text-rose-700'>Or Sign Up</h1>
                </form>
            </div>

            <div className= {`${signIn} w-1/2 signUpForm opacity-0`}>
                <div className="flex flex-col justify-center items-center px-10 py-6 gap-7 text-center" >
                    <h1 className='text-4xl font-bold'>Hello, Client!</h1>
                    <h1>Enter your personal details and start journey with us</h1>
                    <button onClick={()=> {signInButton(); setIt(true)}} className='border-solid border-2 hover:border-gray-300 rounded-3xl py-2 px-12 text-sm border-rose-700'>SIGN UP</button>
                </div>
            </div>

            
            {/* sign up */}
            <div className={`${signUp} w-full lg:w-1/2 signInForm opacity-0`}>
                <div className="flex flex-col justify-center items-center px-10 py-6 gap-7 text-center" >
                    <h1 className='text-4xl font-bold'>Hello, Client!</h1>
                    <h1>Enter your personal details and start journey with us</h1>
                    <button onClick={()=> {signUpButton(); setIt(false)}} className='border-solid border-2 hover:border-gray-300 rounded-3xl py-2 px-12 text-sm border-rose-700'>SIGN IN</button>
                </div>
            </div>

            {/* sign up form */}
            <div className={`${signUpForm} w-full lg:w-1/2 fadeIn opacity-0`} >
                <form action="" className='flex flex-col justify-center items-center  mx-4 sm:mx-8 py-8 sm:py-20 gap-5'>
                    <h1 className='text-4xl font-bold w-80 text-center'>Sign Up</h1>
                    <div className='flex gap-4'>
                        <FaGoogle className='hover:text-rose-700 text-rose-70 w-8 h-8 text-gray-300' />
                        <FaFacebookSquare className='hover:text-rose-700 text-rose-70 text-gray-300 w-8 h-8'/>
                    </div>
                    <h1 className='text-sm text-gray-400 w-80 text-center' >or create your account</h1>
                    <div className='flex flex-col gap-4 justify-center items-center w-full'>
                        <input type="text" placeholder='Username' className='bg-gray-300/30 px-3 py-2 lg:w-72 md:w-3/6 sm:w-4/6 w-full text-sm' />
                        <input type="email" placeholder='Email' className='bg-gray-300/30 px-3 py-2 lg:w-72 md:w-3/6 sm:w-4/6 w-full text-sm' />
                        <input type="password" placeholder='Password' className='bg-gray-300/30 px-3 py-2 lg:w-72 md:w-3/6 sm:w-4/6 w-full text-sm' />
                    </div>
                    <button className='font-bold text-sm py-3 px-12 lg:w-3/5 md:w-2/5 sm:w-3/5 w-52 rounded-3xl text-black hover:text-white  bg-gray-300 hover:bg-rose-700'>SIGN UP</button>
                    <h1 onClick={()=> {signUpButton(); setIt(false)}} className='cursor-pointer lg:hidden w-72 text-center hover:text-rose-700'>Or Sign In</h1>
                </form>
            </div>
        </div>
    </div> 
)}