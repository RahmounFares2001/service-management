import React from 'react'

export default function Pagination() {
  return (
    <div className='w-11/12 lg:w-4/5 flex justify-between bg-primary px-5 py-2 text-sm md:text-base'>
      
        <button className=' bg-gradient-to-tr from-gray-300 to-gray-700 md:px-8 py-1 rounded-md
                hover:bg-gradient-to-bl w-20 md:w-36' >Previous</button>

        <button className=' bg-gradient-to-tr from-gray-300 to-gray-700 md:px-8 py-1 rounded-md
                hover:bg-gradient-to-bl w-20 md:w-36' >Next</button>
    </div>
  )
}
