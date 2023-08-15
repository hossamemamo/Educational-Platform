import React, { useState } from 'react';
import {AppBar,Toolbar,Box,Button,Stack,IconButton,Modal,Menu,MenuItem, Typography } from "@mui/material";

import {
  Link
  } from 'react-router-dom'



import ShoppingCartOutlinedIcon from '../assets/cart.png';
import Logo from "../assets/Logo.png";
import UserIcon from '../assets/user.png';

import Login from './Login';

import SearchBar from "./SearchBar";
const green="#28A19C";
const white="#FFFFFF";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
  };
  

function Header(){
    const user_token=localStorage.getItem('userToken');
    console.log(`inside the header user token is ${user_token}`)
    
    const [loginOpen,setLoginOpen] = useState(false);
//
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  //

    const handleLogOut =()=>{
        handleClose();
        localStorage.removeItem('userToken');
    };


    const handleLoginButton=()=>{
        setLoginOpen(!loginOpen);
    };

    return (
        <React.Fragment>
            <AppBar sx={{background: white,justifyContent:'center'}} style={{minHeight: '102px'}}>
                <Toolbar sx={{justifyContent:'space-between'}}>
              
                 <Link to="/">   
                  <Box 
                    component="img"
                    sx={{
                    height: 33,
                    width:150,
                  }}
                    src={Logo}
                    />
                  </Link>
    <SearchBar/>

    <Stack spacing={2} direction="row" > 
    <IconButton>
          <Box
           component="img"
           sx={{height:25,width:25}}
           src={ShoppingCartOutlinedIcon}
          />
    </IconButton> 
      
      {user_token == null ?(
        <>
            <Button variant="text" onClick={handleLoginButton}><Typography variant='small' color={green}>Login</Typography></Button>
            <Button variant="contained" style={{background: green}}> <Typography variant='small' >Sign Up</Typography></Button>
        </>
      ):<>
      <Button onClick={handleClick}>

        <Box 
                        component="img"
                        sx={{
                        height: 33,
                        width:33,
                            }}
                        src={UserIcon}
                    />

      </Button>

                <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>


      </>}

      </Stack>

                </Toolbar>
            </AppBar>

            <Modal
        open={loginOpen}
        onClose={handleLoginButton}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
                <Login onClose={handleLoginButton} />
        </Box>
      </Modal>

        </React.Fragment>
    );
}

export default Header;