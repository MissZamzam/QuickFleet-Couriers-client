import { useEffect, useState } from 'react';
import {   BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react'
// import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { verify } from "./auth/Users";
import Login from './components/Login/Login';
import Signup from "./components/SignUp/SignUp"
import Navbar from './components/Navbar/Navbar'
import DeliveryForm from './components/DeliveryDetails/DeliveryForm'
// import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import Deliveries from './components/Delivery/Deliveries';
import Delivery from './components/Delivery/Delivery';
import Receipts from './components/Receipts/Receipts';
import Receipt from './components/Receipts/Receipt';
import Trackings from './components/Tracking/Trackings';
import Tracking from './components/Tracking/Trackings';

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
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/deliveries' element={<Deliveries />} />
        <Route path='/delivery/:id' element={<Delivery />} />
        <Route path='/receipts' element={<Receipts />} />
        <Route path='/receipt/:id' element={<Receipt />} />
        <Route path='/trackings' element={<Trackings />} />
        <Route path='/tracking/:id' element={<Tracking />} />
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

  ) : (
    <h1>Loading</h1>



  );

}

export default App;
