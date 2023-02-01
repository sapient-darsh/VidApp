import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => (
    <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{position:'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
    >
        <Link to="/" style={{ display: 'flex', alignItems:'center', textDecoration:'none', color:'#2caee2'}}>
            <h1>VidApp</h1>
        </Link>
        <SearchBar />
    </Stack>
  )


export default Navbar