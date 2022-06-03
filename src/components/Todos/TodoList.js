import { Box, Grid } from '@mui/material'
import React from 'react'
import { Todo } from './Todo'

export const TodoList = () => {
  return (
    <Box sx={{flexGrow:1}}>
        <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1,sm: 4, md: 8 }}>
            {Array.from(Array(6)).map((x, idx)=>(
                <Todo key={idx}/>
            ))}
        </Grid>
    </Box>
  )
}
