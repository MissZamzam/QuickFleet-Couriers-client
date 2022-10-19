import { useEffect, useState } from 'react';
import {   BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { verify } from "./auth/Users";
import Login from './components/Login/Login';
import Signup from "./components/SignUp/SignUp"

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

  ) : (
    <h1>Loading</h1>
  );

}

export default App;
