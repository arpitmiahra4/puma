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
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [otp, setOTP] = useState("");
  const [sendOtp, setSendOtp] = useState(false);

  const genrateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const handlePhoneNumberChange = (event) => {
    // console.log(phoneNumber)

    setPhoneNumber(event.target.value);

  };

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const sendOTP = () => {
    // send OTP to the provided phone number
    genrateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    let ph = "+91" + phoneNumber
    signInWithPhoneNumber(auth, ph, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setSendOtp(true);
      })
      .catch((err) => {
        // setError(err.message);
        console.log(err);
      });
  };

  const verifyOTP = async () => {
    // console.log(otp);
    // verify the OTP using the verification id
    const confirmationResult = window.confirmationResult;

    await confirmationResult
      .confirm(otp)
      .then((result) => {
        console.log(result);
        // User signed in successfully.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
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
