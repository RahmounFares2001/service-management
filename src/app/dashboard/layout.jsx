'use client'

import React, { useEffect, useState } from 'react'

// components
import HeaderDash from '../components/dashboard/HeaderDash'
import Footer from '../components/home/footer/Footer';


// // context
export const dashboardContext = React.createContext();

import {Toaster} from 'react-hot-toast';



export default function DashboardLayout({children}) {

     // profile drop menu
     const [ showProfileMenu, setShowProfileMenu ] = useState(false);
     const [ showCurrentMenu, setShowCurrentMenu ] = useState(false);
     const [ showAddMenu, setShowAddMenu ] = useState(false);

     // show responsive header
     const [ showResponsiveHeader, setShowResponsiveHeader ] = useState(false);

    // show appoitment form 
    const [showAppointmentForm, setShowAppointmentForm ] = useState(false);

    // appointment
    const [ appoinmentComponentNumber, setAppoinmentComponentNumber ] = useState(1);

    // appointment form values
    const [ typeAppointment, setTypeAppointment ] = useState('');
    const [ dateAppointment, setDateAppointment ] = useState('');
    const [ informationsAppointment,  setInformationsAppointment ] = useState('');


    // add project
    const [ showAddProjectForm, setShowAddProjectForm ] = useState(false);
    const [ projectComponentNumber, setProjectComponentNumber ] = useState(1);

    // project form values
    const [ typeProject, setTypeProject ] = useState('');
    const [ projectDescription,  setProjectDescription ] = useState({name: '', file: ''});
    const [ chosenPackege, setChosenPackage ] = useState('');


    // in form informations when it empty and pres next it apear 
    const [ showMsg, setShowMsg ] = useState(true);

 


     const contextElement = {
      showProfileMenu,
      setShowProfileMenu,
      showCurrentMenu,
      setShowCurrentMenu,
      showAddMenu,
      setShowAddMenu,
      showResponsiveHeader,
      setShowResponsiveHeader,

      showMsg,
      setShowMsg,

      appoinmentComponentNumber,
      setAppoinmentComponentNumber,
      showAppointmentForm,
      setShowAppointmentForm,
      typeAppointment,
      setTypeAppointment,
      dateAppointment,
      setDateAppointment,
      informationsAppointment,
      setInformationsAppointment,

      showAddProjectForm,
      setShowAddProjectForm,
      projectComponentNumber,
      setProjectComponentNumber,
      typeProject,
      setTypeProject,
      projectDescription,
      setProjectDescription,
      chosenPackege,
      setChosenPackage,

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

            <div className='bg-forthly font-mono'
                    onClick={()=> {setShowProfileMenu(false)}}>
                {children}
            </div>

             {/* page up */}
            <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>^</div>

            <Footer />

            <Toaster />

        </dashboardContext.Provider>
        </>
    
    )
}