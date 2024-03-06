'use client'


import React, { useContext } from 'react'

// components
import AddProjectForm from '@/app/components/dashboard/addProject/AddProjectForm'
import HowItWorks from '@/app/components/dashboard/addProject/HowItWorks'
import Pricing from '@/app/components/dashboard/addProject/Pricing'


// context
import { dashboardContext } from '@/app/dashboard/layout'


export default function AddProject() {

  const { showAddProjectForm, setShowAddProjectForm } = useContext(dashboardContext);

  return (
    <div className='w-full text-gray-200 flex flex-col gap-20'>

      <AddProjectForm />

      
      <HowItWorks />
      <Pricing />
    </div>
  )
}
