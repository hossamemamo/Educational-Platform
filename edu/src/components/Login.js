import React from "react";
import { useState } from "react";

import {
  Grid,
  TextField,
  Link,
  Button,
  Typography,
  Stack,
  InputAdornment,
  IconButton,
  Box
} from "@mui/material";

import {Visibility,VisibilityOff} from '@mui/icons-material';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  

  
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{ width:350 ,height :350 }}>
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
          >

          <Grid item xs={16} >
            <Stack >
              <Typography variant="footnote" gutterBottom fontWeight={'bold'}>Phone Number or IP Number</Typography>
              <TextField id="outlined" placeholder="Enter your phone number or IP number" InputProps={{sx: {width:350 ,height:49,fontSize:16}}} ></TextField>
            </Stack>
          </Grid>
          <Grid item xs={16}>
            <Stack >
              <Typography variant="footnote" gutterBottom fontWeight={'bold'}>Password</Typography>
              <TextField id="outlined" 
              placeholder="Enter your password" 
              type={showPassword ? "text" : "password"} 
              InputProps={{sx: {width:350 ,height:49,fontSize:16},
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
          }}
              
              
              />
            </Stack>

          </Grid>

          
          <Grid item xs={12} marginLeft={'auto'}>
            {/* <Box  display="flex" justifyContent="flex-end"> */}
                  <Link to="/register" variant="small" underline="hover" fontWeight={'bold'}>Forget Password?</Link>
              {/* </Box> */}
          </Grid>


          <Grid item  >
            <Button variant="contained" sx={{height: 58,width:350 ,backgroundColor:"#28A19C"}} > Log in </Button>
          </Grid>

          <Grid item>

            <Typography variant="small">
              New User?    
            </Typography>
            <Link variant="small" underline="hover" color="#28A19C" fontWeight={'bold'}>
              Sign up
            </Link>

          </Grid>
          </Grid>
        </Box>

);};

export default Login;
