import { useState, useEffect } from "react";
import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Receipt from "./Receipt";
import { Box } from "@mui/material";

import "./Receipts.css";

function Receipts() {
  const [receipts, setReceipts] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "receipt_no", headerName: "Receipt.No" },
    {
      field: "sender_name",
      headerName: "Sender Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "receiver_name",
      headerName: "Receiver Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "nature_of_goods",
      headerName: "Nature Of Goods",
        flex: 1,
    },
    {
      field: "pickup",
      headerName: "PickUp",
      flex: 1,
    },
    {
      field: "destination",
      headerName: "Destination",
      flex: 1,
    },
    {
      field: "amount_paid",
      headerName: "Amount Paid",
      flex: 1,
      },
    //   { field:<Link to={`/receipts/${receipts.id}`} onClick={() => <Receipt key={receipts.id} />}>
    //   <button className="viewBtn">View More</button>
    //       </Link>,
    //       headerName:"View",
    //   
  ];
    // const buttons = [
    //     {
    //         field: <Link to={ `/receipts/${receipts.id}` } onClick={ () => <Receipt key={ receipts.id } /> }>
    //             <button className="viewBtn">View More</button>
    //         </Link>,
    //         headerName: "View",
    //     }
    // ];

  useEffect(() => {
    fetch("http://127.0.0.1:3000/receipts")
      .then((response) => response.json())
      //   .then( ( response ) => console.log(response) )
      .then((data) => {
        console.log(data);
        setReceipts(data);
      });
  }, []);
  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          //   "& .name-column--cell": {
          //     color: colors.greenAccent[300],
          //   },
          //   "& .MuiDataGrid-columnHeaders": {
          //     backgroundColor: colors.blueAccent[700],
          //     borderBottom: "none",
          //   },
          //   "& .MuiDataGrid-virtualScroller": {
          //     backgroundColor: colors.primary[400],
          //   },
          //   "& .MuiDataGrid-footerContainer": {
          //     borderTop: "none",
          //     backgroundColor: colors.blueAccent[700],
          //   },
          //   "& .MuiCheckbox-root": {
          //     color: `${colors.greenAccent[200]} !important`,
          //   },
          //   "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          //     color: `${colors.grey[100]} !important`,
          //   },
        }}
      >
        <DataGrid
          rows={receipts}
                  columns={ columns }
                //   buttons= {buttons}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}
export default Receipts;

{
  /* <TableBody>
              {receipts.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.receipt_no}</TableCell>
                  <TableCell align="right">{row.sender_name}</TableCell>
                  <TableCell align="right">{row.receiver_name}</TableCell>
                  <TableCell align="right">{row.nature_of_goods}</TableCell>
                  <TableCell align="right">{row.pickup}</TableCell>
                  <TableCell align="right">{row.destination}</TableCell>
                  <TableCell align="right">{row.amount_paid}</TableCell>
                  {/* <TableCell align="right">{row.date}</TableCell> */
}
{
  /* <TableCell align="right">
                    <Link
                      to={`/receipts/${row.id}`}
                      onClick={() => <Receipt key={row.id} />}
                    >
                      <button className="viewBtn">View More</button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */
}
{
  /* </TableContainer> */
}
