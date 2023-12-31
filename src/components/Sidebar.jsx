import { Stack } from '@mui/material';
import {categories} from '../utils/constants'

const selcat = 'New';
const Sidebar = () => {
  return (
      <Stack
          direction='row'
          sx={{height:{sx:'auto',md:'93%'},flexDirection:{md:'column'},overflowY: 'auto'}}
      >
          {categories.map((category) => (
              <button className='category-btn' style={{backgroundColor: category.name===selcat && 'red',color: 'white'}}>
                  <span style={{color:category.name===selcat ? 'white':'red',marginRight: '10px'}}>{category.icon}</span>
                  <span style={{opacity: category.name===selcat?'1':'0.8'}}>{category.name}</span>
              </button>
          ))}
    </Stack>
  )
}

export default Sidebar
