import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Button, InputBase } from '@mui/material';

const Search = styled('div')(({ theme }) => ({

  position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    outline : 'solid',
    outlineColor: theme.palette.common.black,
    outlineWidth:'thin',
    marginRight: theme.spacing(10),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(10),
      width: 'auto',
    },
    display:'flex',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.grey,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%', // Default width for all screen sizes
    [theme.breakpoints.up('sm')]: {
      width: '128px', // Adjusted width for medium screens
    },
    [theme.breakpoints.up('md')]: {
      width: '250px', // Adjusted width for medium screens
    },
    [theme.breakpoints.up('lg')]: {
      width: '800px', // Adjusted width for large screens
    },
  },
}));

function SearchBar({ placeholder }) {
  return (
    <Search>
      <StyledInputBase
        placeholder={placeholder || ''}
        inputProps={{ 'aria-label': 'search' }}
      />
      <Button
        style={{ background: '#28A19C' }}
        variant="contained"
      >
        <SearchIcon />
      </Button>
    </Search>
  );
}

export default SearchBar;
