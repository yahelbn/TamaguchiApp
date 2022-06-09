// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA6RbZso8QA-3ziV5ckEvar9LJV2wRsZaw",
  authDomain: "tamaguapp.firebaseapp.com",
  projectId: "tamaguapp",
  storageBucket: "tamaguapp.appspot.com",
  messagingSenderId: "284696182638",
  appId: "1:284696182638:web:3a623f4046d66010990b7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;