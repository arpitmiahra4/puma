import { Box, Divider, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Select } from '@chakra-ui/react'
import { BiGridAlt } from "react-icons/bi";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { dataUrl } from "../../URL/AllUrl";
import MetaData from "../Home/MetaData";
import "./women.css";

const Kids = () => {
  const [kids, setKids] = useState([]);

  useEffect(() => {
    axios(`${dataUrl}/products?category=kids`)
      .then((res) => setKids(res.data))
      .catch((err) => console.log(err.message));
  });
  const [names , setNames] = useState("women_main");
  const handleChange = () =>{
    console.log("hello");
    setNames("women_two")
  }
  const handleFour = () =>{
    setNames("women_main")
  }
  return (
    <>
      <MetaData title="Kid's Shoes, Clothing & Accessories - PUMA India" />
      <Box mt={2}>
        <Text fontWeight={"bold"}>Home 🔹 kids</Text>
        <Box border="2px solid red" mt={5}>
          <Text fontWeight={"bolder"} fontSize={35}>
            KIDS
          </Text>
          <Divider />
          <hr />
          <Box h={120}>abhi baad me function phele static</Box>
          <Divider />
          <hr />
        </Box>
        {/* Product Section */}
        <Box>
          <Box
            pr={10}
            pl={10}
            display={"flex"}
            alignItems="center"
            fontWeight={"bold"}
            justifyContent="space-between"
          >
            <Text fontSize={22}>Count PRODUCTS</Text>
            <Box gap={5} display={"flex"}>
            <BiGridAlt onClick={handleChange} size={30} />
              <TfiLayoutGrid4 onClick={handleFour} size={28} />
            </Box>
          </Box>
          <Box className={names} pr={10} pl={2}>
            {kids &&
              kids.map((el, i) => (
                <Link to={`/singleproduct/${el._id}`}><Box mt={10} mb="5px" ml={5} key={i}>
                  <Image src={el.image} alt="error" w={"100%"} h="350" />
                  <Box
                    style={{
                      backgroundColor: "white",
                      height: "40%",
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
                    <Box h="50%">
                      <Text bg={"whiteAlpha.100"} style={{ color: "#ba2b25" }}>
                        {el.price}
                      </Text>
                      <Text
                        bg={"whiteAlpha.100"}
                        style={{
                          color: "gray",
                          textDecoration: "line-through",
                        }}
                      >
                        {el.actual_price}
                      </Text>
                    </Box>
                  </Box>
                </Box>
                </Link>
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Kids;
