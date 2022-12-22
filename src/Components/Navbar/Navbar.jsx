import { Box, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
// import { BiCartAlt, BiHeart, BiUser } from "react-icons/bi";
const Navbar = () => {
  return (
    <Box w={["50%","80%","100%",null,null]} bg={"#181818"}  pl="5" h={"80px"} display={"flex"}>
    <Flex gap={15} color="white" align={"center"} fontWeight="bold">
        <Image src='https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-1970-1974.png' alt='main logo' w={"60px"} bg="#181818"/>
        <Text>New Arrivals</Text>
        <Text>Women</Text>
        <Text>Men</Text>
        <Text>Kids</Text>
        <Text>Collaborations</Text>
        <Text>Sport</Text>
        <Text>Outlet</Text>
        <Box display={"flex"} alignItems="center" ml={400} gap="40px">
            <Input  placeholder='SEARCH PUMA COM' />
            <Image src='https://uxwing.com/wp-content/themes/uxwing/download/relationship-love/red-heart-icon.png' w={"50px"}/>
            <Image src="https://www.iconpacks.net/icons/3/free-red-shopping-cart-icon-10906-thumb.png" w={"50px"}/>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png' w={"55px"}/>
        </Box>
    </Flex>
    </Box>
  )
}

export default Navbar