// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbvFmZ00dX4fCkNQASIIKnuw4cp_Q1TPU",
  authDomain: "test-cc614.firebaseapp.com",
  databaseURL: "https://test-cc614.firebaseio.com",
  projectId: "test-cc614",
  storageBucket: "test-cc614.appspot.com",
  messagingSenderId: "549224067825",
  appId: "1:549224067825:web:f03ae6bc290fcbb0b9ef50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;