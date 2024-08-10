import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKimRvQDXj0xEY1uSlt9AFPKZhytBQjr8",
  authDomain: "instagram-clone-83704.firebaseapp.com",
  databaseURL: "https://instagram-clone-83704-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-83704",
  storageBucket: "instagram-clone-83704.appspot.com",
  messagingSenderId: "244423322305",
  appId: "1:244423322305:web:ca65a6884278c3d44d0240",
  measurementId: "G-HBDZ5J5E7N",
};

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };
