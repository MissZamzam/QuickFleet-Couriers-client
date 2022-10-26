import React, {useEffect, useState} from 'react'

function OrderCard() {
    const [orders, setOrders] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3000/orders')
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
        {
            orders.map((order)=>{
                return(
                    <div>
                        
                    </div>
                )
            })
        }
    </div>
  )
}

export default OrderCard
