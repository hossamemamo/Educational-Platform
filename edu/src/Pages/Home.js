import Header from "../components/Header";
import Footer from "../components/Footer";
import SliderCards from "../components/SliderCards";
import CustomTabs from '../components/CustomTabs';
import {
    Box, Stack, Typography,Button,Grid,Container
  } from "@mui/material";
  
  
import {
  Link
  } from 'react-router-dom'
    

import { useEffect, useState } from "react";
import img1 from '../assets/img1.jpg';
import  WhatsAppIcon  from '../assets/whatsapp.png';

import ChooseCourse from '../assets/ChooseCourse.png';
import GetCertificate from '../assets/GetCertificate.png';
import StartLearning from '../assets/StartLearning.png';
import LaptopGirl from '../assets/laptopGirl.png';

import { useFetchCategoriesQuery, useFetchCoursesQuery } from "../store";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SkeletonDummy from "../components/SkeletonDummy";

import Google from '../assets/Google.png';
import Microsoft from '../assets/microsoft.png';
import Intel from '../assets/intel.png';
import Apple from '../assets/apple.png';
function Home(){
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position when this page is navigated to
  }, []);

  const { data: coursesData, isLoading: coursesLoading, isSuccess: coursesSuccess } = useFetchCoursesQuery();
  const { data: categoryData, isSuccess: categorySuccess } = useFetchCategoriesQuery();


    const coursesArray=[];
  if (coursesSuccess)
  {
    
      let courses_dict=coursesData.data.courses;
      let tempObj;
      for (const [, value] of Object.entries(courses_dict)) {

          
          for(const [, innerValue] of Object.entries(value))
          {
              tempObj = {
                  course_id:innerValue.classified_product.course_id,
                  img_url:innerValue.classified_product.image_url,
                  title:innerValue.classified_product.title,
                  review_count:innerValue.reviews_number,
                  rating:innerValue.final_rating_from_reviews,
                  instructors:innerValue.classified_product.instructors, //array of id and name and profile picture
                  description:innerValue.classified_product.description,
                  price_after_discount:innerValue.price_after_discount,
                  original_price:innerValue.original_price
              };

              coursesArray.push(tempObj);

          }
      }
  }

let Clients=[Google,Microsoft,Intel,Apple,Google,Microsoft,Intel,Apple,Google,Microsoft,Google,Microsoft];

const [viewAll,setViewAll]=useState(false);

const handleViewClick=()=>{
      setViewAll(!viewAll);
};


const renderedClients=viewAll?Clients.map((client)=>{
  return(
    <Grid item sm={3}>
    <Box 
        component="img"
        sx={{
          height: 40,
          width: 40,
        }}
        src={client}
      />
  </Grid>)}):Clients.slice(0,4).map((client)=>{
  return(
    <Grid item sm={3}>
    <Box 
        component="img"
        sx={{
          height: 40,
          width: 40,
        }}
        src={client}
      />
  </Grid>

  )
});

return(
    <Container maxWidth="xlg">
    <Header/>

    <Box sx={{  display: 'flex', alignItems: 'center',paddingTop:12}}>
      
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{maxHeight:103,maxWidth:600,marginLeft:10}}>
          <Stack direction={'column'} spacing={2}>
              <Typography variant="headimg" >
              Take The Next Step{' '}
                <span style={{ color: '#FFBA00' }}>Towards Your Success</span>
                </Typography>

              <Typography variant="small">
              Join hundreds of learners from the middle-east alreadylearning on E-learning Platform ! We qualify you to be a highly competent programmer through a myriad of software development courses covering a variety of programming  languages.
              </Typography>
          </Stack>
        </Box>

      </Box>

      <Box 
              component="img"
              sx={{
              height: 470,
              width:470,
                    }}
              alt="img1"
              src={img1}
          />
    </Box>

    
    <Box sx={{backgroundColor:"#F3F3F3",display: 'flex', alignItems: 'center',justifyContent:'center',flexDirection:'column'}}>
    
    <Box 
              component="img"
              sx={{
              height: 50,
              width:50,
              marginLeft: 'auto',
              marginTop:3,
              marginRight:2
                    }}
              alt="img1"
              src={WhatsAppIcon}
          />

      <Typography variant="big" color={'#FFBA00'} fontWeight={1000} >
          Learning Process
      </Typography>

      <Typography variant="vsmall" paddingTop={2}>
      Learn the latest skills to reach your       
      </Typography>

      <Typography variant="vsmall" paddingBottom={5}>
      professional goals

      </Typography>
    </Box>

    <Box sx={{  display: 'flex', justifyContent: 'center' ,padding:5}}>
      <Stack direction="row" spacing={20}>

        <Stack direction="column" alignItems="center">
          <Box>
            <Box 
              component="img"
              sx={{
                height: 140,
                width: 140,
              }}
              alt="chooseCourse"
              src={ChooseCourse}
            />
          </Box>
          <Typography variant="medium" fontWeight={1000}>
            Choose course
          </Typography>
        </Stack>


        <Stack direction="column" alignItems="center">
          <Box>
            <Box 
              component="img"
              sx={{
                height: 140,
                width: 140,
              }}
              alt="StartLearning"
              src={StartLearning}
            />
          </Box>
          <Typography variant="medium" fontWeight={1000}>
              Start Learning
          </Typography>
        </Stack>


        <Stack direction="column" alignItems="center">
          <Box>
            <Box 
              component="img"
              sx={{
                height: 140,
                width: 140,
              }}
              alt="GetCertificate"
              src={GetCertificate}
            />
          </Box>
          <Typography variant="medium" fontWeight={1000}>
              Get Certificate
          </Typography>
        </Stack>


      </Stack>
    </Box>


    <Box sx={{backgroundColor:"#F3F3F3",display: 'flex', alignItems: 'center',justifyContent:'center',flexDirection:'column',padding:5}}>
    
      <Typography variant="big" color={'#FFBA00'} fontWeight={1000} >
          Top Categories
      </Typography>

      <Typography variant="vsmall" paddingTop={2}>
      Learn the latest skills to reach your       
      </Typography>

      <Typography variant="vsmall" paddingBottom={5}>
      professional goals

      </Typography>

      
                {/* navigate here baby */}
      {categorySuccess && <CustomTabs params={categoryData.data.subjects}/>}
    
        <Box sx={{paddingTop:10}}>
            <Link to="/courses" >
                <Button variant="contained" style={{height: 58,width:300 ,backgroundColor:"#28A19C"}} >
                  View More Courses
                  </Button>
              </Link> 
        </Box>
    </Box>

      {/* Categories */}

    <Box sx={{  display: 'flex', alignItems: 'center',paddingTop:12}}>

      <Box 
                component="img"
                sx={{
                height: 470,
                width:470,
                      }}
                alt="laptop girl"
                src={LaptopGirl}
            />

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{maxHeight:103,marginBottom:40,marginLeft:20}}>
          <Stack direction={'column'} spacing={5}>
            <Typography variant="headimg"  sx={{maxWidth:400}}>
            <span style={{ color: '#FFBA00' }}>Benefits Of Learning From</span>{' '}
                    <span style={{ color: '#28A19C' }}>Edugram</span>
            </Typography>

            <Box style={{marginLeft:15}}>
              <Stack direction={'column'} spacing={2}>

                <Box sx={{display: 'flex',textAlign: 'left',alignItems:'center'}}>
                  <CheckCircleOutlineIcon/>
                  <Typography variant="medium" marginLeft={2}>
                      Access 16,000+ expert-led courses.
                  </Typography>
                </Box>

                <Box sx={{display: 'flex',textAlign: 'left',alignItems:'center'}}>
                  <CheckCircleOutlineIcon/>
                  <Typography variant="medium" marginLeft={2}>
                  Expert instructors with lifetime access on your courses.
                  </Typography>
                </Box>

                <Box sx={{display: 'flex',textAlign: 'left',alignItems:'center'}}>
                  <CheckCircleOutlineIcon/>
                  <Typography variant="medium" marginLeft={2}>
                  Use project files and quizzes to practice while you learn.
                  </Typography>
                </Box>


                <Box sx={{display: 'flex',textAlign: 'left',alignItems:'center'}}>
                  <CheckCircleOutlineIcon/>
                  <Typography variant="medium" marginLeft={2}>
                  View courses anytime on your computer or phone
                  </Typography>
                </Box>


                <Box sx={{display: 'flex',textAlign: 'left',alignItems:'center'}}>
                  <CheckCircleOutlineIcon/>
                  <Typography variant="medium" marginLeft={2}>
                  Earn a certificate when you complete a course.
                  </Typography>
                </Box>

              </Stack>
            </Box>





          </Stack>
        </Box>

      </Box>

    </Box>

    <Box sx={{backgroundColor:"#F3F3F3",display: 'flex', alignItems: 'center',justifyContent:'center',flexDirection:'column',padding:5}}>
    
    <Typography variant="big" color={'#FFBA00'} fontWeight={1000} >
      Most Popular
    </Typography>

    <Typography variant="vsmall" paddingTop={2}>
    Learn the latest skills to reach your       
    </Typography>

    <Typography variant="vsmall" paddingBottom={5}>
    professional goals

    </Typography>
    
  </Box>


    <Box style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:"#F3F3F3"}}>
      {coursesLoading?<SkeletonDummy/>:<SliderCards coursesArray={coursesArray}/>}
    </Box>
    

    <Box >
      <Box style={{display: 'flex',justifyContent: 'center',alignItems: 'center' ,paddingTop:10}}>
      <Typography variant="big" fontWeight={1000} color={"#FFBA00"}>Our Clients</Typography>      
      </Box>
      <Box style={{float:'right', paddingRight:50}}>
        <Button onClick={handleViewClick}> {viewAll?<Typography variant="medium">View Less</Typography>:<Typography variant="medium">View All</Typography>}</Button>
      </Box>


      <Box  paddingLeft={15} paddingBottom={10}>
        <Grid container  columnSpacing={15} rowSpacing={5} justifyContent='center' alignItems='center'>
                    {renderedClients}
        </Grid>
        

      </Box>



      <Box sx={{backgroundColor:"#F3F3F3",display: 'flex', alignItems: 'center',justifyContent:'center',flexDirection:'column',padding:5}}>
    
        <Typography variant="big" color={'#FFBA00'} fontWeight={1000} >
          Most Popular
        </Typography>

        <Typography variant="vsmall" paddingTop={2}>
        Learn the latest skills to reach your       
        </Typography>

        <Typography variant="vsmall" paddingBottom={5}>
        professional goals

        </Typography>
    
      </Box>

      <Box style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:"#F3F3F3"}}>
      {coursesLoading?<SkeletonDummy/>:<SliderCards coursesArray={coursesArray}/>}
      </Box>





    </Box>

    



    
    <Footer/>
    </Container>
);

};

export default Home;