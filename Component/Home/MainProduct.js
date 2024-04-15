import { ProductsFromSlice } from "@/store/Reducers/ProductSlice";
import ProductCard from "../ProductCard";
import { Grid, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { poppins } from "@/assets/font";

export default function MainProduct() {
  const product = useSelector(ProductsFromSlice);
  console.log(product);
  return (
    <Box sx={{ maxWidth: "70%" }}>
      <Typography
        variant="h2"
        align="center"
        className={poppins.className}
        sx={{ fontWeight: "700", mt: 10, width: "100%" }}
      >
        Best Seller
      </Typography>
      <br />
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // mt: 10,
          width: "100%",
        }}
      >
        <Grid container spacing={3} maxWidth="xl">
          {product.map((i) => (
            <ProductCard
              key={i.id}
              src={i.src}
              alt={i.alt}
              brand={i.brand}
              price={i.price}
              actualPrice={i.actualPrice}
              productId={i.id}
              colorId={i.id}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
