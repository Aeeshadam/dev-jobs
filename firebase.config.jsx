import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_CONFIG_API_KEY,
  authDomain: "dev-jobs-b684a.firebaseapp.com",
  projectId: "dev-jobs-b684a",
  storageBucket: "dev-jobs-b684a.appspot.com",
  messagingSenderId: "174583148894",
  appId: "1:174583148894:web:7cd27b0e6579e676f89fcf",
  measurementId: "G-2Q2CB53KQ2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
