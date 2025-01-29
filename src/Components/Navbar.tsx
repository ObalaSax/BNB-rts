import { Home } from "@mui/icons-material";
import Logo from "../assets/react.svg";
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

function Navbar() {
  return (
    <AppBar component="nav" position="fixed">
      <Toolbar>
        <Box>
          <Typography variant="h5" color="initial">
            <img src={Logo} alt="Logo" />
          </Typography>
        </Box>
        <Box display={"flex"}>
          <List>
            <ListItem
              disablePadding
              sx={{
                border: "1px solid white",
                marginX: "2px",
                borderRadius: "5px",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
