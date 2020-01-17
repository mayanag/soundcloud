import * as TrackAPIUtil from '../util/tracks_api_util';

export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";

export const receiveCurrentTrack = (currentTrack) => ({
  type: RECEIVE_CURRENT_TRACK,
  currentTrack
});


