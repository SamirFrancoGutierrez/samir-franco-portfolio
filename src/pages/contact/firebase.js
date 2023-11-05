import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAkPPLg19w4WLBBdB1ONt373ED5gEA6070',
  authDomain: 'portfoliosamir-14de3.firebaseapp.com',
  projectId: 'portfoliosamir-14de3',
  storageBucket: 'portfoliosamir-14de3.appspot.com',
  messagingSenderId: '141433140028',
  appId: '1:141433140028:web:67d845c75e844cec51a439',
  measurementId: "G-Q80HJGHJQ0"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };