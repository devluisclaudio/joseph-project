import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import theme from "@/app/theme/colors";

export default function MenuIconLabel() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        padding: 2
      }}
    >
      <HomeIcon sx={{ fontSize: 16, color: theme.palette.secondary.main }} />
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          textAlign: "left",
          paddingBlock: 2,
          paddingInline: 0.5,
          fontSize: 12,
          fontWeight: 400,
          lineHeight: "14.52px",
          color: "#4D4D4D",
        }}
      >
        Dashboard
      </Typography>
    </Box>
  );
}
