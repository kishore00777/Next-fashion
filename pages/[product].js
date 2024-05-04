import Image from "next/image";
import { useSelector } from "react-redux";
import { ProductsFromSlice } from "@/store/Reducers/ProductSlice";
import {
  Box,
  Card,
  Grid,
  IconButton,
  List,
  Typography,
  ListItem,
  Paper,
  Modal,
  Button,
  styled,
  InputBase,
  TextField,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { poppins } from "@/assets/font";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ReplyIcon from "@mui/icons-material/Reply";
import Loading from "@/Component/Loading";
import Slider from "react-slick";
import ProductCard from "@/Component/ProductCard";
import { CloseSharp, WhatsApp } from "@mui/icons-material";
import x from "@/assets/x.svg";
import Instagram from "@/assets/Instagram.svg";
import WhatsAppImage from "@/assets/WhatsApp.svg";
import Gmail from "@/assets/Gmail.svg";
import axios from "axios";
import Facebook from "@/assets/Facebook.svg";
const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 4000,
  initialSlide: 0,
  autoplay: true,
  pauseOnHover: false,
};
const StyledField = styled(InputBase)({
  width: "100%",
  marginRight: 10,
  marginLeft: 5,
  fontSize: "14px",
});
const StyledBox = styled(Box)({
  border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  borderRadius: 50,
  padding: 4,
});
export default function Product() {
  const AllProducts = useSelector(ProductsFromSlice);
  const router = useRouter();
  const { product } = router.query;
  const [favourite, setFavourite] = useState(false);
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(true);
  const [copy, setCopy] = useState("");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 2,
    p: 4,
  };

  let baseUrl = "";

  if (typeof window !== "undefined") {
    baseUrl = `${window.location.protocol}//${window.location.host}${router.asPath}`;
  }
  // const baseUrl = `${window.location.protocol}//${window.location.host}${router.asPath}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(baseUrl);
    // alert("Link Copied to clip board");
    // console.log(baseUrl);
  };

  const offer = (price, actualPrice) => {
    return Math.round(((actualPrice - price) / actualPrice) * 100);
  };

  const handleLoad = () => {
    setTimeout(() => {
      setLoad(false);
    }, 0);
  };
  // const handlePush = (brand, title, id) => {
  //   router.push(`/product-${brand}-${title}-${id}`);
  // };

  const handlePush = (brand, title, id) => {
    router.push(`/product-${brand}-${title}-${id}`);
    setSlide(0);
    setLoad(true);
  };

  const text = "Check out this product!";
  const Base = baseUrl.replace(/[^\w-]/g, "").toLowerCase();
  const shareViaWhatsApp = () => {
    window.open(`whatsapp://send?text=${text}%20${Base}`);
  };
  const shareViaFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(Base)}`
    );
    // window.FB.ui(
    //   {
    //     method: "share",
    //     href: `https://youtu.be/K0bmZgaKK0Y?feature=shared`,
    //   },
    //   function (response) {}
    // );
  };

  const shareViaGmail = () => {
    window.open(
      `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(
        Base
      )}`
    );
  };

  const shareViaTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        Base
      )}&text=${encodeURIComponent(text)}`
    );
  };

  // const shareViaInstagram = () => {
  //   window.open(
  //     `https://www.instagram.com/direct/new/?text=${encodeURIComponent(
  //       "message"
  //     )}%20${encodeURIComponent(Base)}`
  //   );
  // };

  // const handleShareClick = async () => {
  //   try {
  //     await navigator.share({
  //       title: "Check out this product!",
  //       text: `Check out ${productName} on our website!`,
  //       url: Base,
  //     });
  //   } catch (error) {
  //     console.error("Error sharing:", error.message);
  //   }
  // };

  const ShareModal = [
    { name: "whatsapp", src: WhatsAppImage, click: shareViaWhatsApp },
    { name: "Gmail", src: Gmail, click: shareViaGmail },
    { name: "Facebook", src: Facebook, click: shareViaFacebook },
    // { name: "Instagram", src: Instagram, click: shareViaInstagram },
    { name: "x", src: x, click: shareViaTwitter },
  ];

  // const [data, setData] = useState([]);
  // const [pincode, setPincode] = useState("");
  // const [location, setLocation] = useState("");
  // const [valid, setValid] = useState(false);
  // const [getResponse, setGetResponse] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const CheckValidPincode = (event) => {
  //   const inputValue = event.target.value;
  //   const isValidInput = /^\d{6}$/.test(inputValue);
  //   setValid(isValidInput);
  //   setPincode(inputValue);
  // };
  // const getpincode = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setGetResponse(true);
  //   try {
  //     const response = await axios.post(
  //       "https://pincode.p.rapidapi.com/",
  //       {
  //         searchBy: "pincode",
  //         value: pincode,
  //       },
  //       {
  //         headers: {
  //           "content-type": "application/json",
  //           "Content-Type": "application/json",
  //           "X-RapidAPI-Key":
  //             "06342966c9msh56065118d802a0cp1f9551jsnca0e6fea1353",
  //           "X-RapidAPI-Host": "pincode.p.rapidapi.com",
  //         },
  //       }
  //     );

  //     setTimeout(() => {
  //       setData(response.data);
  //       setLoading(false);
  //     }, 1000);
  //   } catch (err) {
  //     console.error("error on getting location", err);
  //     setData("");
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);
  //   }
  // };

  // useEffect(() => {
  //   if (data.length > 0) {
  //     setLocation({
  //       taluk: data[0].taluk,
  //       district: data[0].district,
  //     });
  //   }
  // }, [data]);

  return (
    <>
      {load && <Loading />}
      <Modal open={open}>
        <Box sx={style}>
          <IconButton
            sx={{ color: "#9D9E9D", position: "absolute", top: 0, right: 0 }}
            onClick={() => setOpen(false)}
          >
            <CloseSharp />
          </IconButton>
          <StyledBox>
            <StyledField value={copy} className={poppins.className} />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#ff36ab",
                borderRadius: 5,
                "&:hover": { bgcolor: "#ff36ab" },
              }}
              onClick={() => {
                copyToClipboard();
                setOpen(false);
              }}
            >
              Copy
            </Button>
          </StyledBox>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              alignItems: "center",
            }}
          >
            {ShareModal.map((x, y) => (
              <Image
                key={y}
                src={x.src}
                alt={x.name}
                width={45}
                height={45}
                onClick={() => {
                  x.click();
                  setOpen(false);
                }}
                style={{
                  cursor: "pointer",
                  margin: 5,
                  //  marginRight: 15
                }}
              />
            ))}
          </Box>
        </Box>
      </Modal>
      <Box sx={{ bgcolor: "rgb(206,206,206,0.3)", position: "relative" }}>
        {AllProducts.map(
          (i) =>
            `product-${i.brand}-${i.file.title}-${i.id.toString()}` ===
              product && (
              <>
                <Grid
                  key={i.id}
                  sx={{
                    maxWidth: { md: "90%", lg: "80%", xl: "70%" },

                    ml: "auto",
                    mr: "auto",
                    bgcolor: "white",
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "flex",
                      lg: "flex",
                      xl: "flex",
                    },
                    padding: 5,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      position: "sticky",
                      top: 120,
                      height: "100%",
                    }}
                  >
                    <Grid sx={{}}>
                      {i.file.img.map((a, b) => (
                        <Card
                          key={b}
                          sx={{
                            border: slide === b ? 3 : 1,
                            borderRadius: 2,
                            borderColor: slide === b ? "#ff36ab" : "#ff9fdd",
                            margin: 2,
                            width: 60,
                            height: 60,
                          }}
                          onMouseEnter={() => {
                            setSlide(b);
                          }}
                          onClick={() => {
                            setSlide(b);
                          }}
                        >
                          <Image
                            src={a}
                            alt={i.file.title}
                            width={60}
                            height={60}
                            onLoad={() => handleLoad()}
                            loading="lazy"
                          />
                        </Card>
                      ))}
                    </Grid>
                    <Box sx={{}}>
                      <Grid
                        sx={{
                          position: "relative",
                          width: 400,
                          height: 400,
                        }}
                      >
                        <Image
                          src={i.file.img[slide]}
                          alt={i.file.title}
                          width={400}
                          height={400}
                          onLoad={() => handleLoad()}
                          loading="lazy"
                        />

                        <Grid
                          sx={{
                            position: "absolute",
                            right: 8,
                            top: 12,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <IconButton
                            onClick={() => {
                              setFavourite(!favourite);
                            }}
                            sx={{
                              bgcolor: "white",
                              "&:hover": { bgcolor: "white" },
                              width: 35,
                              height: 35,
                              // border: "1px solid #CECECE",
                              // boxShadow: "0px 0px 1px 0px #000000",
                            }}
                          >
                            <FavoriteRoundedIcon
                              sx={{
                                fontSize: "20px",
                                color: favourite
                                  ? "#FF3040"
                                  : "rgb(157,158,157,0.5)",
                              }}
                            />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              setOpen(true);
                              setCopy(baseUrl);
                            }}
                            sx={{
                              bgcolor: "white",
                              "&:hover": { bgcolor: "white" },
                              width: 35,
                              height: 35,
                              mt: 2,
                            }}
                          >
                            <ReplyIcon
                              sx={{
                                fontSize: "30px",
                                transform: "scaleX(-1)",
                                color: "rgb(157,158,157,0.5)",
                              }}
                            />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  <Grid sx={{ padding: 2, pt: 0, overflowX: "auto" }}>
                    <Typography
                      className={poppins.className}
                      align="left"
                      sx={{ fontSize: "18px" }}
                    >
                      {i.file.title}
                    </Typography>
                    <Typography
                      className={poppins.className}
                      align="left"
                      sx={{
                        color: "#9D9E9D",
                        fontSize: "17px",
                        mt: 1,
                      }}
                    >
                      #{i.brand.toLowerCase()}
                    </Typography>
                    <Grid sx={{ display: "flex" }}>
                      <Typography
                        className={poppins.className}
                        sx={{ fontSize: "30px", fontWeight: 500 }}
                      >
                        ₹{i.file.price}
                      </Typography>
                      &nbsp;&nbsp;
                      {i.file.actualPrice !== i.file.price && (
                        <>
                          <Typography
                            className={poppins.className}
                            sx={{
                              color: "#9D9E9D",
                              fontSize: "16px",
                              lineHeight: "50px",
                            }}
                          >
                            <del>₹{i.file.actualPrice}</del>
                          </Typography>
                          &nbsp;&nbsp;
                          <Typography
                            className={poppins.className}
                            sx={{
                              color: "#388e3c",
                              fontWeight: 500,
                              lineHeight: "50px",
                              fontSize: "16px",
                            }}
                          >
                            {offer(i.file.price, i.file.actualPrice)}% off
                          </Typography>
                        </>
                      )}
                    </Grid>
                    <Typography
                      className={poppins.className}
                      align="left"
                      sx={{
                        color: "black",
                        fontSize: "13px",
                        mt: 1,
                      }}
                    >
                      {i.file.description}
                    </Typography>
                    <Grid sx={{ mt: 2 }}>
                      <Typography
                        className={poppins.className}
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#9D9E9D",
                          margin: 1,
                          mb: 0,
                        }}
                      >
                        Strap Color
                      </Typography>
                      <Grid sx={{ display: "flex" }}>
                        {AllProducts.map((c, d) =>
                          c.file.model === i.file.model ? (
                            <Card
                              key={d}
                              sx={{
                                border: c.id === i.id ? 3 : 1,
                                borderRadius: 2,
                                borderColor:
                                  c.id === i.id ? "#ff36ab" : "#ff9fdd",
                                margin: 1,
                                width: 60,
                                height: 60,
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                handlePush(c.brand, c.file.title, c.id);
                              }}
                            >
                              <Image
                                src={c.file.img[0]}
                                alt="Developing"
                                width={60}
                                height={60}
                                onLoad={() => handleLoad()}
                                loading="lazy"
                              />
                            </Card>
                          ) : null
                        )}
                      </Grid>
                    </Grid>
                    {/* <TextField
                      id="standard-basic"
                      label="Enter pincode"
                      value={pincode}
                      onChange={(event) => {
                        CheckValidPincode(event);
                      }}
                      inputProps={{
                        pattern: "\\d{6}",
                        maxLength: 6,
                      }}
                      variant="standard"
                    />
                    <br />
                    <Button
                      disabled={!valid}
                      variant="contained"
                      // sx={{ mt: 2, ml: 5 }}
                      onClick={getpincode}
                    >
                      Submit
                    </Button>
                    {getResponse ? (
                      <>
                        {data.length === 0 ? (
                          <Typography
                            align="center"
                            variant="body2"
                            color="error"
                          >
                            Invalid pincode. Please enter a valid pincode
                          </Typography>
                        ) : (
                          <Typography
                            align="center"
                            variant="overline"
                            // color="success"
                            fontSize={13}
                          >
                            {location.taluk === location.district ||
                            location.taluk === "Not Available"
                              ? location.district
                              : `${location.taluk}, ${location.district}`}
                          </Typography>
                        )}
                      </>
                    ) : (
                      <Typography
                        align="center"
                        variant="body2"
                        color="primary"
                      >
                        Please enter a pincode to get the location
                      </Typography>
                    )} */}
                    <Grid sx={{ mt: 2 }}>
                      <Typography
                        className={poppins.className}
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#9D9E9D",
                          margin: 1,
                          mb: 0,
                        }}
                      >
                        Highlights
                      </Typography>
                      <List>
                        {i.spec.map((l, k) => (
                          <ListItem key={k}>
                            <FiberManualRecordIcon
                              sx={{ fontSize: "8px", color: "#9D9E9D", mr: 1 }}
                            />
                            <Typography
                              className={poppins.className}
                              sx={{ fontSize: "12px", color: "black" }}
                            >
                              {l}
                            </Typography>
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                </Grid>

                {/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------               
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------                
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------                
--------------------------------------------------------------------Mobile View--------------------------------------------------------------------------------------------                
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------                
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <Grid
                  key={i.id}
                  sx={{
                    maxWidth: "100%",
                    ml: "auto",
                    mr: "auto",
                    bgcolor: "white",
                    display: {
                      xs: "flex",
                      sm: "flex",
                      md: "none",
                      lg: "none",
                      xl: "none",
                    },
                    flexDirection: "column",
                    // padding: 5,
                  }}
                >
                  <Grid
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Slider {...settings}>
                      {i.file.img.map((a, b) => (
                        <Image
                          key={b}
                          src={a}
                          alt="Developing"
                          onLoad={() => handleLoad()}
                          loading="lazy"
                        />
                      ))}
                    </Slider>

                    <Grid
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: 12,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <IconButton
                        onClick={() => {
                          setFavourite(!favourite);
                        }}
                        sx={{
                          bgcolor: "white",
                          "&:hover": { bgcolor: "white" },
                          width: 35,
                          height: 35,
                        }}
                      >
                        <FavoriteRoundedIcon
                          sx={{
                            fontSize: "20px",
                            color: favourite
                              ? "#FF3040"
                              : "rgb(157,158,157,0.5)",
                          }}
                        />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setOpen(true);
                          setCopy(baseUrl);
                        }}
                        sx={{
                          bgcolor: "white",
                          "&:hover": { bgcolor: "white" },
                          width: 35,
                          height: 35,
                          mt: 2,
                        }}
                      >
                        <ReplyIcon
                          sx={{
                            fontSize: "30px",
                            transform: "scaleX(-1)",
                            color: "rgb(157,158,157,0.5)",
                          }}
                        />
                      </IconButton>
                    </Grid>
                  </Grid>

                  <Grid sx={{ padding: 2 }}>
                    <Typography
                      className={poppins.className}
                      align="left"
                      sx={{ fontSize: "18px" }}
                    >
                      {i.file.title}
                    </Typography>
                    <Typography
                      className={poppins.className}
                      align="left"
                      sx={{
                        color: "#9D9E9D",
                        fontSize: "17px",
                        mt: 1,
                      }}
                    >
                      #{i.brand.toLowerCase()}
                    </Typography>
                    <Grid sx={{ display: "flex" }}>
                      <Typography
                        className={poppins.className}
                        sx={{ fontSize: "30px", fontWeight: 500 }}
                      >
                        ₹{i.file.price}
                      </Typography>
                      &nbsp;&nbsp;
                      <Typography
                        className={poppins.className}
                        sx={{
                          color: "#9D9E9D",
                          fontSize: "16px",
                          lineHeight: "50px",
                        }}
                      >
                        <del>₹{i.file.actualPrice}</del>
                      </Typography>
                      &nbsp;&nbsp;
                      <Typography
                        className={poppins.className}
                        sx={{
                          color: "#388e3c",
                          fontWeight: 500,
                          lineHeight: "50px",
                          fontSize: "16px",
                        }}
                      >
                        {offer(i.file.price, i.file.actualPrice)}% off
                      </Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "center" }}>
                      {AllProducts.map((c, d) =>
                        c.file.model === i.file.model ? (
                          <Card
                            key={d}
                            sx={{
                              border: c.id === i.id ? 3 : 1,
                              borderRadius: 2,
                              borderColor:
                                c.id === i.id ? "#ff36ab" : "#ff9fdd",
                              margin: 1,
                              mt: 2,
                              // width: "100%",
                              // height: "100%",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handlePush(c.brand, c.file.title, c.id);
                            }}
                          >
                            <Image
                              src={c.file.img[0]}
                              alt="Developing"
                              width={80}
                              height={80}
                              onLoad={() => handleLoad()}
                              loading="lazy"
                            />
                          </Card>
                        ) : null
                      )}
                    </Grid>
                    <Typography
                      className={poppins.className}
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#9D9E9D",
                        margin: 0,
                        mt: 1,
                      }}
                    >
                      Description
                    </Typography>
                    <Typography
                      className={poppins.className}
                      align="left"
                      sx={{
                        color: "black",
                        fontSize: "13px",
                        mt: 1,
                      }}
                    >
                      {i.file.description}
                    </Typography>
                    <Typography
                      className={poppins.className}
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#9D9E9D",
                        margin: 0,
                        mt: 2,
                      }}
                    >
                      Highlights
                    </Typography>
                    <List>
                      {i.spec.map((l, k) => (
                        <ListItem key={k}>
                          <FiberManualRecordIcon
                            sx={{ fontSize: "8px", color: "#9D9E9D", mr: 1 }}
                          />
                          <Typography
                            className={poppins.className}
                            sx={{ fontSize: "12px", color: "black" }}
                          >
                            {l}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  {/* <Grid sx={{ mt: 2 }}>
                    <Typography
                      className={poppins.className}
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#9D9E9D",
                        margin: 1,
                        mb: 0,
                      }}
                    >
                      Highlights
                    </Typography>
                    <List>
                      {i.spec.map((l, k) => (
                        <ListItem key={k}>
                          <FiberManualRecordIcon
                            sx={{ fontSize: "8px", color: "#9D9E9D", mr: 1 }}
                          />
                          <Typography
                            className={poppins.className}
                            sx={{ fontSize: "12px", color: "black" }}
                          >
                            {l}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Grid> */}
                </Grid>
                {/* -------------------------------------------------------------------------------------------------------------------------------------
                -------------------------------------------------------------------------------------------------------------------------------------
                -------------------------------------------------------------------------------------------------------------------------------------
                -------------------------------------------------------------------------------------------------------------------------------------
                -------------------------------------------------------------------------------------------------------------------------------------
                ------------------------------------------------------------------------------------------------------------------------------------- */}
                <Box
                  container
                  sx={{
                    maxWidth: {
                      xs: "100%",
                      sm: "100%",
                      md: "90%",
                      lg: "80%",
                      xl: "70%",
                    },
                    ml: "auto",
                    mr: "auto",
                    bgcolor: "white",
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: 2,
                  }}
                >
                  <Typography
                    className={poppins.className}
                    sx={{ fontWeight: 700, fontSize: "25px" }}
                  >
                    Similar Products
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      overflowX: "scroll",
                      scrollBehavior: "smooth",
                    }}
                  >
                    {" "}
                    <style>
                      {`
                    ::-webkit-scrollbar {
                      width: 5px; /* width of the entire scrollbar */
                      height:5px;
                    }
                    ::-webkit-scrollbar-thumb {
                      background-color: #ff36ab; /* color of the scroll thumb */
                      border-radius: 5px; /* roundness of the scroll thumb */
                    }
          
                    ::-webkit-scrollbar-button {
                      display: none; /* hide the scrollbar buttons */
                    }
                  `}
                    </style>
                    {AllProducts.filter(
                      (item) => item.brand === i.brand && item.id !== i.id
                    ).map((r) => (
                      <Paper
                        variant="outlined"
                        key={r.id}
                        sx={{
                          // margin: 2,
                          marginRight: 2,
                          marginLeft: 2,
                          marginTop: 2,
                          marginBottom: 4,
                          borderRadius: 1,
                          // width: 100,
                          cursor: "pointer",
                        }}
                        onClick={() => handlePush(r.brand, r.file.title, r.id)}
                      >
                        <Image
                          src={r.file.img[0]}
                          alt={r.file.title}
                          // width={100}
                          // height={100}
                        />
                        <Typography
                          className={poppins.className}
                          align="left"
                          sx={{
                            fontSize: "13px",
                            fontWeight: "500",
                            mt: 2,
                            padding: 1,
                            overflowX: "auto",
                          }}
                        >
                          {r.file.title.length > 50
                            ? `${r.file.title.substring(0, 50)}...`
                            : r.file.title}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "left",
                            cursor: "pointer",
                            padding: 1,
                          }}
                        >
                          <Typography
                            className={poppins.className}
                            align="center"
                            sx={{
                              color: "black",
                              fontWeight: "600",
                              fontSize: "13px",
                            }}
                          >
                            ₹{r.file.price}
                          </Typography>
                          &nbsp;&nbsp;
                          <Typography
                            className={poppins.className}
                            sx={{ color: "#e95144", fontSize: "13px" }}
                          >
                            <del>₹{r.file.actualPrice}</del>
                          </Typography>
                          &nbsp;&nbsp;
                          <Typography
                            className={poppins.className}
                            sx={{
                              color: "#2e8b57",
                              fontWeight: "500",
                              fontSize: "13px",
                            }}
                          >
                            {offer(r.file.price, r.file.actualPrice)}%off
                          </Typography>
                        </Box>
                      </Paper>
                    ))}
                  </Box>
                </Box>
                <br />
                <br />
                <br />
              </>
            )
        )}
      </Box>
    </>
  );
}
