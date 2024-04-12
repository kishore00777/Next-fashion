import { Typography } from "@mui/material";
import { useState } from "react";
import { poppins } from "@/assets/font";

export default function About() {
  const [state, setState] = useState();
  return (
    <>
      <Typography
        className={poppins.className}
        variant="h1"
        align="center"
        sx={{ fontWeight: "700", mt: 15 }}
      >
        About us
      </Typography>
    </>
  );
}
