import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions'
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'log in'
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  closeModal: (modal) => dispatch(closeModal(modal))

});

export default connect(mSTP, mDTP)(SessionForm);