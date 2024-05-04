import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { ProductsFromSlice } from "@/store/Reducers/ProductSlice";
import { Paper } from "@mui/material";

export default function ProductD() {
  const AllProducts = useSelector(ProductsFromSlice);
  return (
    <>
      {AllProducts.map((i) => (
        <Paper key={i.id}>
          <Image src={i.src} alt="Developing" width={100} height={100} />
        </Paper>
      ))}
    </>
  );
}
