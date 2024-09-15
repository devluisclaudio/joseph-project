import { Card, CardContent, Typography, Box } from "@mui/material";
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
  const [contextoIa, setContextoIa] = React.useState("");

  function jsonToArray(jsonString: string) {
    const data = JSON.parse(jsonString.replace("json", "").replace(/```/g, ""));
    const result = data.map((item: any) => item.percent);
    return result;
  }

  React.useEffect(() => {
    if (!contextoIa)
      gemini.loadTrainingData().then((data: string) => setContextoIa(data));
  }, []);

  React.useEffect(() => {
    if (!dataSetGemini.length)
      gemini.percentImpacts(contextoIa).then(({ data }) => {
        const resposta = data.candidates[0].content.parts[0].text || "";
        setDataSetGemini(jsonToArray(resposta));
      });
  }, [contextoIa]);

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
    <>
      <Typography
        variant="h3"
        component="div"
        sx={{
          flexGrow: 1,
          textAlign: "left",
          paddingInline: 2,
          fontSize: 20,
          fontWeight: 600,
          lineHeight: "29.05px",
          color: "#4D4D4D",
          marginBottom: 1
        }}
      >
        Climate Change Impact on Different Areas
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{
          maxWidth: "700px",
          margin: "0 auto",
          flexGrow: 1,
          textAlign: "left",
          paddingInline: 2,
          fontSize: 14,
          fontWeight: 400,
          lineHeight: "18.05px",
          color: "#4D4D4D",
          marginBottom: 2
        }}
      >
        Climate change is having significant effects across various sectors. The logistics sector is the most impacted, with 46% of the total impact, followed by the environmental sector at 25%, and the socioeconomic sector at 13%. These impacts represent critical challenges that must be addressed to ensure a sustainable and resilient future for all affected areas.
      </Typography>

      <Card sx={{ minWidth: 475, maxWidth: 700, height: 270, margin: "0 auto", marginBottom: 2 }}>
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
          </Typography>
          {infos.map((item: any, index: number) => (
            <CardItemIpact dataSet={item} key={index} />
          ))}
        </CardContent>
      </Card>
    </>
  );
}
