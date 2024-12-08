// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxEg3uiwTvqvAKIZnv9SZq6-11lMrJEWI",
  authDomain: "visa-navigator-896db.firebaseapp.com",
  projectId: "visa-navigator-896db",
  storageBucket: "visa-navigator-896db.firebasestorage.app",
  messagingSenderId: "1085344746627",
  appId: "1:1085344746627:web:b6fc4fe4e6f9e320c19fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;