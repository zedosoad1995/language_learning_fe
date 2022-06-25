import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddWord from "./components/addWord";
import './App.css';
import Home from "./components/home";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Logout from "./components/logout";
import Header from "./components/header";
import WordsList from "./components/wordsList";
import WordDetail from "./components/wordDetail";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { useEffect } from "react"
import { useSelector } from 'react-redux'
import { logIn } from './slices/login'
import { useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token')
    const refreshToken = localStorage.getItem('refresh_token')

    if(!accessToken || !refreshToken){
      localStorage.removeItem('access_token')
		  localStorage.removeItem('refresh_token')
      window.location.href = '/login/';
    }else{
      dispatch(logIn())
    }
  }, [])

  return (
    <Router>
      <Header />
      <Container maxWidth="sm">
        <Box sx={{m: 2}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/add_word" element={<AddWord/>} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/word_list" element={<WordsList />} />
            <Route path="/word/:id" element={<WordDetail />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
