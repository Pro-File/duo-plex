import { SET_MOVIES, REMOVE_MOVIES } from "./movieConstants";

var initialState = null;
var movieReducer = (state = initialState, action)=> {
    var {type, payload} = action;
    
    switch (type) {
        case SET_MOVIES:
            return payload.movies;
        case REMOVE_MOVIES:
            return null;
        default:
            return state;
    }
}
export default movieReducer;