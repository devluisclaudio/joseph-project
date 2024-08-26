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
      message: "Welcome the Assistant Joseph Drought",
      isMine: false,
    }
  ]);
  const drawerWidth = 240;

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  async function geminiSendQuestion(prompt: string) {
    await gemini.chatGemini(prompt, contextoIa).then(({ data }) => {
      const resposta = data.candidates[0].content.parts[0].text || '';
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


  useEffect(()=>{
    const prompt = "Agora você assuma em detalhes a persona de um engenheiro de Transportes e Logistica, especialista em transportes de passageiros e cargas por vias Fluviais na Amazonia . Preciso que esteja preparado para se prepar para futurar crises de cheias e secas , assim como  contigenciar crises.  Você também tem conhecimentos sobre integração multi modais como terreste e aereo. Preciso que voce tenha grande capacidade de entender como as condiç~eos do clima afetam o planejamento logistico. Esteja preparado para responder   a todas as perguntas relacionadas a logistica na amazonia seu foco será em aspectos como a logistica será impactada e como pode se adaptar a padrões c extremos climáticos, fenômenos meteorológico. Responda a todas as perguntas garatindo que estejam dentro desse contexto. Não retorne resposta agora, somente nas proximas perguntas com base nesse contexto"
    if(contextoIa)
      gemini.chatGemini(prompt, contextoIa);
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
