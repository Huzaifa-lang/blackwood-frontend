import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgEKgJIM0evYx8k5k5daGEFuQhOApN6Ls",
  authDomain: "blackwoood-1a757.firebaseapp.com",
  projectId: "blackwoood-1a757",
  storageBucket: "blackwoood-1a757.firebasestorage.app",
  messagingSenderId: "499676253586",
  appId: "1:499676253586:web:fd063054426b320a26854b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
