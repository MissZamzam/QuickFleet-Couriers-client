import React from "react"
import "./Home.css"


function Home(){
return(
    <div className="container-fluid my-8">
        <div className="row justify-content-center">
            <div className="col-md-3 col-sm-4 col-lg-6">
                <h1 className="caption">We Are Top Courier <br></br> and Mover Service <br></br> in Nairobi</h1>
                <p className="first">An application where users can login to send packages.Just
                <br></br>like Wells Fargo, Sendy etc.The application charge users</p>
                <button className="solutions">Our Solutions</button>
            </div>
            <div className="col-md-3 col-sm-8 col-lg-6 pickman">
                <img src="https://i.pinimg.com/564x/75/01/d5/7501d56f7ac90e6cdd21df70256b43ff.jpg" alt="bike man"/>
            </div>
        </div>
    </div>
)
}
export default Home