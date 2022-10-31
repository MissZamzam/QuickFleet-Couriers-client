import React from 'react'
import './Mapper.css'
import {GoogleMap, useLoadScript} from '@react-google-maps/api'

// import { Skeleton } from '@mui/material'

// const center = {lat: -1.286389, lng: 36.817223}   //Nairobi
const center = {lat: 48.8584, lng: 2.2945}

const Mapper = () => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyBdotwo1ZYLLG9Rxj-TyWpK6gm68X04WGE",
    })

    if(!isLoaded)return <div>Loading...</div>;

    // return <Map />
    
 
  return (
    <div className='Mapper'>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem minima cumque consequuntur beatae, obcaecati quasi reprehenderit sint officia aspernatur voluptas quis, iusto similique repudiandae voluptates pariatur corporis sequi, quia mollitia!</p> */}
        <GoogleMap center={center} zoom={15} mapContainerStyle={{width:"100%", height:"100%"}}>


        </GoogleMap>
        <iframe style={{border:"0", height:"100vh", width:"100%"}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/view?zoom=10&center=-1.2921,36.8219&key=AIzaSyBdotwo1ZYLLG9Rxj-TyWpK6gm68X04WGE"></iframe>

    </div>
  )
}
// function Map(){
//   return <GoogleMap center={center} zoom={15} mapContainerStyle={{width:"100%", height:"100%"}}>

//   </GoogleMap>

// }

export default Mapper
