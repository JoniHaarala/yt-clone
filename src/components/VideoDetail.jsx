import { useState, useEffect } from 'react';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { Video, Loader } from './';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { Box, Typography, Stack } from '@mui/material'
import { fetchAPI } from '../utils/fetchApi';

export default function VideoDetail() {
  const { id } = useParams();
  const [value, setValue] = useState([])
  const [videos, setVideos] = useState([]);
  useEffect(() => {

    fetchAPI(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`)
      .then((data) => setValue(data.items[0]));
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))

  }, [id]);

  if (!value?.snippet) return <Loader />;
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = value;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h5' }} color="#fff" >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="h5" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="h5" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Video videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}
