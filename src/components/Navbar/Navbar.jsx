import axios from 'axios'
import { useEffect } from 'react'
// import bag from "../assets/svgs/bag.png"
import { UserContext } from '../../hooks/useContext'
import './Navbar.css'


const Navbar = ({setUsers, user}) => {

    const handleLogout = () =>{
        fetch("users/signout",{
            method:"DELETE"
        })
        .then((r) => {
            if (r.ok){
                setUsers(null)
            }
        })
    }

  return (
    <div class="mt-36">
          <nav class = "navbar navbar-expand-lg navbar-light fixed-top navbarr">
        <div class = "container">
            <a class = "navbar-brand d-flex justify-content-between align-items-center order-lg-0 spans" href="/">

                <span class = "text-uppercase fw-lighter ms-2 quick">Quick<span style={{color:"orange"}} class="fleet">Fleet</span></span>
            </a>

            <div class = "order-lg-2 nav-btns">

                { user ? (
                    <div class = "navbar-nav mx-auto text-center">
                    <button class = "btn position-relative" onClick={handleLogout}>
                        Logout
                    </button>


                    </div>
                ) : (
                    <>

                <button type = "button" class = "btn position-relative">
                    <a href="/login" style={{color:"white"}}><i class="fa-solid fa-user"></i></a>
                </button>

                    </>
                )}

            </div>

            <button class = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
                <span class = "navbar-toggler-icon"></span>
            </button>

            <div class = "collapse navbar-collapse order-lg-1" id = "navMenu">
                <ul class = "navbar-nav mx-auto text-center">
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-light" href = "/">home</a>
                    </li>
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-light" href = "/Service">Service</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </div>
  )
}

export default Navbar

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Link, NavLink } from 'react-router-dom';


// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = [
//     <NavLink>
//         Profile
//     </NavLink>,
//     <NavLink>
//         Account
//     </NavLink>,
//     <NavLink>
//         Logout
//     </NavLink>
// ];

// function Navbar({setUsers, user}) {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleLogout = () =>{
//     fetch("users/signout",{
//         method:"DELETE"
//     })
//     .then((r) => {
//         if (r.ok){
//             setUsers(null)
//         }
//     })
// }

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             <Link to="/">
//                 <span class = "text-uppercase fw-lighter ms-2 quick">Quick<span style={{color:"orange"}} class="fleet">Fleet</span></span>
//             </Link>
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             <Link to="/">
//                 <span class = "text-uppercase fw-lighter ms-2 quick">Quick<span style={{color:"orange"}} class="fleet">Fleet</span></span>
//             </Link>
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//                 { user ? (
//                     <div class = "navbar-nav mx-auto text-center">
//                     <button class = "btn position-relative" onClick={handleLogout}>
//                         Logout
//                     </button>
//                     </div>
//                 ) : (
//                     <>

//                 <button type = "button" class = "btn position-relative">
//                     <a href="/login" style={{color:"white"}}><i class="fa-solid fa-user"></i></a>
//                 </button>

//                     </>
//                 )}

//             <button class = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
//                 <span class = "navbar-toggler-icon"></span>
//             </button>

//             <div class = "collapse navbar-collapse order-lg-1" id = "navMenu">
//                 <ul class = "navbar-nav mx-auto text-center">
//                     <li class = "nav-item px-2 py-2">
//                         <a class = "nav-link text-uppercase text-light" href = "/">home</a>
//                     </li>
//                     <li class = "nav-item px-2 py-2">
//                         <a class = "nav-link text-uppercase text-light" href = "/Service">Service</a>
//                     </li>
//                 </ul>
//             </div>
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Navbar;

