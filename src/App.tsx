import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from "./components/signIn";
import Logout from "./components/logout";
import Header from "./components/header";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import LoggedContent from "./components/loggedContent";


function App() {
  return (
    <Router>
      <Header />
      <Container maxWidth="sm">
        <Box sx={{m: 2}}>
          <Routes>
            <Route path="*" element={<LoggedContent />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
