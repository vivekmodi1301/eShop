import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDABxgEEty748KuQD9FwYsH6o2r611i-kk",
    authDomain: "eshop-5011b.firebaseapp.com",
    projectId: "eshop-5011b",
    storageBucket: "eshop-5011b.appspot.com",
    messagingSenderId: "161975786551",
    appId: "1:161975786551:web:f986170693285c04cef3b2",
    measurementId: "G-4FQFGMCM17"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db,auth}; 