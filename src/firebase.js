import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfNPb3Rvq14ZWG9G_zsBFUoWctHCjJSzA",
  authDomain: "whats-app-clone-a8afb.firebaseapp.com",
  databaseURL: "https://whats-app-clone-a8afb.firebaseio.com",
  projectId: "whats-app-clone-a8afb",
  storageBucket: "whats-app-clone-a8afb.appspot.com",
  messagingSenderId: "762460690540",
  appId: "1:762460690540:web:f65eaad31c9f806efea049",
  measurementId: "G-1Y85KBERXB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;