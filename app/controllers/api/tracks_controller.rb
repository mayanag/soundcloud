class Api::TracksController < ApplicationController
  def index

  end

  def show
      @track = Track.find(params[:id])
      render "api/tracks/show"
  end

  def create
    @track = Track.new(track_params)
    if !@track.image.attached?
        file = open('app/assets/images/anime-study-girl.jpg')
        @track.image.attach(io: file, filename: 'anime-girl.jpg') #yoo
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
    render "api/tracks/show"
  end

  private
  def track_params
    params.require(:track).permit(:title, :genre, :artist_id, )
  end


end
