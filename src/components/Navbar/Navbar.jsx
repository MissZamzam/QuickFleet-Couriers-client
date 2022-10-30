import axios from 'axios'
import { useEffect } from 'react'
// import bag from "../assets/svgs/bag.png"
import { UserContext } from '../../hooks/useContext'


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
    
    // useEffect(() => {
    //     fetch("http://localhost:3004/me")
    //     .then((r) => {
    //       if(r.ok){
    //         r.json().then((user) => console.log(user))
    //       }
    //     })
    
    //   })


  return (
    <div>
          <nav class = "navbar navbar-expand-lg navbar-light bg-white  fixed-top">
        <div class = "container">
            <a class = "navbar-brand d-flex justify-content-between align-items-center order-lg-0" href="/">
                {/* <img src ={bag} alt = "site icon" style={{width:"20px", height:"20px"}}/> */}
                <span class = "text-uppercase fw-lighter ms-2">Quick<span style={{color:"orange"}}>Fleet</span></span>
            </a>

            <div class = "order-lg-2 nav-btns">

                { user ? (
                    <div class = "navbar-nav mx-auto text-center">
                    <button class = "btn position-relative" onClick={handleLogout}>
                    {/* <i class="fa-solid fa-circle-user"></i> */}
                        Logout
                    </button>

                    
                    </div>
                ) : (
                    <>

                {/* <button type = "button" class = "btn position-relative">
                <a tabindex="0" class="btn btn-sm btn-dark" role="button" data-mdb-toggle="popover" data-mdb-trigger="focus" title="Dismissible popover"data-mdb-content="And here's some amazing content. It's very engaging. Right?"
>
<i class="fa-solid fa-circle-user"> </i>
</a>
                    <a href="" style={{color:"black"}}><i class="fa-solid fa-circle-user"></i></a>
                </button> */}

                {/* <button type = "button" class = "btn position-relative">
                    <a href="/cart" style={{color:"black"}}><i class="fa-solid fa-basket-shopping"></i></a>
                </button> */}

                <button type = "button" class = "btn position-relative">
                    <a href="/login" style={{color:"black"}}><i class="fa-solid fa-user"></i></a>
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
                        <a class = "nav-link text-uppercase text-dark" href = "/">home</a>
                    </li>
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-dark" href = "/Service">Service</a>
                    </li>

                    {/* <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-dark" href = "">blogs</a>
                    </li>
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-dark" href = "#about">about us</a>
                    </li>
                    <li class = "nav-item px-2 py-2 border-0">
                        <a class = "nav-link text-uppercase text-dark" href="/Contact">Contact</a>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>

    </div>
  )
}

export default Navbar