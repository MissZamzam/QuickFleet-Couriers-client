import React from 'react'
import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from "./components/SignUp/SignUp"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
