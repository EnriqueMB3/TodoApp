import Logo from "./assets/logo_wide.png"
import { Container, height } from "@mui/system"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import { MdCheckCircleOutline,MdClear } from "react-icons/md";
import Chip from '@mui/material/Chip';

export const App = () => {

  const flexContainer = {
      display: 'flex',
      flexDirection: 'row',
      padding: 0, 
      width: 'auto',
      overflow: 'auto',
      height:'50px',
      backgroundColor: '#F7F9FB'
  }
    return (
      <>
     <Container style={{backgroundColor:'#fff', height:'100vh', overflowx:'hidden',padding:0}} maxWidth="sm" fixed >

        {/* Logo */}
        <div>
          <img src={Logo}></img>
        </div>
        {/* Category List */}
        <div>
        <List style={flexContainer}>
            <ListItem>
              All
            </ListItem>
            <ListItem>
              Ejercicio
            </ListItem>
            <ListItem>
              Escuela
            </ListItem>
            <ListItem>
              Trabajo
            </ListItem>
            <ListItem>
              Estudio
            </ListItem>
            <ListItem>
              Mascota
            </ListItem>
            <ListItem>
              Juegos
            </ListItem>
            <ListItem>
              Hijos
            </ListItem>
        </List>
        </div>
        {/* TaskList */}
        <div>
          <div>
             <MdCheckCircleOutline/>
             Correr 2km
             <Chip label="Ejercicio" />
             <MdClear/>

          </div>
        </div>
      </Container>
      </>
    )
  }
  