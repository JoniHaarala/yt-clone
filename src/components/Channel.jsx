import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Video, ChannelCard } from './'
import { fetchAPI } from '../utils/fetchApi';

export default function Channel() {

  const [ChannelDetail, setChannelDetail] = useState('')
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`)
      .then((res) => setChannelDetail(res?.items[0]))

    fetchAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      .then((res) => setVideos(res?.items))
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box>
        <img className="object-cover h-52 md:h-72 z-10" width='100%' src={ChannelDetail ? `${ChannelDetail.brandingSettings.image.bannerExternalUrl}` : 'https://media.istockphoto.com/id/990697446/es/vector/gray-abstract-fondo.jpg?s=612x612&w=0&k=20&c=Y9yq-kp16SKK1D_6WuhmKHrXWlBZrWtviKyGkZubLDY='} alt="banner" />
        <ChannelCard channelDetail={ChannelDetail} marginTop='0' />
      </Box>
      <Box display='flex' p={2} sx={{ pl: { sm: 5, md: 10 } }}>
        <Box sx={{ mr: { sm: '100px' } }}>
          <Video videos={videos} />
        </Box>
      </Box>
    </Box>
  )
}
