import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import './App.css'
import Register from './Register';
import Owner from './Owner';
import Customer from './Customer';
import RegisterForm from './RegisterForm';
function App() {
  return (
    <Router >
     
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='./Register' element={<Register />} />
        <Route path="*" element={<Register />} />
        <Route path='/Owner' element={<Owner />} />
        <Route path='/Customer' element={<Customer />} />
        <Route path='/RegisterForm' element={<RegisterForm />} />
      </Routes>

    </Router>
   
  );
}

export default App;
