import React from 'react'
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { SearchBar } from './'
import logo from '../assets/youtube-Icon.png';

export default function NavBar() {
  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ position: 'sticky', background: '#27272A', top: 0, justifyContent: 'space-between' }}
        p={2}
      >
        <Link to='/' >
          <img src={logo} alt="logo" width={75} className="ml-4"/>
        </Link>
        <SearchBar />
      </Stack>
    </div>
  )
}
