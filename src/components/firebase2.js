import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDTBEZLNKhhYdenBtIxXayyaDirONWE7XI",
    authDomain: "seprate-database.firebaseapp.com",
    projectId: "seprate-database",
    storageBucket: "seprate-database.appspot.com",
    messagingSenderId: "827847101777",
    appId: "1:827847101777:web:206fe9a75b53b4560f5770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, addDoc };