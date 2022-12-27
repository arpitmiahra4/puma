// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBluZhe7yF1tkqktGBafXYCggSfQCGxnL0",
    authDomain: "fir-tesing-17a4f.firebaseapp.com",
    projectId: "fir-tesing-17a4f",
    storageBucket: "fir-tesing-17a4f.appspot.com",
    messagingSenderId: "313884478088",
    appId: "1:313884478088:web:2498b947732f495f262d3d",
    measurementId: "G-0DPFJBJMQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { app, auth }