// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";  

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaPsF_WPGTKxAZgLhQeBOmhH22tJgAy8I",
  authDomain: "ecommerce-bosatta.firebaseapp.com",
  projectId: "ecommerce-bosatta",
  storageBucket: "ecommerce-bosatta.firebasestorage.app",
  messagingSenderId: "914259708081",
  appId: "1:914259708081:web:e9a81cdf92d8789b4bba90"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

 const db = getFirestore()

 export default db