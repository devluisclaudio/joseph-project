"use client";
import Topbar from "@/app/components/Topbar";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import React from "react";
import MenuIconLabel from "./components/MenuIconLabel";
import InputSelect from "./components/InputSelect";

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
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              paddingInline: 2,
              fontSize: 20,
              fontWeight: 600,
              lineHeight: "29.05px",
              color: "#4D4D4D",
            }}
          >
            Dashboard
          </Typography>
          <InputSelect />
        </Box>
      </div>
    </main>
  );
}
