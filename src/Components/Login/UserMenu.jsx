import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,

} from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserMenu = () => {


  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
        color="white"
      >
        <FaRegUser size="20px" />
      </MenuButton>
      <MenuList alignItems={"center"} color="black" p={5}>
        <MenuItem>My Account</MenuItem>
        <MenuDivider />
        <MenuItem>Wishlist</MenuItem>
        <MenuDivider />
        <MenuItem>Check Order/Initiate Return</MenuItem>
        <MenuDivider />
        <MenuItem>Store Finder</MenuItem>
        <MenuDivider />
        <MenuItem>Language</MenuItem>
        <Link to="auth">
          <Button
            textTransform={"uppercase"}
            w="100%"
            rounded="none"
            mb={2}
            color="white"
            bgColor="#8a7350"
            _hover={{ bgColor: "#8a7350" }}

          >
            Login
          </Button></Link>

        <Link to="/auth"><Button
          textTransform={"uppercase"}
          _hover={{ bgColor: "#999999" }}
          color="white"
          w="100%"
          rounded="none"
          bgColor={"#999999"}

        >
          Register Here
        </Button></Link>

      </MenuList>
    </Menu>
  );
};

export default UserMenu;
