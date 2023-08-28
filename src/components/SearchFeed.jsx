import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Video } from '../components'
import { fetchAPI } from '../utils/fetchApi'
import { useParams } from 'react-router-dom'

export default function SearchFeed() {

  const [videos, setVideos] = useState([]);
  const { search } = useParams();

  useEffect(() => {

    fetchAPI(`search?part=snippet%2Cid&maxResults=100&regionCode=AR&q=${search}`)
      .then((data) => setVideos(data.items))

  }, [search]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "95vh", flex: 2, pl: { md: 10 } }}>

      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search result for: <span style={{ color: "#FC1503" }}>{search}</span> videos
      </Typography>

      <Video videos={videos} />

    </Box>
  )
}
