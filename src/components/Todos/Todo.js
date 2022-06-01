import React from 'react'
import { MdCheckCircleOutline,  MdClear } from "react-icons/md";
import Chip from '@mui/material/Chip';
import { Card, Grid } from '@mui/material';

export const Todo = () => {
  return (
    <Grid item xs={2} sm={4} md={4} >  
        <Card >
            <MdCheckCircleOutline/>
            Correr 2km
            <Chip label="Ejercicio" />
            <MdClear/>
        </Card>
    </Grid>
  )
}
