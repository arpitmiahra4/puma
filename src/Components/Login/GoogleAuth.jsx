import { Button, Img } from "@chakra-ui/react";
import React from "react";

import { useDispatch } from "react-redux";
import { googleAuth } from "../../Redux/Auth/action";
const GoogleAuth = () => {

  const dispatch = useDispatch()

  const handleGoogleSignup = async () => {
    dispatch(googleAuth())
  };
  return (
    <Button bg="#bdc1c5" _hover={{ bg: "#bdc1c5" }} w="100%" borderRadius={"none"} onClick={handleGoogleSignup}>
      Continue With Google
      <Img
        boxSize={"40px"}
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
      />
    </Button>
  );
};

export default GoogleAuth;
