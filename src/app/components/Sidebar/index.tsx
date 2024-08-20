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
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import Logo from "@/app/assets/logo.svg";
import SvgIcon from "@mui/material/SvgIcon";
import { Typography } from "@mui/material";
import styles from "./sidebar.module.css";
import Link from "next/link";

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
      icon: WidgetsIcon,
      link: "/",
    },
    {
      name: "Training Dataset A.I",
      icon: DisplaySettingsIcon,
      link: "https://trainingai.josephproject.com.br",
    },
    {
      name: "API & Data",
      icon: StorageIcon,
      link: "/api-data",
    }
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <SvgIcon component={Logo} sx={{ width: 19, height: 19, marginRight: 1 }} />
          Joseph Project
        </Link>
      </Typography>
      <Divider />
      <List>
        {listMenu.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            className={itemSelected === index ? styles.selected : styles.list}
          >
            {item.name === "Training Dataset A.I" ? (
              <Link href={item.link} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <SvgIcon
                        component={item.icon}
                        sx={{ width: 19, alignSelf: "center" }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </a>
              </Link>
            ) : (
              <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <SvgIcon
                      component={item.icon}
                      sx={{ width: 19, alignSelf: "center" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            )}
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
