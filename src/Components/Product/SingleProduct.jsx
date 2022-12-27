import { Box, Button, Divider, Flex, Image, Input, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiHeart, BiRevision } from 'react-icons/bi';
import { useParams } from 'react-router-dom'
import { dataUrl } from '../../URL/AllUrl';
import "./women.css"
const SingleProduct = () => {
  const params = useParams();
  console.log(params);
  const [data, setData] = useState([]);
  const id = params.id
  useEffect(() => {
    axios(`${dataUrl}/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  })
  return (
    <Box w={"100%"} pl={5} pr={5} >
      <Text>Home 🔹 Women</Text>
      {data && data.map((el, i) => (
        <Flex key={i} w={"100%"} mt={"5%"}>
          <Box w={"70%"}>
            <Image src={el.images[0].image} w={"100%"} />
            <Box className='grid_images' mt={2} w={"100%"}>
              {el.images && el.images.map((item, i) => (
                <Image src={item.image} key={i} h={"100%"} />
              ))}
            </Box>
          </Box>
          <Box w={"40%"} pl="2%">
            <Text fontWeight={"bolder"} fontSize={35}>{el.title}</Text>
            <Text color={"#ba2b25"} mt="5" fontWeight={"bolder"} fontSize={27}>{`₹${el.price}`}</Text>
            <Text fontWeight={"bolder"} style={{ textDecoration: "line-through" }} fontSize={16}>{`₹${el.actual_price}`}</Text>
            <Box mb={5}>
              <Text fontWeight={"bold"} mt={"5%"} fontSize={20}>Color</Text>
              <Text>Puma Black-Puma White</Text>
              <Image src='https://i.ibb.co/z5F6DPR/Screenshot-20221226-191032.png' w={"40%"} />
              <Divider />
              <hr />
              <Text fontWeight={"bold"} mt={"5%"} fontSize={20}>Size</Text>
              <Box display={"flex"} gap={2} textAlign="center">
                {el.sizes && el.sizes.map((item, i) => (
                  <Box key={i} border={"2px solid gray"} pt={"2.5%"} w={"11%"} h={14}>{item.size}</Box>
                ))}
              </Box>
            </Box>
            <Divider />
            <hr />
            <Box mt={"5%"} ml={"20%"}>
              <Button w={"90%"} h="60px" bg="black" color={"white"} fontWeight="bold" fontSize={20}>ADD TO CART</Button>
              <Button w={"90%"} mt={4} border="2px solid black" h="60px" bg="white" color={"black"} fontWeight="bold" fontSize={20}><BiHeart size={40} /> ADD TO WISHLIST</Button>
            </Box>
            <Box mt={"5%"} mb={"5%"}>
              <Text display={"flex"} color="gray" fontSize={18} alignItems={"center"} gap={2}><BiRevision size={"4%"} />FREE RETURNS ON ALL QUALIFYING ORDERS.</Text>
            </Box>
            <Divider />
            <hr />
            <Box mt={"5%"}>
              <Text color="gray" fontSize={16}>Please enter PIN code to check delivery time</Text>
              <Box mt={"3%"}>
                <Text fontWeight={"bold"}>PIN CODE</Text>
                <Flex gap={"5%"}>
                  <Input type="text" placeholder="PIN code" fontSize={20} w={"60%"} h="60PX" />
                  <Button bg={"BLACK"} color="white" w={"35%"} h="60PX">CHECK</Button>
                </Flex>
              </Box>
            </Box>
            <Divider />
            <hr />
            <Box mt={"5%"}>
              <Text fontWeight={"bold"} fontSize={22}>Description</Text>
              <Text>Comfort is the name of the game with these stylish running shoes. Lightweight and well-cushioned, they're the perfect..</Text>
              <Button mt={2} borderBottom={"2px solid green"} bg="transparent" color={"black"}>READ MORE</Button>
            </Box>
            <Box mt={"5%"}>
              <Text fontWeight={"bold"} fontSize={22}>Shipping and Returns</Text>
              <Text mt={"2%"} fontSize={19}>Free standard delivery on all orders and free return within<br /> 14 days of your order delivery date. Visit our Return Policy<br /> for more information.</Text>
              <Text mt={"5%"} fontSize={19}>For any queries, please contact Customer Service at 080-<br />35353535 or via customercareindia@puma.com.</Text>
            </Box>
          </Box>
        </Flex>
      ))}
      <Box bg="#f3f3f3" mb={10} mt={60} p={[10, 10, 10, 10]}>
        <Text fontWeight={"bold"} fontSize={22}>PRODUCT STORY</Text>
        <Text mt={2}>Comfort is the name of the game with these stylish running shoes. Lightweight and well-cushioned, they're the perfect training companion.</Text>
        <Flex w={"80%"} mt={10}>
          <Box w={"60%"}>
            <Text fontWeight={"bold"} fontSize={22}>DETAILS</Text>
            <Text fontSize={18} >🔹 Low boot</Text>
            <Text fontSize={18} mt={2}>🔹 Fashionable upper design</Text>
            <Text fontSize={18} mt={2}>🔹 Lightweight, cushioned running shoes</Text>
            <Text fontSize={18} mt={2}>🔹 Running Type : Neutral</Text>
            <Text fontSize={18} mt={2}>🔹 Ideal for Road & Treadmil Running</Text>
          </Box>
          <Box >
            <Text fontWeight={"bold"} fontSize={22}>Manufacturer's Address</Text>
            <Text fontSize={18} >ADIANA Viet Nam</Text>
            <Text fontSize={18} mt={2}>Footwear Company</Text>
            <Text fontSize={18} mt={2}>FVNAD</Text>
            <Text fontSize={18} mt={2}>Thanh Hoa Province</Text>
            <Text fontSize={18} mt={2}>Ha Lung Thuong Hamlet</Text>
            <Text fontSize={18} mt={2}>Tho Dan Commune</Text>
            <Text fontSize={18} mt={2}>Trieu Son Dictrict</Text>
            <Text fontSize={18} mt={2}>41517 Thanh Hoa</Text>
          </Box>
        </Flex>
        <Text fontWeight={"bold"} fontSize={22}>Country Of Origin</Text>
        <Text mt={5}>VN</Text>
      </Box>
      <Flex mb={10} w={"50%"} align="center" p={[10, 10, 10, 10]}>
        <Box textAlign={"center"} w="50%">
          <Text fontSize={25}>AS WORN BY YOU</Text>
          <Text fontSize={13}>Mention us on Instagram<br />@pumaindia</Text>
          <Text fontSize={15}>"// ADD YOUR PHOTO //"</Text>
        </Box>
        <Box border={"2px solid gray"} w="40%" h={"250px"}>
          <Text pt={"100px"} pl="60px">ADD YOUR PHOTO</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default SingleProduct