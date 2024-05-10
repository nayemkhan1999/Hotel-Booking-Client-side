// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCviTGpFBURLF9Y1xtmGQoY0HY75WVvP40",
  authDomain: "hotel-booking-d7e89.firebaseapp.com",
  projectId: "hotel-booking-d7e89",
  storageBucket: "hotel-booking-d7e89.appspot.com",
  messagingSenderId: "813736894780",
  appId: "1:813736894780:web:f96d44cfda9757d8d77e39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
