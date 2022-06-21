import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Header(){
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography noWrap variant="h6" color="inherit" component="a" href="/" sx={{ display: 'flex', textDecoration: 'none', }}>
            Vocabulary
          </Typography>
          <Typography noWrap variant="h6" color="inherit" component="a" href="/word_list" sx={{ flexGrow: 1, textDecoration: 'none', }}>
            Words
          </Typography>
          <Button color="inherit" href="/register">Register</Button>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/logout">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
