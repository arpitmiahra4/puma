import { Box, Divider, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Select } from '@chakra-ui/react'
import { BiGridAlt } from "react-icons/bi";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { dataUrl } from "../../URL/AllUrl";
import MetaData from "../Home/MetaData";
import "./women.css"
const Outlet = () => {
  const [outlet , setOutlet] = useState([]);
  useEffect(()=>{
    axios(`${dataUrl}/products?category=outlet`)
    .then((res) => setOutlet(res.data))
    .catch((err) => console.log(err.message));
  })
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
      <MetaData title="PUMA Outlet Sale - Get Upto 50% Off on Shoes, Apparel & Accessories | Great Deals & Offers" />
      <Box mt={2}>
      <Text fontWeight={"bold"}>Home 🔹 Outlet  🔹 Shop All Outlet</Text>
      <Box  border="2px solid red" mt={5}>
        <Text fontWeight={"bolder"} fontSize={35}>
        SHOP ALL OUTLET
        </Text>
        <Divider />
        <hr />
        <Box h={120}>
         abhi baad me function phele static
        </Box>
        <Divider />
        <hr />
      </Box>
      <Box>
      </Box>
      {/* Product Section */}
      <Box>
      <Box pr={10} pl={10} display={"flex"} alignItems="center" fontWeight={"bold"} justifyContent="space-between">
        <Text fontSize={22}>Count PRODUCTS</Text>
        <Box gap={5} display={"flex"}>
          <BiGridAlt onClick={handleChange} size={30}/>
          <TfiLayoutGrid4 onClick={handleFour} size={28}/>
        </Box>
      </Box>
      <Box className={names} pr={10} pl={2}>
      {outlet && outlet.map((el,i)=>(
        <Link to={`/singleproduct/${el._id}`}><Box
              mt={10}
              mb="5px"
              ml={5}
              key={i}
            >
              <Image
                src={el.image}
                alt="error"
                w={"100%"}
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
            </Link>
      ))}

      </Box>
      </Box>
    </Box>
    </>
  )
};

export default Outlet;
