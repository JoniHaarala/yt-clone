import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {

    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (value) {
            navigate(`search/${value}`);
            setValue('');
        }
    }
    return (
        <Paper
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
            component='form'
            onSubmit={handleSubmit}
        >
            <input
                className='search-bar'
                type="text"
                placeholder='Search...'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <IconButton
                type='submit'
                sx={{
                    p: 1,
                    color: 'red'
                }}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}
