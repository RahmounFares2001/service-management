'use client';
import React, { useContext, useEffect, useState } from 'react';
import { BiShow } from 'react-icons/bi';
import { FaRegEyeSlash } from 'react-icons/fa';

import axios from 'axios';
import {toast} from 'react-hot-toast';


import { FaCloudDownloadAlt } from "react-icons/fa";
import { currentProjectContext } from '@/app/dashboard/currentProjects/page';


export default function ViewProject() {
  
    // context
    const {  viewProject,
             setViewProject,
             projectToShow,
             setProjectToShow} = useContext(currentProjectContext);

    // show review
    const [review, setReview] = useState('');

    const data = {review: review, projectToShow: projectToShow}
    // review exist ?
    const [reviewExist, setReviewExist] = useState(false);

     // submit btn spin
     const [spin, setSpin] = useState(false);

      // add developer
    const onSubmit = async () => {
        try {
            setSpin(true);
            const repsonse = await axios.post('/api/users/addReview', data);
            toast.success('Review added succesfly');
            setSpin(false);
            setViewProject(false);
        } catch (error) {
            setSpin(false);
            toast.error('Some thing wrong');
            console.log(error);
        }
    };

    // check if review exist 
    const checkIfReviewExist = async () => {
        try {
            const repsonse1 = await axios.post('/api/users/addReview', data);
            const repsonse = await axios.get('/api/users/addReview');
            const reviewExist = repsonse.data.details.reviewExist;
            const review = repsonse.data.details.reviewExist;
            const content = repsonse.data.details.review;
            setReviewExist(reviewExist);

            setReview(content);
            
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() =>{
        checkIfReviewExist();
    }, []);
    
  return (
    <div className='w-11/12 sm:w-4/6 md:w-4/5 lg:w-3/6 h-max relative rounded-tr-xl bg-thirdly
                rounded-md shadow-xl shadow-gray-300 py-10' >
        <ul className='flex flex-col gap-8 justify-center items-center px-3 sm:px-0'>
            <h1 className='text-xl sm:text-2xl md:text-3xl text-gray-300'>Your Final product !</h1>
            {/* project name */}
            <li className='inptFix relative w-full sm:w-4/5 lg:w-72 flex '>
                    <input type="text" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-thirdly border rounded-md w-full text-gray-300'
                        value='E-commerce'
                        disabled />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm text-gray-300'>Project name</span>
            </li>

            {/* github repo */}
            <li className='inptFix relative w-full sm:w-4/5 lg:w-72 flex'>
                    <input type="text" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-thirdly border rounded-md w-full text-gray-300'
                        value='Github.com'
                        disabled />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm text-gray-300'>Github Repo</span>
            </li>


            {/* download project */}
            <button className='bg-gradient-to-tr hover:bg-gradient-to-bl from-green-700 to-green-900 w-full sm:w-4/5 lg:w-72
                            flex gap-5 rounded-md justify-center items-center py-3' >
                <FaCloudDownloadAlt className='w-6 h-6' />
                <span>Download Project</span>
            </button>

            {/* review */}
            <li className='inpt relative w-full sm:w-4/5 lg:w-72 flex '>
                    <input type="text" placeholder='' required='required'
                        className='py-2 pt-5 px-3 bg-thirdly border rounded-md w-full text-gray-300'
                        onChange={(e) => setReview(e.target.value)}
                        disabled={reviewExist}
                        value={review} />
                    <span className='absolute top-1 left-2 pointer-events-none duration-500 text-sm text-gray-300'>review</span>
            </li>


            <li className='w-full flex gap-3 justify-center items-center
                            flex-col-reverse sm:flex-row'>
                <button className='font-bold text-sm  hover:bg-red-800 bg-red-700
                                py-3 px-12  rounded-3xl'
                                onClick={()=> {setViewProject(false)}}
                                    ><span className='button-text' >Go back</span></button>
                
                <button className={`${spin && 'button button-loading'} font-bold text-sm  hover:bg-gray-400 bg-gray-300
                                py-3 px-12  rounded-3xl`}
                                onClick={() => { onSubmit();
                                }}
                                disabled={reviewExist} >
                            <span className='button-text' >Submit</span></button>
            </li>
        </ul>
        
    </div>
  )
}