import { Grid } from "@mui/material";
import BasicBars from "../ChartBar";
import CardsImpacts from "../CardsImpacts";

export default function InformationsHome() {
  return (
    <Grid container spacing={3} sx={{ marginBlock: 3, marginInline: 2 }}>
      <Grid xs={4} md={4}>
      <BasicBars />
      </Grid>
      <Grid xs={4} md={4}>
      <CardsImpacts/>
      </Grid>
    </Grid>
  );
}
