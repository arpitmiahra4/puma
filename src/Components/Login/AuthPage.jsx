import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";
import PhoneAuth from "./PhoneAuth";
import RegisterComponent from "./RegisterComponent";

const AuthPage = () => {
  return (
    <Stack w="100%" p={10}>
      <Heading>My Account</Heading>
      <Flex>
        <Stack
          borderRight="1px solid black"
          w="50%"
          p={10}
          gap={"10px"}
        >
          <Text align={"center"} fontSize={"20px"} fontWeight="bold">
            Login / Register
          </Text>
          <Stack borderTop={"2px solid black"}></Stack>
          <PhoneAuth />
          <GoogleAuth />
          <Link to="/email-login">
            <Button colorScheme={"teal"} w="100%" borderRadius={"none"}>
              Continue With Email And Password
            </Button>
          </Link>

        </Stack>
        <Stack gap={"10px"} borderLeft="1px solid black" w="50%" p={10}>
          <RegisterComponent />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default AuthPage;
