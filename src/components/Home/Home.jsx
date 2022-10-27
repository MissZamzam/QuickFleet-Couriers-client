import React from "react"
import "./Home.css"


function Home(){
return<>
{/* <div className="container home">
    <div className="col nest">
        <h1 className="caption">We Are Top Courier <br></br> and Mover Service <br></br> in Nairobi</h1>
        {/* <h1>Why QuickFleet?</h1> */}
        <p className="first">

QuickFleet is the most trusted courier service company offering you the best service in your time.It is easier now to transfer your products through us. <br></br>
We provide 100% safe and secure local delivery services.Our shipments are faster than any other courier services.If you are looking for business delivery, here QuickFleet will be your right choice because your service is our responsibility.
        </p>
        <button className="solutions">Our Solutions</button>
        <h2 className="town">55+ <br></br> Towns<br></br> Covered</h2>
        <h2 className="client">1000+ <br></br> <br></br> Satisfied Clients</h2>
    </div>
    <div className="col nest2">
        <img src="https://i.pinimg.com/564x/75/01/d5/7501d56f7ac90e6cdd21df70256b43ff.jpg" alt="bike man"/>
    </div>
</div> */}

    <div className="container-fluid my-8">
        <div className="row justify-content-center">
            <div className="col-md-3 col-sm-4 col-lg-6">
                <h1 className="caption">We Are Top Courier <br></br> and Mover Service <br></br> in Nairobi</h1>
                <p className="first">An application where users can login to send packages.Just
                <br></br>like Wells Fargo, Sendy etc.The application charge users</p>
                <button className="solutions">Our Solutions</button>
                {/* <h2 className="town">55+ <br></br> Towns<br></br> Covered</h2>
                <h2 className="client">1000+ <br></br> <br></br> Satisfied Clients</h2> */}
            </div>
            <div className="col-md-3 col-sm-4 col-lg-6 pickman">
                <img src="https://i.pinimg.com/564x/75/01/d5/7501d56f7ac90e6cdd21df70256b43ff.jpg" alt="bike man"/>
            </div>
        </div>
    </div>


</>
}
export default Home
