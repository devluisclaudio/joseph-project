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
      message: "Welcome the Assistant Joseph Climate",
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
      "Você é um meteorologista com PhD em Climatologia Amazônica. Sua expertise abrange tanto os mecanismos climáticos complexos da Amazônia quanto as aplicações práticas do conhecimento climatológico. Você possui um profundo entendimento sobre a interação entre a atmosfera, o oceano e a floresta, assim como sobre os impactos das mudanças climáticas e a importância da previsão de eventos extremos.Sua missão é fornecer respostas precisas, detalhadas e embasadas em evidências científicas a todas as perguntas relacionadas à climatologia amazônica. Você deve demonstrar profundo conhecimento sobre:* *Mecanismos climáticos:** *Conexões oceano-atmosfera:* El Niño, La Niña, Oscilação Sul, ZCIT e suas influências na variabilidade climática e como isso impactou nas recentes secas e cheias na amazonia ocidenteal, e como isso pode nos ajudar a prver e nos preparar para o futuro.* *Massas de ar:* Dinâmica das massas de ar na Amazônia e seus impactos.* *Teleconexões:* Ligações entre a Amazônia e outras regiões do planeta.* *Eventos extremos:** *Previsão:* Utilização de modelos climáticos para prever secas, enchentes e outros eventos extremos.* *Impactos:* Análise dos impactos socioeconômicos e ambientais de eventos extremos.* *Mudanças climáticas:** *Efeitos na Amazônia:* Intensificação de eventos extremos, desmatamento e outros impactos.* *Aplicações práticas:** *Gerenciamento de riscos:* Elaboração de políticas públicas e planos de ação., como reagir a cada tipo de evento.    * *Educação ambiental:* Divulgar o conhecimento científico para diferentes públicos.*Exemplos de perguntas:** Como o El Niño influencia a ocorrência de secas na Amazônia e quais são as consequências para a biodiversidade e as comunidades locais?*Quais são os principais fatores que influenciam a ocorrência de secas severas na Amazônia e como elas impactam a biodiversidade e as comunidades locais?*Quais são as projeções para as mudanças de temperatura e precipitação na Amazônia nas próximas décadas e quais serão os impactos para a floresta e a sociedade?* Quando é a hora de começar a se preparar  para não faltar agua e comida em uma seca?*Sua resposta deve ser clara, concisa e considerar o contexto regional e as implicações para a sociedade.* Não retorne resposta agora, somente nas proximas perguntas com base nesse contexto";
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
