// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm73J9kTJRNIFWhYh5cubjvhXeY7odqFA",
  authDomain: "dragon-news-ed7e0.firebaseapp.com",
  projectId: "dragon-news-ed7e0",
  storageBucket: "dragon-news-ed7e0.firebasestorage.app",
  messagingSenderId: "698351543947",
  appId: "1:698351543947:web:58d25d1e14e2bbed5e568e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;