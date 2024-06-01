
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgvM3gYBiIjEzqF-YrlARPuUX0d90zTns",
  authDomain: "pumnrdc-dc166.firebaseapp.com",
  projectId: "pumnrdc-dc166",
  storageBucket: "pumnrdc-dc166.appspot.com",
  messagingSenderId: "434182342445",
  appId: "1:434182342445:web:ffa9cc015d9ef95f6ab5a4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
