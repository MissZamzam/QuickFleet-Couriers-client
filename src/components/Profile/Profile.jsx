import React, {useState, useEffect} from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'

function Profile() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/use_profiles')
    .then((res)=> res.json())
    .then((data) => setUsers(data))
  }, [])

  return (
    <div class="container cont">
      <div class="row user-row">
        <div>
            {users.map((user)=>{
              return(
                <div>
                  <div class="background"></div>
                  <div class="outer-div">
                    <div class="inner-div">
                      <div class="front">
                        <div class="front__bkg-photo"></div>
                        <div class="front__face-photo"></div>
                        <div class="front__text">
                          <h3 class="front__text-header">{user.name}</h3>
                          <p class="front__text-para"><i class="fas fa-map-marker-alt front-icons"></i>{user.location}</p>
                          <span class="front__text-hover">Read more about Me</span>
                        </div>
                      </div>
                      <div class="back">
                        <div class="social-media-wrapper">
                          <a href=" " class="social-icon"><i class="fa-solid fa-pencil" aria-hidden="true"></i></a>
                          <a href=" " class="social-icon"><i class="fa fa-envelope" aria-hidden="true">{user.email}</i></a>
                           <a href=" " class="social-icon"><i class="fa fa-phone">{user.telephone}</i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <div class="row options-row">
            <div class='options'>
              <p>Make a booking with us and have the best experience</p>
              <button class="btn">
                <Link to="/orderform" >
                  Book appointment
                </Link>
              </button>
              <p>Check your Orders</p>
              <button class="btn">
                <Link to="/ordercard" >
                  Manage Your Orders
                </Link>
              </button>
              <p>Track your Orders</p>
              <button class="btn">
                <Link to="/packagetrackings" >
                  Track Your Order
                </Link>
              </button>
            </div>
      </div>
    </div>
  )
}

export default Profile
