import { Card, CardContent, Typography } from "@mui/material";
import CardItemIpact from "../CardItemIpact";
import imageSocioeconomic from "@/app/assets/socioeconimic.jpeg";
import imageEnvironmental from "@/app/assets/environmental.jpg";
import imageLogistic from "@/app/assets/logistic.jpeg";
import React from "react";
import gemini from "@/app/services/gemini";

const data = [
  {
    name: "Environmental",
    image: imageEnvironmental,
    percent: 74,
  },
  {
    name: "Socioeconomic",
    image: imageSocioeconomic,
    percent: 52,
  },
  {
    name: "Logistic",
    image: imageLogistic,
    percent: 36,
  },
];

export default function CardsImpacts() {
  const [dataSetGemini, setDataSetGemini] = React.useState<any>([]);
  const [infos, setInfos] = React.useState<any>(data);
  function jsonToArray(jsonString: string) {
    // Converte a string JSON em um array de objetos
    const data = JSON.parse(jsonString.replace("json", "").replace(/```/g, ""));

    // Mapeia os objetos para extrair os valores de "percent"
    const result = data.map((item: any) => item.percent);

    return result;
  }

  React.useEffect(() => {
    if (!dataSetGemini.length)
    gemini.percentImpacts().then(({ data }) => {
      setDataSetGemini(jsonToArray(data));
    });
  }, []);
  React.useEffect(() => {
    if (dataSetGemini.length) {
      const array = data.map((item, index) => {
        item.percent = dataSetGemini[index];
        return item;
      });
      setInfos(array);
    }
  }, [dataSetGemini]);

  return (
    <Card sx={{ minWidth: 275, maxWidth: 375 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            paddingInline: 2,
            fontSize: 20,
            fontWeight: 600,
            lineHeight: "29.05px",
            color: "#4D4D4D",
            marginBottom: 2,
          }}
        >
          Impacts
        </Typography>
        {infos.map((item: any, index: number) => (
          <CardItemIpact dataSet={item} key={index} />
        ))}
      </CardContent>
    </Card>
  );
}
