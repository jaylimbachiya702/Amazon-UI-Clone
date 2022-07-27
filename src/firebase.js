import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHuYbYphGcF0at8usRXm0WZo6nPUATrSc",
    authDomain: "clone-3b1c5.firebaseapp.com",
    projectId: "clone-3b1c5",
    storageBucket: "clone-3b1c5.appspot.com",
    messagingSenderId: "191739083420",
    appId: "1:191739083420:web:afc2a07609ac2553034b59",
    measurementId: "G-Q4FJGVBFNN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };