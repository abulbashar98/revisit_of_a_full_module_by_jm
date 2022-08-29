// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1iI88IwsagFRRKGdKH3eOusoUmCD-GtQ",
    authDomain: "gen-car-ser-again.firebaseapp.com",
    projectId: "gen-car-ser-again",
    storageBucket: "gen-car-ser-again.appspot.com",
    messagingSenderId: "159102628115",
    appId: "1:159102628115:web:1b4880dca60f6ec821aae6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;