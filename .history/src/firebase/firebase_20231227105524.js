import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7PTUWzM6oMtfXeTMyPtZRp8ISkYv-9c0",
  authDomain: "portfolio-e3f18.firebaseapp.com",
  projectId: "portfolio-e3f18",
  storageBucket: "portfolio-e3f18.appspot.com",
  messagingSenderId: "709727537482",
  appId: "1:709727537482:web:86663b20bf2b245319d9b3"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);




const db = firebase.firestore();
export { db };