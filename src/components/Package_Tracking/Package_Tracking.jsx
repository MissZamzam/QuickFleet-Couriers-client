import React, {useState} from 'react'
import './Package_Tracking.css'

function Package_Tracking ()
{
  const [receipt_no, setReceiptNumber] = useState("");
  return (
    <div className="container-fluid bg">
      <div className="receipt-form">
        <form className="receiptNo-form">
          <h5>Track Your Package Delivery </h5>
          <p>Enter the receipt number that you got from our offices</p>
          <div className="form-group">
            <input
              type="text"
              id="receipt_no"
              autoComplete="off"
              className="form-control"
              placeholder="enter your receipt.no..."
              value={receipt_no}
              onChange={(e) => setReceiptNumber(e.target.value)}
            />
            <i className="fa fa-search searchIcon" aria-hidden="true"></i>
          </div>
          <div className=" container package-receipt">
            <div className="house-details">
              {/* <img src={Image3} className="houseIcon"></img> */}
              <div className="receipt-details">
                <h5>Quick Fleet</h5>
                <p>#KEN23454634</p>
              </div>
            </div>
            <div>
              <button className="receiptBtn">On Process</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Package_Tracking
