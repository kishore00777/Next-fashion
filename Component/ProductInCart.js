"use client";
import { useSelector, useDispatch } from "react-redux";
import { ProductsFromSlice, minus, plus } from "@/store/Reducers/ProductSlice";
import {
  Paper,
  Typography,
  Box,
  Grid,
  IconButton,
  Modal,
  Button,
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import { poppins } from "@/assets/font";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import Link from "next/link";

export default function ProductInCart() {
  const productInCart = useSelector(ProductsFromSlice);
  console.log(productInCart);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [storeId, setStoreId] = useState(null);
  const [progress, setProgress] = useState(false);

  const handleOpen = (productId) => {
    setOpen(true);
    setStoreId(productId);
  };
  const handleClose = () => setOpen(false);

  const offer = (price, actualPrice) => {
    return Math.round(((actualPrice - price) / actualPrice) * 100);
  };

  const ProductCounts = productInCart.map(
    (i) => i.productCount * (i.file.price === 0 ? null : i.file.price)
  );
  const Total = ProductCounts.reduce((acc, val) => acc + val, 0);

  const Price = ({ actualPrice, price }) => {
    return (
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          // mt: 2,
          alignItems: "center",
          width: "100%",
        }}
      >
        {!actualPrice ? null : (
          <>
            <Typography
              align="center"
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
    );
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 330, sm: 350, md: 400, xl: 400, lg: 400 },
    bgcolor: "background.paper",
    p: 4,
    borderRadius: 2,
  };

  const Shop = ({ label, sx }) => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <Button
          variant="contained"
          sx={{
            color: "white",
            bgcolor: "black",
            "&:hover": { bgcolor: "black", color: "white" },
          }}
        >
          <Link href="/shop">{label}</Link>
        </Button>
      </Box>
    );
  };
  return (
    <>
      {" "}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 0 }}>
            Are you sure you want to remove the product from the Bag?
          </Typography>
          <br />
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                mr: 3,
                "&:hover": { bgcolor: "black", color: "white" },
              }}
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                "&:hover": { bgcolor: "black", color: "white" },
              }}
              onClick={() => {
                setProgress(true);
                setTimeout(() => {
                  dispatch(minus({ productId: storeId }));
                  handleClose();
                  setProgress(false);
                }, 500);
              }}
            >
              Yes{" "}
              {progress && (
                <CircularProgress
                  size={20}
                  thickness={40}
                  sx={{ marginLeft: 2, color: "white" }}
                />
              )}
            </Button>
          </Box>
        </Box>
      </Modal>{" "}
      {Total === 0 && (
        <>
          <Typography
            variant="h2"
            align="center"
            className={poppins.className}
            sx={{ fontWeight: "700" }}
          >
            Your Bag is Empty
          </Typography>
          <Shop label={"Shop Now"} />
        </>
      )}
      <br />
      <Grid container spacing={2}>
        {productInCart.map((c) =>
          c.cart === "CART" && c.productCount > 0 ? (
            <Grid item xs={12} key={c.id}>
              <Paper
                variant="outlined"
                // elevation={10}
                sx={{
                  // display: "flex",
                  display: {
                    xs: "none",
                    sm: "flex",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                  borderColor: "#A0A6A3",
                  borderRadius: "7px",
                  cursor: "pointer",
                  mt: 1,
                }}
              >
                <Image
                  src={c.file.img[0]}
                  alt={c.file.title}
                  width={200}
                  height={200}
                  style={{
                    // border: "0.5px solid #A0A6A3",
                    // borderRadius: "6px 0px 0px 6px",
                    // borderRight: "2px solid #A0A6A3",
                    padding: 4,
                  }}
                  priority
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 2,
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 10px 0px 0",
                    }}
                  >
                    <Grid sx={{ display: "flex" }}>
                      <Typography
                        className={poppins.className}
                        sx={{ fontWeight: "500", fontSize: "15px" }}
                      >
                        {c.file.title} - {c.brand}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0px 10px 0px 0",
                    }}
                  >
                    <Grid sx={{ display: "flex" }}>
                      <Typography
                        className={poppins.className}
                        sx={{ fontSize: "16px", fontWeight: 500 }}
                      >
                        {c.productCount > 0
                          ? `₹${c.file.price * c.productCount}`
                          : `₹${c.file.price}`}
                      </Typography>
                      &nbsp;&nbsp;
                      <Typography
                        className={poppins.className}
                        sx={{
                          color: "#9D9E9D",
                          fontSize: "16px",
                        }}
                      >
                        <del>
                          {c.productCount > 0
                            ? `₹${c.file.actualPrice * c.productCount}`
                            : `₹${c.file.actualPrice}`}
                        </del>
                      </Typography>
                      &nbsp;&nbsp;
                      <Typography
                        className={poppins.className}
                        sx={{
                          color: "#388e3c",
                          fontWeight: 500,
                          fontSize: "16px",
                        }}
                      >
                        {offer(c.file.price, c.file.actualPrice)}% off
                      </Typography>
                    </Grid>

                    <Button
                      variant="outlined"
                      sx={{
                        color: "black",
                        // bgcolor: "black",
                        borderColor: "black",
                        "&:hover": { color: "black", borderColor: "black" },
                      }}
                    >
                      <IconButton
                        size="small"
                        onClick={() => {
                          c.productCount === 1
                            ? handleOpen(c.id)
                            : dispatch(minus({ productId: c.id }));
                        }}
                      >
                        <RemoveIcon
                          sx={{
                            fontSize: "20px",
                            color: "black",
                          }}
                        />
                      </IconButton>

                      <Typography
                        className={poppins.className}
                        sx={{
                          fontWeight: 700,
                          fontSize: "20px",
                          padding: "0 10px",
                        }}
                      >
                        {" "}
                        {c.productCount}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => {
                          dispatch(plus({ productId: c.id }));
                        }}
                      >
                        <AddIcon
                          sx={{
                            fontSize: "20px",
                            color: "black",
                          }}
                        />
                      </IconButton>
                    </Button>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          ) : null
        )}
      </Grid>
      {productInCart.map((c) =>
        c.cart === "CART" && c.productCount > 0 ? (
          <Paper
            key={c.id}
            // variant="outlined"
            elevation={10}
            sx={{
              width: "100%",
              // height: 460,
              borderColor: "white",
              overflow: "hidden",
              // p: 2,
              mt: 4,
              display: {
                xs: "block",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "none",
              },
              // border: "1px solid black",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image src={c.file.img[0]} alt={c.file.title} />
            </Box>
            <Box sx={{ p: 1 }}>
              <Typography
                className={poppins.className}
                align="center"
                sx={{ fontWeight: "600", color: "#9D9E9D" }}
              >
                {c.brand}
              </Typography>
              <Typography
                className={poppins.className}
                align="center"
                sx={{ fontSize: "15px", fontWeight: "500" }}
              >
                {c.file.title}
              </Typography>
              <Price actualPrice={c.file.actualPrice} price={c.file.price} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  // mt: 2,
                  pt: 1,
                }}
              >
                <Typography
                  className={poppins.className}
                  align="center"
                  sx={{
                    color: "#2e8b57",
                    fontWeight: "700",
                    fontSize: "20px",
                  }}
                >
                  ₹ {c.file.price * c.productCount}.0
                </Typography>
                <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                  <IconButton
                    size="small"
                    onClick={() => {
                      c.productCount === 1
                        ? handleOpen(c.id)
                        : dispatch(minus({ productId: c.id }));
                    }}
                  >
                    <RemoveIcon
                      sx={{
                        fontSize: "20px",
                        borderRadius: 50,
                        border: 1,
                        borderColor: "black",
                        color: "black",
                      }}
                    />
                  </IconButton>

                  <Typography
                    className={poppins.className}
                    sx={{
                      fontWeight: 700,
                      fontSize: "20px",
                      padding: "0 10px",
                    }}
                  >
                    {" "}
                    {c.productCount}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => {
                      dispatch(plus({ productId: c.id }));
                    }}
                  >
                    <AddIcon
                      sx={{
                        fontSize: "20px",
                        borderRadius: 50,
                        border: 1,
                        borderColor: "black",
                        color: "black",
                      }}
                    />
                  </IconButton>
                </Grid>
              </Box>

              {/* <Grid
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <IconButton
                  size="small"
                  onClick={() => {
                    c.productCount === 1
                      ? handleOpen(c.id)
                      : dispatch(minus({ productId: c.id }));
                  }}
                >
                  <RemoveIcon
                    sx={{
                      fontSize: "20px",
                      borderRadius: 50,
                      border: 1,
                      borderColor: "black",
                      color: "black",
                    }}
                  />
                </IconButton>

                <Typography
                  className={poppins.className}
                  sx={{
                    fontWeight: 700,
                    fontSize: "20px",
                    padding: "0 10px",
                  }}
                >
                  {" "}
                  {c.productCount}
                </Typography>
                <IconButton
                  size="small"
                  onClick={() => {
                    dispatch(plus({ productId: c.id }));
                  }}
                >
                  <AddIcon
                    sx={{
                      fontSize: "20px",
                      borderRadius: 50,
                      border: 1,
                      borderColor: "black",
                      color: "black",
                    }}
                  />
                </IconButton>
              </Grid> */}
            </Box>
            <br />
          </Paper>
        ) : null
      )}
      <>
        {Total > 0 ? (
          <Typography
            align="center"
            className={poppins.className}
            sx={{ fontWeight: 700, fontSize: "18px", width: "100%", mt: 5 }}
          >
            Total : &nbsp; ₹ {Total}
          </Typography>
        ) : null}
      </>
    </>
  );
}
