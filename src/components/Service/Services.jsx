import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactReadMoreReadLess from "react-read-more-read-less";


export default function Services() {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch("/services")
        .then((res) => res.json()) 
        .then((data)=>setServices(data))
    }, [])


  return (
  <div class="grid gap-10 px-5 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">    
    {services.map((service)=>{
            return(
                
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={service.image_url}
                />
                {/* <img src={service.image_url} /> */}
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {service.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <ReactReadMoreReadLess
                charLimit={100}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                style={{"color": "blue"}}
                >
                {service.description}
            </ReactReadMoreReadLess>
                </Typography>
                </CardContent>
                {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
            )
        })}
    </div>
   
  );
}
