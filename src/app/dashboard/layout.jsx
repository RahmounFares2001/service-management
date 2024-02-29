'use client'

import React, { useEffect, useState } from 'react'

// components
import HeaderDash from '../components/dashboard/HeaderDash'
import Footer from '../components/home/footer/Footer';

// // context
export const dashboardContext = React.createContext()



export default function DashboardLayout({children}) {

     // profile drop menu
     const [ showProfileMenu, setShowProfileMenu ] = useState(false);
     const [ showCurrentMenu, setShowCurrentMenu ] = useState(false);
     const [ showAddMenu, setShowAddMenu ] = useState(false);

     // show responsive header
     const [ showResponsiveHeader, setShowResponsiveHeader ] = useState(false);

     const contextElement = {
      showProfileMenu,
      setShowProfileMenu,
      showCurrentMenu,
      setShowCurrentMenu,
      showAddMenu,
      setShowAddMenu,
      showResponsiveHeader,
      setShowResponsiveHeader
     }


    // up page button
     const [goUp, setGoUp] = useState(false);

     const scrollToTop = () => {
       window.scrollTo({ top: (0, 0), behavior: "smooth" });
     };

     useEffect(() => {
        const onPageScroll = () => {
          if (window.pageYOffset > 600) {
            setGoUp(true);
          } else {
            setGoUp(false);
          }
        };
        window.addEventListener("scroll", onPageScroll);
    
        return () => {
          window.removeEventListener("scroll", onPageScroll);
        };
      }, [])

    return(
        <>
        <dashboardContext.Provider value={contextElement}>

            <HeaderDash />

            <div className=' bg-primary'
                    onClick={()=> {setShowProfileMenu(false)}}>
                {children}
            </div>

             {/* page up */}
            <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>^</div>


            <Footer />

        </dashboardContext.Provider>
        </>
    
    )
}