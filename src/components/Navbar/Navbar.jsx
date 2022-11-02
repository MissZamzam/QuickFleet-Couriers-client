import axios from 'axios'
import { useEffect } from 'react'
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
    <div class="mt-36">
          <nav class = "navbar navbar-expand-lg navbar-light fixed-top navbarr">
        <div class = "container">
            <a class = "navbar-brand d-flex justify-content-between align-items-center order-lg-0" href="/">
                <span style={{color: "white"}} class = "text-uppercase ms-2">Quick<span style={{color:"orange"}}>Fleet</span></span>
            </a>
            <div class = "order-lg-2 nav-btns flex-end">
                { user ? (
                    <div class = "navbar-nav mx-auto text-center">
                        <button class = "btn position-relative iconi" to="/profile" onClick={handleLogout}>
                            <Link to='/profile'>
                                Profile
                            </Link>
                        </button>
                        <button class = "btn position-relative iconi" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <>

                <button type = "button" class = "btn position-relative iconi">
                    <a href="/login" style={{color:"white"}}><i class="fa-solid fa-user"></i></a>
                </button>

                    </>
                )}

            </div>

            <button class = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
                <span class = "navbar-toggler-icon"></span>
            </button>

            <div class = "collapse navbar-collapse order-lg-1 menus" id = "navMenu">
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

    </div>
  )
}

export default Navbar
