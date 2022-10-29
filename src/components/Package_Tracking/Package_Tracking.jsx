import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Receipts from "../Receipts/Receipts";
import "./Package_Tracking.css";

function Package_Tracking() {
  const [ receipts, setReceipts ] = useState( [] );
  const [filteredData, setFilteredData] = useState([]);
  // const [wordEntered, setWordEntered] = useState("");
  // const [searchReceipts, setSearchReceipts] = useState([]);

  useEffect( () =>
  {
    fetch( "http://127.0.0.1:3000/receipts" )
      .then( response => response.json() )
      .then( ( receipts ) =>
      {
        console.log( receipts );
        setReceipts(receipts)
    })
    
  }, [] )
  
  function handleFilter (event)
  {
    event.preventDefault();

    const searchWord = event.target.value;

    const newFilter = receipts.filter( ( receipt ) =>
    {
      return receipt.receipt_no.toLowerCase().includes( searchWord.toLowerCase() )
    } );
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData( newFilter );
      console.log(newFilter);
    }

    // setFilteredData( newFilter );
   
  }
  
  return (
    <div className="container-fluid bg">
      <div className="receipt-form">
        <form className="receiptNo-form">
          <h5>Track Your Package Delivery </h5>
          <p>Enter the receipt number that you got from our offices</p>
          <div className="form-group">
            <div>
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                placeholder="enter your receipt.no..."
                onChange={handleFilter}
                // value={receipt_no}
              />
              <div className="searchIcon">
                <SearchIcon/> 
            </div>
            </div>
            { filteredData.length != 0 && (
              <div className="dataResults">
                { filteredData.slice(0, 3).map( ( receipt, index ) =>
                {
                  return (
                    <a className="dataItem" href="/receipts" target="blank">
                      {/* { receipt.receipt_no } */ }
                      <p>{ receipt.receipt_no }</p>
                    </a>
                  );
                } ) }
              </div>
            )}

            {/* <i className="fa fa-search searchIcon" aria-hidden="true"></i> */}
          </div>
          <div className=" container package-receipt">
            <div className="receipt-details">
              {/* <h5>{singleReceipt.receipt_no}</h5> */}
              <h5>Quick Fleet</h5>
              <p>#KEN23454634</p>
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

export default Package_Tracking;

// import React, { useState, useEffect } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import CloseIcon from "@mui/icons-material/Close";
// import "./Package_Tracking.css";

// function Package_Tracking({receipts}) {
//   const [receipt_no, setReceiptNumber] = useState("");
//   // const [singleReceipt, setSingleReceipt] = useState({
//   //   receipt_no: "",
//   //   sender_name: "",
//   //   receiver_name: "",
//   //   nature_of_goods: "",
//   //   pickup: "",
//   //   destination: "",
//   //   amount_paid: 0,
//   // });

//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");
//   const [{ data: receipt, error, status }, setReceipt] = useState({
//     data: {},
//     error: "",
//     status: "pending",
//   });
//   // console.log(singleReceipt.receipt_no);

//   useEffect(() => {
//     fetch("http://127.0.0.1:3000/receipts").then((response) => {
//       if (response.ok) {
//         response.json().then((receipts) => {
//           console.log(receipts);

//           // receipts.forEach((receipt) => {
//           //   if (receipt.receipt_no === receipt_no) {
//           //     // console.log(receipt);
//           //     setSingleReceipt({
//           //       receipt_no: receipt.receipt_no,
//           //       sender_name: receipt.sender_name,
//           //       receiver_name: receipt.receiver_name,
//           //       nature_of_goods: receipt.nature_of_goods,
//           //       pickup: receipt.pickup,
//           //       destination: receipt.destination,
//           //       amount_paid: receipt.amount_paid,
//           //     });
//           //   }
//           // });
//           // setReceipts([...receipts, receipt])
//           setReceipt({ data: receipt, error: "", status: "resolved" });
//         });
//       } else {
//         response.json().then((err) =>
//           setReceipt({
//             data: "not found",
//             error: err.error,
//             status: "rejected",
//           })
//         );
//       }
//     });
//   }, [receipt_no]);

// const handleFilter = (event) => {
//   const searchWord = event.target.value;
//   setWordEntered( searchWord );

//   const newFilter = receipts?.filter( ( receipt ) =>
//   {
//     console.log(receipt);
//     return receipt.receipt_no.toLowerCase().includes( searchWord.toLowerCase() );
//   } );

//   if (searchWord === "") {
//     setFilteredData([]);
//   } else {
//     setFilteredData(newFilter);
//   }
// };
//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };

//   return (
//     <div className="container-fluid bg">
//       <div className="receipt-form">
//         <form className="receiptNo-form">
//           <h5>Track Your Package Delivery </h5>
//           <p>Enter the receipt number that you got from our offices</p>
//           <div className="form-group">
//             <input
//               type="text"
//               id="receipt_no"
//               autoComplete="off"
//               className="form-control"
//               placeholder="enter your receipt.no..."
//               value={wordEntered}
//               onChange={handleFilter}
//             />
//             <div className="searchIcon">
//               {filteredData?.length === 0 ? (
//                 <SearchIcon key={receipt.id}/>
//               ) : (
//                 <CloseIcon id="clearBtn" onClick={clearInput} />
//               )}
//               {/* <i className="fa fa-search searchIcon" aria-hidden="true"></i> */}
//             </div>
//           </div>
//           {filteredData?.length != 0 && (
//             <div className="dataResult">
//               { filteredData?.slice( 0, 15 ).map( ( receipt ) =>
//               {
//                 console.log(receipt);
//                 return (
//                   <a className="dataItem" href={receipt.link} target="blank">
//                     <p>{receipt.receipt_no} </p>
//                   </a>
//                 );
//               })}
//             </div>
//           )}
//           <div className=" container package-receipt">
//             <div className="receipt-details">
//               {/* <h5>{singleReceipt.receipt_no}</h5> */}
//               <h5>Quick Fleet</h5>
//               <p>#KEN23454634</p>
//             </div>
//             <div>
//               <button className="receiptBtn">On Process</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Package_Tracking;

// import React, { useState, useEffect } from 'react';
// import SearchIcon from "@mui/icons-material/Search";
// import CloseIcon from "@mui/icons-material/Close";
// import './Package_Tracking.css'

// function Package_Tracking ()
// {
//   const [ receipt_no, setReceiptNumber ] = useState( "" );
//   const [ singleReceipt, setSingleReceipt ] = useState( {
//     receipt_no: "",
//     sender_name: "",
//     receiver_name: "",
//     nature_of_goods: "",
//     pickup: "",
//     destination: "",
//     amount_paid: 0,
//   } );
//   const [ { data: receipt, error, status }, setReceipt ] = useState( {
//     data: {},
//     error: "",
//     status: "pending",
//   } );
//   console.log(singleReceipt.receipt_no);

//   useEffect(() => {
//     fetch("http://127.0.0.1:3000/receipts").then((response) => {
//       if (response.ok) {
//         response.json().then((receipts) => {
//           console.log( receipts );

//           receipts.forEach( ( receipt ) =>
//           {
//             if ( receipt.receipt_no === receipt_no )
//             {
//               // console.log(receipt);
//               setSingleReceipt( {
//                 receipt_no: receipt.receipt_no,
//                 sender_name: receipt.sender_name,
//                 receiver_name: receipt.receiver_name,
//                 nature_of_goods: receipt.nature_of_goods,
//                 pickup: receipt.pickup,
//                 destination: receipt.destination,
//                 amount_paid: receipt.amount_paid,
//               });
//             }
//           });
//           // setReceipts([...receipts, receipt])
//           setReceipt({ data: receipt, error: "", status: "resolved" });
//         });
//       }
//       else
//       {
//         response.json().then((err) =>
//           setReceipt({
//             data: "not found",
//             error: err.error,
//             status: "rejected",
//           })
//         );
//       }
//     });
//   }, [ receipt_no ] );

//   // useEffect( () =>
//   // {
//   //   receipts.forEach( ( receipt ) =>
//   //   {
//   //     console.log(receipts);
//   //   })
//   // }, [])

//   return (
//     <div className="container-fluid bg">
//       <div className="receipt-form">
//         <form className="receiptNo-form">
//           <h5>Track Your Package Delivery </h5>
//           <p>Enter the receipt number that you got from our offices</p>
//           <div className="form-group">
//             <input
//               type="text"
//               id="receipt_no"
//               autoComplete="off"
//               className="form-control"
//               placeholder="enter your receipt.no..."
//               value={receipt_no}
//               onChange={(e) => setReceiptNumber(e.target.value)}
//             />
//             <i className="fa fa-search searchIcon" aria-hidden="true"></i>
//           </div>
//           <div className=" container package-receipt">
//               <div className="receipt-details">
//                 <h5>{singleReceipt.receipt_no}</h5>
//                 <h5>Quick Fleet</h5>
//                 <p>#KEN23454634</p>
//               </div>
//             <div>
//               <button className="receiptBtn">On Process</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Package_Tracking
