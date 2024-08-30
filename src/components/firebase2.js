import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDzjEPHH4h8lqbBpfPMt8BiiG7v1A5QY1Y",
    authDomain: "contact-e6380.firebaseapp.com",
    databaseURL: "https://contact-e6380-default-rtdb.firebaseio.com",
    projectId: "contact-e6380",
    storageBucket: "contact-e6380.appspot.com",
    messagingSenderId: "331095978266",
    appId: "1:331095978266:web:d8f9a3e59541b9032efca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, addDoc };