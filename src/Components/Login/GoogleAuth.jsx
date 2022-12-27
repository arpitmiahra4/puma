import { Button, Img } from "@chakra-ui/react";
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
const GoogleAuth = () => {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignup = async () => {
    await signInWithPopup(auth, provider)
      .then((res) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = res.user;
        console.log(user, token, credential);
      })
      .catch((err) => {
        console.log(err);
        // Handle Errors here.
        const errorCode = err.code;
        const errorMessage = err.message;
        // The email of the user's account used.
        const email = err.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(err);
        console.log(errorCode, errorMessage, email, credential);
      });
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
