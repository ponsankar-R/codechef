import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import './App.css'
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default Route */}
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </Router>
   
  );
}

export default App;
