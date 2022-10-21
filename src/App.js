
import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from "./components/SignUp/SignUp"

import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Deliveries from './components/Delivery/Deliveries';
 import Delivery from './components/Delivery/Delivery';
 import Receipts from './components/Receipts/Receipts';
 import Receipt from './components/Receipts/Receipt';
// import Trackings from './components/Tracking/Trackings';
// import Tracking from './components/Tracking/Trackings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Home />
        <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/deliveries' element={<Deliveries />} />
        <Route path='/delivery/:id' element={<Delivery />} />
        <Route path='/receipts' element={<Receipts />} /> 
        <Route path='/receipt/:id' element={<Receipt />} /> 
        {/* <Route path='/trackings' element={<Trackings />} />
        <Route path='/tracking/:id' element={<Tracking />} /> */}
      </Routes>
    </BrowserRouter>
      
     
    </div>
  );
}

export default App;
