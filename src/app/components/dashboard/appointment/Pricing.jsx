import React from 'react'


// icon 
import { FaCheck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



export default function Pricing() {
  const cards = [
    {
      id: 1,
      title: 'Basic Package',
      list: [
        {id: 1, l: 'Startups and small projects'},
        {id: 2, l: 'Responsive Website/Mobile App'},
        {id: 3, l: 'Limited Features'},
        {id: 4, l: 'Standard Support'},
      ],
      price: '100$'
    },
    {
      id: 2,
      title: 'Standard Package',
      list: [
        {id: 1, l: 'For growing businesses'},
        {id: 2, l: 'Responsive/Interactive Apps'},
        {id: 3, l: 'Additional Features'},
        {id: 4, l: 'Priority Support'},
      ],
      price: '300$'
    },
    {
      id: 3,
      title: 'Premium Package ',
      list: [
        {id: 1, l: 'Etablished businesses'},
        {id: 2, l: 'Responsive/Customizable'},
        {id: 3, l: 'Advanced Features'},
        {id: 4, l: 'Dedicated Support'},
      ],
      price: '500$'
    },
  ]
  return (
    <div className='w-full bg-thirdly px-3 sm:px-5 md:px-5 lg:px-0 2xl:px-24 pt-20'>

        <div className='flex flex-col items-center gap-3 text-center pb-5'>
            <h1 className='text-4xl font-bold'>Pricing Table</h1>
            <hr className='w-20 border-2 border-rose-700' />
        </div>

        {/* card */}
        {cards.map((card, index) => (
        
          <div className='flex flex-col pt-7 items-center justify-center lg:px-0'>

          <div className='w-full md:w-5/6 2xl:w-4/5 h-96 sm:h-64 flex flex-col sm:flex-row rounded-2xl border border-primary'>

            <div className='h-2/6 sm:h-full w-full sm:w-5/12 lg:w-4/12 bg-gray-400 rounded-t-2xl sm:rounded-r-none sm:rounded-l-2xl flex justify-center items-center relative'>
              < h1 className='text-white text-2xl sm:text-base md:text-xl pr-6 md:pr-9 lg:pr-14 pb-10 sm:pb-0'>{card.title}</h1>

              <div className='absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-zinc-800 top-20 sm:top-22 md:top-20 lg:top-16 sm:-right-12 lg:-right-16 border-4 border-forthly flex justify-center items-center'>
                <h1 className='md:text-2xl lg:text-4xl font-bold'>{card.price}</h1>
              </div>
            </div>


            <div className='w-full sm:w-9/12 h-4/6 sm:h-full bg-forthly flex items-center justify-center '>
              <ul className='grid grid-flow-col grid-rows-4 lg:grid-rows-2 lg:pl-8 2xl:pl-0 text-sm gap-3 sm:gap-7 pt-10  '>
                {card.list.map((ull, index) => (
                  <li className='underline underline-offset-8'>
                  <FaCheck className='inline-block mr-2 text-rose-700 w-5 h-5' />{ull.l}</li>
                ))}
              </ul>
            </div>

            <div className='w-full sm:w-1/12 h-1/6 sm:h-full bg-forthl bg-zinc-800 border-l border-primary rounded-b-2xl sm:rounded-l-none sm:rounded-r-2xl
            flex justify-center items-center hover:bg-forthly/50 cursor-pointer'>
              <FaShoppingCart className='w-8 h-8 text-rose-700 my-2 sm:my-0' />
            </div>
          </div>

      </div> ))}


      <div className='flex justify-center items-center'>
        <h1 className='px-20 py-5 text-4xl font-bold bg-primary my-20 rounded-md cursor-pointer
                  hover:bg-rose-700 group'>
              <FaShoppingCart className='inline-block text-rose-700 w-10 h-10 group-hover:text-white
                    mr-5' />Place Order</h1>

      </div>

    </div>
  )
}
