import firebase from 'firebase/compat/app'; // Note the '/compat' in the import path
import 'firebase/compat/auth'; // Importing auth from 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAgvM3gYBiIjEzqF-YrlARPuUX0d90zTns",
  authDomain: "pumnrdc-dc166.firebaseapp.com",
  projectId: "pumnrdc-dc166",
  storageBucket: "pumnrdc-dc166.appspot.com",
  messagingSenderId: "434182342445",
  appId: "1:434182342445:web:ffa9cc015d9ef95f6ab5a4"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
