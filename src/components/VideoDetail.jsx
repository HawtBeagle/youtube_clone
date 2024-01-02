import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ReactPlayer from 'react-player';
import { CheckCircle } from '@mui/icons-material';
import { Box, Typography, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
const VideoDetail = () => {
  const [videos, setvideos] = useState([]);
  const [videoDetail, setvideoDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setvideoDetail(data.items[0]));
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setvideos(data.items));
  }, [id]);
  if (!videoDetail?.snippet) return 'Loading';
  const { snippet: { title, channelId, channelTitle },statistics: { viewCount, likeCount } } = videoDetail; 
  return (
    <Box>
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1} sx={{ml:2}}>
          <Box sx={{width:'100%',position:'sticky',top:80}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className='react-player' />
            <Typography color="white" variant="h5" p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' px={2} py={1}>
              <Link to={`/channel/${channelId}`}>
                <Typography color="white">{channelTitle}{<CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}} />}</Typography>
              </Link>
              <Stack direction='row' gap='20px'>
                <Typography variant="body1" color='white'>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" color='white'>
                  {parseInt(likeCount).toLocaleString()} views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}}>
        <Videos videos={videos} direction='column'/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
