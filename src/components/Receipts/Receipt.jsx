import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Receipt.css";

function Receipt() {
  const [{ data: receipt, error, status }, setReceipt] = useState({
    data: {},
    error: "",
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/receipts/${id}`).then((response) => {
      if (response.ok) {
        response.json().then((receipt) => {
          console.log(receipt);
          setReceipt({ data: receipt, error: "", status: "resolved" });
        });
        // console.log(receipt);
      } else {
        response.json().then((err) =>
          setReceipt({
            data: "not found",
            error: err.error,
            status: "rejected",
          })
        );
      }
    });
  }, [ id ] );
    
    function handleSubmitInvoice() {
      window.print();
    }

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <>
      <div className="restbody">
        <div className="container bg-darksalmon">
          <div className="card restcards" key={receipt.id}>
                      <div className="card-body">
                          <div className="applogo">
                              
                          </div>
              <h5 className="card-title text-center">
                Receipt: <em>{receipt.receipt_no}</em>
              </h5>
              <p className="card-text text-center">
                Sender: {receipt.sender_name}
              </p>
              <p className="card-text text-center">
                Receiver: {receipt.receiver_name}
              </p>
              <p className="card-text text-center">
                Nature of Goods: {receipt.nature_of_goods}
              </p>
              <p className="card-text text-center">
                Pickup: {receipt.pickup}
              </p>
              <p className="card-text text-center">
                Destination: {receipt.destination}
              </p>
              <p className="card-text text-center">
                Amount Paid: {receipt.amount_paid}
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary my-4 printBtn"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={handleSubmitInvoice}
        >
          Print <i className="fa fa-print" aria-hidden="true"></i>
        </button>
      </div>

      <h1>Receipt</h1>
    </>
  );
}
export default Receipt;
