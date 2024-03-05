// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC-TpzViGIIXup8nmv7SbBfgUza05i4F7s",
  authDomain: "computertechnology-cbpi.firebaseapp.com",
  projectId: "computertechnology-cbpi",
  storageBucket: "computertechnology-cbpi.appspot.com",
  messagingSenderId: "742878241690",
  appId: "1:742878241690:web:4980283bd6bb60d1495023",
  measurementId: "G-XHJ6RKJ2H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)