import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyBHvCJSRRsXB5T5vej0TlvDYNunxQgZTHU",
  
    authDomain: "shelf-life-4e2ce.firebaseapp.com",
  
    projectId: "shelf-life-4e2ce",
  
    storageBucket: "shelf-life-4e2ce.appspot.com",
  
    messagingSenderId: "530065964184",
  
    appId: "1:530065964184:web:ab920c9a61f33b57ea64ed",
  
    measurementId: "G-P63CMP0KT9"
  
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;