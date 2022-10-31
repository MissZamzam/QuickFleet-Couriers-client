import axios from 'axios'
import { useEffect } from 'react'
// import bag from "../assets/svgs/bag.png"
import { UserContext } from '../../hooks/useContext'
import './Navbar.css'


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
    <div class="mt-36">
          <nav class = "navbar navbar-expand-lg navbar-light fixed-top navbarr">
        <div class = "container">
            <a class = "navbar-brand d-flex justify-content-between align-items-center order-lg-0 spans" href="/">

                <span class = "text-uppercase fw-lighter ms-2 quick">Quick<span style={{color:"orange"}} class="fleet">Fleet</span></span>
            </a>

            <div class = "order-lg-2 nav-btns">

                { user ? (
                    <div class = "navbar-nav mx-auto text-center">
                    <button class = "btn position-relative" onClick={handleLogout}>
                        Logout
                    </button>


                    </div>
                ) : (
                    <>

                <button type = "button" class = "btn position-relative">
                    <a href="/login" style={{color:"white"}}><i class="fa-solid fa-user"></i></a>
                </button>

                    </>
                )}

            </div>

            <button class = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
                <span class = "navbar-toggler-icon"></span>
            </button>

            <div class = "collapse navbar-collapse order-lg-1" id = "navMenu">
                <ul class = "navbar-nav mx-auto text-center">
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-light" href = "/">home</a>
                    </li>
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-light" href = "/Service">Service</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </div>
  )
}

export default Navbar
