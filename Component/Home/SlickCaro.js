"use client";
import Slider from "react-slick";
import Image from "next/image";
import img1 from "../../assets/WatchCarousel/1.jpg";
import img2 from "../../assets/WatchCarousel/2.jpg";
import img3 from "../../assets/WatchCarousel/3.jpg";
import img4 from "../../assets/WatchCarousel/4.jpg";
import img5 from "../../assets/WatchCarousel/5.jpg";
import img6 from "../../assets/WatchCarousel/6.jpg";
import img7 from "../../assets/WatchCarousel/7.jpg";
import { Box } from "@mui/material";

export default function SlickCaro() {
  const settings = {
    dots: false,
    // infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />

      <Slider {...settings}>
        <Image src={img1} alt="watch" priority width={350} height={400} />
        <Image src={img2} alt="watch" priority width={350} height={400} />
        <Image src={img3} alt="watch" priority width={350} height={400} />
        <Image src={img4} alt="watch" priority width={350} height={400} />
        <Image src={img5} alt="watch" priority width={350} height={400} />
        <Image src={img6} alt="watch" priority width={350} height={400} />
        <Image src={img7} alt="watch" priority width={350} height={400} />
      </Slider>
    </Box>
  );
}
