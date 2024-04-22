import { poppins } from "@/assets/font";
import {
  ProductsFromSlice,
  filterProduct,
} from "@/store/Reducers/ProductSlice";
import { SearchSharp } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  styled,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar() {
  const Input = styled(InputBase)({
    fontSize: 17,
    fontFamily: poppins.className,
    color: "black",
    width: "100%",
    marginLeft: 10,
  });
  const SearchNav = styled(Box)(() => ({
    backgroundColor: "white",
    height: "35px",
    width: 500,
    borderRadius: 7,
  }));

  const router = useRouter();
  const path = router.asPath;
  const Product = useSelector(ProductsFromSlice);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      {path === "/shop" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            height: "35px",
            width: 500,
            borderRadius: 1,
          }}
        >
          <InputBase
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              // dispatch(filterProduct({ searchQuery: search }));
            }}
            endAdornment={
              <InputAdornment position="end" sx={{ padding: 2 }}>
                <IconButton
                  onClick={() => {
                    dispatch(filterProduct({ searchQuery: search }));
                  }}
                >
                  <SearchSharp />
                </IconButton>
              </InputAdornment>
            }
            placeholder="Search for Products, brands and more"
            sx={{
              fontSize: 17,
              fontFamily: poppins.className,
              color: "black",
              width: "100%",
              marginLeft: 3,
            }}
          />
        </Box>
      )}
    </>
  );
}
