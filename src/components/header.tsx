import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function Header(){

  {/* <Typography noWrap variant="h6" color="inherit" component="a" href="/" sx={{ display: 'flex', textDecoration: 'none', }}>
    Vocabulary
  </Typography>
  <Typography noWrap variant="h6" color="inherit" component="a" href="/word_list" sx={{ flexGrow: 1, textDecoration: 'none', }}>
    Words
  </Typography> */}

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Button color="inherit" href="/"> Home </Button>
            <Button color="inherit" href="/word_list"> Words </Button>
          </Box>
          <Button color="inherit" variant="text" href="/register">Register</Button>
          <Button color="inherit" variant="outlined" href="/login">Login</Button>
          <Button color="inherit" variant="outlined" href="/logout">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
