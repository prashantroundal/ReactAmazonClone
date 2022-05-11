// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZoxxNb5risv7AJnWGZ7SHi-kh9buwJts",
  authDomain: "clone-4fe18.firebaseapp.com",
  projectId: "clone-4fe18",
  storageBucket: "clone-4fe18.appspot.com",
  messagingSenderId: "274373876585",
  appId: "1:274373876585:web:2caffe0083ddcf009abbf8",
  measurementId: "G-MHJGJRX0HS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
