json.users do
#render index of users, nested under their ids
end
json.tracks do
  #for each track render track show
end

@tracks.each do |track|
  json.set! track.id do
    json.partial! "api/tracks/track", track: track
    # json.partial! "api/users/user", user: track.artist
  end
end

