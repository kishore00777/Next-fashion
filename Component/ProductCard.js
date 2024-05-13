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
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch } from "react-redux";
import { addToCart, heart } from "@/store/Reducers/ProductSlice";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

export default function ProductCard({ data }) {
  const [openSnack, setOpenSnack] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();
  // const handlePush = (brand, title, id) => {
  //   router.push(`/[brand]-[title]-[id]`, `/product-${brand}-${title}-${id}`);
  // };
  const handlePush = (brand, title, id) => {
    router.push({
      pathname: '/product',
      query: { brand, title, id },
    });
  };

  const offer = (price, actualPrice) => {
    return Math.round(((actualPrice - price) / actualPrice) * 100);
  };

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
        {data.map((i) => (
          <Paper
            key={i.id}
            variant="outlined"
            sx={{
              width: 300,
              height: 415,
              borderColor: "white",
              overflow: "hidden",
              // p: 2,
              margin: 2,
              position: "relative",
            }}
          >
            <Box sx={{}}>
              <Image
                src={i.file.img[0]}
                alt={i.file.title}
                width={380}
                height={380}
                priority
                onClick={() => handlePush(i.brand, i.file.title, i.id)}
                style={{ cursor: "pointer" }}
              />

              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <IconButton
                  onClick={() => {
                    dispatch(heart({ productId: i.id }));
                  }}
                  sx={{
                    color:
                      i.fav === "heart" ? "#FF3040" : "rgb(157,158,157,0.5)",
                  }}
                >
                  <FavoriteRoundedIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </Box>
            </Box>
            <br />

            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => handlePush(i.brand, i.file.title, i.id)}
            >
              <Typography
                className={poppins.className}
                align="left"
                sx={{ fontSize: "15px", fontWeight: "500" }}
              >
                {i.file.title.length > 35
                  ? `${i.file.title.substring(0, 35)}...`
                  : i.file.title}
              </Typography>
              <Typography
                className={poppins.className}
                align="left"
                sx={{ fontWeight: "600", color: "#9D9E9D", fontSize: "12px" }}
              >
                {i.brand}
              </Typography>
            </Box>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  cursor: "pointer",
                }}
                onClick={() => handlePush(i.brand, i.file.title, i.id)}
              >
                <Typography
                  className={poppins.className}
                  align="center"
                  sx={{ color: "black", fontWeight: "600", fontSize: "15px" }}
                >
                  ₹{i.file.price}
                </Typography>
                &nbsp;&nbsp;
                {i.file.actualPrice !== i.file.price && (
                  <>
                    <Typography
                      className={poppins.className}
                      sx={{ color: "#e95144", fontSize: "15px" }}
                    >
                      <del>₹{i.file.actualPrice}</del>
                    </Typography>
                    &nbsp;&nbsp;
                    <Typography
                      className={poppins.className}
                      sx={{
                        color: "#2e8b57",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      {offer(i.file.price, i.file.actualPrice)}%off
                    </Typography>
                  </>
                )}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "right" }}>
                {" "}
                {i.productCount === null && (
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
                      dispatch(addToCart({ productId: i.id }));
                      setOpenSnack(true);
                    }}
                  >
                    Add to Bag
                  </Button>
                )}
              </Box>
            </Grid>
          </Paper>
        ))}
      </>
    </>
  );
}
