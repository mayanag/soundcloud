import * as TracksAPIUtil from '../util/tracks_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// Regular actions
export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});


// Thunk Actions
export const fetchSplashTracks = (tracks) => (dispatch) => (
  TracksAPIUtil.fetchSplashTracks(tracks)
    .then(tracks => {
      // debugger;
      dispatch(receiveTracks(tracks))
    },
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const fetchAllTracks = (tracks) => (dispatch) => (
  TracksAPIUtil.fetchAllTracks(tracks)
    .then(tracks => dispatch(receiveTracks(tracks)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const createTrack = (track) => (dispatch) => (
  TracksAPIUtil.createTrack(track)
    .then(track => dispatch(receiveTrack(track)),
      err => dispatch(receiveErrors(err))
    )
);
