class Api::TracksController < ApplicationController
  def index
    if params[:splash]
      @tracks = Track.all.limit(3)
    else
      @tracks = Track.all
    end
  end

  def show
      @track = Track.find(params[:id])
      render "api/tracks/show"
  end

  def create
    @track = Track.new(track_params)
    @track.artist_id = current_user.id
    if !@track.image.attached?
        file = open('app/assets/images/anime-study-girl.jpg')
        @track.image.attach(io: file, filename: 'anime-study-girl.jpg') #yoo
    end
  
    if @track.save
        render 'api/tracks/show'
    else 
        render json: @track, status: :unprocessable_entity
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render json: {}
  end

  private
  def track_params
    params.require(:track).permit(:title, :genre, :artist_id)
  end


end
