import { ProductsFromSlice } from "@/store/Reducers/ProductSlice";
import ProductCard from "../ProductCard";
import { Grid, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { poppins } from "@/assets/font";
import { useRouter } from "next/router";

export default function MainProduct() {
  const product = useSelector(ProductsFromSlice);
  const router = useRouter();
  const path = router.asPath;

  return (
    <Box
      sx={{
        maxWidth: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {path === "/" && (
        <Typography
          variant="h2"
          align="center"
          className={poppins.className}
          sx={{ fontWeight: "700", mt: 10, width: "100%" }}
        >
          Best Seller
        </Typography>
      )}
      <br />
      <br />
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <ProductCard data={product} />
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
}
