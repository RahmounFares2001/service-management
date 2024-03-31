import React, { useContext, useState } from 'react'

import axios from "axios";
import {useRouter} from "next/navigation";

// context
import { signContext } from '@/app/sign/page'

// icons
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';


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
            const response = await axios.post('/api/users/signIn', user);
            console.log('login succes');
            router.push('/adminDashboard');
            
        } catch (error) {
            console.log('login failed');
            console.log(error);
        }
    };

  return (
    <div className={`${signInForm} w-full lg:w-1/2 fadeIn opacity-0`} >
        <div className='flex flex-col justify-center items-center mx-4 sm:mx-8 pt-16 pb-20 sm:py-20 gap-5'>
            <h1 className='text-4xl font-bold w-80 text-center text-rose-700'>Sign In</h1>
            <div className='flex gap-4'>
                <FaGoogle className='hover:text-gray-300 text-rose-700 w-8 h-8' />
                <FaFacebookSquare className='hover:text-gray-300 text-rose-700 w-8 h-8'/>
            </div>
            <h1 className='text-sm text-gray-400 w-80 text-center'>or use your account</h1>
            <div className='flex flex-col gap-4 justify-center items-center w-full '>

                {/* email */}
                <input type="email" placeholder='Email'
                        className='bg-gray-300/30 px-3 py-2 lg:w-72 md:w-3/6 sm:w-4/6 w-full text-sm'
                        onChange={(e) => setUser({...user, email: e.target.value})} />

                {/* password */}
                <input type="password" placeholder='Password' 
                        className='bg-gray-300/30 px-3 py-2 lg:w-72 md:w-3/6 sm:w-4/6 w-full text-sm'
                        onChange={(e) => setUser({...user, password: e.target.value})} />
            </div>

            {/* forgot password */}
            <h1 className='text-gray-400 w-80 text-center cursor-pointer hover:text-rose-700'>Forgot your password?</h1>

            {/* sign In button  */}
            <button className='font-bold text-sm  hover:bg-gray-300 hover:text-black bg-rose-700
                            py-3 px-12 lg:w-3/5 md:w-2/5 sm:w-3/5 w-52 rounded-3xl'
                    onClick={onSignIn}>SIGN IN</button>

            {/* or sign Up */}
            <h1 onClick={()=> {signInButton(); setIt(true)}} className='cursor-pointer lg:hidden w-72 text-center hover:text-rose-700'>Or Sign Up</h1>
        </div>
    </div>
  )
}
