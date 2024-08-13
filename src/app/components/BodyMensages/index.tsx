import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default function BodyMensages(props: any) {
  const scrollRef = React.useRef<any>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [props.messages]);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          minHeight: "70vh",
          maxHeight: "72vh",
          background: "#4d4d4d25",
          overflowY: "scroll",
          borderRadius: 10,
          marginTop: 3,
        }}
        ref={scrollRef}
      >
        {props.messages.length &&
          props.messages.map((item: any, index: number) => (
            <Box
              display="flex"
              justifyContent={item.isMine ? "flex-end" : "flex-start"}
              margin={2}
              key={index}
            >
              <Paper
                elevation={2}
                style={{
                  padding: 5,
                  borderRadius: item.isMine
                    ? "20px 20px 0px 20px"
                    : "20px 20px 20px 0px",
                  backgroundColor: item.isMine ? "#dcf8c6" : "#fff",
                  maxWidth: "80%",
                 fontFamily: '"Roboto","Helvetica","Arial",sans-serif' 
                }}
              >
                <Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
                  {item.message}
                </Markdown>
              </Paper>
            </Box>
          ))}
      </Box>
    </>
  );
}
