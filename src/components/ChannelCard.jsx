import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
const ChannelCard = ({channelDetail}) => {
  return (
    <Box sx={{ display: 'flex',justifyContent:'center', width: { xs: '350px', sm: '330px' } }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ color: 'white' }}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{height:'180px',width:'180px',borderRadius: '50%',mb:2}} />
          <Typography variant="h6" color="white">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:14,ml:'5px',color:'gray'}} />
          </Typography>
          </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
