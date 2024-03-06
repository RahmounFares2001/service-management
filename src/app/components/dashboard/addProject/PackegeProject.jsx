import React, { useContext } from 'react'


import { TbSettings2 } from "react-icons/tb";
import { GoPackage } from "react-icons/go";
import { MdOutlineWorkspacePremium } from "react-icons/md";

// context
import { dashboardContext } from '@/app/dashboard/layout';


export default function PackegeProject() {
    
    const { chosenPackege, setChosenPackage } = useContext(dashboardContext);

  return (
    <div className='w-full h-full bg-gray-300 rounded-b-xl pt-10 flex flex-col gap-5' >

        <h1 className='text-center text-xl sm:text-2xl font-bold text-gray-800'>Chose your packege</h1>

        <div className='flex gap-2 sm:gap-5 md:gap-5 lg:gap-8 px-1 sm:px-8 md:px-10 lg:px-24 justify-center items-center'>

            <div className={`w-1/3 h-40 sm:h-44 flex flex-col 
                            justify-center items-center gap-1 sm:gap-2 rounded-xl hover:bg-gradient-to-bl cursor-pointer
                            ${chosenPackege == 'basic' ? 'bg-gray-900 border-2' : 'bg-gradient-to-tr from-rose-950 to-rose-800'} `}
                            onClick={()=> {setChosenPackage('basic')}}>
                <div className='bg-gray-600/50 p-2 sm:p-4 rounded-full' >
                    <TbSettings2 className='w-8 h-8 sm:w-10 sm:h-10' />
                </div>
                <h1 className='text-center  md:text-xl font-bold' >Basic <span className='hidden sm:inline-block' >Package</span></h1>
                <h1 className='text-center md:text-xl font-bold' >100$</h1>
            </div>


            <div className={`w-1/3 h-40 sm:h-44 flex flex-col 
                            justify-center items-center gap-1 sm:gap-2 rounded-xl hover:bg-gradient-to-bl cursor-pointer
                            ${chosenPackege == 'standard' ? 'bg-gray-900 border-2' : 'bg-gradient-to-tr from-rose-950 to-rose-800'} `} 
                            onClick={()=> {setChosenPackage('standard')}}>
                <div className='bg-gray-600/50 p-2 sm:p-4 rounded-full' >
                    <GoPackage className='w-8 h-8 sm:w-10 sm:h-10' />
                </div>
                <h1 className='text-center md:text-xl font-bold' >Standard <span className='hidden sm:inline-block' >Package</span></h1>
                <h1 className='text-center md:text-xl font-bold' >300$</h1>
            </div>

            <div className={`w-1/3 h-40 sm:h-44 flex flex-col 
                            justify-center items-center gap-1 sm:gap-2 rounded-xl hover:bg-gradient-to-bl cursor-pointer
                            ${chosenPackege == 'premium' ? 'bg-gray-900 border-2' : 'bg-gradient-to-tr from-rose-950 to-rose-800'} `}
                            onClick={()=> {setChosenPackage('premium')}}>
                <div className='bg-gray-600/50 p-2 sm:p-4 rounded-full' >
                    <MdOutlineWorkspacePremium className='w-8 h-8 sm:w-10 sm:h-10' />
                </div>
                <h1 className='text-center md:text-xl font-bold' >Premium <span className='hidden sm:inline-block' >Package</span></h1>
                <h1 className='text-center md:text-xl font-bold' >500$</h1>
            </div>
      </div>
    </div>
  )
}
