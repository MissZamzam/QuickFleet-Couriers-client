<<<<<<< HEAD
import { useEffect, useState } from 'react';
import {   BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
=======

import {   BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> f7313877c3078b748eefaa0005bf2115673f1a34
import './App.css';
import { verify } from "./auth/Users";
import Login from './components/Login/Login';
import Signup from "./components/SignUp/SignUp"

import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  const [authorized, setAuthorized] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const reverify = async () => {
      try {
        const currUser = await verify();
        setUserData(currUser);
        setAuthorized(true);
      } catch (error) {
        setAuthorized(false);
      }
    };
    reverify();
  }, []);

  return authorized === true || authorized === false ? (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path='/Login' element={<Login authorized={authorized} setUserData={setUserData} />} />
      <Route path='/Signup' element={<Signup authorized={authorized} setUserData={setUserData} />} />
      {authorized ? (
        <></>
      ) : (
        <Navigate to="/login"/>
      )}
    </Routes>
  </BrowserRouter>
    
  </div>

<<<<<<< HEAD
  ) : (
    <h1>Loading</h1>
=======
      <BrowserRouter>
        <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
      <Navbar />
    </div>
>>>>>>> f7313877c3078b748eefaa0005bf2115673f1a34
  );

}

export default App;
