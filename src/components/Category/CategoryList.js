import React, { useContext, useState } from 'react'
import { CategoryItem } from './CategoryItem'
import List from '@mui/material/List';
import { TodoContext } from '../../context/TodoContext';

export const CategoryList = () => {

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px 8px',
        width: 'auto', 
        overflow: 'auto',
        height:'60px',
        backgroundColor: '#F7F9FB',
        fontSize: 16
    }

    const {todoState} = useContext(TodoContext);
  

  return (
    <div>
    <List style={flexContainer}>
        {
            todoState.categories.map((item, idx)=> (
                <CategoryItem key={idx} text={`${item}`} />
            ))
        }
      
    </List>
    </div>
  )
}
