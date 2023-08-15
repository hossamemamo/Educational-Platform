import React from 'react';
import { useState } from 'react';

import {
    Typography,Tabs,Tab
  } from "@mui/material";


function CourseTabs(){

    const handleTabClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Add a delay of 500 milliseconds (adjust as needed)
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest',
            });
          }, 500); // Milliseconds
        }
      };


    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  

    return(
        <Tabs
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: '#FFFFFF' }}
        TabIndicatorProps={{
            style: { backgroundColor: '#28A09C' },
        }}
        sx={{
            '& .Mui-selected': {
            color: '#28A09C', // Change font color for selected tab
            },
            '& .MuiTabs-indicator': {
            backgroundColor: '#28A09C', // Change underline color for selected tab
            },
        }}
    >
                <Tab value={0} 
                label={<Typography variant='tabs'  fontWeight={1000}>OverView</Typography>} 
                style={{ width: '25%' }} 
                onClick={() => handleTabClick('OverView')}/>


                <Tab value={1}
                label={<Typography variant='tabs' fontWeight={1000} >Syllabus</Typography>}
                style={{ width: '25%' }} 
                onClick={() => handleTabClick('Syllabus')}
                />


                <Tab value={2}
                label={<Typography variant='tabs' fontWeight={1000}>Instructors</Typography>}
                style={{ width: '25%' }}
                    onClick={() => handleTabClick('Instructors')}
                    />

                <Tab value={3}
                label={<Typography variant='tabs'fontWeight={1000} >Reviews</Typography>}
                style={{ width: '25%' }}
                onClick={() => handleTabClick('Reviews')}
                />
        </Tabs>

    )

}
export default CourseTabs;