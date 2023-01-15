import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZPYn9O_HAVH2GhNNQM8bDV2VYbzBeoA4",
    authDomain: "sc-next.firebaseapp.com",
    projectId: "sc-next",
    storageBucket: "sc-next.appspot.com",
    messagingSenderId: "1027010199630",
    appId: "1:1027010199630:web:8a2e5475f62e71bcfa431f",
    measurementId: "G-Q9FHWP8Q60"
};



export const FirebaseApp = initializeApp(firebaseConfig);