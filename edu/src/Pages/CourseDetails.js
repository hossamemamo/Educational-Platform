import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useFetchCourseDetailsQuery } from '../store';
import { useState } from 'react';
import {
    Box, Stack,Breadcrumbs,Link,Typography,Rating,Avatar,Grid,Tabs,Tab,Accordion,AccordionSummary,AccordionDetails,LinearProgress,Card,
    CardMedia,
    CardContent,Button
  } from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Static1 from '../assets/static1.png';
import CheckIcon from '@mui/icons-material/Check';
import SlideshowIcon from '@mui/icons-material/Slideshow';

import DownloadIcon from '@mui/icons-material/Download';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';



import errimg from '../assets/404.png';
import Play from '../assets/Play.png';
import Light from '../assets/light.png';
import instructorRating from '../assets/Static2.png';
function CourseDetails(){

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll position when this page is navigated to
      }, []);


    const { courseId } = useParams();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const {data,isSuccess}=useFetchCourseDetailsQuery(courseId);

    let Course;
    let instructorAvatars;
    let instructorView;
    let renderedSections;
    let renderedComments;
    let reviewCounts = Array(5).fill(0);
    if(isSuccess)
    {
        console.log(data);
        Course={
            title:data.data.classified_product.title,
            description:data.data.classified_product.description,
            rating:data.data.final_rating_from_reviews,
            reviews:data.data.reviews_number,
            instructors:data.data.classified_product.instructors,
            sections_count:data.data.classified_product.sections_count,

            lecture_count:data.data.classified_product.sessions_count,
            assignments_count:data.data.classified_product.assignments.length,
            total_duration:data.data.classified_product.duration_in_hours,
            sections:data.data.classified_product.sections,

            reviews_list:data.data.reviews,
            image_url:data.data.classified_product.image_url?data.data.classified_product.image_url:errimg,
            price:data.data.price_after_discount
        }
        instructorAvatars=Course.instructors.map((instructor)=>{
            return(
                <Grid item key={instructor.instructor_id} md={3} marginTop={2} >
                    <Stack direction='row' spacing={1} alignItems='center' >
                        <Avatar key={instructor.instructor_id}  src={instructor.profile_picture_url} />
                        <Typography variant='small' fontWeight={1000}>
                            {instructor.name.split(' ', 2)}
                        </Typography>
                    </Stack>
                </Grid>

            )
        });

        instructorView=Course.instructors.map((instructor)=>{
            return(
                <Grid item key={instructor.instructor_id} sm={3}>
                    <Stack direction='row' spacing={2} alignItems='center' paddingTop={2} >
                        <Avatar key={instructor.instructor_id}  src={instructor.profile_picture_url} sx={{ width: 100, height: 100 }} />

                        <Stack direction='column' spacing={1} >
                            <Typography variant='medium' fontWeight={1000}>
                                {instructor.name.split(' ', 2)}
                            </Typography>
                            <Typography variant='small'>
                                {instructor.job_title}
                            </Typography>
                            <Box 
                            component="img"
                            sx={{width:'130px',height:'50px'}}
                            src={instructorRating}
                                />
                        </Stack>
                    </Stack>

                </Grid>

            )
        });
        renderedComments=Course.reviews_list.map((review)=>{
                return(
                    <Box key={review.product_review_id}>
                        <Stack direction={'column'} spacing={1}>
                            <Rating value={review.rating} readOnly/>
                            <Stack direction={'row'} spacing={2}>
                                <Typography variant='small' fontWeight={1000}>
                                    {review.user.name}
                                </Typography>
                                <Typography variant='small'>
                                    {review.date}
                                </Typography>
                                
                            </Stack>
                            <Typography variant='small' paddingTop={1}>
                                    {review.comment}
                            </Typography>

                        </Stack>
                    </Box>
                )
            });


        renderedSections=Course.sections.map((section,key)=>{
            let sessions=section.sessions;
            let lectures=[];
            let assignments=[];
            let section_time=0;
            for (const [, value] of Object.entries(sessions)) {
                
                if(value.quizzes.length > 0) //lectures exist and need concat to all list
                {
                    for(const [,valueLecture] of Object.entries(value.quizzes))
                    {
                        lectures.push(valueLecture);
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


            let renderedLectures=lectures.map((lecture)=>{
                return(
                <Stack direction={'row'} spacing={2} alignItems='center'>
                        <Box 
                    component="img"
                    sx={{width:'3%'}}
                    src={Play}
                        />
                        <Typography variant='small'>{lecture.title}</Typography>


                </Stack>)

            });

            let renderedAssignments=assignments.map((assignment)=>{
                return(
                <Stack direction={'row'} spacing={2} alignItems='center'>
                        <Box 
                    component="img"
                    sx={{width:'3%'}}
                    src={Light}
                        />
                        <Typography variant='small'>{assignment.title}</Typography>


                </Stack>)

            });

            for (const [, value] of Object.entries(Course.reviews_list)){
                reviewCounts[value.rating-1]=reviewCounts[value.rating-1]+1;
            }   

            return(
                <Stack direction={'row'} >
                <Box width={'10%'}>
                    <Stack direction={'column'} spacing={1} alignItems={'center'}>
                        <Typography variant='medium'>
                            Section 
                        </Typography>
                        <Typography variant='big'>
                            {key+1}
                        </Typography>
                    </Stack>
                </Box>
                <Box width={'90%'}>
                <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                    <Stack direction={'column'} spacing={2}>
                        <Typography variant='medium' fontWeight={1000}>{section.title}</Typography>
                        <Typography variant='small'>{lectures.length} Lecture , {assignments.length} Assignments (Total {section_time}min) </Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction={'column'} spacing={5}>
                    {renderedLectures}
                    {renderedAssignments}
                    </Stack>
                </AccordionDetails>
              </Accordion>
              </Box>

              </Stack>

            )
        })
    
    }

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
          

    const breadcrumbs = [
        <Link underline="hover" key="1" color="#28A09C" href="/courses" >
          Courses
        </Link>,
        <Typography key="3" color="#28A09C">
          {courseId}
        </Typography>,
      ];
    
    return isSuccess?(<Box>
        <Header />
        <Stack direction={'row'} spacing={10}>
            <Box width={'80%'} paddingLeft={10} paddingTop={15}>
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

                <Grid container columnSpacing={10} rowSpacing={2} >
                    {instructorAvatars}

                </Grid>

                <Stack direction={'column'} spacing={2} paddingTop={5}>
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    style={{backgroundColor:"#F3F3F3"}}
                    TabIndicatorProps={{
                        style: { backgroundColor:"#28A09C" }
                    }}
                    sx={{
                        ".Mui-selected": {
                        color: `#28A09C`,
                        },
                        }}
                    >
                            <Tab value={0} 
                            label={<Typography variant='tabs'  >OverView</Typography>} 
                            style={{ width: '25%' }} 
                            onClick={() => handleTabClick('OverView')}/>


                            <Tab value={1}
                            label={<Typography variant='tabs' >Syllabus</Typography>}
                            style={{ width: '25%' }} 
                            onClick={() => handleTabClick('Syllabus')}
                            />


                            <Tab value={2}
                            label={<Typography variant='tabs' >Instructors</Typography>}
                            style={{ width: '25%' }}
                                onClick={() => handleTabClick('Instructors')}
                                />

                            <Tab value={3}
                            label={<Typography variant='tabs' >Reviews</Typography>}
                            style={{ width: '25%' }}
                            onClick={() => handleTabClick('Reviews')}
                            />
                    </Tabs>

                    
                    <Box id='OverView' paddingLeft={3}>
                        <Typography variant='big' fontWeight={1000}>
                        About This Course
                        </Typography>
                        <Typography>
                            {Course.description}
                        </Typography>
                    </Box>

                    <Box sx={{borderRadius:'10px',  bgcolor: 'background.paper',border: 0.5,padding:3}}>
                        <Box paddingLeft={2}>
                            <Typography variant='big' fontWeight={1000}>
                                Requirements
                            </Typography>
                            <Typography variant="small" component="div">
                                <Stack direction={'column'} spacing={2} paddingTop={2}>
                                <li>You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe</li>
                                <li>No previous design experience is needed.</li>
                                <li>No previous Adobe XD skills are needed.</li>

                                </Stack>
                            </Typography>

                        </Box>
                    </Box>


                    <Box sx={{borderRadius:'10px',  bgcolor: 'background.paper',border: 0.5,padding:3}}>
                        <Box paddingLeft={2}>
                            <Typography variant='big' fontWeight={1000}>
                                What you will learn
                            </Typography>
                            <Grid container columnSpacing={16} rowSpacing={2} paddingTop={2}>
                                <Grid item>
                                    <Stack direction='row' spacing={1} alignItems='center' >
                                    <CheckIcon style={{color:'#28A09C'}}/> 
                                        <Typography variant='small'>
                                        Lorem ipsum dolor sit amet, consetetur
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid item>
                                    <Stack direction='row' spacing={1} alignItems='center' >
                                    <CheckIcon style={{color:'#28A09C'}}/> 
                                        <Typography variant='small'>
                                        Lorem ipsum dolor sit amet, consetetur
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid item>
                                    <Stack direction='row' spacing={1} alignItems='center' >
                                    <CheckIcon style={{color:'#28A09C'}}/> 
                                        <Typography variant='small'>
                                        Lorem ipsum dolor sit amet, consetetur
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid item>
                                    <Stack direction='row' spacing={1} alignItems='center' >
                                    <CheckIcon style={{color:'#28A09C'}}/> 
                                        <Typography variant='small'>
                                        Lorem ipsum dolor sit amet, consetetur
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid item>
                                    <Stack direction='row' spacing={1} alignItems='center' >
                                    <CheckIcon style={{color:'#28A09C'}}/> 
                                        <Typography variant='small'>
                                        Lorem ipsum dolor sit amet, consetetur
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid item>
                                    <Stack direction='row' spacing={1} alignItems='center' >
                                    <CheckIcon style={{color:'#28A09C'}}/> 
                                        <Typography variant='small'>
                                        Lorem ipsum dolor sit amet, consetetur
                                        </Typography>
                                    </Stack>
                                </Grid>


                            </Grid>
                        </Box>
                    </Box>



                {/* syllabas */}

                <Box id="Syllabus">
                    <Stack direction={'column'} spacing={2}>

                    <Typography variant='medium' fontWeight={1000}>
                        Syllabus
                    </Typography>
                    <Typography variant='small'>
                        {Course.sections_count} Sections ・{Course.lecture_count} lectures ・ {Course.assignments_count} Assignments・{Course.total_duration} h total length
                    </Typography>

                    </Stack>

                </Box>

                {renderedSections}



                </Stack>


            </Box>



            {/* course part */}
            <Box paddingTop={20} style={{width:'30%'}}paddingRight={5}>
            
            <Card  >
                        
            <CardMedia
            component="img"
            image={Course.image_url}
            
            alt="Paella dish"
                />
                      <CardContent>
                      <Stack direction={'column'} spacing={2}>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant='medium'>Course Price</Typography>
                            <Typography variant='big' fontWeight={1000}>$ {Course.price}</Typography>
                        </Stack>


                        <Button variant="contained" style={{width:'100%',backgroundColor:"#28A19C"}} >
                            <Typography variant='pricing'>
                                Enroll Course Now
                            </Typography>
                        </Button>


                        <Button variant="outlined" style={{width:'100%',color:"#28A19C",borderColor:"#28A19C"}} >
                            <Typography variant='pricing'>
                                Add to Cart
                            </Typography>
                        </Button>

                        <Typography variant='small' fontWeight={1000}>
                            This course also includes:
                        </Typography>

                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <SlideshowIcon style={{color:'#28A09C'}} />
                        <Typography variant='small'>
                            13 hours on-demand video
                        </Typography>
                        </Stack>



                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <DownloadIcon style={{color:'#28A09C'}} />
                        <Typography variant='small'>
                        69 downloadable resources
                        </Typography>
                        </Stack>


                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <AllInclusiveIcon style={{color:'#28A09C'}} />
                        <Typography variant='small'>
                        Full lifetime access
                        </Typography>
                        </Stack>


                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <SmartphoneIcon style={{color:'#28A09C'}} />
                        <Typography variant='small'>
                        Access on mobile and TV
                        </Typography>
                        </Stack>



                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <AssignmentIcon style={{color:'#28A09C'}} />
                        <Typography variant='small'>
                        Assignments
                        </Typography>
                        </Stack>




                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <WorkspacePremiumIcon style={{color:'#28A09C'}} />
                        <Typography variant='small'>
                        Certificate of completion
                        </Typography>
                        </Stack>



                    </Stack>
                    </CardContent>

            </Card>

            </Box>

            </Stack>
            <Box  id='Instructors' style={{backgroundColor:'#F8F8F8',padding:40}}>
            <Typography variant='medium' fontWeight={1000}>Instructors</Typography>
                <Grid container columnSpacing={10} rowSpacing={2}>
                    {instructorView}
                </Grid>
            </Box>

            <Box paddingLeft={10} paddingTop={10} id="Reviews">
                <Typography variant='big' fontWeight={1000}>Reviews</Typography>

                <Stack direction={'row'} paddingTop={4} spacing={80}>
                        <Box sx={{width:'80%'}}>
                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                <Typography fontSize={50}>{Course.rating}</Typography>
                                <Stack direction={'column'}>
                                    <Rating precision={0.5} value={Course.rating} readOnly/>
                                    <Typography variant='medium'>{Course.reviews} Reviews</Typography>
                                </Stack>
                            </Stack>

                            <Stack direction={'column'} spacing={1}>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                        <Typography variant='small' fontWeight={1000}>5 Stars</Typography>
                                    <Box width={'70%'}>
                                        <LinearProgress variant="determinate" value={Course.reviews===0?0:Math.round(reviewCounts[4]/Course.reviews)*100} sx={{backgroundColor: '#F1F1F1','& .MuiLinearProgress-bar': {backgroundColor: '#F7B52E'}}}/>
                                    </Box>    

                                    <Typography variant='small' fontWeight={1000}>{Course.reviews===0?0:Math.round(reviewCounts[4]/Course.reviews)*100}</Typography>
                                </Stack>

                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                        <Typography variant='small' fontWeight={1000}>4 Stars</Typography>
                                    <Box width={'70%'}>
                                    <LinearProgress variant="determinate" value={Course.reviews===0?0:Math.round(reviewCounts[3]/Course.reviews)*100} sx={{backgroundColor: '#F1F1F1','& .MuiLinearProgress-bar': {backgroundColor: '#F7B52E'}}}/>
                                    </Box>    

                                    <Typography variant='small' fontWeight={1000}>{Course.reviews===0?0:Math.round(reviewCounts[3]/Course.reviews)*100}</Typography>
                                </Stack>

                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                        <Typography variant='small' fontWeight={1000}>3 Stars</Typography>
                                    <Box width={'70%'}>
                                    <LinearProgress variant="determinate" value={Course.reviews===0?0:Math.round(reviewCounts[2]/Course.reviews)*100} sx={{backgroundColor: '#F1F1F1','& .MuiLinearProgress-bar': {backgroundColor: '#F7B52E'}}}/>
                                    </Box>    

                                    <Typography variant='small' fontWeight={1000}>{Course.reviews===0?0:Math.round(reviewCounts[2]/Course.reviews)*100}</Typography>
                                </Stack>

                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                        <Typography variant='small' fontWeight={1000}>2 Stars</Typography>
                                    <Box width={'70%'}>
                                    <LinearProgress variant="determinate" value={Course.reviews===0?0:Math.round(reviewCounts[1]/Course.reviews)*100} sx={{backgroundColor: '#F1F1F1','& .MuiLinearProgress-bar': {backgroundColor: '#F7B52E'}}}/>
                                    </Box>    

                                    <Typography variant='small' fontWeight={1000}>{Course.reviews===0?0:Math.round(reviewCounts[1]/Course.reviews)*100}</Typography>
                                </Stack>

                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                        <Typography variant='small' fontWeight={1000}>1 Stars</Typography>
                                    <Box width={'70%'}>
                                    <LinearProgress variant="determinate" value={Course.reviews===0?0:Math.round(reviewCounts[0]/Course.reviews)*100} sx={{backgroundColor: '#F1F1F1','& .MuiLinearProgress-bar': {backgroundColor: '#F7B52E'}}}/>
                                    </Box>    

                                    <Typography variant='small' fontWeight={1000}>{Course.reviews===0?0:Math.round(reviewCounts[0]/Course.reviews)*100}</Typography>
                                </Stack>


                            </Stack>

                            
                        </Box>
                        <Box sx={{width:'80%',paddingTop:5}}>
                            <Stack direction={'column'} spacing={5}>
                            {renderedComments}
                            </Stack>
                        </Box>

                </Stack>
            </Box>

        <Footer/>
    </Box>):null;
}

export default CourseDetails;