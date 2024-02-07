import React from 'react'

export default function Home() {
  return (
    <section className='text-gray-300 flex gap-20 xl:gap-32 pt-20 justify-center items-center lg:pb-32 md:pb-36 sm:pb-48 pb-52' >

      {/* left */}
      <div className='flex flex-col gap-8 sm:gap-14 lg:gap-7 justify-center'>
        <div className='flex flex-col gap-2 md:text-6xl sm:text-5xl text-3xl font-bold'>
          <h1 className='text-center'>Creative & Minimal</h1>
          <h1 className='text-center lg:text-start'>IT AGENCY .</h1> 
        </div>

        <div className='flex justify-center lg:justify-start w-full'>
          <p className='lg:w-96 w-4/5 text-center lg:text-start'>We build personalized websites and mobile apps using the latest technologies, ensuring client satisfaction and timely delivery for an enhanced digital presence.</p>
        </div>

        {/* buttons */}
        <div className='text-2xl flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full px-10 sm:px-0'>

          <button className='border-2 border-black bg-black  px-10 py-2 rounded-sm
              hover:text-black hover:bg-rose-700'>Pricing</button>

          <button className='border-2 border-gray-300  px-10 py-2 rounded-sm 
              hover:text-black hover:bg-rose-700'>Projects</button>

        </div>
      </div>

      {/* right img */}
      <img src="./images/home/homeLogo.jpg" alt="logo" 
          className='w-96 hidden lg:block'/>
        
    </section>
  )
}