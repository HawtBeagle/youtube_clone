import { Stack } from '@mui/material';
import {categories} from '../utils/constants'



const Sidebar = ({selectedCategory,setselectedCategory}) => {
  return (
      <Stack
          direction='row'
          sx={{height:{sx:'auto',md:'93%'},flexDirection:{md:'column'},overflowY: 'auto'}}
      >
          {categories.map((category) => (
              <button className='category-btn' onClick={() => {
                  setselectedCategory(category.name)
              }} style={{backgroundColor: category.name===selectedCategory && 'red',color: 'white'}} key={category.name}>
                  <span style={{color:category.name===selectedCategory ? 'white':'red',marginRight: '10px'}}>{category.icon}</span>
                  <span style={{opacity: category.name===selectedCategory?'1':'0.8'}}>{category.name}</span>
              </button>
          ))}
    </Stack>
  )
}

export default Sidebar
