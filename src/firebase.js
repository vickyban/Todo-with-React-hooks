import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB2u8hMyFgQTmQ0_x9YbeVOXcUEaNzzwr4",
  authDomain: "todolist-6763e.firebaseapp.com",
  databaseURL: "https://todolist-6763e.firebaseio.com",
  projectId: "todolist-6763e",
  storageBucket: "todolist-6763e.appspot.com",
  messagingSenderId: "228672967126",
  appId: "1:228672967126:web:cac4834a5840c29d655477"
});

export { firebaseConfig as firebase }