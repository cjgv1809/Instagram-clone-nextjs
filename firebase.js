import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAwm_vuHroQVxXCxfcc7T7n3n73haO8njg",
  authDomain: "instagram-clone-nextjs-d2c3b.firebaseapp.com",
  projectId: "instagram-clone-nextjs-d2c3b",
  storageBucket: "instagram-clone-nextjs-d2c3b.appspot.com",
  messagingSenderId: "97377462398",
  appId: "1:97377462398:web:89f1197f6ff3c2c35bd02f",
  measurementId: "G-P5RD691YP5",
};

// Initialize Firebase, checking if it's already initialized, otherwise continue with the current app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
