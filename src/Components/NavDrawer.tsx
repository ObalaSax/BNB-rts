import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { navLinks } from "../Constants/NavLinks";

function NavDrawer() {
  return (
    <Drawer open={false} sx={{ width: "240px" }}>
      <List>
        {navLinks.map((redirect) => (
          <ListItem key={redirect.id}>
            <ListItemText primary={redirect.navTitle} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default NavDrawer;
