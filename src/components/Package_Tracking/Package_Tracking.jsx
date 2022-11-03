import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./Package_Tracking.css";

function Package_Tracking() {
  const [ orders, setOrders ] = useState( [] );
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect( () =>
  {
    fetch( "/orders" )
      .then( response => response.json() )
      .then( ( orders ) =>
      {
        console.log( orders );
        setOrders(orders)
    })
    
  }, [] )
  
  function handleFilter (event)
  {
    event.preventDefault();

    const searchWord = event.target.value;
    setWordEntered(searchWord)

    const newFilter = orders.filter( ( order ) =>
    {
      return order.order_id.toLowerCase().includes( searchWord.toLowerCase() )
    } );
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData( newFilter );
      console.log(newFilter);
    }

    // setFilteredData( newFilter ); 
  }
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };
  
  return (
    <div className="container-fluid bg trackings">
      <div className="order-form">
        <form className="orderNo-form">
          <h5>Track Your Package Delivery </h5>
          <p>Enter the order number that you got from our offices</p>
          <div className="form-group">
            <div>
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                placeholder="enter your order.no..."
                value={wordEntered}
                onChange={handleFilter}
              />
              <div className="searchIcon">
                {filteredData.length === 0 ? (
                  <SearchIcon />
                ) : (
                  <CloseIcon className="clearBtn" onClick={clearInput} />
                )}
              </div>
            </div>
            {filteredData.length != 0 && (
              <div className="dataResults">
                {filteredData.map((order, index) => {
                  return (
                    <a className="dataItem" href="/orders" target="blank">
                      {/* { order.order_no } */}
                      <p>{order.order_id}</p>
                    </a>
                  );
                })}
              </div>
            )}

            {/* <i className="fa fa-search searchIcon" aria-hidden="true"></i> */}
          </div>
          <div className=" container package-order">
            <div className="order-details">
              {/* <h5>{singleorder.order_no}</h5> */}
              <h5>Quick Fleet</h5>
              <p>#KEN23454634</p>
            </div>
            <div>
              <button className="orderBtn">On Process</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Package_Tracking;
