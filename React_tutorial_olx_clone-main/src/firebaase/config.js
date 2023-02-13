import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDjjwC1FJadSTWy7ZdZFrfKRQASrXkPdPI",
  authDomain: "reactproject-1efac.firebaseapp.com",
  projectId: "reactproject-1efac",
  storageBucket: "reactproject-1efac.appspot.com",
  messagingSenderId: "1068420717005",
  appId: "1:1068420717005:web:3f5918e2dd467b11ff8c84",
  measurementId: "G-Z33ZB8359Z"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
export default Firebase
