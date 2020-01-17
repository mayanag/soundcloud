import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { openModal, closeModal } from '../../actions/modal_actions';

class UploadFormContainer extends Component {

    constructor(props) {
      super(props);


        console.log("upload form")


      }

        handleImageSelect() {



        }


        handleAudioSelect() {


        }


        submit() {
              /// call the api 

        }

    render() {
      return (
          <div>
            <label> Image </label>
            <form onSubmit={this.submit} >
              <input 
                onChange={this.handleImageSelect}
                type="file"
                id="avatar" name="avatar"
                accept="image/png"/>
              <label> Mp3 </label>
              <input type="file"
                id="avatar" name="avatar"
                accept=""/>
                </form>
          </div>
      );
    }
}


/*
  1) get the modal to pop up 
  2) 

*/
export default UploadFormContainer;

//export default connect(mSTP, mDTP)(UploadFormContainer);