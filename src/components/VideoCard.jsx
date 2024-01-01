import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoVideoUrl,demoVideoTitle, demoChannelTitle, demoChannelUrl} from '../utils/constants';
const VideoCard = ({ video:{id:{videoId,channelId},snippet}}) => {
  return (
      <Card sx={{width:{sm:'330px',xs:'350px'}}}>
          <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
              <CardMedia
                  image={snippet?.thumbnails?.high?.url}
                  alt={snippet?.title}
                  sx={{ width: 350, height: 180 }} />
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '85px'}}>
              <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                      {snippet?.title || demoVideoTitle.slice(0, 70)}
              </Typography>
                <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="gray">
                            {snippet?.channelTitle.slice(0, 70) || demoChannelTitle.slice(0, 70)}
                          <CheckCircle sx={{fontSize:12,ml:'5px'}} />
                      </Typography>
                </Link>
            </CardContent>
          </Link>
      </Card>
  )
}

export default VideoCard
