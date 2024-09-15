"use client";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import React from "react";
import gemini from "@/app/services/gemini";

export default function NewsFeature() {
  function extractClimateData(htmlString: string) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString.replace(/```/g, "");

    const title = tempDiv.querySelector("h1")?.innerText || "";
    const subtitle = tempDiv.querySelector("h2")?.innerText || "";
    const text = tempDiv.querySelector("p")?.innerText || "";

    return {
      title: title,
      subtitle: subtitle,
      text: text,
    };
  }

  const [dataSetGemini, setDataSetGemini] = React.useState<any>(null);
  const [contextoIa, setContextoIa] = React.useState("");
  const [preventionSolution, setPreventionSolution] = React.useState<string>("");

  React.useEffect(() => {
    if (!contextoIa)
      gemini.loadTrainingData().then((data: string) => setContextoIa(data));
  }, []);

  React.useEffect(() => {
    gemini.newsGemini(contextoIa).then(({ data }) => {
      const resposta = data.candidates[0].content.parts[0].text || "";
      const newsData = extractClimateData(resposta);
      setDataSetGemini(newsData);

      gemini.getSolutionForNews(newsData.text).then(({ data }) => {
        const solutionResponse = data.candidates[0].content.parts[0].text || "";
        setPreventionSolution(solutionResponse);
      });
    });
  }, [contextoIa]);

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
          marginBottom: 1,
        }}
      >
        Future News: Predictive Models of Climate Events
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
          marginBottom: 2,
        }}
      >
        Based on predictive data and climate modeling, this future news forecast
        highlights potential climate events. Climate models suggest that
        the Amazon will face extreme droughts, increasing the risk of wildfires
        and causing irreparable damage to biodiversity and local communities.
        This projection emphasizes the urgent need for global action to mitigate
        long-term environmental impacts.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {dataSetGemini && (
                <>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      textAlign: "left",
                      paddingInline: 2,
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: "18.05px",
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
                      textAlign: "left",
                      paddingInline: 2,
                      fontSize: 12,
                      fontWeight: 600,
                      lineHeight: "16.05px",
                      color: "#4D4D4D",
                      marginBottom: 1,
                    }}
                  >
                    {dataSetGemini.subtitle}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      paddingInline: 2,
                      fontSize: 12,
                      fontWeight: 400,
                      lineHeight: "16.05px",
                      color: "#4D4D4D",
                    }}
                  >
                    {dataSetGemini.text}
                  </Typography>
                </>
              ) || "Loading news..."}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  textAlign: "left",
                  paddingInline: 2,
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: "18.05px",
                  color: "#4D4D4D",
                  marginBottom: 1,
                }}
              >
                What to do
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  paddingInline: 2,
                  fontSize: 12,
                  fontWeight: 400,
                  lineHeight: "16.05px",
                  color: "#4D4D4D",
                  marginBottom: 2,
                }}
              >
                {preventionSolution || "Loading solution..."}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
