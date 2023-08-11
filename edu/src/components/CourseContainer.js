import CourseCard from "./CourseCard";
import {Grid,Box, 
} from '@mui/material';

function CourseContainer({courses}){


    

    const renderedCourses=courses.map((course) =>{
        return(        
        <Grid item key={course.course_id}>
        <CourseCard course={course}/>
        </Grid>);});

  
    return(
            <Box sx={{minWidth:1200}} >
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={5} justifyContent="center"  >
                {renderedCourses}
            </Grid>
            </Box>
            
            );
    
};

export default CourseContainer;