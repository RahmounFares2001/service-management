import React, { useContext, useState } from 'react'


// material ui
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AddBoxIcon from '@mui/icons-material/AddBox';


import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// context
import { dashboardContext } from './page';


export default function SideBar() {

  // show menu current projects
  // const [ options, setOptions ] = useState(false);
  // const [ hid, setHid ] = useState("hidden")
  // const optionsBtn = () => {
  //   options? setHid("hidden") : setHid("");
  //   setOptions(!options)
  // };
  const [ expand, setExpand ] = useState(false);
  const optionsBtn = () => {
    setExpand(!expand)
  };


  // context
  const {menu, setMenu} = useContext(dashboardContext);
  
  
  return (
     
    <div className='py-5 px-3 bg-gray-300/20 w-full h-full border-r-2 border-solid border-gray-300/30'>

        {/* header */}
        <div className='pb-10 w-full flex items-center justify-center'>
          <img src="images/dashboard/logo.jpg" alt="logo"
                className='w-4/6' />
        </div>


        {/* Menu */}
        <div className='w-full flex flex-col gap-5'>

            <div className='homeIconDiv flex gap-5 hover:bg-blue-950 px-5 py-2 rounded-xl cursor-pointer
                group' >
                <h1 className='group-hover:text-white'>Overview</h1>
            </div>

            <div className='flex flex-col gap-5 w-full cursor-pointer'>
              {/* My projects */}
              <div className='flex gap-5 w-full cursor-pointer hover:bg-blue-950 px-5 py-2 rounded-xl
                group'
                    onClick={() => { setExpand(!expand)}} >
                <h1 className='group-hover:text-white'>My Projects</h1>
                {expand? <ExpandLessIcon /> : <ExpandMoreIcon /> }
              </div>
              {expand && 
                <div>
                  <div className='flex flex-col gap-5 w-full pl-14'>
                    <h1 className='w-full cursor-pointer hover:text-white
                    hover:bg-blue-950 px-5 py-2 rounded-xl'>Web dev</h1>

                    <h1 className='w-full cursor-pointer hover:text-white
                    hover:bg-blue-950 px-5 py-2 rounded-xl'>Mobile dev</h1>

                    <h1 className='w-full cursor-pointer hover:text-white
                    hover:bg-blue-950 px-5 py-2 rounded-xl'>SEO</h1>
                  </div>
                </div> }
{/* 
                <div className={`${hid}`}>
                  <div className='flex flex-col gap-5 w-full pl-14'>
                    <h1 className='w-full cursor-pointer hover:text-white
                    hover:bg-blue-950 px-5 py-2 rounded-xl'>Web dev</h1>

                    <h1 className='w-full cursor-pointer hover:text-white
                    hover:bg-blue-950 px-5 py-2 rounded-xl'>Mobile dev</h1>

                    <h1 className='w-full cursor-pointer hover:text-white
                    hover:bg-blue-950 px-5 py-2 rounded-xl'>SEO</h1>
                  </div>
                </div> */}
            </div>

            <div className='flex gap-5 w-full cursor-pointer hover:bg-blue-950 px-5 py-2 rounded-xl
                group'>
                <h1 className='group-hover:text-white'>Add Service</h1>
            </div>
        </div>
    </div> 
  )
}
