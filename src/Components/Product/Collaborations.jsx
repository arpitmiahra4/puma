import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useMedia } from "../../MediaQuery/UseMedia";
import MetaData from "../Home/MetaData";
import styles from "./Collab.module.css";
const Collaborations = () => {
  const {smallScreen} = useMedia()
  return (
    <>
      <MetaData title="PUMA Select Line - Buy Exclusive PUMA Select Line Online - PUMA" />
      <Box
        className={smallScreen?styles.first_box:styles.first_box2}
        w="100%"
        h={530}
        textAlign="center"
      >
        <Box display={["none","block",null,null,null]} w="40%" ml={["10%","50%","55%","60%","60%"]} border="1px solid red" pt={["40%","30%","20%","15%","10%"]} h={500} >
          <Text fontWeight={"bolder"} fontSize={40} color={"black"}>
            ART IN ACTION
          </Text>
          <Text fontSize={22} color={"black"} mt={"-2"}>
            PUMA x MAGGIE STEPHENSON
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      {!smallScreen && <Box textAlign={"center"}  w="100%" pt={"10px"}>
          <Text fontWeight={"bolder"} fontSize={40} color={"black"}>
            ART IN ACTION
          </Text>
          <Text fontSize={22} color={"black"} mt={"-2"}>
            PUMA x MAGGIE STEPHENSON
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>}
      <Box
        className={smallScreen?styles.second_box:styles.second_box2}
        w="100%"
        h={530}
        textAlign="center"
        mt={2}
      >
        <Box display={["none","block",null,null,null]} w={"40%"} pt={"15%"} h={500}>
          <Text fontWeight={"bolder"} fontSize={45} color={"black"}>
            PUMA x COCA-COLA
          </Text>
          <Text fontSize={25} color={"black"} mt={"-2"}>
            A SIGN OF GOOD TASTE
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      {!smallScreen && <Box textAlign={"center"} w={"100%"} pt={"15px"} >
          <Text fontWeight={"bolder"} fontSize={45} color={"black"}>
            PUMA x COCA-COLA
          </Text>
          <Text fontSize={25} color={"black"} mt={"-2"}>
            A SIGN OF GOOD TASTE
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>}
      <Box
        className={smallScreen?styles.third_box:styles.third_box2}
        w="100%"
        h={530}
        textAlign="start"
        mt={2}
      >
        <Box display={["none","block",null,null,null]} w={"35%"} pl={"5%"} pt={"13%"} h={500}>
          <Text fontWeight={"bolder"} fontSize={50} color={"black"}>
            PUMA X DUA LIPA
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      {!smallScreen && <Box textAlign={"center"} w={"100%"}  mt={"13px"} >
          <Text fontWeight={"bolder"} fontSize={50} color={"black"}>
            PUMA X DUA LIPA
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>}
    </>
  );
};

export default Collaborations;
