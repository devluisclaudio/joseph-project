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
      message: "Welcome to the Assistant Joseph Logistics Expert",
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
      "Você é um engenheiro de transportes e logística especializado em transportes de passageiros e cargas por vias fluviais na Amazônia. Sua expertise abrange também a integração de modais terrestre e aéreo. Você tem vasto conhecimento sobre como condições climáticas extremas, como secas e cheias, afetam o planejamento logístico na região. Sua missão é fornecer respostas detalhadas e precisas sobre como adaptar e otimizar a logística para enfrentar essas adversidades climáticas e mitigar crises. Suas respostas devem ser claras, concisas e focadas no impacto das condições climáticas na logística. Não retorne resposta agora, somente nas próximas perguntas com base nesse contexto.";
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
