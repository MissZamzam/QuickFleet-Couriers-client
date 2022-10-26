import { useState, useEffect } from "react";
import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
// import Receipt from "./Receipt"
import Receipt from "./Receipt";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Button, Stack } from "@mui/material";
import "./Receipts.css";

function Receipts({onAddingReceipt}) {
  
  // receipts.map( ( recp ) =>
  // {
  //   console.log(recp)
  // })
  // console.log( receipt )
  
  const [ receipts, setReceipts ] = useState( [] );
  const [receipt_no, setReceiptNumber] = useState("");
  const [sender_name, setSender] = useState("");
  const [receiver_name, setReceiver] = useState("");
  const [nature_of_goods, setNatureGoods] = useState("");
  const [ pickup, setPickup ] = useState( "" );
  const [ destination, setDestination ] = useState( "" );
  const [amount_paid, setAmount] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [receipt, setReceipt] = useState({})
  const { id } = useParams();
  const navigate = useNavigate();
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
        console.log(data);
        setReceipts(data);
      });
  }, [] );


   function handleSubmit(e) {
     e.preventDefault();
     setErrors([]);
     setIsLoading(true);
     fetch("http://127.0.0.1:3000/receipts", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         receipt_no,
         sender_name,
         receiver_name,
         nature_of_goods,
         pickup,
         destination,
         amount_paid
       }),
     }).then((response) => {
       setIsLoading(false);
       if (response.ok) {
         response.json().then((data) => {
           console.log(data);
           onAddingReceipt(data);

           navigate(`/receipts/${id}`);
           setErrors([]);
         });

         // navigate("/dashboard");
       } else {
         response.json().then((err) => setErrors(err.errors));
       }
     });
   }
  
  return (
    <>
      <Box m="20px" className="receiptTable">
        <div className="addReceipt">
          <button
            type="button"
            className="btn btn-primary my-4"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            + Receipt
          </button>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Receipt
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="addtenant-pg">
                  <form className="adding-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter tenant name..."
                        value={receipt_no}
                        onChange={(e) => setReceiptNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Age</label>
                      <input
                        type="number{ >= 18}"
                        id="age"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter tenant age..."
                        value={sender_name}
                        onChange={(e) => setSender(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Gender</label>
                      <input
                        type="ext"
                        id="gender"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter tenant gender..."
                        value={setReceiver}
                        onChange={(e) => setReceiver(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Contact</label>
                      <input
                        type="tel"
                        id="contact"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter tenant contact..."
                        value={nature_of_goods}
                        onChange={(e) => setNatureGoods(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Room</label>
                      <input
                        type="text"
                        id="room-no"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter tenant room..."
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Room</label>
                      <input
                        type="text"
                        id="room-no"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter tenant room..."
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Room</label>
                      <input
                        type="text"
                        id="amount"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter price..."
                        value={amount_paid}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">
                        {isLoading ? "Loading..." : "Add"}{" "}
                        <i className="fa fa-sign-in" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="form-group">
                      {errors.map((err) => (
                        <div key={err}>{err}</div>
                      ))}
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
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
