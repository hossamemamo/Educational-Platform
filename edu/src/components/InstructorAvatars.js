import {
    Stack,Typography,Avatar,Grid
  } from "@mui/material";

function InstructorAvatars({Course,isSuccess}){

    return isSuccess?(
        <Grid container columnSpacing={10} rowSpacing={2} >
            {Course.instructors.map((instructor)=>{
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
            })}
        </Grid>

    ):null
};

export default InstructorAvatars;