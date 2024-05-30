// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA46UpTg6I8FLByo4JItYA8m140TeC4QGs",
  authDomain: "realtor-clone-react-afd8a.firebaseapp.com",
  projectId: "realtor-clone-react-afd8a",
  storageBucket: "realtor-clone-react-afd8a.appspot.com",
  messagingSenderId: "374466086773",
  appId: "1:374466086773:web:d48d7e867b7df25dd6753c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();