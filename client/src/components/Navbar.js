import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
  <>
  <Box sx={{ flexGrow: 1 }}>
      <AppBar className='appbar'style={{ background: '#2E3B55' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <img src="https://preview.colorlib.com/theme/security/img/logo.png" alt="logo" />
          </Typography>
        <Link to="/"><Button color="inherit" style={{color:"white"}}>Home</Button></Link>
         <Link to="/about"><Button color="inherit">AboutUs</Button></Link>
          <Link to="/service"><Button color="inherit">Service</Button></Link>
          <Link to="/team"><Button color="inherit">Team</Button></Link>
          <Link to="/price"><Button color="inherit">Price</Button></Link>
          <Link to="/contact"><Button color="inherit">Contact</Button></Link>
          <Link to="/pages"><Button color="inherit">Pages</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  </>
  )
}

export default Navbar