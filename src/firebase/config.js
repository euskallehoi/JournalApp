// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM0YnxR9u7h0tLISPYceQtti-qPqbWHlw",
  authDomain: "react-cursos-f0b4e.firebaseapp.com",
  projectId: "react-cursos-f0b4e",
  storageBucket: "react-cursos-f0b4e.appspot.com",
  messagingSenderId: "250718152656",
  appId: "1:250718152656:web:ca2200079924bd8fb3fbd5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );

