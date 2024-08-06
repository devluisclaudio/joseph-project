import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Logo from "@/app/assets/logo.svg";
import SvgIcon from "@mui/material/SvgIcon";
import { Typography } from "@mui/material";
import styles from "./sidebar.module.css";

interface iSidebar {
  openMenu: boolean;
  onClose: (bool: boolean) => void;
}

export default function Sidebar({ openMenu, onClose }: iSidebar) {
  const drawerWidth = 240;
  const [itemSelected, setItemSelected] = React.useState(0);
  const listMenu = [
    {
      name: "Dashboard",
      icon: true,
    },
    {
      name: "Menu 1",
      icon: false,
    },
    {
      name: "Menu 2",
      icon: false,
    },
  ];
  const DrawerList = (
    <Box sx={{ width: 240 }} role="presentation" onClick={() => onClose(false)}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          textAlign: "center",
          padding: 2,
          fontFamily: "inter",
        }}
      >
        <SvgIcon component={Logo} sx={{width: 19, alignSelf: 'center'}}/>
        Joseph Project
      </Typography>
      <Divider />
      <List>
        {listMenu.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            className={itemSelected === index ? styles.selected : styles.list}
          >
            <ListItemButton onClick={() => setItemSelected(index)}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                {item.icon && <WidgetsIcon />}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        open={openMenu}
        onClose={() => onClose(false)}
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#00183C",
            color: "#fff",
            overflow: "hidden",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
