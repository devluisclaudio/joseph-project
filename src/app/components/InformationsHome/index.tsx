import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import React from "react";
import BasicBars from "../ChartBar";
import CardsImpacts from "../CardsImpacts";
import NewsFeature from "../NewsFeature";

export default function InformationsHome() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <Grid container spacing={3} sx={{ marginBlock: 3, marginInline: 2 }}>
        <Grid xs="auto" md={7} sm={12}>
          <BasicBars />
          <CardsImpacts />
          <NewsFeature />
        </Grid>
      </Grid>
    </>
  );
}
