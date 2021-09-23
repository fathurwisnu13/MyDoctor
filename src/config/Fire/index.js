// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCTrITjasQUi_OuoL-BAyLiLV8gSRrq0hQ",
//   authDomain: "projectpi-92e90.firebaseapp.com",
//   databaseURL: "https://projectpi-92e90-default-rtdb.firebaseio.com",
//   projectId: "projectpi-92e90",
//   storageBucket: "projectpi-92e90.appspot.com",
//   messagingSenderId: "535141994829",
//   appId: "1:535141994829:web:e7d057ba7b62f2f9f4a704",
//   measurementId: "G-81S95CEYEY"
// };

// // Initialize Firebase
// const Fire = initializeApp(firebaseConfig);

// export default Fire


import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyCTrITjasQUi_OuoL-BAyLiLV8gSRrq0hQ",
    authDomain: "projectpi-92e90.firebaseapp.com",
    projectId: "projectpi-92e90",
    databaseURL: "https://projectpi-92e90-default-rtdb.firebaseio.com",
    storageBucket: "projectpi-92e90.appspot.com",
    messagingSenderId: "535141994829",
    appId: "1:535141994829:web:e7d057ba7b62f2f9f4a704",
    measurementId: "G-81S95CEYEY"
});

const Fire = firebase
export default Fire