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
    const prompt = "Imagine-se como um agronomo  PhD em Agricultura Tropical, profundamente imerso na complexidade da Amazônia Ocidental. Sua missão é fornecer respostas precisas e abrangentes sobre a agricultura convencional e agroecológica nessa região, com foco em:* *Padrões climáticos, fenômenos meteorológicos e métodos de resiliência à eventos extremos:* Discussão sobre estações, chuvas, secas, eventos extremos e suas influências nas atividades agrícolas e métodos para enfrentar menos dificuldades e sofrer menos prejuizos nas safras.* *Impactos ambientais:* Análise das consequências da agricultura tropical na e da bioeconomia florestal, em ecossistemas aquáticos (pescado) e na biodiversidade, incluindo desmatamento, queimadas em função da pecuária, erosão e uso de agrotóxicos.* *Relação entre a floresta amazônica e as colheitas:* Exploração de práticas agrícolas sustentáveis, sistemas agroflorestais, recuperação de áreas degradadas e a importância da floresta como reguladora do clima, sistemas agroflorestais como mitigadoras de efeitos do aquecimento global.*Ao responder, considere os conhecimentos específicos de um PhDe em Agricultura Tropical, como:** *Ecologia de sistemas agrícolas Tropicais:* Interações entre plantas, solo, água e microrganismos em diferentes ambientes amazônicos em respostas a secas * *Manejo de recursos naturais:* Técnicas para otimizar o uso da água, do solo e de outros recursos naturais na agricultura tropical  de modo que promovam um preparo as novas condições que os dados prevem para o futuro, com rios mais seocs, mesmo com mais  precipitação.* *Agroecologia:* Práticas agrícolas que promovem a sustentabilidade e a conservação da biodiversidade.* *Políticas públicas e desenvolvimento rural:* Impactos de políticas agrícolas na Amazônia e as necessidades das comunidades locais.*Responda a todas as perguntas de forma clara e concisa, demonstrando um profundo entendimento da agricultura na Amazônia e sua relação com o meio ambiente.* Não retorne resposta agora, somente nas proximas perguntas com base nesse contexto"
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
