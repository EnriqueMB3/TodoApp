import React, { useContext, useState } from 'react'
import ListItem from '@mui/material/ListItem'
import { TodoContext } from '../../context/TodoContext'
import { types } from '../../types/types'
export const CategoryItem = ({text}) => {
  
  
  const {todoState, dispatch} = useContext(TodoContext);
  const {categorySelected} = todoState;
  
  const onSelected = (text) => {
    dispatch({
      type: types.categorySelected,
      payload: text
    })
    dispatch({
      type: types.todosByCategory,
      payload: text
    })
  }
  
  
  const itemSelected = {
    fontWeight : 'bold',
    backgroundColor: categorySelected === text && '#EDECED',
    marginRight: 10,
    marginLeft: 10,
    cursor: 'pointer',
    borderRadius: '6px',
    color: '#6A6780'
  }


  return (
    <ListItem style={itemSelected} onClick={ () => onSelected(text)}>
          {text}
    </ListItem>
  )
}
