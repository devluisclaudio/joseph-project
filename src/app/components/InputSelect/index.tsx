import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

export default function InputSelect() {
  const [periodo, setPeriodo] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPeriodo(event.target.value);
  };
  return (
    <FormControl
      sx={{
        margin: 2,
        minWidth: 320,
        backgroundColor: "#FFF",
        borderRadius: 1,
        height: 40,
      }}
    >
      <InputLabel sx={{ lineHeight: "13.5px" }} id="demo-simple-select-label">
        Período
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={periodo}
        label="Age"
        onChange={handleChange}
        sx={{ height: 40 }}
      >
        <MenuItem value="">
          <em>-</em>
        </MenuItem>
        <MenuItem value={10}>10 dias</MenuItem>
        <MenuItem value={20}>20 dias</MenuItem>
        <MenuItem value={30}>30 dias</MenuItem>
      </Select>
    </FormControl>
  );
}
