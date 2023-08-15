import {
    Stack,Typography,Card,
    CardMedia,
    CardContent,Button
  } from "@mui/material";
import SlideshowIcon from '@mui/icons-material/Slideshow';
import DownloadIcon from '@mui/icons-material/Download';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
  
function CourseCardDetail({Course}){

    return(
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

    )
}

export default CourseCardDetail