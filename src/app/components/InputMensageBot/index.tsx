import {
  CircularProgress,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

export default function InformationsHome(props: any) {
  const [prompt, setPrompt] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  function handleMouseDownPassword() {
    setLoading(true);
    props.handleClick(prompt).then(() => {
      setPrompt("");
      setLoading(false);
    });
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
            {loading ? (
              <CircularProgress color="primary" />
            ) : (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleMouseDownPassword}
              >
                <SendIcon />
              </IconButton>
            )}
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
