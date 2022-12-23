import { Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { dataUrl } from "../../URL/AllUrl";
import styles from "./Carousel.module.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carousel3 = () => {
  const [top, setTop] = useState([]);
  axios(`${dataUrl}/products?category=women`)
    .then((res) => setTop(res.data))
    .catch((err) => console.log(err.message));
  return (
    <Box className={styles.sb_main}>
      <Carousel responsive={responsive}>
        {top &&
          top.map((el, i) => (
            <Box
              className={styles.top_main}
              h="400px"
              w="350px"
              borderRadius={10}
              mb="5px"
              ml={5}
              key={i}
            >
              <Image
                borderRadius={10}
                src={el.images[0].image}
                alt="error"
                w={500}
                h="350"
              />
              <Box
                style={{
                  backgroundColor: "white",
                  height: "40px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  bg={"whiteAlpha.100"}
                  style={{ color: "#000000" }}
                  fontSize="17px"
                  fontWeight="bold"
                >
                  {el.title}
                </Text>
                <Box h="50px">
                  <Text bg={"whiteAlpha.100"} style={{ color: "#ba2b25" }}>
                    {el.price}
                  </Text>
                  <Text
                    bg={"whiteAlpha.100"}
                    style={{ color: "gray", textDecoration: "line-through" }}
                  >
                    {el.actual_price}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default Carousel3;
