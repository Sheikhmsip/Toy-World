// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxkYcioxy-q31_MeEckSTCJ7PP0gH-wSM",
  authDomain: "toys-world-e11ab.firebaseapp.com",
  projectId: "toys-world-e11ab",
  storageBucket: "toys-world-e11ab.appspot.com",
  messagingSenderId: "512421230354",
  appId: "1:512421230354:web:44af8e8706cd38dac9a5cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;