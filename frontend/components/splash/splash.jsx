import React, {Component} from 'react';
import { openModal } from '../../actions/modal_actions';
import { fetchSplashTracks } from '../../actions/track_actions';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { connect } from 'react-redux';
 
class Splash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: this.props.tracks,
      hover: null
    }
  }

  componentDidMount() {
    this.props.fetchSplashTracks()
  }

  onHover(e) {
    // debugger;
    let that = this;
    // debugger;
    this.setState({hover: e.currentTarget.id});
    // debugger;
    const audioBars = document.getElementsByClassName("splash-audio");
    for (let i = 0; i < audioBars.length; i++) {
      // debugger;
      if (audioBars[i].id === that.state.hover) {
        // debugger;
      audioBars[i].style.removeProperty("display");
      }
      else {
        audioBars[i].style.display = "none";
      }
    }

  }

  // offHover() {
  //   this.setState({hover: ""});
  // }

  render() {

   

    const tracks = this.props.tracks.map((track) => {
      const playbutton = () => {
        if (this.state.hover == this.props.currentTrack.id) {
          return <button>pause</button>
        }
        else {
          return "";                                          
        }
      }

      return (
        <div className="track-box" 
              key={track.id}
              onHover>
          <img 
            src={track.imageUrl} id={track.id}
            onClick={()=>this.props.receiveCurrentTrack(track)} //this 'track' is the track from .map
            onMouseEnter={this.onHover.bind(this)}
            // onMouseLeave={this.offHover.bind(this)}
          />
          {/* {playbutton.bind(track)()} */}
          <audio className="splash-audio" id={track.id} controls>
            <source src={track.audioUrl}/>play mah shit
          </audio>
          <h4 className="title">{track.title}</h4>
          <h4 className="artist">{track.artist.username}</h4>
        </div>
      )
    })

    // const { id } = this.props.currentTrackInfo;
    // const { play } = this.props
    // const tracks = this.state.audioInfo.map((trackInfo, idx) => {
    //   let hoverPlay;
    //   let hoverCircle
    //   if (id === trackInfo.id && play) {
    //     hoverPlay = "fas fa-pause-circle fa-4x"
    //   }
    //   else if (!this.state.hover) {
    //     hoverPlay = ""
    //   }
    //   else if (this.state.hover && this.state.value === idx || !play && this.state.value === idx) {
    //     hoverPlay = "fas fa-play-circle fa-4x"
    //   }
    //   hoverCircle = (this.state.hover && this.state.value === idx) || (id === trackInfo.id && play) ? "fas fa-circle fa-4x" : "";
    //   return (
    //     <li className="cover-container" key={`info-${idx}`}>
    //       <img id={idx} src={trackInfo.imageUrl} className="cover"
    //         onMouseOver={this.onHover.bind(this)}
    //         onMouseOut={this.offHover.bind(this)} />
    //       <i className={hoverCircle}></i>
    //       <i className={hoverPlay} id={idx} onClick={this.handlePlay.bind(this)}
    //         onMouseOver={this.onHover.bind(this)}
    //         onMouseOut={this.offHover.bind(this)}></i>
    //       <p className="top-title">{trackInfo.title}</p>
    //       <p className="top-artist">{trackInfo.artist}</p>
    //     </li>
    //   )
    // })




    return (
      <div className="splash">
        <div className="banner">
          <input type="text" placeholder="search coming soon"/>
        </div>

        

        <div className="track-box-container">
          {tracks}
        </div>

      </div>
    );
  }
}

const mSTP = (state) => ({
  tracks: Object.values(state.entities.tracks),
  currentTrack: state.entities.currentTrack
});  

const mDTP = dispatch => ({
  fetchSplashTracks: () => dispatch(fetchSplashTracks()),
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track))
  //receiveCurrentTrack
});


export default connect(mSTP, mDTP)(Splash);








{/* <div style={{"backgroundColor": "white", height: "20vh"}}>
          <div className="banner" style={{
            width: "100%",
            height: "50px",
            backgroundColor: "whitesmoke",
            textAlign: "center"
          }}>
          </div>
          <div className="searchAndDiscovery" style={{
            width: "100%",
            height: "150px",
            backgroundColor: "whitesmoke"
          }}> 
            <input type="text" id="searchbox" placeholder="Search something"/>
            <button>Search for Songs </button>
            { this.state.isLoggedIn ? 
              <button onClick={() => {
                console.log("handler");
                openModal('upload');
              }}> Or Upload Song </button> 
              : null
            }
          </div> */}
{/* <div className="browseItems" style={{
            width: "100%",
            minHeight: "150px",
            backgroundColor: "whitesmoke"
          }}>

          </div>
        </div> */}