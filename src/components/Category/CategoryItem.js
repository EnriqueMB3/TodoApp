import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem'
export const CategoryItem = ({text}) => {
  

  const [selected, setSelected] = useState(false)
  
  const itemSelected = {
    fontWeight : 'bold',
    backgroundColor: selected && '#EDECED',
    marginRight: 10,
    marginLeft: 10,
    cursor: 'pointer',
    borderRadius: '6px',
    color: '#6A6780'
  }

  const onSelected = () => {
    setSelected(!selected);
  }



  return (
    <ListItem style={itemSelected} onClick={onSelected}>
          {text}
    </ListItem>
  )
}
