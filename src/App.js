
import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from "./components/SignUp/SignUp"

import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
