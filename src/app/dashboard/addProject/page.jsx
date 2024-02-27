import React from 'react'

// components
import HowItWorks from '/src//app/components/dashboard/addProject/HowItWorks'
import Pricing from '/src//app/components/dashboard/addProject/Pricing'

export default function AddProject() {
  return (
    <div className='w-full text-gray-200 flex flex-col gap-20'>

      <HowItWorks />
      <Pricing />
    </div>
  )
}
