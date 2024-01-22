// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxiZPRxu0GtAmhkIuYZrGcjl8_-pYG_j8",
  authDomain: "tourmeweb.firebaseapp.com",
  projectId: "tourmeweb",
  storageBucket: "tourmeweb.appspot.com",
  messagingSenderId: "915416656178",
  appId: "1:915416656178:web:4bd40847d55a7b2e43cf2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export {storage};