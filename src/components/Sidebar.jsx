import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
import { Widgets } from '@mui/icons-material'

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
    return (
        <Stack
            direction='row'
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' },
                width: { sx: 'auto', md: '200px'}
            }}
        >
            {
                categories.map((category) => (
                    <button
                        className='category-btn'
                        onClick={() => setSelectedCategory(category.name)}
                        style={{
                            background: category.name === selectedCategory && '#fc1503',
                            color: 'white'
                        }}
                        key={category.name}
                    >
                        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
                            {category.icon}
                        </span>
                        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                            {category.name}
                        </span>
                    </button>
                ))
            }
        </Stack>
    )
}
