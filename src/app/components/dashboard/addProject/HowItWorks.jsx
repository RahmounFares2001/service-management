'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'



export default function HowItWorks() {

    // show btn
    const [showBtn, setShowBtn] = useState(false)
    const [showBtn2, setShowBtn2] = useState(false)
    const [showBtn3, setShowBtn3] = useState(false)

  return (
    <div className='w-full flex items-center justify-center flex-col gap-10 px-3 sm:px-2 md:px-5 lg:px-24 2xl:px-72 pt-10'>

        <div className='flex flex-col items-center gap-3 text-center'>
            <h1 className='text-4xl font-bold'>How it works</h1>
            <hr className='w-20 border-2 border-rose-700' />
        </div>

        {/* cards */}
        <div className='w-full flex flex-col gap-14 lg:px-10 xl:px-20'>
            {/* 1 */}
            <div className={`w-full h-full sm:h-72 md:h-96 flex flex-col  sm:flex-row  shadow-xl shadow-rose-70 shadow-black/80
                 bg-gray-200 relative border-2 border-black `}
                    onMouseEnter={()=> {setShowBtn(true)}}
                    onMouseLeave={()=> {setShowBtn(false)}}
                    onClick={()=> {setShowBtn(true)}} >
                <Image src='/images/dashboard/appointment/reservation.jpg' width={400} height={400}
                        className='w-full sm:w-1/2 h-1/2 sm:h-full sm:rounded-tr-full border-t-2 border-r-2 border-black' />

                <div className='flex flex-col gap-5 h-1/2 sm:h-full w-full items-center justify-center sm:justify-normal sm:w-1/2 pt-3 sm:pt-10 md:pt-20 text-black'>
                    <h1 className='font-bold text-2xl sm:text-4xl lg:text-5xl'>01 Place Order</h1>
                    <h1 className='px-5 pb-5 w-full text-sm sm:text-base'>Ready to proceed? Head to our secure checkout. Provide project details, share your vision...</h1>
                </div>

                {showBtn && 
                    <div className='absolute w-full h-full bg-black/80 z-10'>
                    </div> }

                {showBtn &&
                <div className='z-20 absolute w-full h-full rounded-xl shadow-white flex justify-center items-center' >
                    <Link href='' className='px-10 py-3 bg-gray-300 text-black rounded-xl'>Place Order</Link>

                </div> }
            </div>

            {/* 2 */}
            <div className={`w-full h-full sm:h-72 md:h-96 flex flex-col sm:flex-row-reverse  shadow-xl shadow-rose-70 shadow-black/80
                 bg-gray-200 relative border-2 border-black `}
                    onMouseEnter={()=> {setShowBtn2(true)}}
                    onMouseLeave={()=> {setShowBtn2(false)}}
                    onClick={()=> {setShowBtn2(true)}} >
                <Image src='/images/dashboard/appointment/reservation.jpg' width={400} height={400}
                        className='w-full sm:w-1/2 h-1/2 sm:h-full sm:rounded-tl-full border-t-2 border-l-2 border-black' />

                <div className='flex flex-col gap-5 h-1/2 sm:h-full w-full items-center justify-center sm:justify-normal sm:w-1/2 pt-3 sm:pt-10 md:pt-20 text-black'>
                    <h1 className='font-bold text-2xl sm:text-4xl xl:text-5xl text-nowrap sm:pl-6 xl:pl-10'>02 Wait for approve</h1>
                    <h1 className='px-5 pb-5 w-full text-sm sm:text-base'> Request is pending approval. will notify you once the approval process is complete...</h1>
                </div>

                {showBtn2 && 
                    <div className='absolute w-full h-full bg-black/80 z-10'>
                    </div> }

                {showBtn2 &&
                <div className='z-20 absolute w-full h-full rounded-xl shadow-white flex justify-center items-center' >
                    <Link href='' className='px-10 py-3 bg-gray-300 text-black rounded-xl'>Place Order</Link>

                </div>
                 }
            </div>
          

            {/* 3 */}
            <div className={`w-full h-full sm:h-72 md:h-96 flex flex-col  sm:flex-row  shadow-xl shadow-rose-70 shadow-black/80
                 bg-gray-200 relative border-2 border-black `}
                    onMouseEnter={()=> {setShowBtn3(true)}}
                    onMouseLeave={()=> {setShowBtn3(false)}}
                    onClick={()=> {setShowBtn3(true)}} >
                <Image src='/images/dashboard/appointment/reservation.jpg' width={400} height={400}
                        className='w-full sm:w-1/2 h-1/2 sm:h-full sm:rounded-tr-full border-t-2 border-r-2 border-black' />

                <div className='flex flex-col gap-5 h-1/2 sm:h-full w-full items-center justify-center sm:justify-normal sm:w-1/2 pt-3 sm:pt-10 md:pt-20 text-black'>
                    <h1 className='font-bold text-2xl sm:text-4xl lg:text-5xl'>03 Payement</h1>
                    <h1 className='px-5 pb-5 w-full text-sm sm:text-base'>Complete your payment securely to finalize your order. Thank you for choosing our services!</h1>
                </div>

                {showBtn3 && 
                    <div className='absolute w-full h-full bg-black/80 z-10'>
                    </div> }

                {showBtn3 &&
                <div className='z-20 absolute w-full h-full rounded-xl shadow-white flex justify-center items-center' >
                    <Link href='' className='px-10 py-3 bg-gray-300 text-black rounded-xl'>Place Order</Link>

                </div>   }

           
            </div>
        </div>
  </div>
  )
}

