import React from "react"
import "./Home.css"


function Home(){
return(
    <div className="container-fluid my-8">
        <div className="row justify-content-center">
            <div className="col-md-3 col-sm-4 col-lg-6">
                <h1 className="caption">We Are Top Courier <br></br> and Mover Service <br></br> in Nairobi</h1>
                <p className="first">In a world of increasingly demanding schedules,you need a <br></br> partner who will help you achieve your goals. A partner who <br></br> understands your needs and provides you with efficient, <br></br> reliable end to end logistical solutions that help you expand <br></br> your business. 
</p>
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
