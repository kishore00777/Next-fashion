"use client";
import { Typography, Grid, Box, Container } from "@mui/material";
import React, { useState } from "react";
import { poppins } from "../assets/font";
import SlickCaro from "../Component/Home/SlickCaro";
import MainProduct from "@/Component/Home/MainProduct";
import Brand from "@/Component/Home/Brand";
import DealoftheDay from "@/Component/Home/DealoftheDay";
import { Bounce, ToastContainer } from "react-toastify";
export default function page() {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <Grid sx={{ width: "100%" }}>
        <Brand />
        <br />
        <br />
        {/* <SlickCaro /> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            bgcolor: "#F1F2F4",
          }}
        >
          <br />
          <Typography
            className={poppins.className}
            variant="h4"
            align="center"
            sx={{ fontWeight: 700 }}
          >
            Top Deals on Watches
          </Typography>
          <br />
          <DealoftheDay />
          <br />
        </Box>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <MainProduct />
        </Grid>
      </Grid>
      <br />
      <br />

      <br />
    </>
  );
}
