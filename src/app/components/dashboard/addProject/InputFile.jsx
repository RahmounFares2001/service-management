'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { dashboardContext } from '@/app/dashboard/layout';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFile() {

  // context
  const { projectDescription,  setProjectDescription } = React.useContext(dashboardContext);

  // handle file change
  const handleFileChange = async (event) => {    
    const fileList = event.target.files[0];
    const formData = new FormData();
    formData.append('pdf', fileList);

    setProjectDescription({...projectDescription, file: formData});
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file"
                            onChange={handleFileChange} />
    </Button>
  );
}


    // const formData = new FormData();
    // formData.append('pdf', fileList);
    // if (fileList.length > 0) {
    //   setProjectDescription({...projectDescription, file: formData})
    // }