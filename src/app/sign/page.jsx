"use client"

import React, { useState } from 'react'

// icons
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

// css
import "./sign.css";
import Image from 'next/image';

// components
import SignIn from '../components/sign/SignIn';
import SignUp from '../components/sign/SignUp';

// toaster
import { Toaster } from 'react-hot-toast';


// context
export const signContext = React.createContext();

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

    const contextElements = {
        signIn,
        setSignIn,
        signUp,
        setSignUp,
        signInForm,
        setsignInForm,
        signUpForm,
        setSignUpForm,
        signInButton,
        signUpButton,
        isClickedChangeShadow,
        setIt
    }



  return (
    <signContext.Provider value={contextElements} >

    <div className='flex justify-center items-center pt-10 2xl:pt-20'>

        {/* sign in  */}
        {/* sign in form */}
        <div className={`flex justify-center items-center shadow-lg ${isClickedChangeShadow? 'shadow-gray-300' : 'shadow-rose-700/50' }    
                         rounded-xl text-gray-300 relative w-11/12 sm:w-4/5 h-600 `}
                        style={{backgroundColor: '#0d0d0f'}}>
            
            {/* <div className='absolute sm:top-5 top-7 justify-center items-center gap-5 cursor-pointer
                            hidden lg:flex'>
                <Image width={400} height={400} src="/images/home/logo.jpg" alt="logo" 
                    className=' w-10 h-10'/>
                <h1 className='text-xl text-rose-700 font-bold'>KYO CONSEIL</h1>
            </div> */}
            
            {/* sign in form */}
           <SignIn />

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
                    <button onClick={()=> {signUpButton(); setIt(false)}} className='border-solid border-2 hover:border-rose-700 rounded-3xl py-2 px-12 text-sm border-gray-300'>SIGN IN</button>
                </div>
            </div>

            {/* sign up form */}
            <SignUp />

            <Toaster />

        </div>
    </div> 

    </signContext.Provider>
)}