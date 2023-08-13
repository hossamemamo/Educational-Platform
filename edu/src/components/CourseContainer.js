import CourseCard from "./CourseCard";
import {Grid,Box, 
} from '@mui/material';
import {
    Link
    } from 'react-router-dom';

function CourseContainer({courses}){


    

    const renderedCourses=courses.map((course) =>{
        return(        
        <Grid item key={course.course_id}>
            <Link to={`/courses/${course.course_id}`} style={{ textDecoration: 'none' }}>
                <CourseCard course={course} />
            </Link>
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