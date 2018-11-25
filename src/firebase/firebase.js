import firebase from "firebase";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC2BAPw7VA8Y0OvdIKWdkGKAStC73k1hwI",
  authDomain: "gymaniac-48f92.firebaseapp.com",
  databaseURL: "https://gymaniac-48f92.firebaseio.com",
  projectId: "gymaniac-48f92",
  storageBucket: "gymaniac-48f92.appspot.com",
  messagingSenderId: "649459104396"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
