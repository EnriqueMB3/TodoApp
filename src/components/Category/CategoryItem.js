import React, { useContext, useState } from 'react'
import ListItem from '@mui/material/ListItem'
import { TodoContext } from '../../context/TodoContext'
import { types } from '../../types/types'
import { axiosFetch } from '../../helpers/axios'
export const CategoryItem = ({id, text}) => {
  
  const {todoState, dispatch} = useContext(TodoContext);
  const {categorySelected} = todoState;
  
  const onSelected = async(id, text) => {
    dispatch({
      type: types.loadingSome,
      payload: true
  })
      dispatch({
        type: types.categorySelected,
        payload: text
      })
      const resp = text === 'Default'? await axiosFetch(`/Todo`) : await axiosFetch(`/Todo/${text}`) 
    dispatch({
      type: types.cargarTodos,
      payload: resp.data
    });
    dispatch({
      type: types.loadingSome,
      payload: false
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
    <ListItem style={itemSelected} onClick={ () => onSelected(id, text)}>
          {text}
    </ListItem>
  )
}
