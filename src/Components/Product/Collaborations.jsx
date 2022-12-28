import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import MetaData from "../Home/MetaData";
import styles from "./Collab.module.css";
const Collaborations = () => {
  return (
    <>
      <MetaData title="PUMA Select Line - Buy Exclusive PUMA Select Line Online - PUMA" />
      <Box
        className={styles.first_box}
        w={["50%", "80%", "100%", null, null]}
        h={530}
        textAlign="center"
      >
        <Box w={"40%"} ml="65%" pt={"10%"} h={500}>
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
      <Box
        className={styles.second_box}
        w={["50%", "80%", "100%", null, null]}
        h={530}
        textAlign="center"
        mt={2}
      >
        <Box w={"40%"} pt={"10%"} h={500}>
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
      <Box
        className={styles.third_box}
        w={["50%", "80%", "100%", null, null]}
        h={530}
        textAlign="start"
        mt={2}
      >
        <Box w={"35%"} pl={"5%"} pt={"13%"} h={500}>
          <Text fontWeight={"bolder"} fontSize={50} color={"black"}>
            PUMA X DUA LIPA
          </Text>
          <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Collaborations;
