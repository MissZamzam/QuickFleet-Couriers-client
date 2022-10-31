import { useEffect, useState, createContext } from 'react';
import {   BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react'
// import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { verify } from "./auth/Users";
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Signup from "./components/SignUp/SignUp"
import Navbar from './components/Navbar/Navbar'
import DeliveryForm from './components/DeliveryDetails/DeliveryForm'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import Services from './components/Service/Services';
import Service from './components/Service/Service';
import Receipts from './components/Receipts/Receipts';
import Receipt from './components/Receipts/Receipt';
import Trackings from './components/Tracking/Trackings';
import Tracking from './components/Tracking/Trackings';
import OrderForm from './components/OrderForm/OrderForm'
import PackageTracking from './components/Package_Tracking/Package_Tracking';
import axios from 'axios';
import Mapper from './components/Maper/Mapper';
// import OrderForm from './components/OrderForm/OrderForm';
import OrderCard from './components/OrderForm/OrderCard';

function App() {

  const [user, setUser] = useState(null)

  // const [authorized, setAuthorized] = useState(null);
  // const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   const reverify = async () => {
  //     try {
  //       const currUser = await verify();
  //       setUserData(currUser);
  //       setAuthorized(true);
  //     } catch (error) {
  //       setAuthorized(false);
  //     }
  //   };
  //   reverify();
  // }, []);



  // authorized === true || authorized === false ?
  return  (


    <div className="App">
    {/* <BrowserRouter> */}
    <Navbar user={user} setUser={setUser}/>
    <div className="routes">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/service/:id' element={<Service />} />
          <Route path='/receipts' element={<Receipts />} />
          <Route path='/receipt/:id' element={<Receipt />} />
          <Route path='/trackings' element={<Trackings />} />
          <Route path='/orderform' element={<OrderForm />} />
          <Route path='/ordercard' element={<OrderCard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/deliveryform' element={<DeliveryForm />} />
          {/* <Route path='/orders' element={<Orders />} /> */}
          <Route path='/packagetrackings' element={<PackageTracking />} />
          <Route path='/tracking/:id' element={<Tracking />} />
          <Route path='/Login' element={<Login user={user} setUser={setUser} />} />
          <Route path='/Signup' element={<Signup  />} />
          <Route path='/Mapper' element={<Mapper  />} />
        </Routes>
    </div>
    <Footer />
  </div>

  )

}

export default App;
