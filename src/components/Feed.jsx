import { useState,useEffect } from 'react'
import {Box,Stack,Typography} from '@mui/material'
import {Sidebar,Videos} from './'
const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'89.6vh'},borderRight:'1px solid white',px:{sx:0,md:2}}}>
        <Sidebar>

        </Sidebar>

        <Typography className="copyright" variant="body2" sx={{color: 'white',mt:1.5}}>
          Copyright 2023 @HawtBeagle
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto'}}>
        <Typography variant='h4' fontWeight='bold' mb={2} ml={2} sx={{color:'white'}}>
        New <span style={{color:'red'}}>videos</span>
        </Typography>
        <Videos/>
      </Box>
    </Stack>
  )
}

export default Feed
