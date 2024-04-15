'use client'
import React, { useEffect, useState } from 'react'

import {motion} from 'framer-motion';


import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";


import axios from 'axios';

export default function Dashboard() {

  // get data
  const [data, setData] = useState([]);

    const fetch = async () => {
        try {
            const response = await axios.get('/api/users/dashboard');
            const counts = response.data.counts;
            setData(counts);
            console.log(counts);
        } catch (error) {
            console.error(error);
        }
    };
        
    useEffect(()=> {
        fetch();
    }, []);

  const cards = [
    {
        id: 1,
        title: 'Total projects',
        dt: data.projects,
        icon : MdOutlineAlignHorizontalLeft
    },
    {
        id: 2,
        title: 'Current projects',
        dt: 0,
        icon : MdOutlinePending
    },
    {
        id: 3,
        title: 'Completed projects',
        dt: 0,
        icon : IoCheckmarkDoneSharp

    }
]


const appCards = [
  {
      id: 1,
      title: 'Total projects',
      dt: data.projects,
      icon : MdOutlineAlignHorizontalLeft
  },
  {
      id: 2,
      title: 'Current projects',
      dt: 'Request is pending approval. will notify you once the approval process is complete...',
      icon : MdOutlinePending
  },
  {
      id: 3,
      title: 'Completed projects',
      dt: 'Complete your payment securely to finalize your order. Thank you for choosing our services!',
      icon : IoCheckmarkDoneSharp

  }
]

  return (
    <div className='flex flex-col gap-20 justify-center items-center px-3 sm:px-2 md:px-5 lg:px-5 xl:px-36 2xl:px-72 pt-96 py-10'>

      

    </div>
  )
}