class Track < ApplicationRecord
  validates :title, :genre, :artist_id, presence: true
   has_one_attached :image
   has_one_attached :audio

   belongs_to :artist,
   foreign_key: :artist_id,
   primary_key: :id,
   class_name: 'User'

end
