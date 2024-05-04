import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { poppins } from "@/assets/font";
import Loading from "@/Component/Loading";

export default function About() {
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 2,
    p: 4,
  };
  return (
    <>
      About
    </>
  );
}
