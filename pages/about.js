import { Box, Button, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { poppins } from "@/assets/font";
import Loading from "@/Component/Loading";
import axios from "axios";
import Image from "next/image";

export default function About() {
  const [open, setOpen] = useState(false);
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

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://test-ff63e.web.app/Product.json"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      {data?.map((i, index) => (
        <Box key={index}>
          <Typography>{i.title}</Typography>
          <Box sx={{ display: "flex" }}>
            {i.img.map((j, k) => (
              <Image
                key={k}
                src={`https://test-ff63e.web.app/assets/${j}`}
                width={100}
                height={100}
                alt={i.title}
                style={{ margin: 1 }}
              />
            ))}
          </Box>
        </Box>
      ))}
    </>
  );
}
