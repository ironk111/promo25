// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa0no_x4fJ3twaY5WEKYi3LTXKJ7bkJ9M",
  authDomain: "promo2025proa.firebaseapp.com",
  projectId: "promo2025proa",
  storageBucket: "promo2025proa.firebasestorage.app",
  messagingSenderId: "845968217069",
  appId: "1:845968217069:web:0d9fefe561e448cdf48de4",
  measurementId: "G-VTTZ8STGRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);