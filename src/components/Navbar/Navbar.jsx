import axios from 'axios'
import { useEffect } from 'react'
// import bag from "../assets/svgs/bag.png"
import { UserContext } from '../../hooks/useContext'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = ({setUsers, user}) => {

    const handleLogout = () =>{
        fetch("users/signout",{
            method:"DELETE"
        })
        .then((r) => {
            if (r.ok){
                setUsers(null)
            }
        })
    }
    


  return (
    // <div class="mt-36">
    //       <nav class = "navbar navbar-expand-lg navbar-light fixed-top navbarr">
    //     <div class = "container">
    //         {/* <a class = "navbar-brand d-flex justify-content-between align-items-center order-lg-0" href="/" />
       
    //             <span class = "text-uppercase fw-lighter ms-2">Quick<span style={{color:"orange"}}>Fleet</span></span> */}
    //         <a class = "navbar-brand d-flex justify-content-between align-items-center order-lg-0 spans" href="/">

    //             <span class = "text-uppercase fw-lighter ms-2 quick">Quick<span style={{color:"orange"}} class="fleet">Fleet</span></span>
    //         </a>

    //         
    //         <button class = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
    //             <span class = "navbar-toggler-icon"></span>
    //         </button>

    //         <div class = "collapse navbar-collapse order-lg-1" id = "navMenu">
    //             <ul class = "navbar-nav mx-auto text-center">
    //                 <li class = "nav-item px-2 py-2">
    //                     <Link to='/' class='text-uppercase text-light'>
    //                         Home
    //                     </Link>
    //                 </li>
    //                 <li class = "nav-item px-2 py-2">
    //                     <Link to='/services' class='text-uppercase text-light'>
    //                         Service
    //                     </Link>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand">
    <span class = "text-uppercase fw-lighter ms-2 quick">Quick<span style={{color:"orange"}} class="fleet">Fleet</span></span>

    </a>

    <button class = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
        <span class = "navbar-toggler-icon"></span>
    </button>

    <div class = "collapse navbar-collapse order-lg-1" id = "navMenu">
                 <ul class = "navbar-nav mx-auto text-center">
                     <li class = "nav-item px-2 py-2">
                         <Link to='/' class='text-uppercase text-light'>
                             Home
                         </Link>
                     </li>
                     <li class = "nav-item px-2 py-2">
                        <Link to='/services' class='text-uppercase text-light'>
                            Service
                        </Link>
                     </li>
                 </ul>
             </div>
         </div>
</nav>

  )
}

export default Navbar