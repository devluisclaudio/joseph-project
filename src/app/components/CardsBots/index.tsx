import { Grid, SvgIcon } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import TimelineIcon from "@mui/icons-material/Timeline";
import AgricultureIcon from "@mui/icons-material/Agriculture";
export default function CardsBots() {
  const listBots = [
    { name: "Climate", icon: CloudIcon },
    { name: "Drought", icon: DirectionsBoatIcon },
    { name: "Logistic", icon: TimelineIcon },
    { name: "Agriculture", icon: AgricultureIcon },
  ];
  return (
    <Grid container spacing={1} sx={{ marginBlock: 3, marginInline: 2 }}>
      {listBots.map((item, index) => (
        <Grid item xs={3} md={3} key={index}>
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
                }}
              >
                {item.name}
              </Typography>
              <SvgIcon
                component={item.icon}
                sx={{ width: '100%', alignSelf: "center", color: "#96EC3F", fontSize: 100 }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
