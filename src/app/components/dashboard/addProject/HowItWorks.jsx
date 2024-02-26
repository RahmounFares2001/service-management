'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'



export default function HowItWorks() {

    // show btn
    const [showBtn, setShowBtn] = useState(false)
  return (
    <div className='w-full flex items-center justify-center flex-col gap-10 px-3 sm:px-8 md:px-20 lg:px-24 2xl:px-72 pt-10'>

        <div className='flex flex-col items-center gap-3 text-center'>
            <h1 className='text-4xl font-bold'>How it works</h1>
            <hr className='w-20 border-2 border-rose-700' />
        </div>

        {/* cards */}
        <div className='flex flex-col lg:flex-row items-center justify-center  gap-5'>

            <div className='w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/6 h-80 rounded-xl border-2 bcursor-pointer relative'
                    onMouseEnter={()=> {setShowBtn(true)}}
                    onMouseLeave={()=> {setShowBtn(false)}}
                    onClick={()=> {setShowBtn(true)}}>
                <Image width={200} height={200} src='/images/dashboard/appointment/reservation.jpg' 
                        className='w-full h-3/5 rounded-t-2xl' />
                <div className='w-full h-2/5 bg-gray-200 text-gray-900 pt-3 rounded-b-md'>
                    <h1 className='text-2xl font-bold text-center'>01 Place Order</h1>
                    <h1 className='px-3 text-sm'>Ready to proceed? Head to our secure checkout. Provide project details, share your vision...</h1>
                </div>
                
                {showBtn && 
                <div className='absolute w-full h-full bg-rose-800 top-0 rounded-xl flex justify-center items-center'>
                    {/* <Link href='' className='px-8 py-2 text-xl text-gray-800 bg-gray-200 hover:bg-gray-300
                            rounded-md shadow-md shadow-black border-2 border-white'>Place Order</Link> */}
                    <Image src='/images/dashboard/appointment/reservation.jpg' width={400} height={400}
                            className='w-full h-full' />
                </div>  }

            </div>
            
            <div className='w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/6 h-80 rounded-xl border-2 cursor-pointer'>
                <Image width={200} height={200} src='/images/dashboard/appointment/wait.jpg' 
                        className='w-full h-3/5 rounded-t-md' />
                <div className='w-full h-2/5 bg-gray-200 text-gray-900 pt-3 rounded-b-md'>
                    <h1 className='text-2xl font-bold text-center'>02 Wait for approve</h1>
                    <h1 className='px-3 text-sm'>Request is pending approval. will notify you once the approval process is complete...</h1>
                </div>
            </div>
            <div className='w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/6 h-80 rounded-xl border-2 cursor-pointer'>
                <Image width={200} height={200} src='/images/dashboard/appointment/pay.jpg' 
                        className='w-full h-3/5 rounded-t-xl' />
                <div className='w-full h-2/5 bg-gray-200 text-gray-900 pt-3 rounded-b-md'>
                    <h1 className='text-2xl font-bold text-center'>03 Payement</h1>
                    <h1 className='px-3 text-sm'>Complete your payment securely to finalize your order. Thank you for choosing our services!</h1>
                </div>               
            </div>

        </div>





  </div>
  )
}
