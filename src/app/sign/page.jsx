"use client"

import React, { useState } from 'react'

// material ui
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function Sign() {



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

  return (
    <div className='flex justify-center items-center h-screen'>

        {/* sign in  */}
        {/* sign in form */}
        <div className='flex justify-center items-center shadow-lg shadow-gray-500 w-4/5 lg:w-4/5 max-h-min rounded-xl '>
            <div className={`${signInForm} w-1/2 signInForm`} >
                <form action="" className='flex flex-col justify-center items-center mx-8 py-20 gap-5'>
                    <h1 className='text-4xl font-bold w-80 text-center'>Sign In</h1>
                    <div className='flex gap-4'>
                        <GoogleIcon style={{cursor: "pointer"}} />
                        <FacebookIcon style={{color : "blue", cursor: "pointer"}} />
                    </div>
                    <h1 className='text-sm text-gray-700 w-80 text-center'>or use your account</h1>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <input type="email" placeholder='Email' className='bg-gray-300/30 px-3 py-2 lg:w-64 sm:w-80 w-64 text-sm' />
                        <input type="password" placeholder='Password' className='bg-gray-300/30 px-3 py-2 lg:w-64 sm:w-80 w-64 text-sm' />
                    </div>
                    <h1 className='text-gray-700 w-80 text-center'>Forgot your password?</h1>
                    <button className='font-bold text-sm  bg-blue-950 py-3 px-12 lg:w-3/5 sm:w-4/5 w-52 rounded-3xl text-white'>SIGN IN</button>
                    <h1 onClick={signInButton} className='cursor-pointer lg:hidden w-72 text-center'>Or Sign Up</h1>
                </form>
            </div>

            <div className= {`${signIn} w-1/2 signUpForm`}>
                <div className="flex flex-col justify-center items-center px-10 py-6 gap-7 text-center" >
                    <h1 className='text-4xl font-bold'>Hello, Client!</h1>
                    <h1>Enter your personal details and start journey with us</h1>
                    <button onClick={signInButton} className='border-solid border-2 border-blue-950 rounded-3xl py-2 px-12 text-sm'>SIGN UP</button>
                </div>
            </div>

            
            {/* sign up */}
            <div className={`${signUp} w-1/2 signInForm`}>
                <div className="flex flex-col justify-center items-center px-10 py-6 gap-7 text-center" >
                    <h1 className='text-4xl font-bold'>Hello, Client!</h1>
                    <h1>Enter your personal details and start journey with us</h1>
                    <button onClick={signUpButton} className='border-solid border-2 border-blue-950 rounded-3xl py-2 px-12 text-sm'>SIGN IN</button>
                </div>
            </div>

            {/* sign up form */}
            <div className={`${signUpForm} w-1/2 signUpForm`} >
                <form action="" className='flex flex-col justify-center items-center  mx-8 py-20 gap-5'>
                    <h1 className='text-4xl font-bold w-80 text-center'>Sign Up</h1>
                    <div className='flex gap-4'>
                        <GoogleIcon style={{cursor: "pointer"}} />
                        <FacebookIcon style={{color : "blue", cursor: "pointer"}} />
                    </div>
                    <h1 className='text-sm text-gray-700 w-80 text-center' >or use your account</h1>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <input type="text" placeholder='Username' className='bg-gray-300/30 px-3 py-2 lg:w-64 sm:w-80 w-64 text-sm' />
                        <input type="email" placeholder='Email' className='bg-gray-300/30 px-3 py-2 lg:w-64 sm:w-80 w-64 text-sm' />
                        <input type="password" placeholder='Password' className='bg-gray-300/30 px-3 py-2 lg:w-64 sm:w-80 w-64 text-sm' />
                    </div>
                    <button className='font-bold text-sm  bg-blue-950 py-3 px-12 lg:w-3/5 sm:w-4/5 w-52 rounded-3xl text-white'>SIGN UP</button>
                    <h1 onClick={signUpButton} className='cursor-pointer lg:hidden w-72 text-center'>Or Sign In</h1>
                </form>
            </div>
        </div>
    </div> 
)}