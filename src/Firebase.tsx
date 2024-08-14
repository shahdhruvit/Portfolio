import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBEzHJb_g1VPEGqEIl55oVp8BfkDA9UEao",
  authDomain: "portfolio-e8aaf.firebaseapp.com",
  projectId: "portfolio-e8aaf",
  storageBucket: "portfolio-e8aaf.appspot.com",
  messagingSenderId: "896871168184",
  appId: "1:896871168184:web:43b66ffc5bfcc57b129c4d",
  measurementId: "G-YE7N3N9HZN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
