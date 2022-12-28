import { Button, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { registerUser } from "../../Redux/Auth/action";

const RegisterComponent = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" })

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(user, toast, navigate)).then((res) => {
      if (res.type === "USER_REGISTRATION_FAILURE") {
        toast.error(res.payload.response.data.msg, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      } else {
        toast.success("You are registered successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
    })
  }
  return (
    <>
      <Text align={"center"} fontSize={"20px"} fontWeight="bold">Register</Text>
      <Stack borderTop={"2px solid black"}></Stack>
      <form>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            onChange={handleChange}
            value={user.name}
            focusBorderColor="#bdc1c5" borderRadius={0} placeholder='Name' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            onChange={handleChange}
            value={user.email}
            focusBorderColor="#bdc1c5" borderRadius={0} placeholder='Email' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            onChange={handleChange}
            value={user.password}
            focusBorderColor="#bdc1c5" borderRadius={0} placeholder='Password' />
        </FormControl>
        <Button
          onClick={handleRegister}
          bg="#bdc1c5" _hover={{ bg: "#bdc1c5" }} w="100%" mt="10px" borderRadius={0}>Register</Button>
      </form>
      <ToastContainer ></ToastContainer>
    </>
  );
};

export default RegisterComponent;
