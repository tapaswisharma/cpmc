import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAkbLpjnCNWzQ9FJYZSJNcsRXtZ_v95sp8",
  authDomain: "react-contact-dd820.firebaseapp.com",
  projectId: "react-contact-dd820",
  storageBucket: "react-contact-dd820.appspot.com",
  messagingSenderId: "369484168137",
  appId: "1:369484168137:web:25ff864a15f74488e20618",
  measurementId: "G-B9TR6S5Z5X"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();