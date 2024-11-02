import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAgy4xStFDSDqR9wrSbhRnnUeLnF4hGTDA",
  authDomain: "e-commerce-7a057.firebaseapp.com",
  projectId: "e-commerce-7a057",
  storageBucket: "e-commerce-7a057.appspot.com",
  messagingSenderId: "94395578396",
  appId: "1:94395578396:web:30b263ffccead5c78187d9",
  measurementId: "G-G7FS329YJN"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
