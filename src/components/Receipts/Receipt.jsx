import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Receipt.css";

function Receipt ()
{
     const [{ data: receipt, error, status }, setReceipt] = useState({
       data: {},
       error: "",
       status: "pending",
     });
    const { id } = useParams();

    // useEffect( () =>
    // {
    //     fetch( "/receipt/${id}" )
    //     .then(res=>res.json())
    //     .then(data=>console.log(data));
    // },[])
    

useEffect(() => {
  fetch(`http://127.0.0.1:3000/receipts/${id}`).then((response) => {
    if (response.ok) {
      response.json().then((receipt) => {
        // console.log(receipt);
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
}, [id]);

    return (
        <h1>Receipt</h1>
    );
}
export default Receipt;
