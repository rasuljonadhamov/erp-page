// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMFRejVkUdcF78JR854JWMdtjLAx0YCjk",
  authDomain: "best-school-51359.firebaseapp.com",
  projectId: "best-school-51359",
  storageBucket: "best-school-51359.appspot.com",
  messagingSenderId: "1013345936824",
  appId: "1:1013345936824:web:c289f33abe9f855dfb9b4d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
