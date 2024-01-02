import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {ChannelCard, Videos} from './';
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setvideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then(data => setchannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet`)
    .then(data => setvideos(data?.items))
  },[id])
  return (
    <Box>
      <Box>
      <div style={{background: 'linear-gradient(140deg, rgba(58,180,101,1) 0%, rgba(252,69,152,1) 38%, rgba(69,252,241,1) 85%)',height:'300px'}} />
        <ChannelCard channelDetail={channelDetail} id={id} marginTop="-80px"  />
      </Box>
      <Box display='flex' p={2}>
      <Box sx={{mr:{sm:'80px'}}} />
      <Videos videos={videos} nochannel='True'/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
