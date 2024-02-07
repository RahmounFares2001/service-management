import React from 'react'


// icons
import { FaLaptopCode } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";



export default function Services() {
  return (
    <section className='pt-32 flex flex-col gap-20' >
        <div className='flex flex-col gap-3 justify-center items-center font-bold'>
            <p className='text-rose-700 text-xl underline underline-offset-8' >Our Solutions</p>
            <h1 className='text-5xl text-gray-300'>Services</h1>
        </div>

        {/* cards sercices */}
        <div className='flex flex-col lg:flex-row gap-7 jusify-center items-center w-full px-32 mb-20'>
          {/* web dev */}
          <div className='text-gray-200 lg:w-2/6 w-4/5 flex flex-col gap-5 p-5 rounded-xl hover:bg-gradient-to-br
                    hover:from-gray-900 hover:to-black' 
                style={{backgroundColor: '#0d0d0e'}}> 
            <div className='flex justify-between items-center'>
              <FaLaptopCode className='text-rose-700 w-24 h-24' />
              <h1 className='text-5xl text-rose-800'>01</h1>  
            </div>
            
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl'>Web Dev</h1>
              <p>Lorem ipsumet earum praese autem iusto commodi vero. Recusandae.</p>
            </div>
            
            <h1 className='text-end text-xl font-bold text-rose-700 cursor-pointer' >Read More</h1>
          </div>

          {/* mobile app */}
          <div className='text-gray-200 lg:w-2/6 w-4/5 flex flex-col gap-5 p-5 rounded-xl hover:bg-gradient-to-br
                    hover:from-gray-900 hover:to-black' 
                style={{backgroundColor: '#0d0d0e'}}> 
            <div className='flex justify-between items-center'>
              <FaAndroid className='text-rose-700 w-24 h-24' />
              <h1 className='text-5xl text-rose-800'>02</h1>  
            </div>
            
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl'>Mobile Apps</h1>
              <p>Lorem ipsumet earum praese autem iusto commodi vero. Recusandae.</p>
            </div>
            
            <h1 className='text-end text-xl font-bold text-rose-700 cursor-pointer' >Read More</h1>
          </div>

          {/* ui ux */}
          <div className='text-gray-200 lg:w-2/6 w-4/5 flex flex-col gap-5 p-5 rounded-xl hover:bg-gradient-to-br
                    hover:from-gray-900 hover:to-black' 
                style={{backgroundColor: '#0d0d0e'}}> 
            <div className='flex justify-between items-center'>
              <SiMaterialdesignicons className='text-rose-700 w-24 h-24' />
              <h1 className='text-5xl text-rose-800'>03</h1>  
            </div>
            
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl'>UI/UX Design</h1>
              <p>Lorem ipsumet earum praese autem iusto commodi vero. Recusandae.</p>
            </div>
            
            <h1 className='text-end text-xl font-bold text-rose-700 cursor-pointer' >Read More</h1>
          </div>
        </div>
       
    </section>
  )
}