class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :genre
      t.integer :artist_id

      t.timestamps
    end
    add_index :tracks, :title
    add_index :tracks, :artist_id
    
  end
end
