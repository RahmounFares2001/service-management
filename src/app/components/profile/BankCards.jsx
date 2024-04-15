'use client'

import React, { useEffect, useState } from 'react'

import {motion} from "framer-motion"

import axios from 'axios';


// css
import styles from "./userAccount.module.css";
import Image from 'next/image';


// icons
import { BiShow } from "react-icons/bi";

import {toast} from 'react-hot-toast';


export default function BankCards() {

  // get old visa
  const getOldInformations = async () => {
    try {
      const response = await axios.get('/api/users/getVisaCard');

      const oldVisa = response.data.oldVisaCard;
      setHolderName(oldVisa.holderName);
      setExperationDate(oldVisa.expirationDate);

      if(holderName == '') {
        setVisaExist(true);
      } else {setVisaExist(false)};

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() =>{
    getOldInformations();
  }, [])


//  /* 
//  Reminder : Regilar expression:
//     1/ 
//     / : start or end of the regular expression.
//     \ : espace any following 
//     D : characters
//     /g : indicata that applied globali not just for the first
//     'replace it by empty'

//     2/
//     \d : number
//     {4} : 4 nubmers
//     (?=\d) : the following should be degital

//      $1 refers to the content of the first capturing group
//      add after it space
//     */

  // make it visa numbers form XXXX XXXX ...
  const [inputValue, setInputValue] = useState('');

  const formatInput = (event) => {
    let newValue = event.target.value.replace(/\D/g, '');
    newValue = newValue.replace(/(\d{4})(?=\d)/g, '$1 ');

    setInputValue(newValue);
    setCardNumber(newValue);
  };


  // Allow only numeric input in CCV
  const [numericPassword, setNumericPassword] = useState('');
  const handleInputChange = (event) => {
    const numericValue = event.target.value.replace(/\D/g, '');
    setNumericPassword(numericValue);
    setCcv(numericValue);
  };

  
  // hide card state
  const [ hideCard, setHideCard ] = useState(false);


  // show ccv password
  const [ showCcvPassword, setShowCcvPassword] = useState(false);


  // visa informations
  const [holderName, setHolderName] = useState('');
  const [ccv, setCcv] = useState();
  const [expirationDate, setExperationDate] = useState('');
  const [cardNumber, setCardNumber] = useState()


  // rotate card 
  const [rotateCard, setRotateCard] = useState(false);


  // save new visa card
  const newVisaCard = {
    holderName: holderName,
    cardNumber: cardNumber,
    expirationDate: expirationDate,
    ccv: ccv
  };

  const onSave = async () => {
    try {
      if(holderName.length == 0 || ccv.length == 0 || expirationDate.length == 0 || cardNumber.length == 0) {
        toast.error('Please provide informations!');
        setSpin(false);
      } else {
        setSpin(true);
        const response = await axios.post('/api/users/updateVisaCard', newVisaCard)
        toast.success('Visa added succesfly!')
        setSpin(false);
        setVisaExist(true);
      }
    
    } catch (error) {
      toast.error('Some thing wrong!')
      console.log(error);
    }
  };

    const [visaExist, setVisaExist] = useState(false);


  // delete visa card
  const onDelete = async () => {
    try {
      setSpin(true);
      const response = await axios.delete('/api/users/deleteVisaCard');
      setSpin(false);
      toast.success('Visa deleted succesfly!');
      setVisaExist(false);
    } catch (error) {
      toast.error('Some thing wrong!');
      console.log(error);
    }
  };
    

  // submit btn spin
  const [spin, setSpin] = useState(false);
  
 
  return (
    <>
    {visaExist? 

    <div className='text-black flex flex-col justify-center items-center gap-10 
                  w-full sm:px-10 md:px-20 lg:px-0 lg:w-8/12 2xl:w-3/5 pt-5 sm:pt-10 lg:pt-20 my-5
                  mx-2 sm:mx-4 lg:mx-0 rounded-md
                  pb-20 lg:pb-20 mt-20
                  border border-gray-700' >
      <h1 className='text-gray-300 text-3xl sm:text-4xl font-bold text-center p-2' >Update or Delete your visa card</h1>
      <div className={`${styles.visa} w-11/12 sm:w-4/5 md:w-4/6 lg:w-4/5 2xl:w-3/5  h-max py-5
            flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center px-5 rounded-md shadow-md shadow-black`} >
        <div className='flex sm:flex-col gap-1 sm:gap-0 text-gray-200' >
          <h1>{holderName}</h1>
          <h1>{expirationDate}</h1>
        </div>
        
        {/* delete and upadte */}
        <div className='flex gap-2 2xl:gap-3' >
          <button className={`${spin && 'button button-loading'} px-3 2xl:px-5 py-1 text-xl text-gray-200 bg-red-700 hover:bg-red-800 rounded-md
                        w-max h-max`}
                  onClick={onDelete}><span className='button-text' >Delete</span></button>
          <button className='px-3 2xl:px-5 py-1 text-xl text-gray-200 bg-yellow-700 hover:bg-yellow-800 rounded-md
                        w-max h-max' 
                  onClick={() => {setVisaExist(false) }}>Update</button>

        </div>
        
      </div>
    </div>   :



    <motion.div className='text-black flex flex-col  lg:items-stretch gap-10 
    w-full sm:px-10 md:px-20 lg:px-0 lg:w-8/12 2xl:w-3/5 pt-5 sm:pt-10 lg:pt-20 my-5
    mx-2 sm:mx-4 lg:mx-0 rounded-md
    pb-20 lg:pb-20 mt-40
    border border-gray-700 relative'
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, delay: 0.4}}>
      
      <div className='flex flex-col  gap-2 justify-center items-center'>
      
        {/* visa card */}
        <motion.div className='w-11/12 sm:w-4/5 md:w-3/5 lg:w-4/5 lg:flex flex-col gap-5 justify-center items-center absolute -top-28 left-4 sm:left-28 md:left-52 lg:left-auto'
                    animate={{ rotateX: rotateCard ? -180 : 0}}
                    transition={{duration: 1}} >

          
          <div className={`${styles.visa} bg-whit bg-slate-90 border border-gray-700 w-full sm:w-5/6 h-56 relative rounded-md
              shadow-black/80 shadow-2xl`}>

            {rotateCard ?
            <motion.div className='absolute top-5 left-8'
                        animate={{ rotateX: rotateCard ? -180 : 0}}
                        transition={{duration: 1}}>
              <ul className='flex flex-col gap-1 text-gray-400 text-xs sm:text-sm'>
                <li>CCV</li>
                <li>
                  <input type={`${showCcvPassword ? 'text' : 'password'}`} pattern='[0-9]*' required='required' value={numericPassword}
                    onChange={handleInputChange} maxLength={3} onClick={()=>{setRotateCard(true)}}
                    className='bg-transparent' disabled />
                </li>
              </ul>       
            </motion.div> :
              <>
              <img src="/images/profile/masterCard.jpg" alt="masterCard" 
                    className='w-16 h-10 absolute top-3 left-3' />
              <h1 className='text-gray-300 text-2xl font-bold absolute top-3 right-5' >Card</h1>

              <input type="text" placeholder='xxxx xxxx xxxx xxxx' 
                    onChange={formatInput} maxlength="19" value={inputValue}
                    className='absolute top-24 sm:left-10 w-full sm:w-4/6 px-2 py-2 text-center 
                              bg-transparent text-gray-400 text-xl font-extrabold border-none outline-none'/>
              
              <ul className='flex flex-col gap-1 absolute bottom-2 left-4 text-gray-400 text-xs sm:text-sm'>
                <li>Cardholder's name</li>
                <li>{holderName}</li>
              </ul>

              <ul className='flex flex-col gap-1 absolute bottom-2 right-4 text-gray-400 text-xs sm:text-sm'>
                <li>Expiration date</li>
                <li>{expirationDate}</li>
              </ul>
              </>  
               }

              {rotateCard &&
                  <div className='absolute top-2/4 w-full h-14 bg-gray-700/50'>
                  </div>}

            
          </div>
       </motion.div>
        

        {/* form */}
        <ul className='w-full lg:w-3/5 flex flex-col gap-8 items-center text-gray-300 pt-40 lg:pt-20'>

              {/* card number */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-full flex `}>
                <input type="text" placeholder='xxxx xxxx xxxx xxxx' 
                    onChange={formatInput} maxlength="19" value={inputValue} onClick={()=>{setRotateCard(false)}}
                    className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
                <span className='absolute top-1 left-2 pointer-events-none duration-500'>Card Number</span>

              </li>



              {/* Expiration date */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-full flex `}>
                <input type="month" placeholder='' required='required'
                  className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                  onChange={(event) => {setExperationDate(event.target.value)}}
                  onClick={()=>{setRotateCard(false)}} />
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>Expiration date</span>
              </li>

              {/* CCV */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-full flex `}>
                <input type={`${showCcvPassword ? 'text' : 'password'}`} pattern='[0-9]*' required='required' value={numericPassword}
                  onChange={handleInputChange} maxLength={3} onClick={()=>{setRotateCard(true)}}
                  className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'/>
              <span className='absolute top-1 left-2 pointer-events-none duration-500'>CCV</span>
              <BiShow className='absolute right-5 top-4 w-5 h-5 cursor-pointer'
                      onClick={()=> {setShowCcvPassword(!showCcvPassword)}} />
              </li>

              {/* holder's name */}
              <li className={`${styles.inputBox} relative w-4/5 sm:w-3/5 lg:w-full `}>
                <input type="text" placeholder='' required='required'
                    className='py-2 pt-5 px-3 bg-forthly border border-gray-600 rounded-md w-full'
                    onChange={(event) => {setHolderName(event.target.value.replace(/[^A-Za-z\s]/g, ''))}}
                    onClick={()=>{setRotateCard(false)}}
                    value={holderName}
                    maxLength={20} />
                <span className='absolute top-1 left-2 pointer-events-none duration-500'>Cardholder's name</span>
              </li>


              {/* sumbit btn */}
              <li className='flex justify-center sm:justify-normal text-black' >
                  <button className={`${spin && 'button button-loading'} 
                            hover:bg-white px-14 sm:px-20 py-2 text-base sm:text-xl bg-gray-300 rounded-md`}
                          onClick={onSave}><span className='button-text' >Save</span></button>
              </li>
            </ul>
      </div>
      
    </motion.div>  }

    </>
  )
}
