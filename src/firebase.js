// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5LmmufZcOVuyjFwYp7YGY9TfGuQ0CNW8",
  authDomain: "educationandoutreachtool-47d7b.firebaseapp.com",
  databaseURL:
    "https://educationandoutreachtool-47d7b-default-rtdb.firebaseio.com",
  projectId: "educationandoutreachtool-47d7b",
  storageBucket: "educationandoutreachtool-47d7b.appspot.com",
  messagingSenderId: "843595787189",
  appId: "1:843595787189:web:78fc42b7a2af208a5507fc",
  measurementId: "G-0JWG5BT7GN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const fireStore = firebase.firestore();
const fireData = ref(getDatabase());

export { fireStore, storage, fireData };
