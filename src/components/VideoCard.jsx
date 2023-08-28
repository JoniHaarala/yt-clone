import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

export default function VideoCard({ video: { id: { videoId }, snippet } }) {
  const [loading, setLoading] = useState(false)
  const [videoTitle, setVideoTitle] = useState(snippet.title)
  const [videoChannelTitle, setVideoChannelTitle] = useState(snippet.channelTitle)
  return (
    <Card sx={{ width: {md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}>
      <Link to={videoId ? `/watch/${videoId}` : demoVideoUrl}>
        <CardMedia
          sx={{
            height: 180,
            width: 360,
          }}
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: '#1f1f1f',
          height: 110,
          color: '#fff',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <Link to={videoId ? `/watch/${videoId}` : demoVideoUrl}>
          <Typography variant="h6" fontWeight='bold' color='#fff'>
            {snippet?.title.slice(0, 20)+'...' || demoVideoTitle.slice(0, 25)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle1" fontWeight='bold' color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
