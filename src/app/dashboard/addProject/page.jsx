import React from 'react'

// components
import HowItWorks from '@/app/components/dashboard/appointment/HowItWorks'
import Pricing from '@/app/components/dashboard/appointment/Pricing'

export default function AddProject() {
  return (
    <div className='w-full  text-gray-200 flex flex-col gap-20'>

      <HowItWorks />
      <Pricing />
    </div>
  )
}
