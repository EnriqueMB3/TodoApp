import React from 'react'
import { CategoryItem } from './CategoryItem'
import List from '@mui/material/List';

export const CategoryList = () => {

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0, 
        width: 'auto',
        overflow: 'auto',
        height:'50px',
        backgroundColor: '#F7F9FB'
    }



  return (
    <div>
    <List style={flexContainer}>
        {
            Array.from(Array(10)).map((_, idx)=> (
                <CategoryItem key={idx}/>
            ))
        }
      
    </List>
    </div>
  )
}
