import React, {useState} from 'react'
import "./OrderForm.css";
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel'

function OrderForm() {

  const [senderName, setSenderName] = useState('')
  const [receiverName, setReceiverName] = useState('')
  const [natureOfGoods, setNatureOfGoods] = useState('')
  // const [amountPaid, setAmountPaid] = useState('')
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/orders',{
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          senderName,
          receiverName,
          natureOfGoods,
          // amountPaid,
          pickup,
          destination,
        }
      ),
    })
    .then((r) => r.json())
    navigate('/ordercard')
  }

  return(
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <Box
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            style={{"background":"white",
            "padding":'20px',
            "marginTop":"10px",
            "marginBottom": '30px',
            "width":'100%',
            }}
          >
          <FormLabel
            style={{"justifyContent": 'center',
              "alignItems":"center",
              "display": "flex",
              "fontWeight": "bolder",
              "color": "black",
              "fontSize": "20px"
            }}
          >
            Place your order
          </FormLabel>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Sender name"
              value={senderName}
              onChange={(e)=>setSenderName(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Receiver name"
              value={receiverName}
              onChange={(e)=>setReceiverName(e.target.value)}
            />
            </div>
            <div>
              <TextField
              
                id="outlined-password-input"
                label="Nature of goods"
                value={natureOfGoods}
                onChange={(e)=>setNatureOfGoods(e.target.value)}
              />
              {/* <TextField
                id="outlined-read-only-input"
                label="Amount paid"
                value={amountPaid}
                // onChange={(e)=>setAmountPaid(e.target.value)}
              /> */}
            </div>
            <div>
              <TextField
                id="outlined-password-input"
                label="Pickup"
                value={pickup}
                onChange={(e)=>setPickup(e.target.value)}
              />
              <TextField
                id="outlined-read-only-input"
                label="Destination"
                value={destination}
                onChange={(e)=>setDestination(e.target.value)}
              />
            </div>
            <div>
              <Button type="submit" variant="contained" style={{
                "margin":"18px"
              }}>Make Order</Button>
            </div>
          </Box>
      </form>
    </div>
  )

}

export default OrderForm;






