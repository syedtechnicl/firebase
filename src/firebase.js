// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtpxw9d2KkHlHx8Ntw6lZktVS0AaCvdUU",
  authDomain: "login-21baf.firebaseapp.com",
  projectId: "login-21baf",
  storageBucket: "login-21baf.appspot.com",
  messagingSenderId: "1096291999803",
  appId: "1:1096291999803:web:774ede1ca540b95a2ffc1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth};

