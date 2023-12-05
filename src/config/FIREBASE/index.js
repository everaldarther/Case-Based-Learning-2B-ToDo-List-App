import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyAd-rm_iEunUy3L_5PqP0NS2x1D9JoMTX4",
  authDomain: "noteapps-4b51a.firebaseapp.com",
  databaseURL: "https://noteapps-4b51a-default-rtdb.firebaseio.com/",
  projectId: "noteapps-4b51a",
  storageBucket: "noteapps-4b51a.appspot.com",
  messagingSenderId: "169737179369",
  appId: "1:169737179369:web:94bf9b29659899f4026078"
});

const FIREBASE = firebase;

export default FIREBASE;