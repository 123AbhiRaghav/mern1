// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "projectmanager-72309.firebaseapp.com",
  projectId: "projectmanager-72309",
  storageBucket: "projectmanager-72309.appspot.com",
  messagingSenderId: "70920533297",
  appId: "1:70920533297:web:2da3645cb45d5d3ae9ac10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);