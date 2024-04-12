"use client";
import { poppins } from "@/assets/font";
import { Paper, Typography, Grid, Box, IconButton } from "@mui/material";
import Image from "next/image";
import ShoppingBagSharpIcon from "@mui/icons-material/ShoppingBagSharp";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import Snackbar from "@mui/material/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import { ProductsFromSlice, addToCart } from "@/store/Reducer/ProductSlice";

export default function ProductCard({
  src,
  alt,
  price,
  actualPrice,
  brand,
  productId,
  colorId,
}) {
  const [layer, setLayer] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [cart, setCart] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const product = useSelector(ProductsFromSlice);

  // const hello = product.map((i) => i.cart);
  // console.log(
  //   "map",
  //   hello.reduce((acc, val) => (val === "CART" ? acc + 1 : acc), 0)
  // );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("This page is currently under development.");
    // alert("Link copied to clipboard!");
    setOpen(true);
  };

  const Icon = ({ icon, onClick, color, sx }) => {
    return (
      <IconButton onClick={onClick} sx={{ color: color, sx }}>
        {icon}
      </IconButton>
    );
  };

  const fadeIn = keyframes`
  from{
    opacity: 0
  }
  to{
    opacity:1
  }
  `;
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Link copied to clipboard!"
      />
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Paper
          variant="outlined"
          sx={{
            width: 400,
            height: 500,
            borderColor: "white",
            overflow: "hidden",
            p: 2,
          }}
          onMouseEnter={() => setLayer(true)}
          onMouseLeave={() => setLayer(false)}
        >
          <Box sx={{ position: "relative" }}>
            <Image src={src} alt={alt} width={380} height={380} priority />
            {layer && (
              <>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    animation: `${fadeIn} 0.5s`,
                  }}
                ></Box>
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Icon
                    icon={<ShoppingBagSharpIcon sx={{ fontSize: "30px" }} />}
                    color={
                      product[colorId]?.cart === "CART" ? "#00bbf9" : "white"
                      // && cart === true
                      // ? "#00bbf9"
                      // : "white"
                    }
                    onClick={() => {
                      product[colorId].cart === "CART";
                      setCart(!product[colorId].cart === "CART" ? false : true);
                      dispatch(addToCart({ productId: productId }));
                    }}
                  />
                  <Icon
                    icon={<FavoriteRoundedIcon sx={{ fontSize: "30px" }} />}
                    color={favourite ? "#FF3040" : "white"}
                    onClick={() => setFavourite(!favourite)}
                  />
                  <Icon
                    icon={<ShareRoundedIcon sx={{ fontSize: "30px" }} />}
                    color={"white"}
                    onClick={() => copyToClipboard()}
                  />
                </Box>
              </>
            )}
          </Box>
          <br />
          <Typography
            className={poppins.className}
            align="center"
            sx={{ fontWeight: "600", color: "#9D9E9D" }}
          >
            {brand}
          </Typography>
          <Typography
            className={poppins.className}
            align="center"
            sx={{ fontSize: "15px", fontWeight: "500" }}
          >
            {alt}
          </Typography>
          <Grid sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            {!actualPrice ? null : (
              <>
                <Typography
                  className={poppins.className}
                  sx={{ color: "#e95144", fontWeight: "500" }}
                >
                  <del>₹{actualPrice}</del>
                </Typography>
                &nbsp;&nbsp;
                <Typography
                  className={poppins.className}
                  sx={{ fontSize: "14px", color: "#9D9E9D" }}
                >
                  From
                </Typography>
                &nbsp;&nbsp;
              </>
            )}
            <Typography
              className={poppins.className}
              align="center"
              sx={{ color: "#2e8b57", fontWeight: "600" }}
            >
              ₹{price}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
