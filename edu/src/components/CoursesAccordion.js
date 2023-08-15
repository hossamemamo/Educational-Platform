import {
    Box, Stack,Typography,Accordion,AccordionSummary,AccordionDetails,Divider
  } from "@mui/material";

import Play from '../assets/Play.png';
import Light from '../assets/light.png';
import Reading from '../assets/Reading.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookIcon from '../assets/BookIcon.png';
function CoursesAccordion({section,lectures,readings,quizzes,assignments,section_time,sectionKey}){

    let renderedLectures=lectures.map((lecture)=>{
        return(
                <Stack direction={'column'} spacing={0.5}>
                    <Typography variant='small'>{lecture.title}</Typography>
                    <Typography variant='small' color="#28A19C">{lecture.duration}  {lecture.duration_unit}</Typography>
                </Stack>

        )

    });


    let renderedReadings=readings.map((reading)=>{
        return(
                <Stack direction={'column'} spacing={0.5}>
                    <Typography variant='small'>{reading.title}</Typography>
                    <Typography variant='small' color="#28A19C">{reading.duration}   {reading.duration_unit}</Typography>
                </Stack>
                )

    });


    let renderedAssignments=assignments.map((assignment)=>{
        return(
        <Typography variant='small'>{assignment.title}</Typography>
        )

    });


    let renderedquizzes=quizzes.map((quiz)=>{
        return(
                <Typography variant='small'>{quiz.title}</Typography>)

    });

    return(

        <Box key={sectionKey}>
        <Accordion sx={{boxShadow:'none',border:'none'}} >
            
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Stack direction={'row'} spacing={5}>
                <Box >
                        <Stack direction={'column'} spacing={1} alignItems={'center'}>
                            <Typography variant='medium' fontWeight={1000}>
                                Section 
                            </Typography>
                            <Typography variant='big' fontWeight={1000}>
                                {sectionKey+1}
                            </Typography>
                        </Stack>
                </Box>

                <Stack direction={'column'} spacing={2}>

                    <Typography variant='medium' fontWeight={1000}>{section.title}</Typography>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <Box 
                        component='img'
                        sx={{width:33,height:33}}
                        src={BookIcon}
                        />
                        <Box>
                            {lectures.length?(<Typography variant='small'>{lectures.length} Lectures </Typography>):null}     

                            {readings.length?(<Typography variant='small'>{readings.length} Readings </Typography>):null}      

                            {quizzes.length?(<Typography variant='small'>{quizzes.length} Quizzes </Typography>):null}  

                            {assignments.length?(<Typography variant='small'>{assignments.length} Assignments </Typography>):null}      

                            {section_time?(<Typography variant='small'>(Total {section_time}min)</Typography>):null}      

                        </Box>

                    </Stack>
                </Stack>

            </Stack>
        </AccordionSummary>
        <AccordionDetails>
            <Stack direction={'column'} spacing={5} paddingLeft={14}>
                
{renderedLectures.length?(<Stack direction={'column'} spacing={2}>

                <Stack direction={'row'} spacing={1} alignItems='center' >
                                        <Box 
                                    component="img"
                                    sx={{width:'3%'}}
                                    src={Play}
                                        />
                    <Typography variant='medium' fontWeight={1000}>
                        {renderedLectures.length} Lectures
                    </Typography>
                </Stack>

                    {renderedLectures}
                    <Divider/>
                </Stack>):null
}

{renderedReadings.length?(<Stack direction={'column'} spacing={2}>
            <Stack direction={'row'} spacing={1} alignItems='center' >
                    <Box 
                    component="img"
                    sx={{width:'3%'}}
                    src={Reading}
                        />

                    <Typography variant='medium' fontWeight={1000}>
                        {renderedReadings.length} Readings
                    </Typography>
            </Stack>
                    {renderedReadings}
                    <Divider/>
                </Stack>):null
}

{renderedquizzes.length?(<Stack direction={'column'} spacing={2}>
                <Stack direction={'row'} spacing={1} alignItems='center' >
                    <Box 
                    component="img"
                    sx={{width:'3%'}}
                    src={Light}
                        />

                    <Typography variant='medium' fontWeight={1000}>
                        {renderedquizzes.length} Quizzes
                    </Typography>
                </Stack>
                    {renderedquizzes}
                    <Divider/>
                </Stack>):null
}

{renderedAssignments.length?(<Stack direction={'column'} spacing={2}>
                <Stack direction={'row'} spacing={1} alignItems='center' >
                    <Box 
                    component="img"
                    sx={{width:'3%'}}
                    src={Light}
                        />

                    <Typography variant='medium' fontWeight={1000}>
                        {renderedAssignments.length} Assignments
                    </Typography>

                    </Stack>
                    {renderedAssignments}
                    <Divider/>
                </Stack>):null
}


            </Stack>
        </AccordionDetails>
      </Accordion>
      </Box>



    )
}


export default CoursesAccordion;