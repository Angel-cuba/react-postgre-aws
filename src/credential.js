// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9-w4DRpupkZrrbBhwCUVcrzLSBT0-VX0",
  authDomain: "aws-url-react.firebaseapp.com",
  projectId: "aws-url-react",
  storageBucket: "aws-url-react.appspot.com",
  messagingSenderId: "492242200867",
  appId: "1:492242200867:web:c5ac2eaf4f7d90d7aec496"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;