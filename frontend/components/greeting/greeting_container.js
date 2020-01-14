import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from '../../components/greeting/greeting'
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id] //we are mapping a prop called "currentUser" to our greeting component. It points to the user with the id stored in our session[id] slice of state.
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()), //we are mapping a prop called "logout" that contains a function that points to our logout ACTION
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Greeting);