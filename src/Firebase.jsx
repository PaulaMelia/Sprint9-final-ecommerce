// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBrd8KqeppnPxCgYI3NAdwaCgtnacIdrA",
  authDomain: "sprint9-login.firebaseapp.com",
  projectId: "sprint9-login",
  storageBucket: "sprint9-login.appspot.com",
  messagingSenderId: "1045526549275",
  appId: "1:1045526549275:web:0ccfa529dd1000673ef9be"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);