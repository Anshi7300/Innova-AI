import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "innova-96f48.firebaseapp.com",
  projectId: "innova-96f48",
  storageBucket: "innova-96f48.firebasestorage.app",
  messagingSenderId: "79680068928",
  appId: "1:79680068928:web:f39e1a50d493e5dda0eea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}

