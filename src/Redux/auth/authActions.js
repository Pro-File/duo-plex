import {
  auth,
  firestore,
  serverTimestamp,
  googleAuthProvider,
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

export var signup = ({ email, password, fullName }) => async (dispatch) => {
  try {
    //create user on firebase auth section
    var { user: { uid } } = await auth.createUserWithEmailAndPassword(email, password);

    //save user data to firestore
    var userInfo = {
      fullName,
      email,
      createdAt: serverTimestamp(),
    };
    console.log(userInfo);

    await firestore.collection("users").doc(uid).set(userInfo);

    //navigate to hom page
    // history.push("/")
  } catch (error) {
    console.log(error);
  }
};

export var signin = ({ email, password }) => async (dispatch) => {
  try {
    //signin user with auth
    await auth.signInWithEmailAndPassword(email, password);

    //navigate to hom page
    // history.push("/")
  } catch (error) {
    console.log(error);
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
        fullName: displayName,
        email,
        photo: photoURL,
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
        var { fullName, email, photo } = query.data();
        //setting up redux state
        var userDataForState = {
          fullName,
          email,
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
