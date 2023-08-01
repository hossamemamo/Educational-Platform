import React from 'react';
import {AppBar,Toolbar,Box,Button,Stack} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from "../assets/Logo.jpg";

function Header(){
    return (
        <React.Fragment>
            <AppBar sx={{background: "#FFFFFF"}}>
                <Toolbar>
                <Box
            component="img"
            sx={{
            height: 33,
            width:150
            }}
            alt="Your logo."
            src={Logo}
        />
            <ShoppingCartOutlinedIcon sx={{color: "#28A19C"}} />

    <Stack spacing={2} direction="row"> 
        <Button variant="text">Login</Button>
      <Button variant="contained" sx={{background: "#28A19C"}}>Sign Up</Button>
      </Stack>

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;