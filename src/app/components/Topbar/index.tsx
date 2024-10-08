import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Sidebar from "../Sidebar";
import { Badge } from "@mui/material";

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    light: true;
  }
}

interface iTopbar {
  open: boolean;
  drawerWidth: number;
  toggleDrawer: (bool: boolean) => void;
}

export default function Topbar({ open, drawerWidth, toggleDrawer }: iTopbar) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="light"
        sx={{
          ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(!open)}
          >
            {!open && <MenuIcon />}
            {open && <MenuOpenIcon />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {!open && "Joseph Project"}
          </Typography>
          <IconButton
            size="large"
            aria-label="account notify"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            sx={{ marginRight: 5 }}
          >
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar openMenu={open} onClose={() => toggleDrawer(false)} />
    </Box>
  );
}
