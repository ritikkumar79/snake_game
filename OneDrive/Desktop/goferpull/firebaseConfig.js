// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7bsgC-oi8GWkiKNpEfTf91sCwrc-yHE8",
  authDomain: "safetyshaper.firebaseapp.com",
  projectId: "safetyshaper",
  storageBucket: "safetyshaper.appspot.com",
  messagingSenderId: "333346093969",
  appId: "1:333346093969:web:6cbe368aaf215637f1b830",
  measurementId: "G-19KY1DSYRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
