// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3IVCjrApwijF8j7xL6-jKX9V9Y-ZuPbY",
  authDomain: "toy-topia-website.firebaseapp.com",
  projectId: "toy-topia-website",
  storageBucket: "toy-topia-website.firebasestorage.app",
  messagingSenderId: "16416386925",
  appId: "1:16416386925:web:b7c50f8e7b2e530c0e7464"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;