import React, { useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductsFromSlice,
  addToCart,
  minus,
  plus,
} from "@/store/Reducers/ProductSlice";
import Image from "next/image";
import ShoppingBagSharpIcon from "@mui/icons-material/ShoppingBagSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { poppins } from "@/assets/font";

export default function DealoftheDay() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  const product = useSelector(ProductsFromSlice);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [storeId, setStoreId] = useState(null);
  const [progress, setProgress] = useState(false);

  const handleOpen = (productId) => {
    setOpen(true);
    setStoreId(productId);
  };
  const handleClose = () => setOpen(false);

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

  return (
    <>
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
              &nbsp; Yes
              {progress ? (
                <CircularProgress
                  size={30}
                  thickness={40}
                  sx={{ marginLeft: 2, color: "white" }}
                />
              ) : (
                <IconButton size="small" sx={{ color: "white", marginLeft: 2 }}>
                  <DeleteIcon />
                </IconButton>
              )}
            </Button>
          </Box>
        </Box>
      </Modal>{" "}
      <Grid sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90%" }}>
        <Slider {...settings}>
          {product.map((i) =>
            // <ProductCard
            //   key={i.id}
            //   src={i.src}
            //   alt={i.alt}
            //   brand={i.brand}
            //   price={i.price}
            //   actualPrice={i.actualPrice}
            //   productId={i.id}
            //   colorId={i.id}
            // />
            i.actualPrice === null ? null : (
              <Box
                key={i.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // border: "1px solid grey",
                  padding: 2,
                  bgcolor: "white",
                }}
              >
                <Image src={i.src} alt={i.alt} priority />
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Typography
                    className={poppins.className}
                    align="center"
                    sx={{ color: "#2e8b57", fontWeight: "600" }}
                  >
                    ₹{i.price}
                  </Typography>
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
                    <del>₹{i.actualPrice}</del>
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ff36ab",
                      color: "white",
                      "&:hover": { bgcolor: "#ff36ab", color: "white" },
                      display: "flex",
                      width: "100%",
                      mt: 2,
                    }}
                    onClick={() => {
                      (i.productCount === null || i.productCount === 0) &&
                        dispatch(addToCart({ productId: i.id }));
                    }}
                  >
                    {i.productCount === null || i.productCount === 0 ? (
                      <>
                        {" "}
                        Add to Cart
                        <IconButton size="small" sx={{ color: "white" }}>
                          <ShoppingBagSharpIcon />
                        </IconButton>
                      </>
                    ) : (
                      <>
                        <IconButton
                          size="small"
                          sx={{ color: "white" }}
                          onClick={() => {
                            i.productCount === 1
                              ? handleOpen(i.id)
                              : dispatch(minus({ productId: i.id }));
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>
                        &nbsp; &nbsp; &nbsp;
                        <Typography sx={{ fontSize: "18px" }}>
                          {i.productCount}
                          &nbsp; &nbsp; &nbsp;
                        </Typography>
                        <IconButton
                          size="small"
                          sx={{ color: "white" }}
                          onClick={() => dispatch(plus({ productId: i.id }))}
                        >
                          <AddIcon />
                        </IconButton>
                      </>
                    )}
                  </Button>
                </Box>
              </Box>
            )
          )}
        </Slider>
      </Grid>
    </>
  );
}
