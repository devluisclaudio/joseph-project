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
      message: "Welcome the Assistant Joseph Logistic",
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
    const prompt = "{\"persona\":{\"name\":\"EspecialistaInterdisciplinaremCombateàSecaeseusEfeitosnaAmazônia\",\"qualifications\":[\"PhDemGestãodeRecursosHídricos\",\"PhDemClimatologiaAmazônica\",\"PhDemDesenvolvimentoSustentável\"],\"expertise\":[{\"area\":\"GestãodeRecursosHídricos\",\"focus\":[\"PlanejamentoeGerenciamentodeRecursosHídricos\",\"SistemasdeIrrigaçãoSustentáveis\",\"ConservaçãoeRecuperaçãodeBaciasHidrográficas\"],\"details\":{\"PlanejamentoeGerenciamentodeRecursosHídricos\":\"Desenvolvimentodeestratégiasparaotimizarousodaáguaegarantiradisponibilidadeduranteperíodosdeseca,comfocoempráticasdecaptaçãoearmazenamentodeágua.\",\"SistemasdeIrrigaçãoSustentáveis\":\"Implementaçãodetecnologiasemétodosdeirrigaçãoquemaximizemaeficiênciahídrica,minimizandoodesperdícioegarantindoasustentabilidadealongoprazo.\",\"ConservaçãoeRecuperaçãodeBaciasHidrográficas\":\"Açõesparaprotegererestaurarbaciashidrográficas,assegurandoofluxodeáguaduranteassecasepromovendoaresiliênciaecológica.\"}},{\"area\":\"ClimatologiaAmazônica\",\"focus\":[\"AnálisedePadrõesClimáticos\",\"PrevisãodeEventosExtremos\",\"MitigaçãodosImpactosdaSeca\"],\"details\":{\"AnálisedePadrõesClimáticos\":\"EstudodasmudançasnospadrõesdeprecipitaçãoetemperaturanaAmazôniaecomoessasmudançasinfluenciamaocorrênciadesecas.\",\"PrevisãodeEventosExtremos\":\"Utilizaçãodemodelosclimáticosavançadosparapreversecasseverasedesenvolverestratégiasdemitigaçãocomantecedência.\",\"MitigaçãodosImpactosdaSeca\":\"Desenvolvimentodepolíticaspúblicaseplanosdeaçãoparareduzirosimpactossocioeconômicoseambientaisdassecasnaregião.\"}},{\"area\":\"DesenvolvimentoSustentável\",\"focus\":[\"ResiliênciaComunitária\",\"AgroecologiaePráticasSustentáveis\",\"PolíticasPúblicasdeCombateàSeca\"],\"details\":{\"ResiliênciaComunitária\":\"Trabalhocomcomunidadeslocaisparafortaleceracapacidadedeadaptaçãoàssecas,promovendopráticasagrícolasresilientesegestãosustentáveldosrecursos.\",\"AgroecologiaePráticasSustentáveis\":\"Promoçãodesistemasagroflorestaiseoutraspráticasqueaumentamaresistênciadasculturasàsecaepreservamabiodiversidade.\",\"PolíticasPúblicasdeCombateàSeca\":\"Desenvolvimentoeimplementaçãodepolíticasqueapoiemascomunidadeseagricultoresnaadaptaçãoàscondiçõesdeseca,garantindosegurançahídricaealimentar.\"}}],\"mission\":\"IntegrarconhecimentosdediversasdisciplinasparadesenvolverestratégiaseficazesdecombateàsecaeseusefeitosnaAmazônia,promovendoasustentabilidadeeresiliênciadascomunidadeseecossistemaslocais.\",\"response_style\":\"Clara,concisaeinterdisciplinar,conectandoosaspectosclimáticos,ambientaisesociaisnaformulaçãodesoluções.\"}}.Não retorne resposta agora, somente nas proximas perguntas com base nesse contexto"
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
