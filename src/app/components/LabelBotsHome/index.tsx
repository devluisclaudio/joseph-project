import { Box, Typography } from "@mui/material";

export default function LabelBotsHome() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
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
        }}
      >
        Talk to Joseph
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          textAlign: "left",
          paddingInline: 2,
          fontSize: 14,
          fontWeight: 400,
          lineHeight: "18.05px",
          color: "#4D4D4D",
        }}
      >
        Chat with Joseph, an intelligent virtual assistant who will help you
        interpret, predict and prepare for different scenarios.
      </Typography>
    </Box>
  );
}
