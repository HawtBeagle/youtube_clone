import { Navbar ,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
export default function App() {
    return (
      <Box sx={{backgroundColor: 'black'}}>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Feed} />
          <Route path='/video/:id' Component={VideoDetail} />
          <Route path='/channel/:id' Component={ChannelDetail} />
          <Route path='/search/:searchterm' Component={SearchFeed} />
        </Routes>
      </Box>
    );
}