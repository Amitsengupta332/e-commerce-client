import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectIdy,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

export const app = initializeApp(firebaseConfig);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB5BEWEZdS6LE3c_3SkeY2rTdezeEFB7fs",
//   authDomain: "e-commerce-shop-f59de.firebaseapp.com",
//   projectId: "e-commerce-shop-f59de",
//   storageBucket: "e-commerce-shop-f59de.firebasestorage.app",
//   messagingSenderId: "376783404166",
//   appId: "1:376783404166:web:0a86c3a478090d1f21e507"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
