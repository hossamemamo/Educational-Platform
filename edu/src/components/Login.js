import React from "react";
import { useState } from "react";
import { useLogInMutation } from '../store';

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

import {Visibility,VisibilityOff,Cancel} from '@mui/icons-material';

const Login = ({onClose}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [logIn,{data,isLoading,isError,isSuccess,error}]=useLogInMutation();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [formInput,setFormInput]=useState({
    email:"toka.ali.inovaeg@gmail.com",
    password:"12345678"
  });



const handleCancelButton=(event)=>{
    onClose();
};

const handleChange=(e)=>{
  setFormInput((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
  }))
}

const handleSubmit = async(e)=>{
  e.preventDefault();
  await logIn(formInput);
}

if(isSuccess){
  console.log(data.data.user_id);
  localStorage.setItem('userToken',data.data.user_id);
  handleCancelButton();
}

  return (
    
    <Box sx={{ width:'auto' ,height :'auto' }}>
      <form onSubmit={handleSubmit}>
      <Box sx={{float:"right"}}>
        <IconButton onClick={handleCancelButton} >
          <Cancel/>
        </IconButton>
      </Box>
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
          >



          <Grid item>
            
            <Typography fontWeight={1000} variant="big" >
                Welcome Back!

            </Typography>
          </Grid>

          
          <Grid item xs={16} >
            <Stack >
              <Typography variant="footnote" gutterBottom fontWeight={'bold'}>Phone Number or IP Number</Typography>
              <TextField 
              placeholder="Enter your phone number or IP number" 
              name="email"
              value={formInput.email}
              onChange={handleChange}
              InputProps={{sx: {width:350 ,height:49,fontSize:16}}} ></TextField>
            </Stack>
          </Grid>
          <Grid item xs={16}>
            <Stack >
              <Typography variant="footnote" gutterBottom fontWeight={'bold'}>Password</Typography>
              <TextField  
              placeholder="Enter your password" 
              name="password"
              value={formInput.password}
              onChange={handleChange}
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
            <Button variant="contained" style={{height: 58,width:350 ,backgroundColor:"#28A19C"}} type="submit" > Log in </Button>
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
          </form>

        </Box>

);};

export default Login;
