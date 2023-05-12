import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAQ_RWVGnb0QmMGDd9I_oh9M86Fx5Q8dN4",
    authDomain: "simpl-tax.firebaseapp.com",
    projectId: "simpl-tax",
    storageBucket: "simpl-tax.appspot.com",
    messagingSenderId: "699060164969",
    appId: "1:699060164969:web:674152dff0cde6bcbc05f8",
    measurementId: "G-Y7SY65HXGE"
  };
  
const app=initializeApp(firebaseConfig);
  export default getFirestore(app);