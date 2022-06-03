import React, { useState } from 'react'
import { CategoryItem } from './CategoryItem'
import List from '@mui/material/List';

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

    const arrayCategory = ['Default', 'Escuela', 'Trabajo', 'Amigos', 'Discord', 'Mascotas']


  return (
    <div>
    <List style={flexContainer}>
        {
            arrayCategory.map((item, idx)=> (
                <CategoryItem key={idx} text={`${item}`} />
            ))
        }
      
    </List>
    </div>
  )
}
