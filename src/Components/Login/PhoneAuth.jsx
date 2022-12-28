import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyOtp, sendOtP } from "../../Redux/Auth/action";


const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [otp, setOTP] = useState("");
  const [sendOtp, setSendOtp] = useState(false);

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const sendOTP = () => {
    // send OTP to the provided phone number
    dispatch(sendOtP(phoneNumber, setSendOtp));
  };

  const verifyOTP = () => {
    // console.log(otp);
    // verify the OTP using the verification id
    dispatch(verifyOtp(otp, navigate))
  };

  return (
    <>
      <Stack id="recaptcha-container"></Stack>
      <FormControl isRequired>
        <FormLabel>Phone number</FormLabel>
        <InputGroup size="lg">
          <InputLeftElement
            pointerEvents="none"
            color="black"
            fontSize="1.2em"
            children="+91"
          />
          <Input

            focusBorderColor="#bdc1c5"
            onChange={handlePhoneNumberChange}
            borderRadius={"none"}
            placeholder="Phone number"
          />
        </InputGroup>
      </FormControl>
      <Button
        bg="#bdc1c5"
        _hover={{ bg: "#bdc1c5" }}
        onClick={sendOTP} borderRadius={"none"} w="100%">
        GET OTP
      </Button>
      {sendOtp && (
        <HStack>
          <Input borderRadius={"none"} placeholder="Enter OTP" onChange={handleOTPChange} />

          <Button bg="#bdc1c5" _hover={{ bg: "#bdc1c5" }} borderRadius={"none"} onClick={verifyOTP}>Submit OTP</Button>
        </HStack>
      )}
    </>
  );
};

export default PhoneAuth;
