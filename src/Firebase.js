import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAae7TpRM2JQxuig3lTCA_eTNzrfSCO1A8",
  authDomain: "duo-plex.firebaseapp.com",
  projectId: "duo-plex",
  storageBucket: "duo-plex.appspot.com",
  messagingSenderId: "121689606891",
  appId: "1:121689606891:web:604ac0946d7aff9063ccae",
  measurementId: "G-G86XN7BDW8"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export var auth = firebase.auth();
  export var firestore = firebase.firestore();
  export var googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 
  export var serverTimestamp = () => {
    return firebase.firestore.FieldValue.serverTimestamp();
  };
  export var storage = firebase.storage().ref();

  export default firebase;
