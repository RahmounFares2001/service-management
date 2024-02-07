import React from 'react'

export default function About() {
  return (
    <section>
        {/* left */}
        <div className='text-gray-300'>
            <p className='underline underline-offset-8 text-rose-700 font-bold'>Get to Know</p>
            <h1 className='text-5xl font-bold'>About Us</h1>
            <h1>We Do Design, Code & Develop Software Finally Launch.</h1>
            <p>Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Class onlin aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec lacinia placerat felis non aliquam.</p>

            <div className=''>
                <div className='flex items-center gap-2 cursor-pointer' >
                    <img src="/images/home/logo.jpg" alt="logo"
                        className='md:w-10 md:h-10 w-10 h-10' />
                        <h1 className='md:text-base text-sm'>KYO CONSEIL</h1>
                </div>
                <h1>Best Creative IT Agency And Solutions</h1>
                <h1>Since 2011</h1>
            </div>
        </div>


    </section>
  )
}
