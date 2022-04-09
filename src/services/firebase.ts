import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'
import 'firebase/compat/database'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA84TuadprOaAUBEE1vDyppncWgR7Gv3-g",
  authDomain: "letmeask-2d4c6.firebaseapp.com",
  databaseURL: "https://letmeask-2d4c6-default-rtdb.firebaseio.com",
  projectId: "letmeask-2d4c6",
  storageBucket: "letmeask-2d4c6.appspot.com",
  messagingSenderId: "995945245566",
  appId: "1:995945245566:web:2604aeb2462fe35487e12f",
  measurementId: "G-VTV8LQZ8W6"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

