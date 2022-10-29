// import { useState, useEffect } from "react";
// import * as React from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Link } from "react-router-dom";
// import { Box } from "@mui/material";


// function Orders() {
//     const [ receipts, setReceipts ] = useState( [] );
//     const columns = [
//       { field: "id", headerName: "ID", flex: 0.5 },
//       { field: "receipt_no", headerName: "Receipt.No" },
//       {
//         field: "sender_name",
//         headerName: "Sender Name",
//         flex: 1,
//         cellClassName: "name-column--cell",
//       },
//       {
//         field: "receiver_name",
//         headerName: "Receiver Name",
//         type: "string",
//         headerAlign: "center",
//         align: "center",
//       },
//       {
//         field: "nature_of_goods",
//         headerName: "Nature Of Goods",
//         flex: 1,
//       },
//       {
//         field: "pickup",
//         headerName: "PickUp",
//         flex: 1,
//       },
//       {
//         field: "destination",
//         headerName: "Destination",
//         flex: 1,
//       },
//       {
//         field: "amount_paid",
//         headerName: "Amount Paid",
//         flex: 1,
//       },
//       {
//         field: "view",
//         headerName: "View",
//         flex: 1,
//       },
//     ];


//   useEffect(() => {
//     fetch("http://127.0.0.1:3000/receipts")
//       .then((response) => response.json())
//       //   .then( ( response ) => console.log(response) )
//       .then((data) => {
//           console.log( data );
//           setReceipts(data)
//       });
//   }, []);
//     return (
//          <Box m="20px">
//       {/* <Header
//         title="CONTACTS"
//         subtitle="List of Contacts for Future Reference"
//       /> */}
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//         //   "& .name-column--cell": {
//         //     color: colors.greenAccent[300],
//         //   },
//         //   "& .MuiDataGrid-columnHeaders": {
//         //     backgroundColor: colors.blueAccent[700],
//         //     borderBottom: "none",
//         //   },
//         //   "& .MuiDataGrid-virtualScroller": {
//         //     backgroundColor: colors.primary[400],
//         //   },
//         //   "& .MuiDataGrid-footerContainer": {
//         //     borderTop: "none",
//         //     backgroundColor: colors.blueAccent[700],
//         //   },
//         //   "& .MuiCheckbox-root": {
//         //     color: `${colors.greenAccent[200]} !important`,
//         //   },
//         //   "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//         //     color: `${colors.grey[100]} !important`,
//         //   },
//         }}
//       >
//         <DataGrid
//           rows={receipts}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//     </Box>      
//     );
// }
// export default Orders;



// {
//   /* <TableContainer component={Paper}>
//           <Table aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Id</TableCell>
//                 <TableCell align="right">Receipt.No</TableCell>
//                 <TableCell align="right">Sender Name</TableCell>
//                 <TableCell align="right">Receiver Name</TableCell>
//                 <TableCell align="right">Nature Of Goods</TableCell>
//                 <TableCell align="right">PickUp</TableCell>
//                 <TableCell align="right">Destination</TableCell>
//                 <TableCell align="right">Amount Paid</TableCell>
//                 {/* <TableCell align="right">Delivery Id</TableCell> */
// }
// {
//   /* <TableCell align="right">View</TableCell> */
// }
// {
//   /* <TableCell align="right">Delete</TableCell> */
// }
// {
//   /* </TableRow> */
// }
// {
//   /* </TableHead> */
// }
// {
//   /* <TableBody>
//               {receipts.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell component="th" scope="row">
//                     {row.id}
//                   </TableCell>
//                   <TableCell align="right">{row.receipt_no}</TableCell>
//                   <TableCell align="right">{row.sender_name}</TableCell>
//                   <TableCell align="right">{row.receiver_name}</TableCell>
//                   <TableCell align="right">{row.nature_of_goods}</TableCell>
//                   <TableCell align="right">{row.pickup}</TableCell>
//                   <TableCell align="right">{row.destination}</TableCell>
//                   <TableCell align="right">{row.amount_paid}</TableCell>
//                   {/* <TableCell align="right">{row.date}</TableCell> */
// }
// {
//   /* <TableCell align="right">
//                     <Link
//                       to={`/receipts/${row.id}`}
//                       onClick={() => <Receipt key={row.id} />}
//                     >
//                       <button className="viewBtn">View More</button>
//                     </Link>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table> */
// }
// {
//   /* </TableContainer> */
// } import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack} from "@mui/material";
import { Link }from 'react-router-dom';
import Delivery from './Delivery';
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
            <TableCell align="right">Package Type</TableCell>
            <TableCell align="right">Package Details</TableCell>
            {/* <TableCell align="right">Delivery</TableCell>
            <TableCell align="right">Receipt</TableCell> */}



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
              <TableCell align="right">{row.package_type}</TableCell>
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