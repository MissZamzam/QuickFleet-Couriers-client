import { useState } from "react";
import { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { Link }from 'react-router-dom';
// import Delivery from './Delivery';
import "./Deliveries.css"
// import Editdelivery from "./Editdelivery";


function Deliveries() {
  
  

  
const[deliveries, setDeliveries]= useState([])


useEffect(()=>{
    fetch("http://127.0.0.1:3000/deliveries")
    .then(response => response.json())
    .then(data => setDeliveries(data))
},[])


function deleteDelivery(id) {
  fetch(`http://127.0.0.1:3000/deliveries/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(r => r.json())
  .then(()=> { const deleting = deliveries.filter((delivery) => delivery.id !== id) 
    setDeliveries(deleting)



  })

  .catch(err=> console.log(err))
  alert("delete was successful")

}


return(
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableHead>Deliveries</TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Receiver Name</TableCell>
            <TableCell align="right">Contact Name</TableCell>
            <TableCell align="right">Pickup Instructions</TableCell>
            <TableCell align="right">Delivery Instructions</TableCell>
            <TableCell align="right">Service Type</TableCell>
            <TableCell align="right">Package Details</TableCell>
            {/* <TableCell align="right">Delivery</TableCell>
            <TableCell align="right">Receipt</TableCell> */}



            {/* <TableCell align="right">View</TableCell> */}
             {/* <TableCell align="right">View</TableCell> */}
              {/* <TableCell align="right">View</TableCell> */}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {deliveries.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.receiver_name}</TableCell>
              <TableCell align="right">{row.receiver_contact}</TableCell>
              <TableCell align="right">{row.pickup_instructions}</TableCell>
              <TableCell align="right">{row.delivery_instructions}</TableCell>
              <TableCell align="right">{row.service_type}</TableCell>
              <TableCell align="right">{row.package_details}</TableCell>
              {/* <TableCell align="right">{row.delivery_id}</TableCell>
              <TableCell align="right">{row.receipt_id}</TableCell> */}
              <TableCell align="right"><Link to="/deliveries/:id">{row.view}</Link></TableCell>
              {/* <Stack direction="row" spacing={2}>
            <Link
              to={`/deliveries/${id}`}
              onClick={() => <Delivery key={deliveries.id} />}
            >
              <button className="viewBtn">View</button>
            </Link>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={onClick}
            >
              Delete
            </Button>
          </Stack> */}
              
              {/* <button onClick={() => {deleteDelivery (row.id)}} type="button display in-line padding: 15px" className="btn-danger btn-xsm">DELETE</button> */}
              
             <Button classname="editbtn" variant="contained" color="success">EDIT</Button>
          
              <Button onClick={() => {deleteDelivery (row.id)}} variant="outlined" color="error">DELETE</Button>
             
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



export default Deliveries;