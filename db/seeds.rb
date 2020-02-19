# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
 require 'open-uri'
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do

  User.destroy_all
  Track.destroy_all

  demo = User.create!(
    username: 'demo_user',
    email: 'demo@gmail.com',
    password: 'demo123'
  )

  maya = User.create!(
    username: 'unagi',
    email: 'unagi@maya.com',
    password: 'maya123'
  )

  frank = User.create!(
    username: 'frank ocean',
    email: 'frank@ocean.com',
    password: 'frank123'
  )

  raveena = User.create!(
    username: 'raveena',
    email: 'raveena@honey.com',
    password: 'raveena123'
  )

  viscous = Track.create!(
    title: "viscous (prod. jdawa)",
    artist_id: maya.id,
    genre: "r&b"
  )

  sierra = Track.create!(
    title: "sierra leone",
    artist_id: frank.id,
    genre: "legendary"
  )

  if_only = Track.create!(
    title: "if only",
    artist_id: raveena.id,
    genre: "r&b"
  )

 debugger
  viscous_audio = open("https://sowndclowd-aa-dev.s3-us-west-1.amazonaws.com/Viscous+ft.+Maya+Unagi+(prod.+jdawa).m4a")
  viscous_image = open("https://sowndclowd-aa-dev.s3-us-west-1.amazonaws.com/s6uNzFdTbkCDcXfgetgE7eDd")

  viscous.audio.attach(io: viscous_audio, filename: "viscous.m4a")
  viscous.image.attach(io: viscous_image, filename: "viscous.jpg")


  sierra_audio = open("https://sowndclowd-aa-dev.s3-us-west-1.amazonaws.com/04+Sierra+Leone.m4a")
  sierra_image = open("https://sowndclowd-aa-dev.s3-us-west-1.amazonaws.com/channel-orange.jpg")

  sierra.audio.attach(io: sierra_audio, filename: "sierra_leone.m4a")
  sierra.image.attach(io: sierra_image, filename: "sierra_leone.jpg")

  if_only_audio = open("https://sowndclowd-aa-dev.s3-us-west-1.amazonaws.com/1+If+Only.mp3")
  if_only_image = open("https://sowndclowd-aa-dev.s3-us-west-1.amazonaws.com/0001.jpg")

  if_only.audio.attach(io: if_only_audio, filename: "if_only.m4a")
  if_only.image.attach(io: if_only_image, filename: "if_only.jpg")

end