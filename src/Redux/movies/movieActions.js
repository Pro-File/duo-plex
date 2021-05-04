import { v4 as uuid } from 'uuid';
import {
  auth,
  firestore,
  serverTimestamp,
  googleAuthProvider,
  storage,
} from "./../../../src/Firebase";

import { SET_MOVIES, REMOVE_MOVIES } from "./movieConstants";
import firebase from "./../../Firebase";

export var setMovies = (movies) => ({
    type: SET_MOVIES,
    payload: {
      movies,
    },
  });

  export var removeMovies = () => ({
    type: REMOVE_MOVIES,
  });

  
//app auth state (centralize auth manager for our app)
export var FetchMovieonAuth = () => async (dispatch) => {
    try {
      //firebase auth listener
      firebase.auth().onAuthStateChanged(async function (user) {
        if (user) {
            var FetchedMovies = [];
          //fetch user data from firestore
          var query = await firestore.collection("movies").get();
        
          query.forEach(doc => {
            var movieObj = {
                id: doc.id,
                ...doc.data()
            }
              FetchedMovies.push(movieObj)
            //   console.log(doc.data())
          })
        //   var { Name, Email, photo } = query.data();
          //setting up redux state
          dispatch(setMovies(FetchedMovies));
        } else {
          // No user is signed in.
          //set auth state to null
          dispatch(removeMovies());
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  export var FetchSpecificMovie = (id) => async (dispatch) => {
    try {
      var query = await firestore.collection("movies").doc(id).get();
      var fetchedData = query.data();
      return fetchedData;
    } catch (error) {
      console.log(error)
    }
  }