import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddWord from "./components/addWord";
import './App.css';
import Home from "./components/home";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Logout from "./components/logout";
import PrivateRoute from "./components/privateRoute";


function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add_word" element={<AddWord/>} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
