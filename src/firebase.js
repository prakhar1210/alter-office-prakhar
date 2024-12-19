// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSIgmpGjdT3p_1ygIqC6oDPnwOAdhQCbM",
  authDomain: "social-media-feed-prakhar.firebaseapp.com",
  projectId: "social-media-feed-prakhar",
  storageBucket: "social-media-feed-prakhar.firebasestorage.app",
  messagingSenderId: "237638703616",
  appId: "1:237638703616:web:bb9ff7eb0263c4e8da56e5",
  measurementId: "G-1KMETVRCYD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
