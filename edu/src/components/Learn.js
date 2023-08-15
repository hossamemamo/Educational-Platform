import {
    Box, Stack,Typography,Grid
  } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';


function Learn(){

    return(
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
    )
}

export default Learn