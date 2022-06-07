import React from 'react'
import { MdCheckCircleOutline,  MdClear } from "react-icons/md";
import Chip from '@mui/material/Chip';
import { Card, Grid } from '@mui/material';
import { fontSize } from '@mui/system';

export const Todo = () => {

  const TaskContainer = {
    marginTop: 20,
    marginLeft: 20, 
    overflow: 'auto',
    height:'76px'
}

const exController = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5,
 
}

const TitleTask = {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    marginLeft: 10,
    fontSize: 15
}

const chipTitle = {
  fontSize: 11,
  marginTop: 8,

  marginLeft: 20,
  letterSpacing: 0.4,
  height: '25px'
}


  return (
    <Grid  item xs={3} sm={4} md={3.9} >  
  
        <Card style={TaskContainer}>
        
            <div style={exController}>
            <MdClear/>
            </div>
            
            <div style={TitleTask}>
            <MdCheckCircleOutline/>
            Correr 2km
            </div>

        
            <Chip style={chipTitle} label="Catalogo" />
            
        </Card>
      
    </Grid>
  )
}
