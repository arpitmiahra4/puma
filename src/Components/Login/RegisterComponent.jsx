import { Button, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { registerUser } from "../../Redux/Auth/action";

const RegisterComponent = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(user)).then(() => {
      toast("Wow so easy!");
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
      <ToastContainer />
    </>
  );
};

export default RegisterComponent;
