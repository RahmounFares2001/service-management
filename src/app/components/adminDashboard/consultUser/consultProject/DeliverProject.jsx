import React from 'react'
import InputFile from './inputFile'


export default function DeliverProject() {
  return (
    <div className='w-full sm:w-9/12 flex flex-col justify-center items-center gap-10' >  

      <h1 className='sm:text-xl lg:text-2xl' >Deliver Project</h1>

      <InputFile />

      <button className='px-10 py-1 bg-forthly text-gray-300 rounded-sm hover:bg-primary
                lg:text-xl' >Deliver</button>
      
    </div>
  )
}
