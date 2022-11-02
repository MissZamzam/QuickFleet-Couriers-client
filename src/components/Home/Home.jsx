import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"
// import Footer from '../Footer/Footer'


function Home(){
return(
    <div className="container-fluid d-flex ">
        <div class="row">
            <div class="col-md-8 col-sm-8">
                <h1 className="caption">We Are Top Courier <br></br> and Mover Service <br></br> in Nairobi</h1>
                <p className="first">An application where users can login to send packages.Just
                <br></br>like Wells Fargo, Sendy etc.</p>
                <p className="font-12">Having a secure logistics provider you can trust is essential in today's fast paced business world.</p>
                <p className="font-12">In a world of increasingly demanding schedules,you need a partner who will help you achieve your goals. <br />A partner who understands your needs and provides you with efficient, <br/> reliable end to end logistical solutions that help you expand your business.</p>
                <button className="solutions">Our Solutions</button>
            </div>
        </div>
        <div class="col col-md-4 col-sm-4">
        <img src="https://i.pinimg.com/564x/0f/36/62/0f3662c7417e099b7398933f2a6dc7b6.jpg" alt="bike man"/>
        </div>
        {/* <div className="row">
            <div className="col-md-3 col-sm-4 col-lg-6">
                <h1 className="caption">We Are Top Courier <br></br> and Mover Service <br></br> in Nairobi</h1>
                <p className="first">An application where users can login to send packages.Just
                <br></br>like Wells Fargo, Sendy etc.The application charge users</p>
                <button className="solutions">Our Solutions</button>
            </div>
            <div className="col-md-9 col-sm-8 col-lg-6 pickman">
                <img src="https://i.pinimg.com/564x/0f/36/62/0f3662c7417e099b7398933f2a6dc7b6.jpg" alt="bike man"/>
            </div>
        </div> */}
        {/* <div className="container-fluid my-8">
            <div className="row">
                <div className="col-md-3 col-sm-4 col-lg-6">
                    <h1 className="caption">We Are Top Courier <br></br> and Mover Service <br></br> in Nairobi</h1>
                    <p className="first">In a world of increasingly demanding schedules,you need a <br></br> partner who will help you achieve your goals. A partner who <br></br> understands your needs and provides you with efficient, <br></br> reliable end to end logistical solutions</p>
                    <Link style={{"backgroundColor": "white"}} to="/services">
                    <button id="ex"><a href=" " id="exp">
                        Our Solutions
                    </a></button>
                    </Link>
                </div>
                <div className="col-md-9 col-sm-8 col-lg-6 pickman">
                    <img src="https://i.pinimg.com/564x/0f/36/62/0f3662c7417e099b7398933f2a6dc7b6.jpg" alt="bike man"/>
                </div>
            </div>
        </div> */}
    </div>
)
}
export default Home
