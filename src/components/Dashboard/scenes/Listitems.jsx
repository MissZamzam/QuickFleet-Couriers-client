import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentsIcon from '@mui/icons-material/Payments';
import Receipts from '../../Receipts/Receipts';
import Orders from '../../Orders/Orders';
import { Link } from 'react-router-dom';
import Deliveries from './Deliveries';




export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocalShippingIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Deliveries" /> */}
      {/* <Link to="/deliveries" element={<Deliveries/>}>Deliveries</Link> */}
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Orders" /> */}
      <Link to="/orders" element={<Orders/>}>Orders</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PaymentsIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Receipts" element={<Receipts/>}/> */}
      <Link to="/receipts" element={<Receipts/>}>Receipts</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        
      </ListItemIcon>
      {/* <ListItemText primary="Customers" /> */}
      {/* <Link to="/users" element={<Login/>}>Customers</Link> */}
    </ListItemButton>
    
    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
   
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        
      </ListItemIcon>
      
      
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
       
      </ListItemIcon>
     
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        
      </ListItemIcon>
     
    </ListItemButton>
  </React.Fragment>
);