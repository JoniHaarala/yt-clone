import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Sidebar, Video, Loader } from '../components'
import { fetchAPI } from '../utils/fetchApi'

export default function Feed() {

  const [selectedCategory, setSelectedCategory] = useState("Nuevo");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // setVideos(null);
    fetchAPI(`search?part=snippet%2Cid&maxResults=50&regionCode=AR&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{
      flexDirection: {
        sx: 'column', md: 'row'
      },
    }}>
      <Box sx={{
        height: {
          sx: 'auto', md: '94vh'
        },
        borderRight: '1px solid #3d3d3d',
        px: {
          sx: 0, md: 2
        }
      }}
      >

        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright © 2023
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>

        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        <span style={{ color: "#FC1503" }}>Videos</span> {selectedCategory === 'Nuevo' ? selectedCategory +'s': 'de '+selectedCategory} 
        </Typography>

        {videos.length === 0 ? <Loader /> : <Video videos={videos} />}

      </Box>

    </Stack>
  )
}
