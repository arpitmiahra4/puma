import { Box, Button, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useMedia } from "../../MediaQuery/UseMedia";
import styles from "./Home.module.css";
import Carousel2 from "./second";
import Carousel3 from "./third";
import Carousel1 from "./TopTrending";
const Home = () => {
  const {smallScreen,mediumScreen} = useMedia()
  
  return (
    <Box className={styles.main_home}>
      <Box
        className={styles.first_box}
        w="100%"
        h={[400,530,null,null,null]}
      >
        <Box w={["80%","60%","40%",null,null]} ml={["8%","30%","40%","48%","55%"]} pt={"11%"} >
          <Text fontWeight={"bolder"} fontSize={[25,40,null,null,null]} color={"white"}>
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
        w="100%"
        h={[400,520,null,null,null]}
      >
      {mediumScreen &&  <Box pt={"10%"} pl={["8%","30%","40%","48%","55%"]}>
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
        </Box>}
      </Box>
      {!mediumScreen && <Box textAlign={"center"}>
          <Text fontWeight={"bolder"} fontSize={[40,55,null,null,null]} color={"black"}>
            THE SEASON
          </Text>
          <Text fontWeight={"bolder"} fontSize={[40,55,null,null,null]} color={"black"} >
            OF SAVINGS
          </Text>
          <Text fontSize={25} color={"black"}>
            Extra 10% off on online payments
          </Text>
          <Box mt={5} mb={5}  >
            <Button variant={"outline"} colorScheme='teal' mr={5} mt="5px">MEN</Button>
            <Button variant={"outline"} colorScheme='teal' mr={5} mt="5px">WOMEN</Button>
            <Button variant={"outline"} colorScheme='teal' mt="5px">KIDS</Button>
          </Box>
        </Box>}
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
       {mediumScreen && <Box w={"30%"} mt="-200px" h={200} ml={"60%"} >
          <Text color={"white"} fontWeight={"bolder"} fontSize={40}>
            GET YOUR
          </Text>
          <Text color={"white"} fontWeight={"bolder"} fontSize={40} mt="-4">
            RUN ON
          </Text>
          <Button bgColor={"white"} color={"black"}>
            SHOP NOW
          </Button>
        </Box>}
      </Box>
      {!mediumScreen && <Box textAlign={"center"} >
          <Text color={"black"} fontWeight={"bolder"} fontSize={40}>
            GET YOUR
          </Text>
          <Text color={"black"} fontWeight={"bolder"} fontSize={40} >
            RUN ON
          </Text>
          <Button variant={"outline"} colorScheme='teal'>
            SHOP NOW
          </Button>
        </Box>}
      <Box
        className={styles.third_box}
        w="100%"
        h={530}
        mt={mediumScreen?530:0}
      >
       {mediumScreen && <Box w={"45%"} ml={["28%","40%","50%","38%","28%"]} pt={200} mt="-550" h={500}>
          <Text fontWeight={"bolder"} fontSize={50} color={"white"}>
            PARTY MODE
          </Text>
          <Text fontSize={27} color={"white"} mt={"-5px"}>
            Looks For The Holiday Season
          </Text>
          <Button bg={"white"} fontWeight={"bolder"} color={"black"} mt={5}>
            SHOP NOW
          </Button>
        </Box>}
      </Box>
      {!mediumScreen && <Box textAlign={"center"} mb="5px">
          <Text fontWeight={"bolder"} fontSize={50} color={"black"}>
            PARTY MODE
          </Text>
          <Text fontSize={27} color={"black"} mt={"-5px"}>
            Looks For The Holiday Season
          </Text>
          <Button variant={"outline"} colorScheme='teal' fontWeight={"bolder"}  mt={5}>
            SHOP NOW
          </Button>
        </Box>}
      <Box
        className={styles.forth_box}
        w="100%"
        h={[400,530,null,null,null]}
      >
        <Box w={"45%"} pt={"10%"}  textAlign="start" ml={"50px"}>
          <Text fontWeight={"bolder"} fontSize={[30,50,null,null,null]} color={"white"}>
            WINTER JUST
          </Text>
          <Text fontWeight={"bolder"} fontSize={[30,50,null,null,null]} color={"white"} mt={"2px"}>
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
        w="100%"
        h={[400,530,null,null,null]}
        pt={"100px"}
      >
       {mediumScreen && <Box w={"35%"} h={220} ml={["20%","30%","60%","65%","65%"]}>
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
        </Box>}
      </Box>
      {!mediumScreen && <Box mb="10px" textAlign={"center"}>
          <Text fontWeight={"bolder"} fontSize={[35,50,null,null,null]} color={"black"}>
            FIRST TIME
          </Text>
          <Text fontWeight={"bolder"} fontSize={[35,50,null,null,null]} color={"black"}>
            ON DISCOUNT
          </Text>
          <Text fontSize={28} color={"black"}>
            MIN. 30% OFF
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>}
      <Box>
        <Image src="https://i.ibb.co/kS60xhD/Screenshot-20221223-200320.png" />
      </Box>
      <Box mt={5} mb={5}>
        {/* <Carousel2 /> */}
      </Box>
      <Box
        mt={2}
        className={styles.six_box}
        w="100%"
        h={[400,530,null,null,null]}
        pt={"200px"}
      >
       {mediumScreen && <Box w={"32%"}  ml={"60%"}>
          <Text fontWeight={"bolder"} fontSize={45} color={"white"}>
            FOREVER ICONIC
          </Text>
          <Text fontSize={25} mt="-2" color={"white"}>
            Kareena in PUMA x VOGUE Collection
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>}
      </Box>
      {!mediumScreen && <Box textAlign={"center"}>
          <Text fontWeight={"bolder"} fontSize={[32,45,null,null,null]} color={"black"}>
            FOREVER ICONIC
          </Text>
          <Text fontSize={25} mt="-2" color={"black"}>
            Kareena in PUMA x VOGUE Collection
          </Text>
          <Button  fontWeight={"bolder"} variant={"outline"} colorScheme='teal' mt={5}>
            SHOP NOW
          </Button>
        </Box>}
      <Box
        mt={2}
        className={styles.seven_box}
        w="100%"
        h={530}
        pt={"200px"}
      >
        <Box w={"45%"} h={220} textAlign="start" ml={"3%"}>
          <Text fontWeight={"bolder"} fontSize={[20,20,28,36,45]} color={"white"}>
            CHEER FOR YOUR TEAM
          </Text>
          <Text fontSize={[15,15,20,24,24]} mt="-2" color={"white"}>
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
       {/*  <Carousel3 /> */}
      </Box>
      <Box>
        <Image src="https://i.ibb.co/YXFhK38/Screenshot-20221223-213347.png" />
      </Box>
      <Box
        mt={2}
        className={styles.eight_box}
        w="100%"
        h={530}
        pt={"200px"}
      >
       {mediumScreen && <Box  w={"30%"} h={220} ml={"60%"}>
          <Text fontWeight={"bolder"} fontSize={55} color={"black"}>
            WALK IT OFF
          </Text>
          <Text fontSize={30} mt="-2" color={"black"}>
            SOFTRIDE COLLECTION
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>}
      </Box>
      {!mediumScreen && <Box textAlign={"center"}>
          <Text fontWeight={"bolder"} fontSize={55} color={"black"}>
            WALK IT OFF
          </Text>
          <Text fontSize={30} mt="-2" color={"black"}>
            SOFTRIDE COLLECTION
          </Text>
          <Button fontWeight={"bolder"} variant={"outline"} colorScheme='teal' mt={5} mb="10px">
            SHOP NOW
          </Button>
        </Box>}
      <Box
        mt={2}
        className={styles.nine_box}
        w="100%"
        h={530}
        pt={"190px"}
      >
       {mediumScreen && <Box w={"40%"} ml={"35%"}>
          <Text fontWeight={"bolder"} fontSize={48} color={"white"}>
            PUMA x PERKS AND MINI
          </Text>
          <Text fontSize={27} mt="-2" color={"white"}>
            MADE TO EXPLORE
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>}
      </Box>
      {!mediumScreen && <Box textAlign={"center"}>
          <Text fontWeight={"bolder"} fontSize={48} color={"black"}>
            PUMA x PERKS AND MINI
          </Text>
          <Text fontSize={27} mt="-2" color={"black"}>
            MADE TO EXPLORE
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>}
      <Box
        mt={2}
        className={styles.ten_box}
        w="100%"
        h={520}
        mb={10}
      >
       {mediumScreen && <Box pt={"10%"} pl={"50%"}>
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
        </Box> }
      </Box>
      {!mediumScreen && <Box textAlign={"center"} mb="10px">
          <Text fontWeight={"bolder"} fontSize={[30,45,null,null,null]} color={"black"}>
            THERMAL WEAR BY PUMA
          </Text>
          <Text fontSize={25} color={"black"}>
            WARM UP YOUR WARDROBE
          </Text>
          <Box mt={5}>
            <Button  variant={"outline"} colorScheme='teal' mr={5} mt="5px">
              SHOP MEN
            </Button>
            <Button  variant={"outline"} colorScheme='teal' mr={5} mt="5px">
              SHOP WOMEN
            </Button>
            <Button variant={"outline"} colorScheme='teal' mt="5px">
              SHOP BEANIES
            </Button>
          </Box>
        </Box> }
    </Box>
  );
};

export default Home;
