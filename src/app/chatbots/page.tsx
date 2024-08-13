"use client";
import Topbar from "@/app/components/Topbar";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import React from "react";
import LabelBotsHome from "../components/LabelBotsHome";
import InputMensageBot from "../components/InputMensageBot";
import BodyMensages from "../components/BodyMensages";
import gemini from "../services/gemini";
export default function ChatBotsPage() {
  const [open, setOpen] = React.useState(true);
  const [messageGemini, setMessageGemini] = React.useState([
    {
      message: "Welcome the Bot",
      isMine: false,
    },
  ]);
  const drawerWidth = 240;

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  async function geminiSendQuestion(prompt: string) {
    await gemini.chatGemini(prompt).then(({ data }) => {
      setMessageGemini([...messageGemini, { isMine: true, message: prompt }, { isMine: false, message: data }]);
    });
  }

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
          <Box sx={{ margin: 3 }}>
            <LabelBotsHome />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <BodyMensages messages={messageGemini} />
              <InputMensageBot handleClick={geminiSendQuestion} />
            </Box>
          </Box>
        </Box>
      </div>
    </main>
  );
}