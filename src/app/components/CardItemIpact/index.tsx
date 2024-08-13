import { Box, CardContent, Stack, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

interface iProps {
  dataSet: iDataSet;
}

interface iDataSet {
  image: any;
  name: string;
  percent: number;
}
export default function CardItemIpact(props: iProps) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#FFBF1A" : "#FFBF1A",
    },
  }));

  function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
  ) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <BorderLinearProgress variant="determinate" value={props.value} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: 16, fontWeight: 700 }}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <img
        src={props.dataSet.image.src}
        alt={props.dataSet.name}
        loading="lazy"
        width={45}
        height={37}
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 auto", paddingBlock: 0 }}>
          <Typography component="div" variant="h5" sx={{ fontSize: 16 }}>
            {props.dataSet.name}
          </Typography>
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <LinearProgressWithLabel value={props.dataSet.percent} />
          </Stack>
        </CardContent>
      </Box>
    </Box>
  );
}
