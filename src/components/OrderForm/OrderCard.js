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
        .then(data => setOrders(data))
    }, [])

    function handleDelete(order){
        fetch(`http://localhost:3000/orders/${order.id}`,{
            method: 'DELETE'
        })
    }

  return (
    <div>
    { orders.map(order => {
        return(
            <>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    alt="Delivery Van"
                    image="https://images.pexels.com/photos/11356987/pexels-photo-11356987.jpeg?auto=compress&cs=tinysrgb&w=400"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Your Order Details
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {order.senderName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {order.receiverName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {order.natureOfGoods}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {order.amountPaid}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {order.pickup}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {order.destination}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {order.senderName}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                </CardActions>
                </Card>
            </>
        )
    })}
    </div>
  );
}
