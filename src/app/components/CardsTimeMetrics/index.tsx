import * as React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import service from "@/app/services/datasetHome";

interface Data {
    year: string;
    ndvi: number;
    ndwi: number;
    hsi: number;
    temp_max: number;
    temp_min: number;
    soma_chuva: number;
    evapotrans: number;
  }

export default function CardsTimeMetrics() {
  const [values, setValues] = React.useState<Data[]>([]);
  React.useEffect(() => {
    // const fetchData = async () => {
    //     try {
    //       const response = await  service.cards();
    //       const arrayData = Object.entries(response.data).map(([year, values]) => ({
    //         year,
    //         ...values,
    //       }));
    //       setValues(arrayData)
    //     } catch (err) {
    //       console.debug('Erro ao buscar dados');
    //     } 
    //   };
  
    //   fetchData();
  }, []);

  return (
    <Grid container spacing={1} sx={{ marginBlock: 3, marginInline: 2 }}>
      {values.length &&
        values.map((item, index) => (
          <Grid item xs={1} md={2} key={index}>
            <Card sx={{ minWidth: 100, maxWidth: 375 }}>
              <CardContent>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    textAlign: "center",
                    paddingInline: 2,
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "29.05px",
                    color: "#4D4D4D",
                  }}
                >
                  {item.evapotrans}
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    textAlign: "center",
                    paddingInline: 2,
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "16.05px",
                    color: "#4D4D4D",
                  }}
                >
                  {item.hsi}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
