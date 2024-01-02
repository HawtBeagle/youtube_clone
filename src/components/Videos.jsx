import { Stack,Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';
const Videos = ({ videos,nochannel,direction}) => {
  console.log(videos);
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' gap={2} justifyContent='start'>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {(item.id.channelId&&nochannel!=='True') && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
