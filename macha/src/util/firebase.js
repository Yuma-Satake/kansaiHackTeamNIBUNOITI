import { initializeApp } from "firebase/app";
import { getAnalytics, GoogleAuthProvider } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjdIJn5-b_7JcwUJSyt7MDnkrVkGlRxNE",
  authDomain: "macha-1993d.firebaseapp.com",
  projectId: "macha-1993d",
  storageBucket: "macha-1993d.appspot.com",
  messagingSenderId: "297424317113",
  appId: "1:297424317113:web:8f7f3c81e20b447540c968",
  measurementId: "G-NWZENZFGX5"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
