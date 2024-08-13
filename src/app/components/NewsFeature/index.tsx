"use client";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import gemini from "@/app/services/gemini";

export default function NewsFeature() {
  function extractClimateData(htmlString: string) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString.replace(/```/g, "");

    // Extrai os dados necessários
    const title = tempDiv.querySelector("h1")?.innerText || "";
    const subtitle = tempDiv.querySelector("h2")?.innerText || "";
    const text = tempDiv.querySelector("p")?.innerText || "";

    // Retorna o objeto com os dados extraídos
    return {
      title: title,
      subtitle: subtitle,
      text: text,
    };
  }
  const [dataSetGemini, setDataSetGemini] = React.useState<any>(null);

  React.useEffect(() => {
    gemini.newsGemini().then(({ data }) => {
      setDataSetGemini(extractClimateData(data));
    });
  }, []);

  return (
    <Card sx={{ minWidth: 275, maxWidth: 375 }}>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "left",
            paddingInline: 2,
            fontSize: 16,
            fontWeight: 600,
            lineHeight: "29.05px",
            color: "#4D4D4D",
            marginBottom: 2,
          }}
        >
          News of the future
        </Typography>
        {dataSetGemini && (
          <Card>
            <CardContent>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  flexGrow: 1,
                  textAlign: "left",
                  paddingInline: 2,
                  fontSize: 12,
                  fontWeight: 700,
                  lineHeight: "16.05px",
                  color: "#4D4D4D",
                  marginBottom: 1,
                }}
              >
                {dataSetGemini.title}
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  flexGrow: 1,
                  textAlign: "left",
                  paddingInline: 2,
                  fontSize: 10,
                  fontWeight: 600,
                  lineHeight: "14.05px",
                  color: "#4D4D4D",
                  marginBottom: 1,
                }}
              >
                {dataSetGemini.subtitle}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  textAlign: "left",
                  paddingInline: 2,
                  fontSize: 11,
                  fontWeight: 400,
                  lineHeight: "16.05px",
                  color: "#4D4D4D",
                }}
              >
                {dataSetGemini.text}
              </Typography>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
