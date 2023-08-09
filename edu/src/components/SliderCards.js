
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CourseCard from './CourseCard';
import {
    Box,Grid
  } from "@mui/material";

function SliderCards({coursesArray}){


    //this for carsoul
    const coursesPerGroup = 3;
    const groupedCourses = [];
    
    for (let i = 0; i < coursesArray.length; i += coursesPerGroup) {
    const group = coursesArray.slice(i, i + coursesPerGroup);
    groupedCourses.push(group);
    }
    ///

    const renderedTrioCardsDisplay = groupedCourses.map((group, groupIndex) => (
    <Grid container spacing={10} justifyContent="center" key={groupIndex}>
        {group.map((card) => (
        <Grid item key={card.course_id}>
            <CourseCard course={card} />
        </Grid>
        ))}
    </Grid>
    ));

          

    return(
        <Box sx={{maxWidth:1100,flex: 1}}>
        <Carousel navButtonsAlwaysVisible autoPlay={false} 
        NextIcon={<ArrowForwardIosIcon/>}
        PrevIcon={<ArrowBackIosNewIcon/>}
        navButtonsProps={{
            style: {
            backgroundColor: 'transparent', // Set the background color to transparent
            color:'#28A19C'
            // Add other CSS styles as needed
            }
        }}
        indicators={false}
        cycleNavigation={false}
        >
                {renderedTrioCardsDisplay}
        </Carousel>
    </Box>

    )


}

export default SliderCards;