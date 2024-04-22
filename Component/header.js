"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {
  Badge,
  Grid,
  IconButton,
  Typography,
  Box,
  ListItem,
  TextField,
  styled,
} from "@mui/material";
import ShoppingBagSharpIcon from "@mui/icons-material/ShoppingBagSharp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { poppins } from "../assets/font";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ProductsFromSlice } from "@/store/Reducers/ProductSlice";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useRouter } from "next/router";

function Header() {
  const rout = useRouter();

  const List = ({ href, sx, variant, label, style, xl, onClick }) => {
    return (
      <>
        <Link href={href} style={{ margin: xl && 15, style }} onClick={onClick}>
          <Typography
            variant={variant}
            className={poppins.className}
            sx={{
              sx,
              fontSize: "18px",
              color: rout.asPath === href ? "white" : "#CECECE",
            }}
          >
            {label}
          </Typography>
        </Link>
      </>
    );
  };

  const product = useSelector(ProductsFromSlice);
  const Cart = product.map((i) => i.productCount);
  // const Count = Cart.reduce((acc, val) => (val === "CART" ? acc + 1 : acc), 0);
  const Count = Cart.reduce((acc, val) => acc + val, 0);

  const [mNav, setmNav] = useState(false);
  const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
      // backgroundColor: "#ff36ab",
      // backgroundColor: "",
      color: "white",
    },
  });

  return (
    <>
      {mNav && (
        <Box
          sx={{
            position: "fixed",
            bgcolor: "black",
            width: "100%",
            height: "100%",
            zIndex: 999,
          }}
        >
          <Box
            sx={{
              top: 0,
              color: "white",
              mt: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Link
              href="/"
              onClick={() => setmNav(false)}
              className={poppins.className}
              style={{ fontWeight: 700, fontSize: "40px" }}
            >
              <ListItem>Home</ListItem>
            </Link>

            <Link
              href="/about"
              onClick={() => setmNav(false)}
              style={{ fontWeight: 700, fontSize: "40px" }}
            >
              <ListItem>About</ListItem>
            </Link>
            <Link
              href="/shop"
              onClick={() => setmNav(false)}
              style={{ fontWeight: 700, fontSize: "40px" }}
            >
              <ListItem>Shop</ListItem>
            </Link>

            <Link
              href="/cart"
              onClick={() => setmNav(false)}
              style={{ fontWeight: 700, fontSize: "40px" }}
            >
              <ListItem>Cart</ListItem>
            </Link>
          </Box>
        </Box>
      )}
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "black",
          padding: 1,
          width: "100%",
          top: 0,
          // position: "fixed",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Link href="/">
                <Typography
                  variant="h3"
                  className={poppins.className}
                  sx={{
                    fontWeight: "700",
                    fontFamily: "'Passion', sans-serif",
                  }}
                >
                  Fashion
                </Typography>
              </Link>
              {/* <SearchBar /> */}

              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <List label={"Home"} xl href="/" sx={{ fontWeight: "700" }} />{" "}
                <List
                  label={"Shop"}
                  xl
                  href="/shop"
                  sx={{ fontWeight: "700" }}
                />
                <List
                  label={"About"}
                  xl
                  href="/about"
                  sx={{ fontWeight: "700" }}
                />
                <List
                  label={
                    <IconButton aria-label="cart" sx={{ color: "white" }}>
                      <StyledBadge badgeContent={Count} color="error">
                        <ShoppingBagSharpIcon />
                      </StyledBadge>
                    </IconButton>
                  }
                  xl
                  href="/bag"
                  sx={{ fontWeight: "700" }}
                />
              </Grid>
            </Grid>
            {/* <-------------------------------------------------------------------------------------------------------------------->
          <--------------------------------------------MOBILE VIEW------------------------------------------------------------->
          <--------------------------------------------------------------------------------------------------------------------> */}
            <Grid
              sx={{
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Link href="/">
                <Typography
                  variant="h3"
                  className={poppins.className}
                  sx={{
                    fontWeight: "700",
                    fontFamily: "'Passion', sans-serif",
                  }}
                >
                  Fashion
                </Typography>
              </Link>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                  width: "100%",
                  // ml:3 ,
                }}
              >
                <List
                  label={
                    <IconButton
                      aria-label="cart"
                      sx={{ color: "white", mr: 2 }}
                    >
                      <StyledBadge badgeContent={Count} color="success">
                        <ShoppingBagSharpIcon style={{ fontSize: 25 }} />
                      </StyledBadge>
                    </IconButton>
                  }
                  href="/bag"
                  sx={{ color: "white", fontWeight: "700" }}
                  onClick={() => setmNav(false)}
                />

                <IconButton
                  // aria-label="cart"
                  sx={{ color: "white" }}
                  onClick={() => {
                    setmNav(!mNav);
                  }}
                >
                  {!mNav ? (
                    <MenuIcon style={{ fontSize: 40 }} />
                  ) : (
                    <CloseIcon style={{ fontSize: 40 }} />
                  )}
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;
