'use client';
import React, { useContext, useState } from 'react';
import { BiShow } from 'react-icons/bi';
import { FaRegEyeSlash } from 'react-icons/fa';

import axios from 'axios';
import {toast} from 'react-hot-toast';
import { developersContext } from '@/app/adminDashboard/developers/page';

export default function AddDeveloper() {
    // context
    const {showAdd, setShowAdd} = useContext(developersContext);

    // show password
    const [showPassword, setShowPassword] = useState(false);
    const [developer, setDeveloper] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

     // submit btn spin
     const [spin, setSpin] = useState(false);

      // add developer
    const onAdd = async () => {
        try {
            setSpin(true);
            // check if email valid @..com
            const userEmail = developer.email;
            function isValidEmail(userEmail) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(userEmail);
            };

            if(developer.email.length == 0 || developer.password.length == 0
                    || developer.name == 0 || developer.username == 0 ) {
                toast.error('Please provide informations!');
                setSpin(false);
            } else if(isValidEmail(userEmail)) {
                const resposne = await axios.post('/api/admin/addDeveloper', developer);
                setSpin(false);
                toast.success('Developer added succesfly');
            } else if(!isValidEmail(userEmail)) {
                setSpin(false);
                toast.error('Please provide a valid email!');
            }

        } catch (error) {
            setSpin(false);
            toast.error('Some thing wrong');
            console.log(error);
        }
    } 
    
  return (
    <div className='w-11/12 sm:w-4/6 md:w-4/5 lg:w-3/6 h-max relative rounded-tr-xl bg-thirdly
                rounded-md shadow-xl shadow-gray-300 py-10' >
        <ul className='flex flex-col gap-8 justify-center items-center px-3 sm:px-0'>
            <h1 className='text-xl sm:text-2xl md:text-3xl text-gray-300'>Add Developer</h1>
            {/* name */}
            <li className='inpt relative w-full sm:w-4/5 lg:w-72 flex '>
                    <input type="text" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-thirdly border rounded-md w-full text-gray-300'
                        onChange={(e) => setDeveloper({...developer, name: e.target.value})} />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm text-gray-300'>Name</span>
            </li>

            {/* username */}
            <li className='inpt relative w-full sm:w-4/5 lg:w-72 flex '>
                    <input type="text" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-thirdly border rounded-md w-full text-gray-300'
                        onChange={(e) => setDeveloper({...developer, username: e.target.value})} />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm text-gray-300'>Username</span>
            </li>

            {/* email */}
            <li className='inpt relative w-full sm:w-4/5 lg:w-72 flex '>
                    <input type="text" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-thirdly border rounded-md w-full text-gray-300'
                        onChange={(e) => setDeveloper({...developer, email: e.target.value})} />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm text-gray-300'>Email</span>
            </li>

            {/* password */}
            <li className='inpt relative w-full sm:w-4/5 lg:w-72 flex '>
                    <input type={`${showPassword ? 'text' : 'password'}`} placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-thirdly border rounded-md w-full text-gray-300'
                        onChange={(e) => setDeveloper({...developer, password: e.target.value})} />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm text-gray-300'>Password</span>
                    {showPassword ?
                    <BiShow className='absolute right-5 top-4 w-5 h-5 cursor-pointer text-gray-300'
                                onClick={()=> {setShowPassword(!showPassword)}}    /> :
                    <FaRegEyeSlash className='absolute right-5 top-4 w-5 h-5 cursor-pointer text-gray-300'
                                onClick={()=> {setShowPassword(!showPassword)}} /> }
            </li>

            <li className='w-full flex gap-3 justify-center items-center
                            flex-col-reverse sm:flex-row'>
                <button className='font-bold text-sm  hover:bg-red-800 bg-red-700
                                py-3 px-12  rounded-3xl'
                                onClick={()=> {setShowAdd(false)}}><span className='button-text' >Cancel</span></button>
                
                <button className={`${spin && 'button button-loading'} font-bold text-sm  hover:bg-gray-400 bg-gray-300
                                py-3 px-12  rounded-3xl`}
                                onClick={() => { onAdd();
                                                 setShowAdd(false)}} >
                            <span className='button-text' >Submit</span></button>
            </li>
        </ul>
        
    </div>
  )
}