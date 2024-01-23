// import React, { useState, useContext } from 'react'

// import MenuIcon from '@mui/icons-material/Menu';


// // material ui
// import NotificationsIcon from '@mui/icons-material/Notifications';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import SearchIcon from '@mui/icons-material/Search';

// import Person2Icon from '@mui/icons-material/Person2';
// import LogoutIcon from '@mui/icons-material/Logout';

// // context
// import { dashboardContext } from './page';




// export default function Header() {


//   // profile
//   const [ expand, setExpand ] = useState(false);
//   const btnExpand = () => {
//     setExpand(!expand)
//   };
  

//   // context
//   // manu
//    const {menu, setMenu} = useContext(dashboardContext)

//    const handleMenu = e => {
//      setMenu(!menu);
//    }
 

//   return (
//     <div className='border-b-2 '>
//         <div className='flex justify-between items-center'>
//           <MenuIcon style={{width: "40px", height: "40px"}}
//                 onClick={handleMenu}
//                 className='cursor-pointer'/>

//               {/* profile */}
//               <div className='w-44'> 
                  
//                   <div className='flex justify-center'>
//                     <img onClick={btnExpand} src="images/dashboard/header/profile.jpg" alt="profile"
//                      className='w-2/6 rounded-full border-2 border-white cursor-pointer' />
//                   </div>

//                 {/* expand */}
//                   {expand && 
//                         <div className='absolute pl-5 pt-2 bg-gray-300/20 border-x-2 border-b-2 border-gray-500/10'>
//                           <div className='flex gap-3 p-2 cursor-pointer'>
//                             <Person2Icon className='personIcon' />
//                             <h1 className='pr-5'>Profile</h1>
//                           </div>
      
//                           <div className='flex gap-3 p-2 cursor-pointer'>
//                             <LogoutIcon className='logoutIcon' />
//                             <h1>Logout</h1>
//                           </div>
//                       </div>
//                     }
                  
//             </div>
//         </div>

//     </div>
//   )
// }
