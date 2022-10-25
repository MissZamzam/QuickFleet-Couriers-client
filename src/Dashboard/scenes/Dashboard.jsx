// import * as React from "react";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Receipts from "../../components/Receipts/Receipts";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GroupIcon from "@mui/icons-material/Group";
import Orders from "../../components/Orders/Orders";
import { Link } from "react-router-dom";
import Services from "../../components/Service/Services";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import "./Dashboard.css"


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard ( )
{
  const [user, setUser] = useState(null)
  const [error, setErrors] = useState([])
  const navigate = useNavigate(); 
  
  function handleLogoutClick ()
  {
    fetch("/api/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setUser(null);
        navigate("/");
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
    //  alert("delete was successful");
  }
  

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar className="toolbar">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <div className="menucomps">
              <Typography variant="h6" noWrap component="div">
                <em>Admin Dashboard</em>
              </Typography>
              <Typography variant="h6" noWrap component="div">
                <button className="signoutBtn" onClick={ handleLogoutClick }>Sign Out</button>
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          {/* <Divider /> */}
          <List>
            {[
              <Link to="/dashboard" element={<Dashboard/>}>Dashbord</Link>,
              <Link to="/services" element={<Services/>}>Deliveries</Link>,
              // <Link to="/deliveries" element={<Deliveries/>}>Deliveries</Link>,
              <Link to="/orders" element={<Orders/>}>Orders</Link>,
              <Link to="/receipts" element={<Receipts/>}>Receipts</Link>,
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {(() => {
                      if (index === 0) {
                        return <DashboardCustomizeIcon />;
                      } else {
                        return <LocalShippingIcon/>;
                      }
                    })()}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="maindash">
          <DrawerHeader />
          <div className="typographs">
            {/* <Typography className="card container dashcards dashcard1">
              <div>
                 <Deliveries/> 
                 <Services/> 
              <LocalShippingIcon className="localshippingicon" />
                <h3 className="cardinfo">Deliveries</h3>
                <p>Total Number Of Deliveries</p>
              </div>
            </Typography> */}
            {/* <Typography className="card container dashcards dashcard2">
             <div>
                <GroupIcon className="tenanticon" />
                <h3 className="cardinfo">Orders</h3>
                <p>Total Number Of Orders</p>
              </div> 
            </Typography> */}
            {/* <Typography className="table container table3">
              <div>
                <Receipts/>  
               <PaymentsIcon className="payicon" />
                <h3 className="cardinfo">Receipts</h3>
                <p>A list of orders already Dispatched</p> 
              </div>
            </Typography>  */}
          </div>
        </Box>
      </Box>
      {/* <Button variant="outline" onClick={handleLogoutClick}>
        Logout
      </Button> */}
    </>
  );
}

