import Logo from "../assets/react.svg";
import {
  AppBar,
  Box,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import { navLinks } from "../Constants/NavLinks";
import { useState } from "react";
import { Menu } from "@mui/icons-material";

function Navbar() {
  //States
  const [navbar, setnavbar] = useState(false);
  //Nav Button Functions
  const handleOpenDrawer = () => {
    setnavbar(true);
  };
  const handleCloseDrawer = () => {
    setnavbar(false);
  };

  return (
    <Box>
      <AppBar component="nav" position="fixed">
        <Toolbar>
          <Box
            sx={{
              marginLeft: "2px",
              color: "white",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              aria-label="Icon Button"
              color="inherit"
              onClick={handleOpenDrawer}
            >
              <Menu />
            </IconButton>
          </Box>
          <Box display={"flex"} marginX={1}>
            <Typography variant="h5" color="initial" marginX={2}>
              <img src={Logo} alt="Logo" />
            </Typography>
            <Typography variant="h5" alignContent={"center"} color="inherit">
              Sleep-Up
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Tabs textColor="inherit" indicatorColor="secondary">
              {navLinks.map((redirect) => (
                <Tab
                  sx={{ borderRadius: "0.5rem" }}
                  label={redirect.navTitle}
                  href={redirect.href}
                  key={redirect.id}
                />
              ))}
            </Tabs>
          </Box>
          <Button
            sx={{ marginLeft: "auto", display: { xs: "none", md: "flex" } }}
            variant="contained"
          >
            Login
          </Button>
          <Button
            sx={{ marginLeft: "10px", display: { xs: "none", md: "flex" } }}
            variant="contained"
          >
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={navbar} onClose={handleCloseDrawer}>
        <Box sx={{ width: "70vw" }}>
          <List>
            {navLinks.map((direct) => (
              <ListItem key={direct.id} disablePadding>
                <ListItemButton>
                  <ListItemText primary={direct.navTitle} />
                </ListItemButton>
              </ListItem>
            ))}
            <Divider />

            <ListItemButton>
              <ListItemText primary="Login" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="SignUp" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
