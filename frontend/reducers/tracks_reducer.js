import { RECEIVE_TRACK, RECEIVE_TRACKS } from "../actions/track_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const tracksReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState;
  switch (action.type) {
    case RECEIVE_TRACKS:
      nextState = Object.assign({}, state, action.tracks);
      return nextState;
    case RECEIVE_TRACK:
      nextState = Object.assign({}, state, { [action.track.id]: action.track })
      return nextState;
    // case REMOVE_TRACK:
    //   let newState = merge({}, state);
    //   delete newState[action.trackId];
    //   return newState;
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default tracksReducer;