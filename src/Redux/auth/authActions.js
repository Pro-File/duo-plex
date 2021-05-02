import { v4 as uuid } from 'uuid';
import {
  auth,
  firestore,
  serverTimestamp,
  googleAuthProvider,
  storage,
} from "./../../../src/Firebase";

import { REMOVE_USER, SET_USER } from "./AuthConstants";
import firebase from "./../../Firebase";
// import history from "../../history/history"

export var setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export var removeUser = () => ({
  type: REMOVE_USER,
});

export var signup = (user)=> {
  try {
        // 1-  send file to storage and get URL
        var imageRef = storage.child(`users/img-${uuid()}.jpg`);
        var fileListener = imageRef.put(user.photo);
        // fileListener.on(event_type, cb-Status, cb-error-handling, cb-will trigger after file being uploaded)
        fileListener.on("state_changed", (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is '+progress+'% done..');
        },
        (error)=>{
            console.log(error);
        },
        async()=>{
            var downloadURL = await imageRef.getDownloadURL();
            // 2- Modify productObj with photo and createdAt
            // console.log(downloadURL)
            user.photo = downloadURL;
    //         // 3- create doc in the firestore Products  
    //         //create user on firebase auth section
    var { user: { uid } } = await auth.createUserWithEmailAndPassword(user.Email, user.Pass);

      // console.log(user);

    await firestore.collection("users").doc(uid).set(user);

    //navigate to hom page
    // history.push("/home")
            
        }
        );
      return true;

  } catch (error) {
    console.log(error);
    return false;
  }
};

export var signin = (user) => async (dispatch) => {
  try {
    // console.log(user)
    //signin user with auth
    await auth.signInWithEmailAndPassword(user.Email, user.Pass);
    return true;
    //navigate to hom page
    // history.push("/")
  } catch (error) {
    console.log(error);
    return false;
  }
};

export var signout = () => async (dispatch) => {
  try {
    //signout user from firebase auth
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};

export var googleSignin = () => async (dispatch) => {
  try {
    //signin user in firebase auth (google)
    var {
      user: { displayName, email, uid, photoURL },
      additionalUserInfo: { isNewUser },
    } = await auth.signInWithPopup(googleAuthProvider);
    if (isNewUser) {
      //if new user -> add info to fire store
      var userInfo = {
        Name: displayName,
        Email: email,
        photo: photoURL,
        uid,
        createdAt: serverTimestamp(),
      };
      await firestore.collection("users").doc(uid).set(userInfo);
      
    }
  } catch (error) {
    console.log(error);
  }
};


//app auth state (centralize auth manager for our app)
export var checkAuthStatus = () => async (dispatch) => {
  try {
    //firebase auth listener
    firebase.auth().onAuthStateChanged(async function (user) {
      if (user) {
        // User is signed in.
        var { uid } = user;
        //fetch user data from firestore
        var query = await firestore.collection("users").doc(uid).get();
        var { Name, Email, photo } = query.data();
        //setting up redux state
        var userDataForState = {
          Name,
          Email,
          photo,
          uid,
        };
        dispatch(setUser(userDataForState));
      } else {
        // No user is signed in.
        //set auth state to null
        dispatch(removeUser());
      }
    });
  } catch (error) {
    console.log(error);
  }
};
