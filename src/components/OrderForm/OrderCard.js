import * as React from 'react';
import {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
    const [orders, setOrders] = useState([])

    useEffect(() =>{
        fetch('http://127.0.0.1:3000/orders')
        .then(res => res.json())
        .then(data => 
            setOrders(data))
    }, [])


    function handleDelete(id){
        fetch(`http://localhost:3000/orders/${id}`,{
            method: "DELETE",
        })

        .then((response) => response.json())

        .then(() => {        
          const deleting = orders.filter((table) => table.id !== id);   
               setOrders(deleting);     
              console.log('data')
              })
        // .catch((err) => console.log(err));    alert("delete was successful");  
    


        // .then((r)=>r.json())
        // .then(()=>{
        //     const deleting = orders.filter((order) => order.order !== order);
        //     setOrders(deleting)
        // })
        // .catch((error) => console.log(error));
        // alert("You've successfully canceled the order")
    }

  return (
    <div>

    {orders.map((table) => {
        return(
            <>
            <br></br>
                <br></br>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    alt="Delivery Van"
                    image="https://images.unsplash.com/photo-1513885045260-6b3086b24c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Your Order Details
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        sender Name:
                        {table.senderName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Receiver Name:
                        {table.receiverName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Nature of Goods:
                        {table.natureOfGoods}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Amount:
                        {table.amountPaid}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pickup:
                        {table.pickup}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Destination:
                        {table.destination}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        {table.senderName}
                    </Typography> */}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <button class="bg-green-500 text-white font-bold py-2 px-4 rounded">
                      EDIT ORDER
                    </button>
                    <button class="bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={()=>handleDelete(table.id)}>
                      CANCEL ORDER
                    </button>
                </CardActions>
                </Card>
            </>
        )
    })}
    </div>
  );
}
