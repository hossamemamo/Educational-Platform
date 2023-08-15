import React from 'react';

import {
    Box, Stack,Breadcrumbs,Typography,Rating,Link
    
  } from "@mui/material";
import Static1 from '../assets/static1.png';
import InstructorAvatars from './InstructorAvatars';
function CourseDetailsIntro({Course,isSuccess})
{
    const breadcrumbs = [
        <Link underline="hover" key="1" color="#28A09C" href="/courses" >
          Courses
        </Link>,
        <Typography key="3" color="#28A09C">
          {isSuccess?Course.title:'loading'}
        </Typography>,
      ];

    return isSuccess?(
        <Box>
            <Stack direction={'column'} spacing={2}>
                <Breadcrumbs separator="›" aria-label="breadcrumb" >
                            {breadcrumbs}
                </Breadcrumbs>

                <Typography variant="big" fontWeight={1000}>
                    {Course.title}
                </Typography>

                <Typography variant="medium">
                    {Course.description}
                </Typography>


                <Stack direction='row' spacing={20}>
                    <Stack direction="row"  spacing={1} >
                        <Typography variant='rating' fontWeight={1000} color={"#F7B52E"} >{Course.rating}</Typography>
                        <Rating name="size-small" value={Course.rating} size="small" precision={0.5} readOnly />
                        <Typography variant='rating'> ({Course.reviews})  </Typography>
                    </Stack>


                        <Box 
                        component="img"
                        sx={{
                        height:20,
                        width:'35%'
                            }}
                        src={Static1}
                        />

                </Stack>
                

            </Stack>

            <InstructorAvatars Course={Course} isSuccess={isSuccess}/>
        </Box>
    ):null;
};

export default CourseDetailsIntro;