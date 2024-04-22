"use client";
import { Typography, Container } from "@mui/material";
import { poppins } from "@/assets/font";
import ProductInCart from "@/Component/ProductInCart";

export default function page() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        mt: 5,
      }}
    >
      <ProductInCart />
      <br />
      <br />
    </Container>
  );
}
