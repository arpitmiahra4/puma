import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./Home.module.css"
import Carousel1 from './TopTrending'
const Home = () => {
  return (
    <Box className={styles.main_home}>
    <Box className={styles.first_box} w={["50%","80%","100%",null,null]} h={530}>
    <Box w={550} ml="900px" pt={200} h={500}>
    <Text fontWeight={"bolder"} fontSize={40} color={"white"}>NEW CAT IN THE JUNGLE</Text>
    <Text fontSize={20} color={"white"} mt={"0.1px"}>PUMA x ANUSHKA SHARMA</Text>
    <Button bg={"black"} fontWeight={"bolder"} color={"white"} mt={5}>SHOP NOW</Button>
    </Box>
    </Box>
    {/* second box */}
    <Box className={styles.second_box} w={["50%","80%","100%",null,null]} h={520}>
      <Box  pt={150} pl={1020}>
        <Text fontWeight={"bolder"} fontSize={55} color={"white"}>THE SEASON</Text>
        <Text fontWeight={"bolder"} fontSize={55} color={"white"} mt={"-8"}>OF SAVINGS</Text>
          <Text fontSize={25} color={"white"}>Extra 10% off on online payments</Text>
          <Box mt={5}>
            <Button mr={5}>MEN</Button>
            <Button mr={5}>WOMEN</Button>
            <Button>KIDS</Button>
          </Box>
      </Box>
    </Box>
    {/* Carousel 1 TOP & TRENDINGS*/}
    <Carousel1 />
    {/* clip */}
    <Box className={styles.clip_box} h={580}>
   <video width={"100%"}>
    <source src='https://cdn.sanity.io/files/qa41whrn/prod/d52a7bf2d799f2a66e85b4e4a9093ba2067300ec.mp4'/>
   </video>
    </Box>
    </Box>
  )
}

export default Home