import React from 'react'
import { MdCheckCircleOutline,  MdClear } from "react-icons/md";
import Chip from '@mui/material/Chip';
import { Card, Grid } from '@mui/material';

export const Todo = ({todo}) => {
  const {task, category} = todo
  return (
    <Grid item xs={2} sm={4} md={4} >  
        <Card >
            <MdCheckCircleOutline/>
              {task}
            <Chip label={category} />
            <MdClear/>
        </Card>
    </Grid>
  )
}
