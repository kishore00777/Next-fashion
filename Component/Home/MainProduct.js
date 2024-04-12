import { ProductsFromSlice } from "@/store/Reducer/ProductSlice";
import ProductCard from "../ProductCard";
import { Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function MainProduct() {
  const product = useSelector(ProductsFromSlice);
  console.log(product);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 10,
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
  );
}
