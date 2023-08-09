import React, { useState } from 'react';
import {AppBar,Toolbar,Box,Button,Stack,IconButton,Modal,Menu,MenuItem } from "@mui/material";

import {
  Link
  } from 'react-router-dom'



import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
            <AppBar sx={{background: white}} style={{minHeight: '102px'}}>
                <Toolbar  style={{marginTop: "18px",display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>

                 <Link to="/">   
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
            </Link>
    <SearchBar/>

    <Stack spacing={3} direction="row" > 
    <IconButton>
          <ShoppingCartOutlinedIcon sx={{color: green}}  />
      </IconButton> 
      
      {user_token == null ?(
        <>
            <Button variant="text" onClick={handleLoginButton}>Login</Button>
            <Button variant="contained" style={{background: green}}>Sign Up</Button>
        </>
      ):<>
      <Button onClick={handleClick}>

        <Box 
                        component="img"
                        sx={{
                        height: 33,
                        width:33,
                            }}
                        alt="Your logo."
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