"use client";
import Topbar from "@/app/components/Topbar";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import LabelBotsHome from "@/app/components/LabelBotsHome";
import InputMensageBot from "@/app/components/InputMensageBot";
import BodyMensages from "@/app/components/BodyMensages";
import gemini from "@/app/services/gemini";
export default function ChatBotsPage() {
  const [open, setOpen] = React.useState(true);
  const [messageGemini, setMessageGemini] = React.useState([
    {
      message: "Welcome the Assistant Joseph Agriculture",
      isMine: false,
    }
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

  useEffect(()=>{
    const prompt = "Agora você um especialista em agricultura na região da Amazônia e estara preparado para responder a todas as perguntas relacionadas a esse tema. Seu foco será em aspectos como padrões climáticos, fenômenos meteorológicos, impactos ambientais e a relação entre a floresta amazônica e as colheitas. Responda a todas as perguntas garatindo que estejam dentro desse contexto"
    gemini.chatGemini(prompt)
  }, [])

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
