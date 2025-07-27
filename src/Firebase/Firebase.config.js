// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVTj9Zzsclxx317DDjVcpHzT_okxa3o_0",
  authDomain: "coffee-app-663ea.firebaseapp.com",
  projectId: "coffee-app-663ea",
  storageBucket: "coffee-app-663ea.firebasestorage.app",
  messagingSenderId: "50199952016",
  appId: "1:50199952016:web:6cf2875e31cb3f88663615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);