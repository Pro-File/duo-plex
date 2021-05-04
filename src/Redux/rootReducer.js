import {combineReducers} from 'redux';
import modalReducer from './modals/modalReducer';
import authReducer from './auth/AuthReducer';
import movieReducer from './movies/movieReducer';
// import {storage} from 'redux-persist/lib/storage/session'; //Session Storage


var rootReducer = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    movies: movieReducer,
})



export default rootReducer;