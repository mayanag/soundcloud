json.extract! track, :id, :title, :genre, :artist_id, :created_at
json.artist do
  json.extract! track.artist, :username
end
json.audioUrl url_for(track.audio)
json.imageUrl url_for(track.image)
