import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { text } from "stream/consumers";
import React from "react";

export default function InformationsHome(props: any) {
  const [prompt, setPrompt] = React.useState("");
  function handleMouseDownPassword() {
    props.handleClick(prompt).then(() => setPrompt(""));
  }
  return (
    <FormControl sx={{ m: 1, width: "80%" }} variant="standard">
      <InputLabel htmlFor="send-question">Send your question</InputLabel>
      <Input
        id="send-question"
        type="text"
        fullWidth
        value={prompt}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPrompt(event.target.value);
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleMouseDownPassword}
            >
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
