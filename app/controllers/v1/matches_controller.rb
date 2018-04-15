class V1::MatchesController < ApplicationController

  def create
    match1 = Match.new(
      jobs_id: params[:jobs_id],
      jod_seeker_id: params[:jod_seeker_id],
      status: params[:status]
    )
    match1.save
    render json: match1.as_json
  end

  def index
    matchs = Match.all
    render json: matchs.as_json
  end 

  def show
    the_id = params[:id]
    match = Match.find_by(id: the_id)
    render json: match.as_json
  end

  def update 
    the_id = params[:id]
    match = Match.find_by(id: the_id)
    match.update(
      jobs_id: params[:jobs_id],
      jod_seeker_id: params[:jod_seeker_id],
      status: params[:status]
    )
    render json: match.as_json
  end 

  def destroy
    the_id = params[:id]
    match = Match.find_by(id: the_id)
    match.destroy
    render json: {message:"This match has been deleted"}
  end
end


