
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1eIDoDDriIQi8u9pOOFK6v9VsjTKkf1I",
  authDomain: "fjw-section-b.firebaseapp.com",
  projectId: "fjw-section-b",
  storageBucket: "fjw-section-b.firebasestorage.app",
  messagingSenderId: "660131293569",
  appId: "1:660131293569:web:e4b54a7b9b8444a6a2e080",
  measurementId: "G-2M10HL836X"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
};
