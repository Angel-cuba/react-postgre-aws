// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "aws-url-react.firebaseapp.com",
  projectId: "aws-url-react",
  storageBucket: "aws-url-react.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;