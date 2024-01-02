import { useState,useEffect } from 'react'
import {Box,Stack,Typography} from '@mui/material'
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos, setvideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then(data=>setvideos(data.items))
  }, [selectedCategory]);
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'89.6vh'},borderRight:'1px solid white',px:{sx:0,md:2}}}>
        <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}>

        </Sidebar>

        <Typography className="copyright" variant="body2" sx={{color: 'white',mt:1.5}}>
          Copyright 2023 @HawtBeagle
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto'}}>
        <Typography variant='h4' fontWeight='bold' mb={2} ml={2} sx={{color:'white'}}>
        {selectedCategory} <span style={{color:'red'}}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
