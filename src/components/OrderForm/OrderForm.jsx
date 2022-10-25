import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel'
import "./OrderForm.css"

export default function OrderForm() {
  return (
    <div className='form'>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        style={{"background":"white",
        "padding":'20px',
        "marginTop":"40px",
        "width":'41%',
        }}
      >
      <FormLabel
        style={{"justifyContent": 'center',
          "alignItems":"center",
          "display": "flex"
        }}
      >
        Place your order
      </FormLabel>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Sender name"
          />
          <TextField
            id="outlined-disabled"
            label="Receiver name"
          />
          <div>
            <TextField
              id="outlined-password-input"
              label="Nature of goods"
            />
            <TextField
              id="outlined-read-only-input"
              label="Amount paid"
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Pickup"
            />
            <TextField
              id="outlined-read-only-input"
              label="Destination"
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Delivery Id"
            />
            <Button variant="contained">Make Order</Button>
          </div>
        </div>
      </Box>
    </div>
  );
}





