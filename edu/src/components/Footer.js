import React from "react";
import {Box,Link,Typography,IconButton,Stack,Grid} from '@mui/material';
import { BoxStyles } from "./Footer.ts";
import Logo from '../assets/Logo.png';


  

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {

    
return (
    <Box sx={BoxStyles.sx} >
        <Box style={{paddingLeft:60,paddingTop:60}}>
        <Grid container spacing={20}  >
            <Grid item>
                <Box>
                        <Box 
                    component="img"
                    sx={{
                        height: 59,
                    width:266,
                        }}
                    alt="Your logo."
                    src={Logo}
                        />

                <Typography variant="body2" gutterBottom sx={{marginTop:3}}>
                    Discover the fastest, most effective<br/>way to build your skills with courses,<br/>certificates, and degrees.<br/>Get started with us.
                </Typography>

                <Stack direction="row" alignItems="start" spacing={1}>
                    <IconButton aria-label="facebook" size="large">
                        <FacebookIcon />
                        
                    </IconButton>

                    <IconButton aria-label="twitter" size="large">
                        <TwitterIcon/>
                    </IconButton>

                    <IconButton aria-label="youtube" size="large">
                        <YouTubeIcon/>
                    </IconButton>

                    <IconButton aria-label="linkedin" size="large">
                        <LinkedInIcon/>
                    </IconButton>

                    <IconButton aria-label="whatsapp" size="large">
                        <WhatsAppIcon/>
                    </IconButton>

                </Stack>


                </Box>
        </Grid>

            <Grid item>
                <Typography variant="head" gutterBottom >
                    Sitemap
                </Typography>
                <Stack spacing={2} style={{marginTop:15}}>
                    <Link href="/home" variant="labels" underline="hover" >
                        Home
                    </Link>

                    <Link href="/about" variant="labels" underline="hover" >
                        About us
                    </Link>

                    <Link href="/contacts" variant="labels" underline="hover" >
                        Contact us
                    </Link>


                </Stack>
            </Grid>

            <Grid item>
                <Typography variant="head" gutterBottom >
                    Our Clients
                </Typography>


                <Stack spacing={2} style={{marginTop:15}}>
                    <Link href="/ibm" variant="labels" underline="hover" >
                        IBM
                    </Link>

                    <Link href="/intel" variant="labels" underline="hover" >
                        Intel
                    </Link>

                    <Link href="/apple" variant="labels" underline="hover" >
                        Apple
                    </Link>


                </Stack>

            </Grid>

            <Grid item>
                <Typography variant="head" gutterBottom >
                    Support
                </Typography>

                <Stack spacing={2} style={{marginTop:15}}>
                    <Link href="/t&m" variant="labels" underline="hover" >
                        Terms & Conditions
                    </Link>

                    <Link href="/pp" variant="labels" underline="hover" >
                        Privacy Policy
                    </Link>

                </Stack>

            </Grid>


        </Grid>
        </Box>

            <Stack direction='row' justifyContent='center'>
                <Typography variant="footnote">
                        Designed and developed at inova LLC
                </Typography>
            </Stack>


    </Box>
    
);
}
export default Footer;
