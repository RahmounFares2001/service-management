import React, { useState } from 'react'


// material ui
import Person2Icon from '@mui/icons-material/Person2';
import WorkIcon from '@mui/icons-material/Work';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';

import WebIcon from '@mui/icons-material/Web';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LanguageIcon from '@mui/icons-material/Language';


export default function Side() {


  // add project option
  const [ options, setOptions ] = useState(true);

  return (
    <div className='flex flex-col gap-5 h-full'>
      
      {/* head profile */}
      <div className='flex gap-5 justify-start items-center profile w-full h-1/6 rounded-xl
          pl-10'
       style={{backgroundColor: "#292a48"}}>
        <img src="images/dashboard/side/profile.jpg" alt="profile"
            className='w-14 rounded-full border-2 border-white' />

        <div>
          <h1 className='text-gray-300'>Rahmoun F</h1>
          <div className='flex gap-2 items-center'>
            <div className='w-2 h-2 rounded-full bg-green-700'></div>
            <p className='text-gray-500 text-sm'>online</p>
          </div>
        </div>
      </div>

      {/* Main side bar */}
      <div className='profile h-full w-ful rounded-xl px-2 py-5 flex flex-col gap-5
            text-gray-200' style={{backgroundColor: "#292a48"}}>

        <div className='flex gap-4 px-5 py-2 rounded-md cursor-pointer sideBarBtn'>
          <Person2Icon />
          <h1>Overview</h1>
        </div>

        <div className='flex gap-4 px-5 py-2 rounded-md cursor-pointer sideBarBtn'>
          <WorkIcon />
          <h1>My Projects</h1>
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex gap-4 px-5 py-2 rounded-md cursor-pointer sideBarBtn'
                  onClick={()=> {setOptions(!options)}}>
            <AddIcon />
            <h1>Add service</h1>
          </div>

          {/* options */}
            {options &&
            <div className='ml-10'>
              <div className='flex gap-4 px-5 py-2 rounded-md cursor-pointer sideBarBtn'>
                <WebIcon />
                <h1>Web dev</h1>
              </div>
              
              <div className='flex gap-4 px-5 py-2 rounded-md cursor-pointer sideBarBtn'>
                <PhoneAndroidIcon />
                <h1>Mobile</h1>
              </div>

              <div className='flex gap-4 px-5 py-2 rounded-md cursor-pointer sideBarBtn'>
                <LanguageIcon />
                <h1>SEO</h1>
              </div>
            </div>
            }
        </div>

        <div className='flex gap-4 px-5 py-2 rounded-md cursor-pointer sideBarBtn'>
          <SettingsIcon />
          <h1>Settings</h1>
        </div>
        
      </div>

    </div>
  )
}