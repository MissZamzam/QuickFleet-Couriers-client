import { useState, useEffect } from "react";
import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
// import Receipt from "./Receipt"
import Receipt from "./Receipt";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Button, Stack } from "@mui/material";
import "./Receipts.css";

function Receipts() {
  
  // receipts.map( ( recp ) =>
  // {
  //   console.log(recp)
  // })
  // console.log( receipt )
  
  const [receipts, setReceipts] = useState([]);
  // const [receipt, setReceipt] = useState({})
  const {id} = useParams();
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
    {
      field: "action",
      headerName: "Action",
      width: 180,
      sortable: false,
      disableClickEventBubbling: true,

      renderCell: (params) => {
        const onClick = (e) => {
          const currentRow = params.row;
          return alert(JSON.stringify(currentRow, null, 4));
        };

        // const handleReceipt = ( receipt ){
        //   setReceipt( receipt )
        // };
        return (
          <Stack spacing={1}>
            {/* <>
              {receipts.map((receipt) => {
                return <div>
                   
                </div>;
              })}
              <Link to={`/receipts/${receipts.id}`}>
                <button
                  className="viewBtn"
                  onClick={() => <Receipt key={receipts.id} />}
                >
                  View More
                </button>
              </Link>
            </> */}
            {receipts.map((receipt) => {
              return (
                <Link
                  to={`/receipts/${receipt.id}`}
                  onClick={() => <Receipt key={receipt.id} />}
                >
                  <button className="viewBtn">View More</button>
                </Link>
              );
            })}
          </Stack>
        );
      },
    },
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:3000/receipts")
      .then((response) => response.json())
      //   .then( ( response ) => console.log(response) )
      .then((data) => {
        console.log(data.id);
        setReceipts(data);
      });
  }, [] );
  
  return (
    <>
      <Box m="20px" className="receiptTable">
        <div className="addReceipt">
          <button>+Receipt</button>
        </div>
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
          }}
          className="tableFields"
        >
          <DataGrid
            rows={receipts}
            columns={columns}
            //   buttons= {buttons}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </>
  );
}
export default Receipts;
