// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuJBerr-PVeI6hISVAAe4Me3YQDWFGmQ8",
  authDomain: "nextjs-firebase-b1f30.firebaseapp.com",
  projectId: "nextjs-firebase-b1f30",
  storageBucket: "nextjs-firebase-b1f30.appspot.com",
  messagingSenderId: "189669121672",
  appId: "1:189669121672:web:1d0d6bc9bf7ac986c4493d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)