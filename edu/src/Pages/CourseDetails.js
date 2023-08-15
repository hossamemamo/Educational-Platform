import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import {
    Box, Stack,Typography, Container
  } from "@mui/material";


import SliderCards from '../components/SliderCards';

import useCoursesData from "../Logic/CoursefetchLogic";
import useCoursesDetailData from '../Logic/CourseDetailsFetchLogic';
import SkeletonDummy from '../components/SkeletonDummy';
import CourseDetailsIntro from '../components/CourseDetailsIntro';
import InstructorsView from '../components/InstructorView';
import CoursesAccordion from '../components/CoursesAccordion';
import CourseTabs from '../components/CourseTabs';
import Requirments from '../components/Requirements';
import Learn from '../components/Learn';
import CourseCardDetail from '../components/CourseCardDetail';
import ReviewsAndComments from '../components/ReviewsAndComments';
function CourseDetails(){

    const { coursesArray, coursesLoading } = useCoursesData();
    const { courseId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll position when this page is navigated to
      }, []);

  
    

    const {Course,isSuccess}=useCoursesDetailData(courseId);
    let renderedSections;
    if(isSuccess)
    {



        renderedSections=Course.sections.map((section,sectionKey)=>{
            let sessions=section.sessions;
            let lectures=[];
            let assignments=[];

            let quizzes=[];
            let readings=[];

            let section_time=0;

            let lectureAndReadingObj;

            for (const [, value] of Object.entries(sessions)) {

                lectureAndReadingObj={
                    id:value.course_session_id,
                    duration:value.expected_time,
                    duration_unit:value.expected_time_unit,
                    title:value.title
                }

                if (value.content_type==='text')
                {
                    readings.push(lectureAndReadingObj)
                }
                else
                {

                    lectures.push(lectureAndReadingObj)
                }
                
                if(value.quizzes.length > 0) //lectures exist and need concat to all list
                {
                    for(const [,valueLecture] of Object.entries(value.quizzes))
                    {
                        quizzes.push(valueLecture);
                    }
                }

                if(value.assignments.length > 0) //lectures exist and need concat to all list
                {
                    for(const [,valueAssignment] of Object.entries(value.assignments))
                    {
                        assignments.push(valueAssignment);
                    }
                }

                if(value.expected_time_unit === 'minutes')
                {
                    section_time = section_time + (value.expected_time);
                }
                if(value.expected_time_unit === 'hours')
                {
                    section_time = section_time + (value.expected_time)*60
                }

            }


            return(
                <Box key={sectionKey}>
                    <CoursesAccordion readings={readings} section={section} lectures={lectures} quizzes={quizzes} assignments={assignments} section_time={section_time} sectionKey={sectionKey} />
                </Box>
            )
        })
    
    }

          
    
    return isSuccess?(
    <Box style={{backgroundColor:'#F8F8F8'}}>
        <Container maxWidth="xlg">
        <Header />
        {/* <Stack direction={'column'} spacing={10}> */}
            <Stack direction={'row'} spacing={10}>
                <Box width={'80%'}  paddingTop={15}>
                    {/* page head */}
                    <CourseDetailsIntro Course={Course} isSuccess={isSuccess}/>
                    <Stack direction={'column'} spacing={2} paddingTop={5}>

                        <CourseTabs/>
                        
                        <Stack direction="column" id='OverView' paddingLeft={3} spacing={2}>
                            <Typography variant='big' fontWeight={1000}>
                            About This Course
                            </Typography>
                            <Typography>
                                {Course.description}
                            </Typography>
                        </Stack>

                        {/* requirments and what you will learn */}
                        <Requirments/>

                        <Learn/>

                    {/* syllabas */}

                    <Box id="Syllabus" style={{backgroundColor:'#FFFFFF'}}>
                        <Stack direction={'column'} spacing={1} paddingLeft={2} paddingTop={2}>

                            <Typography variant='medium' fontWeight={1000}>
                                Syllabus
                            </Typography>
                            
                            <Stack direction={'row'} spacing={0.5}>
                                    {Course.sections_count?(<Typography variant='small'>{Course.sections_count} Sections </Typography>):null}     

                                    {Course.lecture_count?(<Typography variant='small'>{Course.lecture_count} Readings & lectures </Typography>):null}      

                                    {Course.quizzes.length?(<Typography variant='small'>{Course.quizzes.length} Quizzes </Typography>):null}  

                                    {Course.assignments_count?(<Typography variant='small'>{Course.assignments_count} Assignments </Typography>):null}      

                                    {Course.total_duration?(<Typography variant='small'>({Course.total_duration}h total length)</Typography>):null}      

                            </Stack>


                        </Stack>


                        <Box sx={{paddingTop:2}}>
                            {renderedSections}
                        </Box>

                    </Box>
                    



                    </Stack>


                </Box>



                {/* course part */}
                <Box paddingTop={20} style={{width:'30%'}}paddingRight={5}>
                    <CourseCardDetail Course={Course}/>
                </Box>

                </Stack>

                <Box  id='Instructors' style={{backgroundColor:'#F8F8F8',padding:10}}>
                <Typography variant='medium' fontWeight={1000}>Instructors</Typography>
                    <InstructorsView Course={Course} isSuccess={isSuccess}/>
                </Box>

                <Box  paddingTop={10} id="Reviews">
                    <ReviewsAndComments Course={Course} isSuccess={isSuccess}/>
                </Box>


                <Box style={{backgroundColor:"#F3F3F3"}}>
                    <Box style={{paddingLeft:100,paddingTop:50}}>
                        <Typography variant='medium' fontWeight={1000} >More User Experience Design Courses</Typography>
                    </Box>
                    <Box style={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:50}}>
                            {coursesLoading?<SkeletonDummy/>:<SliderCards coursesArray={coursesArray}/>}
                    </Box>
                </Box>
            <Footer/>
            {/* </Stack> */}

    </Container>

    </Box>):null;
}

export default CourseDetails;