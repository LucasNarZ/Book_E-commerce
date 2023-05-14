import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4oagfk5stTcqANepdcVNhYbWlkOG2Mpc",
  authDomain: "e-commerce-1027d.firebaseapp.com",
  projectId: "e-commerce-1027d",
  storageBucket: "e-commerce-1027d.appspot.com",
  messagingSenderId: "1003874331956",
  appId: "1:1003874331956:web:e62fa5c00400e5c4488961",
  measurementId: "G-ZMGYEKDZ13"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
