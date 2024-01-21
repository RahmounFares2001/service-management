import React, { useState } from 'react'


// material ui
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AddBoxIcon from '@mui/icons-material/AddBox';


import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SideBar() {



  // show menu current projects
  const [ options, setOptions ] = useState(false);
  const [ hid, setHid ] = useState("hidden")
  const optionsBtn = () => {
    options? setHid("hidden") : setHid("");
    setOptions(!options)
  };

  
  return (
    <div className='py-5 px-3 bg-gray-300/20 w-full h-full border-r-2 border-solid border-gray-300/30'>

        {/* header */}
        <div className='pb-10 w-full flex items-center justify-center'>
          <img src="images/dashboard/logo.jpg" alt="logo"
              className='w-4/6' />
    
        </div>


        {/* Menu */}
        <div className='w-full flex flex-col gap-5'>
            <h1 className='pb-4'>Menu</h1>

            <div className='flex gap-5' >
                <HomeIcon className='HomeIcon' style={{color: "#5B504C"}} />
                <h1 className='hover:text-blue-800 cursor-pointer'>Overview</h1>
            </div>

            <div className='flex flex-col gap-5 w-full cursor-pointer'>
              <div className='flex gap-5 w-full cursor-pointer' onClick={optionsBtn}>
                <AccountTreeIcon style={{color: "#5B504C"}} />
                <h1 className='hover:text-blue-800'>My Projects</h1>
                {options? <ExpandLessIcon /> : <ExpandMoreIcon /> }
              </div>

                <div className={`${hid}`}>
                  <div className='flex flex-col gap-5 w-full pl-14'>
                    <h1 className='w-full cursor-pointer hover:text-blue-800'>Web dev</h1>
                    <h1 className='w-full cursor-pointer hover:text-blue-800'>Mobile dev</h1>
                    <h1 className='w-full cursor-pointer hover:text-blue-800'>SEO</h1>
                  </div>
                </div>
            </div>

            <div className='flex gap-5 w-full cursor-pointer'>
                <AddBoxIcon style={{color: "#5B504C"}} />
                <h1 className='hover:text-blue-800'>Add Service</h1>
            </div>
        </div>
    </div>
  )
}
