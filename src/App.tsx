import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddWord from "./addWord/addWord";
import './App.css';
import Home from "./home/home";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_word" element={<AddWord />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
