import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Image5 from '../Image/logo.png'
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
    
    function handleSubmitReceipt() {
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
                <div>
                  <h4>
                    <strong>From,</strong>
                  </h4>
                  <p>Quick Fleet Courier Service</p>
                  <p>Nairobi, Kenya</p>
                  <p>quickfleet@yahoo.com</p>
                </div>
                <img src={Image5} />
              </div>
              <h5 className="card-title text-center">
                <em>Receipt</em>: <strong>{receipt.receipt_no}</strong>
              </h5>
              <p className="card-text text-center">
                <em>Sender</em>: <strong> {receipt.sender_name}</strong>
              </p>
              <p className="card-text text-center">
                <em>Receiver</em>: <strong>{receipt.receiver_name}</strong>
              </p>
              <p className="card-text text-center">
                <em>Nature of Goods</em>:{" "}
                <strong>{receipt.nature_of_goods}</strong>
              </p>
              <p className="card-text text-center">
                <em>Pickup</em>: <strong>{receipt.pickup}</strong>
              </p>
              <p className="card-text text-center">
                <em>Destination</em>: <strong>{receipt.destination}</strong>
              </p>
              <p className="card-text text-center">
                <em>Amount Paid</em>: <strong>{receipt.amount_paid}</strong>
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary my-4 printBtn"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={handleSubmitReceipt}
        >
          Print <i className="fa fa-print" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
}
export default Receipt;
