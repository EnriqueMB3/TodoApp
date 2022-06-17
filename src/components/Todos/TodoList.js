import { Box, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext';
import { Todo } from './Todo'

export const TodoList = () => {

  const {todoState} = useContext(TodoContext);


  return (
    <Box sx={{flexGrow:1}}>
        <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1,sm: 4, md: 8 }}>
            {todoState.todos.map((todo, idx)=>(
                <Todo key={idx} todo={todo} />
            ))}
        </Grid>
    </Box>
  )
}
