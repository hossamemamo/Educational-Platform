import React from 'react';
import {AppBar,Toolbar,Box,Button,Stack,IconButton} from "@mui/material";


import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from "../assets/Logo.png";

import SearchBar from "./SearchBar";
const green="#28A19C";
const white="#FFFFFF";


function Header(){
    return (
        <React.Fragment>
            <AppBar sx={{background: white}} style={{minHeight: '102px'}}>
                <Toolbar  style={{marginTop: "18px",display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>

                    
                <Box 
            component="img"
            sx={{
            height: 33,
            width:150,
            marginLeft: "80px",
                  }}
            alt="Your logo."
            src={Logo}
        />

    <SearchBar/>

    <Stack spacing={3} direction="row" > 
    <IconButton>
          <ShoppingCartOutlinedIcon sx={{color: green}}  />
      </IconButton> 
      
      <Button variant="text">Login</Button>
      <Button variant="contained" style={{background: green}}>Sign Up</Button>

      </Stack>

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;