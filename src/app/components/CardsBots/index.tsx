import { Grid, SvgIcon } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CloudIcon from "@/app/assets/cloud.svg";
import DirectionsBoatIcon from "@/app/assets/drought.svg";
import TimelineIcon from "@/app/assets/logisticbot.svg";
import AgricultureIcon from "@/app/assets/tractor.svg";
import Link from "next/link";
export default function CardsBots() {
  const listBots = [
    { name: "Climate", icon: CloudIcon, link: "/chatbots/climate" },
    { name: "Drought", icon: DirectionsBoatIcon, link: "/chatbots/drought" },
    { name: "Logistic", icon: TimelineIcon, link: "/chatbots/logistic" },
    { name: "Agriculture", icon: AgricultureIcon, link: "/chatbots/agriculture" },
  ];
  return (
    <Grid container spacing={1} sx={{ marginBlock: 3, marginInline: 2 }}>
      {listBots.map((item, index) => (
        <Grid item xs='auto' md={3} key={index} sm={10}>
          <Link href={item.link}>
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
                  viewBox="0 0 120 120"
                  sx={{
                    width: "100%",
                    alignSelf: "center",
                    fontSize: 100,
                    color: "#fff",
                  }}
                />
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
