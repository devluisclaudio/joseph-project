import { Grid } from "@mui/material";
import BasicBars from "../ChartBar";
import CardsImpacts from "../CardsImpacts";
import NewsFeature from "../NewsFeature";

export default function InformationsHome() {
  return (
    <Grid container spacing={3} sx={{ marginBlock: 3, marginInline: 2 }}>
      <Grid xs='auto' md={4} sm={12}>
        <BasicBars />
      </Grid>
      <Grid xs='auto' md={4}sm={12}>
        <CardsImpacts />
      </Grid>
      <Grid xs='auto' md={4} sm={12}>
        <NewsFeature />
      </Grid>
    </Grid>
  );
}
