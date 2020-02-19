import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal_actions';

const Footer = (props) => {

  return (

  <div>
      <div>hope you enjoyed your experience</div>
      <button onClick={() => props.openModal('signup')}>don't have an account?</button>
  </div>
  )
}

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(null, mDTP)(Footer);

