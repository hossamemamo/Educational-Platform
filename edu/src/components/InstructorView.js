import {Box, Stack,Typography,Avatar,Grid} from "@mui/material";
import instructorRating from '../assets/Static2.png';

function InstructorsView({Course,isSuccess}){
    return isSuccess?(
    <Grid container columnSpacing={10} rowSpacing={2}>
        {Course.instructors.map((instructor)=>{
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
    })}
    </Grid>):null;
}


export default InstructorsView;