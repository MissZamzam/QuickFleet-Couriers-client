import { useEffect, useState, createContext } from 'react';
import {   BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react'
// import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { verify } from "./auth/Users";
import Login from './components/Login/Login';
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
import OrderForm from './components/OrderForm/OrderForm';
import Deliveries from './components/Dashboard/scenes/Deliveries';
import Orders from './components/Orders/Orders';
// import Orders from './components/OrderForm/OrderForm'
import PackageTracking from './components/Package_Tracking/Package_Tracking';
import OrderCard from './components/OrderForm/OrderCard'
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/scenes/Dashboard';
// import Dashboard from './Dashboard/scenes/Dashboard';

// import Dashboard from './Dashboard/scenes/Dashboard';
// import Orders from './components/OrderForm/OrderForm'
// import OrderCard from './components/OrderForm/OrderCard'
// import PackageTracking from './components/Package_Tracking/Package_Tracking';
import axios from 'axios';
import Mapper from './components/Maper/Mapper';

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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service/:id' element={<Service />} />
        <Route path='/receipts' element={<Receipts />} />
        <Route path='/receipt/:id' element={<Receipt />} />
        <Route path='/trackings' element={<Trackings />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/ordercard' element={<OrderCard />} />
        <Route path='/packagetrackings' element={<PackageTracking />} />
        <Route path='/tracking/:id' element={<Tracking />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/deliveries' element={<Deliveries />} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/Login' element={<Login user={user} setUser={setUser} />} />
        <Route path='/Signup' element={<Signup  />} />
        <Route path='/Mapper' element={<Mapper  />} />
    </Routes>
    <Footer />
  </div>

  ) 

}

export default App;