// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj5kP-87Lp3_Dk70BA8ImxXp41TGYPAow",
  authDomain: "chefs-information.firebaseapp.com",
  projectId: "chefs-information",
  storageBucket: "chefs-information.appspot.com",
  messagingSenderId: "578364035886",
  appId: "1:578364035886:web:bf3817cb608894e9dea0bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;