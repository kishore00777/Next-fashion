import MainProduct from "@/Component/Home/MainProduct";
import SearchBar from "@/Component/SearchBar";
import { Container, Grid } from "@mui/material";

export default function shop() {
  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }}>
      <MainProduct />
    </Grid>
  );
}
