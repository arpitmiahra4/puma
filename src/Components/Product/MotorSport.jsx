import { CloseIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
  Spacer,
  SimpleGrid
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Select } from '@chakra-ui/react'
import { BiGridAlt } from "react-icons/bi";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useMedia } from "../../MediaQuery/UseMedia";
import { dataUrl } from "../../URL/AllUrl";
import MetaData from "../Home/MetaData";
import "./women.css";
const MotorSport = () => {
  const {mediumScreen,smallScreen} = useMedia()
  const [motor, setMotor] = useState([]);
  useEffect(() => {
    axios(`${dataUrl}/products?category=motorsport`)
      .then((res) => setMotor(res.data))
      .catch((err) => console.log(err.message));
  });
  const [names, setNames] = useState("women_main");
  const handleChange = () => {
    console.log("hello");
    setNames("women_two");
  };
  const handleFour = () => {
    setNames("women_main");
  };
  return (
    <>
      <MetaData title="PUMA | Motorsport" />
      <Box mt={2}>
        <Text fontWeight={"bold"}>Home 🔹 Motorsport</Text>
        <Box mt={5}>
          <Text fontWeight={"bolder"} fontSize={35}>
            MOTORSPORT
          </Text>
          <Divider />
          <hr />
          { mediumScreen &&  <Flex
            gap={2}
            borderTop="2px solid black"
            borderBottom="2px solid black"
            mt={5}
            mb={5}
            pl={2}
            pt={2}
            pb={2}
            pr={2}
          >
            <Flex gap={["2%",null,null,"5%",null]}>
            <Box>
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  border={"2px solid black"}
                  bg="transparent"
                  _hover={{ backGround: "transparent" }}
                  fontWeight={"bold"}
                  fontSize={17}
                  rightIcon={<TriangleDownIcon />}
                >
                  Category
                </MenuButton>
                <MenuList>
                  <CloseIcon
                    ml={"85%"}
                    border="2px solid gray"
                    w={"10%"}
                    p={0.5}
                    h="20px"
                  />
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Footwear [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Apparel [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Accessories [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  border={"2px solid black"}
                  bg="transparent"
                  _hover={{ backGround: "transparent" }}
                  fontWeight={"bold"}
                  fontSize={16}
                  rightIcon={<TriangleDownIcon />}
                >
                  Product Type
                </MenuButton>
                <MenuList>
                  <CloseIcon
                    ml={"85%"}
                    border="2px solid gray"
                    w={"10%"}
                    p={0.5}
                    h="20px"
                  />
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={2} fontSize={18}>
                        Bags - BackPacks [43]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={2} fontSize={18}>
                        Bags - Casual [13]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={2} fontSize={18}>
                        Sports Shoes [469]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  border={"2px solid black"}
                  bg="transparent"
                  _hover={{ backGround: "transparent" }}
                  fontWeight={"bold"}
                  fontSize={16}
                  rightIcon={<TriangleDownIcon />}
                >
                  Price
                </MenuButton>
                <MenuList>
                  <CloseIcon
                    ml={"85%"}
                    border="2px solid gray"
                    w={"10%"}
                    p={0.5}
                    h="20px"
                  />
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Footwear [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Apparel [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Accessories [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
           {/*  <Box>
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  border={"2px solid black"}
                  bg="transparent"
                  _hover={{ backGround: "transparent" }}
                  fontWeight={"bold"}
                  fontSize={16}
                  rightIcon={<TriangleDownIcon />}
                >
                  Gender
                </MenuButton>
                <MenuList>
                  <CloseIcon
                    ml={"85%"}
                    border="2px solid gray"
                    w={"10%"}
                    p={0.5}
                    h="20px"
                  />
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Footwear [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Apparel [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Accessories [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box> */}
           {/*  <Box>
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  border={"2px solid black"}
                  bg="transparent"
                  _hover={{ backGround: "transparent" }}
                  fontWeight={"bold"}
                  fontSize={16}
                  rightIcon={<TriangleDownIcon />}
                >
                  Gender
                </MenuButton>
                <MenuList>
                  <CloseIcon
                    ml={"85%"}
                    border="2px solid gray"
                    w={"10%"}
                    p={0.5}
                    h="20px"
                  />
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Footwear [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Apparel [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Accessories [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box> */}
            <Box>
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  border={"2px solid black"}
                  bg="transparent"
                  _hover={{ backGround: "transparent" }}
                  fontWeight={"bold"}
                  fontSize={16}
                  rightIcon={<TriangleDownIcon />}
                >
                  Size
                </MenuButton>
                <MenuList>
                  <CloseIcon
                    ml={"85%"}
                    border="2px solid gray"
                    w={"10%"}
                    p={0.5}
                    h="20px"
                  />
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Footwear [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Apparel [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Accessories [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  border={"2px solid black"}
                  bg="transparent"
                  _hover={{ backGround: "transparent" }}
                  fontWeight={"bold"}
                  fontSize={16}
                  rightIcon={<TriangleDownIcon />}
                >
                  Color
                </MenuButton>
                <MenuList>
                  <CloseIcon
                    ml={"85%"}
                    border="2px solid gray"
                    w={"10%"}
                    p={0.5}
                    h="20px"
                  />
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Footwear [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Apparel [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Accessories [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            
            </Flex>
            <Spacer/>
            <Box w="150px" >
              <Select fontWeight={"bold"} placeholder="Sort by" w={"92%"}>
                <option value="option1">Discount High To Low</option>
                <option value="option2">Best Matches</option>
                <option value="option3">Top sellers</option>
                <option value="option2">Price Low To High</option>
                <option value="option1">Price High To Low</option>
                <option value="option3">Newest</option>
              </Select>
            </Box>
          </Flex> }    
          {!mediumScreen &&<Flex
            gap={2}
            borderTop="2px solid black"
            borderBottom="2px solid black"
            mt={5}
            mb={5}
            pl={2}
            pt={2}
            pb={2}
            pr={2}
            direction={["column","row",null,null,null]}
          >
            <Flex gap="5%">
            <Box>
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  border={"2px solid black"}
                  bg="transparent"
                  _hover={{ backGround: "transparent" }}
                  fontWeight={"bold"}
                  fontSize={16}
                  rightIcon={<TriangleDownIcon />}
                >
                  Price
                </MenuButton>
                <MenuList>
                  <CloseIcon
                    ml={"85%"}
                    border="2px solid gray"
                    w={"10%"}
                    p={0.5}
                    h="20px"
                  />
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Footwear [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Apparel [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Accessories [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  border={"2px solid black"}
                  bg="transparent"
                  _hover={{ backGround: "transparent" }}
                  fontWeight={"bold"}
                  fontSize={16}
                  rightIcon={<TriangleDownIcon />}
                >
                  Size
                </MenuButton>
                <MenuList>
                  <CloseIcon
                    ml={"85%"}
                    border="2px solid gray"
                    w={"10%"}
                    p={0.5}
                    h="20px"
                  />
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Footwear [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Apparel [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                  <MenuItem minH="30px" bg={"transparent"}>
                    <Checkbox>
                      <Text ml={5} fontSize={18}>
                        Accessories [..]
                      </Text>
                    </Checkbox>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            </Flex>
            <Spacer/>
            <Box w="130px" >
              <Select fontWeight={"bold"} placeholder="Sort by" w={"92%"}>
                <option value="option1">Discount High To Low</option>
                <option value="option2">Best Matches</option>
                <option value="option3">Top sellers</option>
                <option value="option2">Price Low To High</option>
                <option value="option1">Price High To Low</option>
                <option value="option3">Newest</option>
              </Select>
            </Box>

            </Flex>}
          <Divider />
          <hr />
        </Box>
        <Box></Box>
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
          <SimpleGrid columns={names=="women_two"?[1,1,2,2,2]:[1,2,3,4,4]} pr={10} pl={2}>
            {motor &&
              motor.map((el, i) => (
                <Link to={`/singleproduct/${el._id}`}>
                  <Box mt={10} mb="5px" ml={5} key={i}>
                    <Image src={el.image} alt="error" w={"100%"} h={names=="women_two" && !smallScreen ? "350" : names=="women_two" ? "700px" : "350"} />
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
                        <Text
                          bg={"whiteAlpha.100"}
                          style={{ color: "#ba2b25" }}
                        >
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
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default MotorSport;
