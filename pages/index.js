"use client";
import { Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import { poppins } from "../assets/font";
import SlickCaro from "../Component/Home/SlickCaro";
import MainProduct from "@/Component/Home/MainProduct";
import Header from "@/Component/header";
export default function page() {
  return (
    <>
      <Grid sx={{ width: "100%" }}>
        <SlickCaro />
        <Grid>
          <Typography
            variant="h2"
            align="center"
            className={poppins.className}
            sx={{ fontWeight: "700", mt: 10, width: "100%" }}
          >
            Welcome to Fashion
          </Typography>

        </Grid>
        <MainProduct />
      </Grid>
      <br />
      <br />


      <br />
    </>
  );
}
