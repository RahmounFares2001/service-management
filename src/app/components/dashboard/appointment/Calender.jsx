'use client'

import React, { useState } from 'react'; 
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarValue() {
  const [value, setValue] = useState(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>

        <DemoItem>
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} className='text-black' />
        </DemoItem>
      </DemoContainer>

    </LocalizationProvider>
  );
}
// className='bg-white font-bold text-black' 