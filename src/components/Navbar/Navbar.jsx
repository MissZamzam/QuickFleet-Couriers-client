// import axios from 'axios'
// import { useEffect } from 'react'
// import { UserContext } from '../../hooks/useContext'
// import './Navbar.css'
import { Link } from 'react-router-dom'
import "./Navbar.css"


// const Navbar = ({setUsers, user}) => {

//     const handleLogout = () =>{
//         fetch("users/signout",{
//             method:"DELETE"
//         })
//         .then((r) => {
//             if (r.ok){
//                 setUsers(null)
//             }
//         })
//     }
    


//   return (
//     <div class="mt-36">
//           <nav class = "navbar navbar-expand-lg navbar-light fixed-top navbarrr">
//         <div class = "container">
//             <a class = "navbar-brand d-flex justify-content-between align-items-center order-lg-0 navbar-logo" href="/">
//                 <span class = "text-uppercase ms-2">Quick<span style={{color:"orange"}}>Fleet</span></span>
//             </a>
//             <div class = "order-lg-2 nav-btns flex-end">
//                 { user ? (
//                     <div class = "navbar-nav mx-auto text-center">
//                         <button class = "btn position-relative iconi" to="/profile" onClick={handleLogout}>
//                             <Link to='/profile'>
//                                 Profile
//                             </Link>
//                         </button>
//                         <button class = "btn position-relative iconi" onClick={handleLogout}>
//                             Logout
//                         </button>
//                     </div>
//                 ) : (
//                     <>

//                 <button type = "button" class = "btn position-relative">
//                     <a href="/login" style={{color:"white"}}><i class="fa-solid fa-user"></i></a>
//                 </button>

//                     </>
//                 )}

//             </div>

//             <button class = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
//                 <span class = "navbar-toggler-icon"></span>
//             </button>

//             <div class = "collapse navbar-collapse order-lg-1 menus" id = "navMenu">
//                 <ul class = "navbar-nav mx-auto text-center">
//                     <li class = "nav-item px-2 py-2">
//                         <Link to='/' class='text-uppercase text-dark'>
//                             Home
//                         </Link>
//                     </li>
//                     <li class = "nav-item px-2 py-2">
//                         <Link to='/services' class='text-uppercase text-dark'>
//                             Service
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>

//     </div>
//   )
// }

// export default Navbar

import { useState } from "react";
import './Navbar.css'

export default function NavBar({setUser, user}) {
    const [navbar, setNavbar] = useState(false);

    const handleLogout = () =>{
        fetch("/users/signout",{
            method:"DELETE"
        })
        .then((r) => {
            if(r.ok){
                setUser(null)
            }
        })
    }

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block navbar-logo">
                        <a href="javascript:void(0)">
                        <span class = "text-uppercase ms-2">Quick<span style={{color:"orange"}}>Fleet</span></span>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >

{ user ? (
                    <div class = "navbar-nav mx-auto text-center">
                        <ul className="items-center justify-center space-y-12 md:flex md:space-x-6 md:space-y-0 mt-3 navbar-list">

                            <li className="text-black-600">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="text-black-600">
                                <a href="javascript:void(0)">Service</a>
                            </li>

                    <button class = "btn position-relative logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                        </ul>

                    {/* <button class = "btn position-relative logi" onClick={handleLogout}>
                        Logout
                    </button> */}

                    
                    </div>
                ) : (
                    <>


                        <ul className="items-center justify-center space-y-12 md:flex md:space-x-6 md:space-y-0 mt-3 navbar-list">
                            <li className="text-black-600">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="text-black-600">
                                <a href="javascript:void(0)">Service</a>
                            </li>
                            <Link to={"/login"} type = "button">
                                 <i class="fa-regular fa-user"></i>
                            </Link>
                        
                        </ul>

                    

                {/* <button type = "button" class = "btn position-relative">
                    <a href="/cart" style={{color:"black"}}><i class="fa-solid fa-basket-shopping"></i></a>
                </button> */}

                {/* <button type = "button" class = "btn position-relative">
                    <a href="/login" style={{color:"black"}}><i class="fa-solid fa-user"></i></a>
                </button> */}

                    </>
                )}

                        <ul className="items-center justify-center space-y-12 md:flex md:space-x-6 md:space-y-0 mt-3 navbar-list">
                            {/* <li className="text-black-600">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="text-black-600">
                                <a href="javascript:void(0)">Service</a>
                            </li>
                            <Link to={"/login"} type = "button">
                                 <i class="fa-regular fa-user"></i>
                            </Link> */}
                        
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
