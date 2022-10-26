import { useState, useEffect } from 'react';
import * as React from 'react';
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Title from './Title';
import { Link } from "react-router-dom";
// import { Box } from "@mui/material";

// Generate Order Data
function Orders() {
    const [orders, setOrders] = useState([]);

      useEffect(() => {
        fetch("http://127.0.0.1:3000/orders")
          .then((response) => response.json())
          .then((data) => {
              console.log( data );
              setOrders(data)
          });
      }, []);

      function deleteOrder(id) {
        fetch(`http://127.0.0.1:3000/orders/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(r => r.json())
        .then(()=> { const deleting = orders.filter((order) => order.id !== id) 
          setOrders(deleting)
      
      
      
        })
      
        .catch(err=> console.log(err))
        alert("delete was successful")
      
      }


 return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Recent Orders</TableCell>
            <TableCell align="right">Sender Name</TableCell>
            <TableCell align="right">Receiver Name</TableCell>
            <TableCell align="right">Amount Paid</TableCell>
            <TableCell align="right">Nature of Goods</TableCell>
            <TableCell align="right">PickUp</TableCell>
            <TableCell align="right">Destination</TableCell>
            <TableCell align="right">Delivery</TableCell>
            <TableCell align="right">Receipt</TableCell>





            <TableCell align="right">View</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.recentorders}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.sender_name}</TableCell>
              <TableCell align="right">{row.receiver_name}</TableCell>
              <TableCell align="right">{row.amount_paid}</TableCell>
              <TableCell align="right">{row.nature_of_goods}</TableCell>
              <TableCell align="right">{row.pickup}</TableCell>
              <TableCell align="right">{row.destination}</TableCell>
              <TableCell align="right">{row.delivery_id}</TableCell>
              <TableCell align="right">{row.receipt_id}</TableCell>
              
              <TableCell align="right"><Link to="/orders/:id">{row.view}</Link></TableCell>
              <button onClick={() => {deleteOrder (row.id)}} type="button display in-line padding: 15px" className="btn-danger btn-xsm">DELETE</button>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // <React.Fragment>
    //   <Title>Recent Orders</Title>
    //   <Table size="small">
    //     <TableHead>
    //       <TableRow>
           
    //         <TableCell>Id</TableCell>
    //         <TableCell>Date</TableCell>
    //         <TableCell>Receipt.no</TableCell>
    //         <TableCell>Sender Name</TableCell>
    //         <TableCell>Receiver Name</TableCell>
    //         <TableCell>Nature of Goods</TableCell>
    //         <TableCell>PickUp</TableCell>
    //         <TableCell>Amount Paid</TableCell>
    //         <TableCell>Destination</TableCell>
    //         <TableCell>View</TableCell>
    //         <TableCell align="right">Sale Amount</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow key={row.id}>
    //           <TableCell>{row.date}</TableCell>
    //           <TableCell>{row.receipt_no}</TableCell>
    //           <TableCell>{row.sender_name}</TableCell>
    //           <TableCell>{row.receiver_name}</TableCell>
    //           <TableCell>{row.nature_of_goods}</TableCell>
    //           <TableCell>{row.pickup}</TableCell>
    //           <TableCell>{row.destination}</TableCell>
    //           <TableCell>{row.amount_paid}</TableCell>
    //           <TableCell align="right">{`$${row.amount}`}</TableCell>
    //         </TableRow>
            
    //       ))}
    //     </TableBody>
    //   </Table>
      
    //   <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
    //     See more orders
    //   </Link>
    // </React.Fragment>
  );
}
export default Orders;