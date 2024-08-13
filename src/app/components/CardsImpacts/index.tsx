import { Card, CardContent, Typography } from "@mui/material";
import CardItemIpact from "../CardItemIpact";
import imageSocioeconomic from "@/app/assets/socioeconimic.svg";
import imageEnvironmental from "@/app/assets/environmental.svg";
import imageLogistic from "@/app/assets/logistic.svg";
import React from "react";
import gemini from "@/app/services/gemini";

export default function CardsImpacts() {
  const [dataSetGemini, setDataSetGemini] = React.useState([]);
  function jsonToArray(jsonString: string) {
    // Converte a string JSON em um array de objetos
    const data = JSON.parse(jsonString.replace("json", ""));

    // Mapeia os objetos para extrair os valores de "percent"
    const result = data.map((item) => item.percent);

    return result;
  }
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

  React.useEffect(() => {
    gemini.percentImpacts(({ data }) => {
      console.log(jsonToArray(data));
    });
  }, []);

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
        {data.map((item) => (
          <CardItemIpact dataSet={item} />
        ))}
      </CardContent>
    </Card>
  );
}
