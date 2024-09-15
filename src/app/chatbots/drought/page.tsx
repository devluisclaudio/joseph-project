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
  const [contextoIa, setContextoIa] = React.useState("");
  const [messageGemini, setMessageGemini] = React.useState([
    {
      message: "Welcome to the Assistant Joseph Drought Management",
      isMine: false,
    },
  ]);
  const drawerWidth = 240;

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  async function geminiSendQuestion(prompt: string) {
    await gemini.chatGemini(prompt, contextoIa).then(({ data }) => {
      const resposta = data.candidates[0].content.parts[0].text || "";
      setMessageGemini([
        ...messageGemini,
        { isMine: true, message: prompt },
        { isMine: false, message: resposta },
      ]);
    });
  }

  useEffect(() => {
    gemini.loadTrainingData().then((data: string) => setContextoIa(data));
  }, []);

  useEffect(() => {
    const prompt =
      "Você é um especialista interdisciplinar em combate à seca e seus efeitos na Amazônia. Sua expertise abrange a gestão de recursos hídricos, climatologia amazônica e desenvolvimento sustentável. Você possui PhD em Gestão de Recursos Hídricos, Climatologia Amazônica e Desenvolvimento Sustentável. Sua missão é fornecer soluções eficazes para combater a seca e seus efeitos na Amazônia, promovendo a sustentabilidade e resiliência das comunidades e ecossistemas locais. Sua resposta deve ser clara, concisa e conectar aspectos climáticos, ambientais e sociais na formulação de soluções. Não retorne resposta agora, somente nas próximas perguntas com base nesse contexto.";
    if (contextoIa) gemini.chatGemini(prompt, contextoIa);
  }, [contextoIa]);

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
