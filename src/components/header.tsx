import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'


export default function Header(){

  const navigate = useNavigate()

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Button color="inherit"  onClick={() => {navigate('/')}}> Home </Button>
            <Button color="inherit"  onClick={() => {navigate('/word_list')}}> Words </Button>
          </Box>
          <Button color="inherit" variant="text"  onClick={() => {navigate('/register')}}>Register</Button>
          <Button color="inherit" variant="outlined" onClick={() => {navigate('/login')}}>Login</Button>
          <Button color="inherit" variant="outlined"  onClick={() => {navigate('/logout')}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
