import React from 'react'

export default function About() {
  return (
    <section className='flex gap-14 lg:gap-5 justify-center md:px-28 md:mb-24 flex-col-reverse lg:flex-row'>
        {/* left */}
        <div className='text-gray-200 w-full lg:w-1/2 flex flex-col gap-2 sm:gap-5 justify-center sm:px-7 px-4'>

            <div className='flex flex-col gap-1'>
              <p className='underline underline-offset-8 text-rose-700 sm:text-xl font-bold'>Get to Know</p>
              <h1 className='text-3xl sm:text-5xl font-bold'>About Us</h1>
            </div>
            

            <h1 className='text-base sm:text-2xl font-bold'>We Do Design, Code & Develop Software Finally Launch.</h1>

            <p className='text-sm sm:text-base' >Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Class onlin aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec lacinia placerat felis non aliquam.</p>

            {/* card */}
            <div className='flex flex-col gap-5 font-bold rounded-3xl px-10 md:py-6 sm:py-4 py-3 shadow-lg shadow-rose-700/70
                        mt-5 sm:mt-0'
                    style={{backgroundColor: '#0d0d0e'}}>
                <div className='flex items-center gap-2 cursor-pointer' >
                    <img src="/images/home/logo.jpg" alt="logo"
                        className='md:w-10 md:h-10 w-10 h-10' />
                        <h1 className='md:text-xl text-base'>KYO CONSEIL</h1>
                </div>
                <div className='sm:text-xl text-base'>
                  <h1>Best Creative IT Agency And Solutions</h1>
                  <h1 className='text-rose-700'>Since 2011.</h1>
                </div>
                
            </div>
        </div>

        {/* right img */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img src="./images/home/about.jpg" alt="img"
                className='w-11/12' />
        </div>
       

    </section>
  )
}
