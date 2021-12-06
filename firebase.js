import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB5N4GJu9l6yJra27zTq7a6KMT0jvSQUXY",
    authDomain: "rn-uber-clone-5cf9d.firebaseapp.com",
    projectId: "rn-uber-clone-5cf9d",
    storageBucket: "rn-uber-clone-5cf9d.appspot.com",
    messagingSenderId: "708569908621",
    appId: "1:708569908621:web:b29564332c2e9d96bd29c4",
    measurementId: "G-GYTYT1JHZE"
  };


  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;