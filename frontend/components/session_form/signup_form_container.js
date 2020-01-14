import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'sign up'
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  closeModal: (modal) => dispatch(closeModal(modal))
});

export default connect(mSTP, mDTP)(SessionForm);
