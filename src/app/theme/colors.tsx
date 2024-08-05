"use client";

import { createTheme, PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    light: "#F9F9F9";
  }
  interface Palette {
    light: PaletteColor;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#00183C",
      light: "#F9F9F9",
    },
    secondary: {
      main: "#96EC3F",
      light: "#FFF",
    },
    light: "#F9F9F9",
  },
});

export default theme;
