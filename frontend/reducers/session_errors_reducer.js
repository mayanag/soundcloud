import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';
// our state has a key of errors, which has a key of session nested within it: errors: { session: [] }
// we want an array, because the session errors slice of state is just an array...
const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
}; 

export default sessionErrorsReducer;
