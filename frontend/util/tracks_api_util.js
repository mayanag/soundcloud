// AJAX calls
export const fetchAllTracks = () => {
  return $.ajax({
    url: '/api/tracks',
    method: 'GET',
    // data: { user }
  })
};

export const fetchSplashTracks = () => (
  $.ajax({
    url: '/api/tracks?splash=true',
    method: 'GET'
    // data: { tracks }
  })
);

export const createTrack = (track) => {
  return $.ajax({
    method: "POST",
    url: "/api/tracks",
    data: track,
    contentType: false,
    processData: false,
  })
}

