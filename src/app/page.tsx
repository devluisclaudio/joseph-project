"use client";
import Topbar from "@/app/components/Topbar";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import React from "react";
import MenuIconLabel from "./components/MenuIconLabel";
import LabelTopHome from "./components/LabelTopHome";
import LabelBotsHome from "./components/LabelBotsHome";
import CardsBots from "./components/CardsBots";
import InformationsHome from "./components/InformationsHome";

export default function Home() {
  const [open, setOpen] = React.useState(true);
  const drawerWidth = 240;

  const toggleDrawer = (newOpen: boolean) => {
    console.log(newOpen);
    setOpen(newOpen);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Topbar
          open={open}
          drawerWidth={drawerWidth}
          toggleDrawer={toggleDrawer}
        />
        <Box
          sx={{
            flexGrow: 1,
            ...(open && {
              width: `calc(100% - ${drawerWidth}px)`,
              marginLeft: `${drawerWidth}px`,
            }),
          }}
        >
          <MenuIconLabel />
          <LabelTopHome />
          <InformationsHome />
          <LabelBotsHome />
          <CardsBots />
        </Box>
      </div>
    </main>
  );
}
