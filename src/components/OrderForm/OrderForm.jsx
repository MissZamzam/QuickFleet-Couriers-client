// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import FormLabel from '@mui/material/FormLabel'
// import "./OrderForm.css";
// import {useState} from "react"
// import { useNavigate } from 'react-router-dom';

// export default function OrderForm() {

  // const [senderName, setSenderName] = useState('')
  // const [receiverName, setReceiverName] = useState('')
  // const [natureOfGoods, setNatureOfGoods] = useState('')
  // const [amountPaid, setAmountPaid] = useState('')
  // const [pickup, setPickup] = useState('')
  // const [destination, setDestination] = useState('')
  // const navigate = useNavigate()

//   function handleSubmit(e){
//     e.preventDefault();
//     fetch('http://127.0.0.1:3000/orders', {
//       method: 'POST',
//       headers: {
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify(
//         {
//           senderName,
//           receiverName,
//           natureOfGoods,
//           amountPaid,
//           pickup,
//           destination,
//         }
//       ),
//     })
//     .then((r) => r.json())
//     navigate('/ordercard')
//   }

//   return (
//     <div className='form'>
//     <form onSubmit={handleSubmit}>
//         <Box
//           component="form"
//           sx={{
//             '& .MuiTextField-root': { m: 1, width: '25ch' },
//           }}
//           noValidate
//           autoComplete="off"
//           style={{"background":"white",
//           "padding":'20px',
//           "marginTop":"40px",
//           "width":'100%',
//           }}
//         >
//         <FormLabel
//           style={{"justifyContent": 'center',
//             "alignItems":"center",
//             "display": "flex",
//             "fontWeight": "bolder",
//             "color": "black",
//             "fontSize": "20px"
//           }}
//         >
//           Place your order
//         </FormLabel>
//           <div>
//             <TextField
//               required
//               id="outlined-required"
//               label="Sender name"
//               value={senderName}
//               onChange={(e)=>setSenderName(e.target.value)}
//             />
//             <TextField
//               id="outlined-disabled"
//               label="Receiver name"
//               value={receiverName}
//               onChange={(e)=>setReceiverName(e.target.value)}
//             />
//             <div>
//               <TextField
//                 id="outlined-password-input"
//                 label="Nature of goods"
//                 value={natureOfGoods}
//                 onChange={(e)=>setNatureOfGoods(e.target.value)}
//               />
//               <TextField
//                 id="outlined-read-only-input"
//                 label="Amount paid"
//                 value={amountPaid}
//                 onChange={(e)=>setAmountPaid(e.target.value)}
//               />
//             </div>
//             <div>
//               <TextField
//                 id="outlined-password-input"
//                 label="Pickup"
//                 value={pickup}
//                 onChange={(e)=>setPickup(e.target.value)}
//               />
//               <TextField
//                 id="outlined-read-only-input"
//                 label="Destination"
//                 value={destination}
//                 onChange={(e)=>setDestination(e.target.value)}
//               />
//             </div>
//             <div>
//               <Button type="submit" variant="contained" style={{
//                 "margin":"18px"
//               }}>Make Order</Button>
//             </div>
//           </div>
//         </Box>
//     </form>
//     </div>
//   );
// }

import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function OrderForm() {

  const [senderName, setSenderName] = useState('')
  const [receiverName, setReceiverName] = useState('')
  const [natureOfGoods, setNatureOfGoods] = useState('')
  const [amountPaid, setAmountPaid] = useState('')
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
  }

  // function handleSubmit(e){
    useEffect(()=>{
      fetch("http://localhost:3000/orders")
      .then((r)=> r.json())
      .then((data)=> console.log(data))
    }, [])
  // }

  return (
    <div>
      <form>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sender Name</label>
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={senderName} required />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Receiver Name</label>
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={receiverName} required />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nature of Goods</label>
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={natureOfGoods} required />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Amount Paid</label>
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={amountPaid} required />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pickup</label>
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={pickup} required />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Destination</label>
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={destination} required />
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Place Your Order
        </button>
      </form>
    </div>
  )
}

export default OrderForm






