import { Button, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

import { loginUser } from "../../Redux/Auth/action";

const EmailPasswordLogin = () => {
    const [user, setUser] = useState({ email: "", password: "" })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(loginUser(user, toast))
    }
    return (
        <>
            <Stack p={10}>
                <Text align={"center"} fontSize={"20px"} fontWeight="bold">Login With Email And Password</Text>
                <Stack borderTop={"2px solid black"}></Stack>
                <form>

                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type={"email"}
                            name="email"
                            onChange={handleChange}
                            value={user.email}
                            focusBorderColor="#bdc1c5" borderRadius={0} placeholder='Email' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type={"password"}
                            name="password"
                            onChange={handleChange}
                            value={user.password}
                            focusBorderColor="#bdc1c5" borderRadius={0} placeholder='Password' />
                    </FormControl>
                    <Button
                        onClick={handleRegister}
                        bg="#bdc1c5" _hover={{ bg: "#bdc1c5" }} w="100%" mt="10px" borderRadius={0}>Login</Button>
                </form>
                <ToastContainer></ToastContainer>
            </Stack>
        </>
    );
};

export default EmailPasswordLogin;
