import { useState, useEffect } from "react";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
// import Receipt from "./Receipt"
import Receipt from "./Receipt";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Button, Stack } from "@mui/material";
import "./Receipts.css";

function Receipts({ onAddingReceipt }) {

  const [receipts, setReceipts] = useState([]);
  const [receipt_no, setReceiptNumber] = useState("");
  const [sender_name, setSender] = useState("");
  const [receiver_name, setReceiver] = useState("");
  const [nature_of_goods, setNatureGoods] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [amount_paid, setAmount] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [receipt, setReceipt] = useState({})
  const { id } = useParams();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const columns = [
    { field: "id", headerName: "ID", width: 50 },

    { field: "receipt_no", headerName: "Receipt.No", width: 170 },

    {
      field: "sender_name",
      headerName: "Sender Name",
      width: 170,
    },
    {
      field: "receiver_name",
      headerName: "Receiver Name",
      width: 170,
    },
    {
      field: "nature_of_goods",
      headerName: "Nature Of Goods",
      type: "singleSelect",
      valueOptions: ["Flamable", "Perishable", "Fragile"],
      editable: true,
      width: 125,
    },
    {
      field: "pickup",
      headerName: "PickUp",
      width: 100,
    },
    {
      field: "destination",
      headerName: "Destination",
      width: 100,
    },
    {
      field: "amount_paid",
      headerName: "Amount Paid",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      align: "center",
      sortable: false,

      renderCell: (params) => {
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
  }, []);

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
        amount_paid,
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
      <div className="addReceipt">
        <button
          onClick={handleOpen}
          type="button"
          className="btn btn-primary my-4"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          + Receipt
        </button>
      </div>
      <Box m="20px" className="receiptTable">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
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
                      <label htmlFor="exampleInputEmail1">Receipt.No</label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter receipt number..."
                        value={receipt_no}
                        onChange={(e) => setReceiptNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Sender</label>
                      <input
                        type="number{ >= 18}"
                        id="age"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter sender name..."
                        value={sender_name}
                        onChange={(e) => setSender(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Receiver</label>
                      <input
                        type="ext"
                        id="gender"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter receiver name..."
                        value={receiver_name}
                        onChange={(e) => setReceiver(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        Nature of Goods
                      </label>
                      <input
                        type="tel"
                        id="contact"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter nature of goods..."
                        value={nature_of_goods}
                        onChange={(e) => setNatureGoods(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Pickup</label>
                      <input
                        type="text"
                        id="room-no"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter pickup place.."
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Destination</label>
                      <input
                        type="text"
                        id="room-no"
                        autoComplete="off"
                        className="form-control"
                        placeholder="enter destination..."
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Amount</label>
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
                    {/* <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Deliveries</label>
                    <input
                      type="text"
                      id="amount"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter delivery id..."
                      value={delivery_id}
                      onChange={(e) => setDelivery(e.target.value)}
                    />
                  </div> */}
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
                  onClick={handleClose}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </Modal>
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
        >
          {/* <Typography
            variant="h3"
            component="h3"
            sx={{ textAlign: "center", mt: 3, mb: 3 }}
          >
            Manage Receipts
          </Typography> */}

          <DataGrid
            rows={receipts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </>
  );
}
export default Receipts;



// import { useState, useEffect } from "react";
// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import { Link, useNavigate } from "react-router-dom";
// // import Receipt from "./Receipt"
// import Receipt from "./Receipt";
// import { useParams } from "react-router-dom";
// import "./Receipts.css";

// function Receipts({ onAddingReceipt }) {
//   const [receipts, setReceipts] = useState([]);
//   const [receipt_no, setReceiptNumber] = useState("");
//   const [sender_name, setSender] = useState("");
//   const [receiver_name, setReceiver] = useState("");
//   const [nature_of_goods, setNatureGoods] = useState("");
//   const [pickup, setPickup] = useState("");
//   const [destination, setDestination] = useState("");
//   const [ amount_paid, setAmount ] = useState( "" );
//   const [delivery_id, setDelivery] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [ isLoading, setIsLoading ] = useState( false );
//    const [open, setOpen] = React.useState(false);
//    const handleOpen = () => setOpen(true);
//    const handleClose = () => setOpen(false);
//   // const [receipt, setReceipt] = useState({})
//   const { id } = useParams();
//   const navigate = useNavigate();

//     useEffect(() => {
//       getReceipts();
//     }, []);

//     async function getReceipts() {
//       let result = await fetch("http://127.0.0.1:3000/receipts");
//       result = await result.json();
//       console.log(result);
//       setReceipts(result);
//     }

//     function handleSubmit(e) {
//       e.preventDefault();
//       setErrors([]);
//       setIsLoading(true);
//       fetch("http://127.0.0.1:3000/receipts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           receipt_no,
//           sender_name,
//           receiver_name,
//           nature_of_goods,
//           pickup,
//           destination,
//           amount_paid,
//         }),
//       }).then((response) => {
//         setIsLoading(false);
//         if (response.ok) {
//           response.json().then((data) => {
//             console.log(data);
//             onAddingReceipt(data);

//             navigate(`/receipts/${id}`);
//             setErrors([]);
//           });

//           // navigate("/dashboard");
//         } else {
//           response.json().then((err) => setErrors(err.errors));
//         }
//       });
//     }

//   return (
//     <div>
//       <div className="addReceipt">
//         <button
//           onClick={handleOpen}
//           type="button"
//           className="btn btn-primary my-4"
//           data-toggle="modal"
//           data-target="#exampleModal"
//         >
//           + Receipt
//         </button>
//       </div>
//       {/* <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal> */}

//       {/* <button
//         onClick={handleOpen}
//         type="button"
//         className="btn btn-primary my-4"
//         data-toggle="modal"
//         data-target="#exampleModal"
//       >
//         + Receipt
//       </button> */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Add Receipt
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="addtenant-pg">
//                 <form className="adding-form" onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Receipt.No</label>
//                     <input
//                       type="text"
//                       id="name"
//                       autoComplete="off"
//                       className="form-control"
//                       placeholder="enter receipt number..."
//                       value={receipt_no}
//                       onChange={(e) => setReceiptNumber(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Sender</label>
//                     <input
//                       type="number{ >= 18}"
//                       id="age"
//                       autoComplete="off"
//                       className="form-control"
//                       placeholder="enter sender name..."
//                       value={sender_name}
//                       onChange={(e) => setSender(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Receiver</label>
//                     <input
//                       type="ext"
//                       id="gender"
//                       autoComplete="off"
//                       className="form-control"
//                       placeholder="enter receiver name..."
//                       value={receiver_name}
//                       onChange={(e) => setReceiver(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Nature of Goods</label>
//                     <input
//                       type="tel"
//                       id="contact"
//                       autoComplete="off"
//                       className="form-control"
//                       placeholder="enter nature of goods..."
//                       value={nature_of_goods}
//                       onChange={(e) => setNatureGoods(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Pickup</label>
//                     <input
//                       type="text"
//                       id="room-no"
//                       autoComplete="off"
//                       className="form-control"
//                       placeholder="enter pickup place.."
//                       value={pickup}
//                       onChange={(e) => setPickup(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Destination</label>
//                     <input
//                       type="text"
//                       id="room-no"
//                       autoComplete="off"
//                       className="form-control"
//                       placeholder="enter destination..."
//                       value={destination}
//                       onChange={(e) => setDestination(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Amount</label>
//                     <input
//                       type="text"
//                       id="amount"
//                       autoComplete="off"
//                       className="form-control"
//                       placeholder="enter price..."
//                       value={amount_paid}
//                       onChange={(e) => setAmount(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Deliveries</label>
//                     <input
//                       type="text"
//                       id="amount"
//                       autoComplete="off"
//                       className="form-control"
//                       placeholder="enter delivery id..."
//                       value={delivery_id}
//                       onChange={(e) => setDelivery(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <button type="submit" className="btn btn-primary">
//                       {isLoading ? "Loading..." : "Add"}{" "}
//                       <i className="fa fa-sign-in" aria-hidden="true"></i>
//                     </button>
//                   </div>
//                   <div className="form-group">
//                     {errors.map((err) => (
//                       <div key={err}>{err}</div>
//                     ))}
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//                 onClick={handleClose}
//               >
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary">
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </Modal>
//       <TableContainer component={Paper}>
//         <Table aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Id</TableCell>
//               <TableCell align="right">Receipt.No</TableCell>
//               <TableCell align="right">Sender</TableCell>
//               <TableCell align="right">Receiver</TableCell>
//               <TableCell align="right">Nature of Goods</TableCell>
//               <TableCell align="right">PickUp</TableCell>
//               <TableCell align="right">Destination</TableCell>
//               <TableCell align="right">Amount Paid</TableCell>
//               <TableCell align="right">Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {receipts.map((row) => (
//               <TableRow
//                 key={row.id}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.id}
//                 </TableCell>
//                 <TableCell align="right">{row.receipt_no}</TableCell>
//                 <TableCell align="right">{row.sender_name}</TableCell>
//                 <TableCell align="right">{row.receiver_name}</TableCell>
//                 <TableCell align="right">{row.nature_of_goods}</TableCell>
//                 <TableCell align="right">{row.pickup}</TableCell>
//                 <TableCell align="right">{row.destination}</TableCell>
//                 <TableCell align="right">{row.amount_paid}</TableCell>
//                 <TableCell align="right">
//                   <Link
//                     to={`/receipts/${row.id}`}
//                     onClick={() => <Receipt key={row.id} />}
//                   >
//                     <button className="viewBtn">View More</button>
//                   </Link>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default Receipts;
