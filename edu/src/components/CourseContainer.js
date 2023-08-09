import CourseCard from "./CourseCard";
import {Grid,Box, Typography,IconButton
} from '@mui/material';
import { useFetchCoursesQuery } from "../store";

function CourseContainer({courses}){


    

    const renderedCourses=courses.map((course) =>{
        return(        
        <Grid item key={course.course_id}>
        <CourseCard course={course}/>
        </Grid>);});

  
    return(
            <Box >
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={5} justifyContent="center" >
                {renderedCourses}
            </Grid>
            </Box>
            
            );
    
};

export default CourseContainer;