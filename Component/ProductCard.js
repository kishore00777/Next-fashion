"use client";
import { poppins } from "@/assets/font";
import {
  Paper,
  Typography,
  Grid,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import Image from "next/image";
import ShoppingBagSharpIcon from "@mui/icons-material/ShoppingBagSharp";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import Snackbar from "@mui/material/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import {
  ProductsFromSlice,
  addToCart,
  minus,
  plus,
} from "@/store/Reducers/ProductSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

export default function ProductCard({
  src,
  alt,
  price,
  actualPrice,
  brand,
  productId,
  colorId,
  productCount,
}) {
  const [layer, setLayer] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [cart, setCart] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
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

  const offer = (price, actualPrice) => {
    return Math.round((price / actualPrice) * 100);
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
        open={openSnack}
        autoHideDuration={2000}
        onClose={() => {
          setOpenSnack(false);
        }}
        message="Added to Bag Successfully"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => {
              setOpenSnack(false);
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      <>
        <Paper
          variant="outlined"
          sx={{
            width: 300,
            height: 400,
            borderColor: "white",
            overflow: "hidden",
            p: 2,
            position: "relative",
          }}
          onMouseEnter={() => setLayer(true)}
          onMouseLeave={() => setLayer(false)}
        >
          <Box sx={{}}>
            <Image src={src} alt={alt} width={380} height={380} priority />

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
                icon={<FavoriteRoundedIcon sx={{ fontSize: "30px" }} />}
                color={favourite ? "#FF3040" : "rgb(157,158,157,0.5)"}
                onClick={() => setFavourite(!favourite)}
              />
            </Box>
          </Box>
          <br />

          <Typography
            className={poppins.className}
            align="left"
            sx={{ fontSize: "15px", fontWeight: "500" }}
          >
            {alt}
          </Typography>
          <Typography
            className={poppins.className}
            align="left"
            sx={{ fontWeight: "600", color: "#9D9E9D", fontSize: "12px" }}
          >
            {brand}
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "left" }}>
              <Typography
                className={poppins.className}
                align="center"
                sx={{ color: "black", fontWeight: "600", fontSize: "15px" }}
              >
                ₹{price}
              </Typography>
              &nbsp;&nbsp;
              <Typography
                className={poppins.className}
                sx={{ color: "#e95144", fontSize: "15px" }}
              >
                <del>₹{actualPrice}</del>
              </Typography>
              &nbsp;&nbsp;
              <Typography
                className={poppins.className}
                sx={{ color: "#2e8b57", fontWeight: "500", fontSize: "15px" }}
              >
                {offer(price, actualPrice)}%off
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              {" "}
              {productCount === null && (
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "green",
                    height: "50%",
                    fontSize: "8px",
                    borderRadius: 10,
                    "&:hover": { bgcolor: "green", color: "white" },
                  }}
                  onClick={() => {
                    product[colorId].cart === "CART";
                    setCart(!product[colorId].cart === "CART" ? false : true);
                    dispatch(addToCart({ productId: productId }));
                    setOpenSnack(true);
                  }}
                >
                  Add to Bag
                </Button>
              )}
            </Box>
            {/* <>
              &nbsp;&nbsp;
              <Typography
                className={poppins.className}
                sx={{ fontSize: "14px", color: "#9D9E9D" }}
              >
                From
              </Typography>
              &nbsp;&nbsp;
              <Typography
                className={poppins.className}
                sx={{ color: "#e95144", fontWeight: "500" }}
              >
                <del>₹{actualPrice}</del>
              </Typography>
            </> */}
          </Grid>
        </Paper>
      </>
    </>
  );
}
