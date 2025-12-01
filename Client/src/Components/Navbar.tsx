import {
  AppBar,
  Box,
  Toolbar,
  Drawer,
  IconButton,
  Tooltip,
  List,
  ListItemButton,
} from "@mui/material";
import BigLogo from "../assets/Logo/BigLogo.svg";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  // Drawer State
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleOpenDrawer = () => {
    setDrawerOpen(true);
  };
  const toggleCloseDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <Box>
      <AppBar position="static" sx={{ background: "primary.main" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box alignContent={"center"} display={"flex"} gap={2}>
            <IconButton aria-label="" onClick={toggleOpenDrawer}>
              <MenuIcon />
            </IconButton>
            <img src={BigLogo} alt="BNB Logo" />
          </Box>
          {/*  Links   */}
          <List disablePadding sx={{ display: "flex", gap: 2 }}>
            <ListItemButton>Home</ListItemButton>
            <ListItemButton>About</ListItemButton>
            <ListItemButton>Contact</ListItemButton>
          </List>
          <Box display={"flex"}>
            <Tooltip title="Theme" arrow>
              <IconButton onClick={toggleDarkMode}>
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
        <Drawer
          variant="temporary"
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleCloseDrawer}
        ></Drawer>
      </AppBar>
      <Outlet />
    </Box>
  );
}

export default Navbar;
