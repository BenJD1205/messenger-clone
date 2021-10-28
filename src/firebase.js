import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCHQlSb2v-qMzH4daYoR4939AzvTNjH82Q",
    authDomain: "messenger-660bf.firebaseapp.com",
    projectId: "messenger-660bf",
    storageBucket: "messenger-660bf.appspot.com",
    messagingSenderId: "8043976491",
    appId: "1:8043976491:web:22974543f69d2de554976e"
  }).auth();