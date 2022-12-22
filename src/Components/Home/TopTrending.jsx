import { Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

const Carousel1 = () => {
  const [top, setTop] = useState([]);
  axios(`${process.env.REACT_APP_DATA_URL}/products/trending`)
    .then((res) => setTop(res.data))
    .catch((err) => console.log(err.message));
  return (
    <Box className={styles.sb_main}>
      <Carousel responsive={responsive}>
        {top &&
          top.map((el, i) => (
            <Box h="430px" w="360px" key={i}>
              <Image src={el.images[0].image} alt="error" w={600} />
              <Box
                style={{
                  backgroundColor: "white",
                  height: "40px",
                  display: "flex",
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
                <Text bg={"whiteAlpha.100"} style={{ color: "#000000" }}>
                  {el.price}
                </Text>
                <Text
                  bg={"whiteAlpha.100"}
                  style={{ color: "#000000", textDecoration: "line-through" }}
                >
                  {el.cutted}
                </Text>
              </Box>
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default Carousel1;
