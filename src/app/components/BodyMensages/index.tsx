import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export default function BodyMensages(props: any) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          minHeight: "70vh",
          background: "#4d4d4d25",
          borderRadius: 10,
          marginTop: 3,
        }}
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
                  padding: "10px",
                  borderRadius: item.isMine
                    ? "20px 20px 0px 20px"
                    : "20px 20px 20px 0px",
                  backgroundColor: item.isMine ? "#dcf8c6" : "#fff",
                  maxWidth: "70%",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontSize: 16, paddingInline: 2 }}
                >
                  {item.message}
                </Typography>
              </Paper>
            </Box>
          ))}
      </Box>
    </>
  );
}
