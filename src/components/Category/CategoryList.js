import React, { useContext, useEffect, useState } from 'react'
import { CategoryItem } from './CategoryItem'
import List from '@mui/material/List';
import { TodoContext } from '../../context/TodoContext';
import { types } from '../../types/types';
import { axiosFetch } from '../../helpers/axios';

export const CategoryList = () => {

    const { todoState, dispatch } = useContext(TodoContext);

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
    
    useEffect(async() => {
        dispatch({
            type: types.loadingSome,
            payload: true
        })
        const resp = await axiosFetch(`/Category`)
        if (resp) {
            dispatch({
                type: types.loadCategories,
                payload: resp.data
            });
            const resps = await axiosFetch(`/Todo`)
            dispatch({
                  type: types.cargarTodos,
                  payload: resps.data
              });
        }
        dispatch({
            type: types.loadingSome,
            payload: false
        })
    }, [])
    
  return (
    <div>
    <List style={flexContainer}>
        {
            todoState.categories.map((item)=> (
                <CategoryItem key={item.id} text={item.namecategory} id={item.id} />
            ))
        }
    </List>
    </div>
  )
}
