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


function App() {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/add_word" element={<AddWord/>} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/word_list" element={<WordsList />} />
            <Route path="/word/:id" element={<WordDetail />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
