// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyChlTwjb8ztVCRTh5d31laHzUqhVrCJWe4',
  authDomain: 'roadai-a2d30.firebaseapp.com',
  projectId: 'roadai-a2d30',
  storageBucket: 'roadai-a2d30.appspot.com',
  messagingSenderId: '376777208862',
  appId: '1:376777208862:web:560891b8caf2e11c4daa0f',
  measurementId: 'G-SN7R79NZQZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
