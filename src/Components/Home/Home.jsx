import { Box, Button, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import styles from "./Home.module.css";
import Carousel2 from "./second";
import Carousel3 from "./third";
import Carousel1 from "./TopTrending";
const Home = () => {
  const [arpit ] = useMediaQuery('(min-width: 800px)');
  console.log(arpit);
  console.log(window.innerWidth);
  return (
    <Box className={styles.main_home}>
      <Box
        className={styles.first_box}
        w={["50%", "80%", "100%", null, null]}
        h={530}
      >
        <Box w={"40%"} ml="55%" pt={"10%"} h={500}>
          <Text fontWeight={"bolder"} fontSize={40} color={"white"}>
            NEW CAT IN THE JUNGLE
          </Text>
          <Text fontSize={20} color={"white"} mt={"0.1px"}>
            PUMA x ANUSHKA SHARMA
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      {/* second box */}
      <Box
        className={styles.second_box}
        w={["50%", "80%", "100%", null, null]}
        h={520}
      >
        <Box pt={"10%"} pl={"60%"}>
          <Text fontWeight={"bolder"} fontSize={55} color={"white"}>
            THE SEASON
          </Text>
          <Text fontWeight={"bolder"} fontSize={55} color={"white"} mt={"-8"}>
            OF SAVINGS
          </Text>
          <Text fontSize={25} color={"white"}>
            Extra 10% off on online payments
          </Text>
          <Box mt={5}>
            <Button mr={5}>MEN</Button>
            <Button mr={5}>WOMEN</Button>
            <Button>KIDS</Button>
          </Box>
        </Box>
      </Box>
      {/* Carousel 1 TOP & TRENDINGS*/}
      {/* <Carousel1 /> */}
      {/* clip */}
      <Box className={styles.clip_box}>
        <video style={{ width: "100%" }} autoPlay muted loop>
          <source
            src="https://cdn.sanity.io/files/qa41whrn/prod/d52a7bf2d799f2a66e85b4e4a9093ba2067300ec.mp4"
            type="video/mp4"
          />
        </video>
        <Box w={"30%"} mt="-200px" h={200} ml={"60%"}>
          <Text color={"white"} fontWeight={"bolder"} fontSize={40}>
            GET YOUR
          </Text>
          <Text color={"white"} fontWeight={"bolder"} fontSize={40} mt="-4">
            RUN ON
          </Text>
          <Button bgColor={"white"} color={"black"}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Box
        className={styles.third_box}
        w={["50%", "80%", "100%", null, null]}
        h={530}
        mt={530}
      >
        <Box w={550} ml="500px" pt={200} mt="-550" h={500}>
          <Text fontWeight={"bolder"} fontSize={50} color={"white"}>
            PARTY MODE
          </Text>
          <Text fontSize={27} color={"white"} mt={"-5px"}>
            Looks For The Holiday Season
          </Text>
          <Button bg={"white"} fontWeight={"bolder"} color={"black"} mt={5}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Box
        className={styles.forth_box}
        w={["50%", "80%", "100%", null, null]}
        h={530}
      >
        <Box w={550} pt={200} h={500} textAlign="start" ml={"50px"}>
          <Text fontWeight={"bolder"} fontSize={50} color={"white"}>
            WINTER JUST
          </Text>
          <Text fontWeight={"bolder"} fontSize={50} color={"white"} mt={"-7"}>
            GOT HOTTER
          </Text>
          <Text fontSize={20} color={"white"}>
            Season's Favourites
          </Text>
          <Button bg={"white"} fontWeight={"bolder"} color={"black"} mt={5}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Box
        mt={2}
        className={styles.five_box}
        w={["50%", "80%", "100%", null, null]}
        h={530}
        pt={"100px"}
      >
        <Box w={"30%"} h={220} ml={"65%"}>
          <Text fontWeight={"bolder"} fontSize={50} color={"black"}>
            FIRST TIME
          </Text>
          <Text fontWeight={"bolder"} fontSize={50} color={"black"} mt={"-7"}>
            ON DISCOUNT
          </Text>
          <Text fontSize={28} color={"black"}>
            MIN. 30% OFF
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Box>
        <Image src="https://i.ibb.co/kS60xhD/Screenshot-20221223-200320.png" />
      </Box>
      <Box mt={5} mb={5}>
        {/* <Carousel2 /> */}
      </Box>
      <Box
        mt={2}
        className={styles.six_box}
        w={["50%", "80%", "100%", null, null]}
        h={530}
        pt={"200px"}
      >
        <Box w={"32%"} h={220} ml={"65%"}>
          <Text fontWeight={"bolder"} fontSize={45} color={"white"}>
            FOREVER ICONIC
          </Text>
          <Text fontSize={25} mt="-2" color={"white"}>
            Kareena in PUMA x VOGUE Collection
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Box
        mt={2}
        className={styles.seven_box}
        w={["50%", "80%", "100%", null, null]}
        h={530}
        pt={"200px"}
      >
        <Box w={600} h={220} textAlign="start" ml={10}>
          <Text fontWeight={"bolder"} fontSize={45} color={"white"}>
            CHEER FOR YOUR TEAM
          </Text>
          <Text fontSize={24} mt="-2" color={"white"}>
            FOOTBALL FANWEAR COLLECTION
          </Text>
          <Button bg={"#181818"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Box>
        <Image
          src="https://i.ibb.co/mT6X5tg/Screenshot-20221223-204702.png"
          mt={"-8"}
        />
      </Box>
      <Box mt={2} mb={2}>
        {/* <Carousel3 /> */}
      </Box>
      <Box>
        <Image src="https://i.ibb.co/YXFhK38/Screenshot-20221223-213347.png" />
      </Box>
      <Box
        mt={2}
        className={styles.eight_box}
        w={["50%", "80%", "100%", null, null]}
        h={530}
        pt={"200px"}
      >
        <Box w={"30%"} h={220} ml={"60%"}>
          <Text fontWeight={"bolder"} fontSize={55} color={"black"}>
            WALK IT OFF
          </Text>
          <Text fontSize={30} mt="-2" color={"black"}>
            SOFTRIDE COLLECTION
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Box
        mt={2}
        className={styles.nine_box}
        w={["50%", "80%", "100%", null, null]}
        h={530}
        pt={"190px"}
      >
        <Box w={"40%"} h={220} ml={"35%"}>
          <Text fontWeight={"bolder"} fontSize={48} color={"white"}>
            PUMA x PERKS AND MINI
          </Text>
          <Text fontSize={27} mt="-2" color={"white"}>
            MADE TO EXPLORE
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Box
        mt={2}
        className={styles.ten_box}
        w={["50%", "80%", "100%", null, null]}
        h={520}
        mb={10}
      >
        <Box pt={"10%"} pl={"50%"}>
          <Text fontWeight={"bolder"} fontSize={45} color={"black"}>
            THERMAL WEAR BY PUMA
          </Text>
          <Text fontSize={25} color={"black"}>
            WARM UP YOUR WARDROBE
          </Text>
          <Box mt={5}>
            <Button bg={"black"} color="white" mr={5}>
              SHOP MEN
            </Button>
            <Button bg={"black"} color="white" mr={5}>
              SHOP WOMEN
            </Button>
            <Button bg={"black"} color="white">
              SHOP BEANIES
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
