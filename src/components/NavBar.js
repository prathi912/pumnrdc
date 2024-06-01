import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from './logo.svg';
import { HiOutlineMenu} from 'react-icons/hi';

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ScienceIcon from '@mui/icons-material/Science';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/"
    },
    {
      text: "Services",
      icon: <ScienceIcon />,
      path: "./pricing"
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "/about"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact"
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
      <Link to="/">
        <img src={Logo} alt="PU Micro-Nano R&D Centre" className="logo" />
      </Link>
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/pricing">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="primary-button">
          <Link to="/Login" style={{ color: 'inherit', textDecoration: 'none' }}>Booking</Link>
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineMenu onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
