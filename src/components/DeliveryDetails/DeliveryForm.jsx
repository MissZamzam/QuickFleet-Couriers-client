// import React from 'react'
// import { Container, Grid, Typography, Box } from '@mui/material';
// import {useState, useEffect} from 'react';

// function DeliveryForm() {

//   const [dummy, setDummy] = useState([])

//   useEffect(() =>{
//     fetch('https://modern-aged-condor.glitch.me/books')
//     .then(res => res.json())
//     .then(data => setDummy(data))
//   })

//   return (
//     <div>
// <Container className="container" maxWidth="xl">
//     <Grid
//         container
//         direction="row"
//         justify="space-evenly"
//         alignItems="stretch"
//         spacing={2}
//     >
//         {
//             dummy.map(data => (
//                 <Grid item
//                       key={`GridItem-${data.id}`} xs={12} sm={6} md={4} lg={2} xl={1}
//                 >
//                     <Box
//                         display="flex"
//                         flexDirection="row"
//                         style={{height: '100%', backgroundColor: 'purple'}}
//                     >
//                         <Typography
//                             variant="h5"
//                             style={{flex:1, backgroundColor: 'red'}}
//                         >
//                             {dummy.title}
//                         </Typography>
//                     <Box
//                         display="flex"
//                         flexDirection="column"
//                         style={{height: '100%', backgroundColor: 'purple'}}
//                     >
//                         <Typography
//                             style={{backgroundColor: 'blue[600]'}}
//                         >
//                             Some text
//                         </Typography>
//                         <Typography
//                             style={{backgroundColor: 'blue[400]'}}
//                         >
//                             Some other text
//                         </Typography>
//                     </Box>
//                     </Box>
//                 </Grid>
//             ))
//         }
//     </Grid>
// </Container>
//     </div>
//   )
// }

// export default DeliveryForm


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';

// function DeliveryForm(props) {
//   const { sx, ...other } = props;
//   return (
//     <Box
//       sx={{
//         p: 1,
//         m: 1,
//         bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
//         color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
//         border: '1px solid',
//         borderColor: (theme) =>
//           theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
//         borderRadius: 2,
//         fontSize: '0.875rem',
//         fontWeight: '700',
//         ...sx,
//       }}
//       {...other}
//     />
//   );
// }

// DeliveryForm.propTypes = {
//   /**
//    * The system prop that allows defining system overrides as well as additional CSS styles.
//    */
//   sx: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
//     ),
//     PropTypes.func,
//     PropTypes.object,
//   ]),
// };

// export default function FlexShrink() {
//   return (
//     <div style={{ width: '100%' }}>
//       <Box
//         sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
//       >
//         <DeliveryForm sx={{ width: '100%' }}>DeliveryForm 1</DeliveryForm>
//         <DeliveryForm sx={{ flexShrink: 1 }}>DeliveryForm 2</DeliveryForm>
//         <DeliveryForm sx={{ flexShrink: 0 }}>DeliveryForm 3</DeliveryForm>
//       </Box>
//     </div>
//   );
// }


import React, {useState} from 'react';
import './DeliveryForm.css'
import TextField from '@mui/material/TextField';
import Image1 from '../Image/receiver.png' 
import Image2 from '../Image/instructions.png' 
import Image3 from "../Image/packagearrival.png"; 

function DeliveryForm() {

    const [receiverName, setReceiverName] = useState('')
    const [receiverContact, setReceiverContact] = useState('')
    const [pickupInstructions, setPickupInstructions] = useState('')
    const [deliveryInstructions, setDeliveryInstructions] = useState('')
    const [packageType, setPackageType] = useState('')
    const [packageDetails, setPackageDetails] = useState('')

  return (
    <div>
      <div class="flex justify-center mb-4 deliveryformCards">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <div className="deliveryformimg">
            <img
              class=" w-full h-28 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg deliveryImg"
              src={Image1}
              alt=""
            />
          </div>

          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Deliver To</h5>
            <form class="w-full max-w-sm">
              <div class="flex items-center py-2">
                <TextField
                  id="standard-basic"
                  label="Receiver Name"
                  value={receiverName}
                  variant="standard"
                  onChange={(e) => setReceiverName(e.target.value)}
                />
                {/* <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Receiver Name" aria-label="Receiver Name" /> */}
              </div>
              <div class="flex items-center py-2">
                <TextField
                  id="standard-basic"
                  label="Receiver Contact"
                  value={receiverContact}
                  variant="standard"
                  onChange={(e) => setReceiverContact(e.target.value)}
                />
                {/* <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Receiver Contact" aria-label="Receiver Contact" /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex justify-center mb-4">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <div className="deliveryformimg">
            <img
              class=" w-full h-28 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg deliveryImg"
              src={Image2}
              alt=""
            />
          </div>
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Instructions</h5>
            <form class="w-full max-w-sm">
              <div class="flex items-center py-2">
                <TextField
                  id="standard-basic"
                  label="Pickup Instructions"
                  value={pickupInstructions}
                  variant="standard"
                  onChange={(e) => setPickupInstructions(e.target.value)}
                />
                {/* <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Pickup Instructions" aria-label="Pickup Instructions" /> */}
              </div>
              <div class="flex items-center py-2">
                <TextField
                  id="standard-basic"
                  label="Delivery Instructions"
                  value={deliveryInstructions}
                  variant="standard"
                  onChange={(e) => setDeliveryInstructions(e.target.value)}
                />
                {/* <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Delivery Instructions" aria-label="Delivery Instructions" /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex justify-center mb-4">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <div className="deliveryformimg">
            <img
              class=" w-full h-28 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg deliveryImg"
              src={Image3}
              alt=""
            />
          </div>
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Package Details
            </h5>
            <form class="w-full max-w-sm">
              <div class="flex items-center py-2">
                <TextField
                  id="standard-basic"
                  label="Select Package Type"
                  value={packageType}
                  variant="standard"
                  onChange={(e) => setPackageType(e.target.value)}
                />
                {/* <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Select Package Type" aria-label="Package Type" /> */}
              </div>
              <div class="flex items-center py-2">
                <TextField
                  id="standard-basic"
                  label="Package Details"
                  value={packageDetails}
                  variant="standard"
                  onChange={(e) => setPackageDetails(e.target.value)}
                />
                {/* <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Package Details" aria-label="Package Details" /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Deliver Courier Now
      </button>
    </div>
  );
}

export default DeliveryForm
