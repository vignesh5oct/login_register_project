// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD38iKy8Ypygi-HvDAjysPgSYWtzmLy0ac",
  authDomain: "loginregister-3d1a1.firebaseapp.com",
  projectId: "loginregister-3d1a1",
  storageBucket: "loginregister-3d1a1.appspot.com",
  messagingSenderId: "996196124123",
  appId: "1:996196124123:web:e3adf5d53c403cd1e553fe",
  measurementId: "G-266WVEXQW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);