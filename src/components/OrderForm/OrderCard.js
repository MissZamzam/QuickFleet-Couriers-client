import * as React from 'react';
import {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import axios from '../../api/axios';
import axios from 'axios';
import { idID } from '@mui/material/locale';

export default function MultiActionAreaCard() {
    const [orders, setOrders] = useState([])
    const [tableId, settableId] = useState(0)


    const [senderName, setSenderName] = useState('')
    const [receiverName, setReceiverName] = useState('')
    const [natureOfGoods, setNatureOfGoods] = useState('')
    const [amountPaid, setAmountPaid] = useState('')
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')

    useEffect(() =>{
        fetch('/orders')
        .then(res => res.json())
        .then(data => 
            setOrders(data))
    }, [])

    const handleSubmit = (id)=>{
    
        // axios.patch("/orders",{
            // senderName:"",
            // receiverName:"",
            // natureOfGoods:"",
            // amountPaid:"",
            // pickup:"",
            // destination:""
        // })
        fetch(`/orders/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                senderName: senderName,
                receiverName: receiverName,
                natureOfGoods: natureOfGoods,
                amountPaid: amountPaid,
                pickup: pickup,
                destination: destination
            })
        })
        .then(res=>{
            if(res.ok){
                res.json().then(console.log)
            }
        })
    }

    const handleUpdate = (table, id) =>{
        settableId(id)
        setSenderName(table.senderName)
        setReceiverName(table.receiverName)
        setNatureOfGoods(table.natureOfGoods)
        setAmountPaid(table.amountPaid)
        setPickup(table.pickup)
        setDestination(table.destination)
        console.log(table)
    }



    function handleDelete(id){
        fetch(`/orders/${id}`,{
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
            <div class="grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Card sx={{ maxWidth: 345 }} style={{backgroundColor: 'white'}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    alt="Delivery Van"
                    image="https://images.unsplash.com/photo-1513885045260-6b3086b24c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <CardContent style={{backgroundColor: 'white'}}>
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
                    <button onClick={()=> handleUpdate(table, table.id)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        UPDATE ORDER
                    </button>
                    <button class="bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={()=>handleDelete(table.id)}>
                      CANCEL ORDER
                    </button>
                </CardActions>
                </Card>
            </div>
            
        )
    })}



        {/* <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Place Your Order
        </button> */}
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={() => handleSubmit(tableId)} type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </div>

  );
}
