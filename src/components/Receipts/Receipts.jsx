import { useState, useEffect } from "react";
import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Receipt from "./Receipt";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { Button, Stack } from "@mui/material";
import "./Receipts.css";

function Receipts() {
    const [ receipts, setReceipts ] = useState( [] );
    const theme = useTheme();
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

        return (
          <Stack direction="row" spacing={2}>
            {/* <Button
              variant="outlined"
              color="warning"
                    size="small" */}
            <Link
              to={`/receipts/${receipts.id}`}
              onClick={() => <Receipt key={receipts.id} />}
            >
              <button className="viewBtn">View More</button>
            </Link>
            {/* onClick={onClick} */}
            {/* > */}
            {/* View More
            </Button> */}
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={onClick}
            >
              Delete
            </Button>
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
        console.log(data);
        setReceipts(data);
      });
  }, []);
  return (
    <Box m="20px" className="receiptTable">
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
            // "& .name-column--cell": {
            //   color: colors.greenAccent[300],
            // },
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
       className="tableFields" >
        <DataGrid
          rows={receipts}
          columns={columns}
          //   buttons= {buttons}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}
export default Receipts;

