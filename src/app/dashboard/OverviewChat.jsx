import React from 'react'


// material ui
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import MessageIcon from '@mui/icons-material/Message';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function OverviewChat() {
  return (
    <div style={{backgroundColor: "#292a48"}} className='w-full h-full rounded-xl 
            flex flex-col justify-center items-center px-5 gap-5'>
        
        <div>
            <h1 className='text-5xl'>Contact Info</h1>
        
            <div>
                <GpsFixedIcon />
                <h1>Villa 16, Rue Matiben Les Sources, Bir Mourad Rais.</h1>
            </div>

            <div>
                <MessageIcon />
                <h1>contact@kyo-conseil.com</h1>
            </div>

            <div>
                <LanguageIcon />
                <h1>www.kyo-conseil.com</h1>
            </div>

            <div>
                <PhoneIcon />
                <h1>+(213) 550-193-126</h1>
            </div>

            <div>
                <AccessTimeFilledIcon />
                <h1>Dimanche à Jeudi 9:00h à 17:00h</h1>
            </div>
        </div>

    </div>
  )
}