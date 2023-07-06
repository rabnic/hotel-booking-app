import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4jjc8DNsYsxTaxAdhY98kCiitok-58k0",
    authDomain: "hotel-app-f6ef9.firebaseapp.com",
    projectId: "hotel-app-f6ef9",
    storageBucket: "hotel-app-f6ef9.appspot.com",
    messagingSenderId: "668661025183",
    appId: "1:668661025183:web:33f4702258caf90dbb95aa",
    measurementId: "G-GYBK5P9EKQ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



