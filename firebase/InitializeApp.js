import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnTkqWlf1PCtJvPmAcaKIIAgwbgpnMy0A",
  authDomain: "home-services-ead5e.firebaseapp.com",
  projectId: "home-services-ead5e",
  storageBucket: "home-services-ead5e.appspot.com",
  messagingSenderId: "32857876943",
  appId: "1:32857876943:web:b341a543d95e974c118aba",
  measurementId: "G-X9BFJ6RY6F",
};

let db;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (err) {
  console.log(err);
}

export default db;
