import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAHxowFh-V3r5mwL9k9PjXjt8GnVG8I_-w',
  authDomain: 'wrilogs.firebaseapp.com',
  projectId: 'wrilogs',
  storageBucket: 'wrilogs.appspot.com',
  messagingSenderId: '1030815909753',
  appId: '1:1030815909753:web:cbe0b7ec17ef9ea7bb91a8',
  measurementId: 'G-CCW34J5M4Y',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
