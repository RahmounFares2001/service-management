'use client'

import React, { useState } from 'react'


// css
import styles from "./userAccount.module.css";


export default function BankCards() {


 /* 
 Reminder : Regilar expression:
    1/ 
    / : start or end of the regular expression.
    \ : espace any following 
    D : characters
    /g : indicata that applied globali not just for the first
    'replace it by empty'

    2/
    \d : number
    {4} : 4 nubmers
    (?=\d) : the following should be degital

     $1 refers to the content of the first capturing group
     add after it space
    */

  // make it visa numbers form XXXX XXXX ...
  const [inputValue, setInputValue] = useState('');

  const formatInput = (event) => {
    let newValue = event.target.value.replace(/\D/g, '');
    newValue = newValue.replace(/(\d{4})(?=\d)/g, '$1 ');

    setInputValue(newValue);
  };


  // Allow only numeric input in CCV
  const [numericPassword, setNumericPassword] = useState('');
  const handleInputChange = (event) => {
    const numericValue = event.target.value.replace(/\D/g, '');
    setNumericPassword(numericValue);
  };

  // hide card state
  const [ hideCard, setHideCard ] = useState(false);

  return (
    <div className='text-black flex flex-col  lg:items-stretch gap-10 
    w-full sm:px-10 md:px-20 lg:px-0 lg:w-9/12 2xl:w-3/5 pt-5 sm:pt-10 lg:pt-20 my-5
    mx-2 sm:mx-4 lg:mx-0 rounded-md
    pb-20 lg:pb-20
    border border-gray-700'>
      
      <form action=""
          className='flex gap-2'>
      
        {/* visa card */}
        <div className='w-96 h-full lg:flex flex-col gap-5 justify-center items-center hidden'>
          <div className='bg-whit bg-slate-900 border border-gray-700 w-5/6 h-56 relative rounded-md
              shadow-black/80 shadow-2xl'>

            <img src="./images/profile/masterCard.jpg" alt="masterCard" 
                  className='w-16 h-10 absolute top-3 left-3' />
            <h1 className='text-gray-300 text-2xl font-bold absolute top-3 right-5' >Card</h1>

            {/* input visa numbers */}
            <input type="text" placeholder='xxxx xxxx xxxx xxxx' 
                  onChange={formatInput} maxlength="19" value={inputValue}
                  className='absolute bottom-14 left-10 w-4/6 px-2 py-2 text-center font-bold
                  bg-gray-100'/>
            
          </div>
          {hideCard ?
              <div className='text-base sm:text-xl text-gray-300 cursor-pointer hover:text-yellow-600'
                    onClick={()=> {setHideCard(false)}}>Show Card</div> :
        
              <div className='text-base sm:text-xl text-gray-300 cursor-pointer hover:text-yellow-600'
                    onClick={()=> {setHideCard(true)}}>Hide Card</div> }
       </div>
        

        {/* form */}
        <ul className='w-full lg:w-1/2 flex flex-col gap-8 items-center text-gray-300'>

        <h1 className='text-gray-300 text-4xl font-bold text-center pb-3 sm:pb-0'>Card details</h1>

              {/* Expiration date */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-4/5 flex `}>
                <input type="date" placeholder='' required='required'
                  className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>Expiration date</span>
              </li>

              {/* CCV */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-4/5 flex `}>
                <input type="password" pattern='[0-9]*' required='required' value={numericPassword}
                  onChange={handleInputChange} maxLength={3}
                  className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>CCV</span>
              </li>

              {/* holder's name */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-4/5 `}>
                <input type="text" placeholder='' required='required'
                    className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
                <span className='absolute top-1 left-2 pointer-events-none duration-500'>Cardholder's name</span>
              </li>

              {/* visa card */}
              <div className='w-full sm:w-5/6 md:w-3/5 h-56 sm:h-full flex flex-col gap-5 justify-center items-center lg:hidden'>
                <div className='bg-whit bg-slate-900 border border-gray-700 w-5/6 h-56 relative rounded-md
                    shadow-black/80 shadow-2xl'>

                  <img src="./images/profile/masterCard.jpg" alt="masterCard" 
                        className='w-16 h-10 absolute top-3 left-3' />
                  <h1 className='text-gray-300 text-2xl font-bold absolute top-3 right-5' >Card</h1>

                  {/* input visa numbers */}
                  <input type="text" placeholder='xxxx xxxx xxxx xxxx' 
                        onChange={formatInput} maxlength="19" value={inputValue}
                        className='absolute bottom-8 sm:bottom-14 left-5 sm:left-10 w-4/5 sm:w-4/6 px-2 py-2 text-center font-bold
                        bg-gray-100 text-xs sm:text-base text-black'/>
                  
                </div>
                
                {hideCard ?
                  <div className='text-base sm:text-xl text-gray-300 cursor-pointer hover:text-yellow-600'
                  onClick={()=> {setHideCard(false)}}>Show Card</div> :
        
                  <div className='text-base sm:text-xl text-gray-300 cursor-pointer hover:text-yellow-600'
                          onClick={()=> {setHideCard(true)}}>Hide Card</div>
                }
                
                
              </div>

              {/* sumbit btn */}
              <li className='flex justify-center sm:justify-normal text-black' >
                  <button className='hover:bg-white px-14 sm:px-20 py-2 text-base sm:text-xl bg-gray-300' >Save</button>
              </li>
            </ul>
      </form>

    </div>
  )
}
