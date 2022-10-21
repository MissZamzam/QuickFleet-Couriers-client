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


import React from 'react'

function DeliveryForm() {
  return (
    <div>
        <div class="flex justify-center mb-4">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center mb-4">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center mb-4">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeliveryForm
