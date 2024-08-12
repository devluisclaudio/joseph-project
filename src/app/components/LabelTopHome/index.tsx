import { Box, Typography } from "@mui/material";

export default function LabelTopHome() {
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
        Dashboard
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
        Information and data to keep you up to date with everything that will happen in the coming days, months or years.
      </Typography>
    </Box>
  );
}
