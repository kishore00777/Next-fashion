import { CircularProgress, Container } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <>
      <CircularProgress
        size={50}
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          color: "black",
          zIndex: 99,
        }}
      />
    </>
  );
}
