class V1::BusinessesController < ApplicationController
  def create
    business1 = Business.new(
      name: params[:name],
      address: params[:address],
      zip:params[:zip],
      website: params[:website],
    )
    business1.save
    render json: business1.as_json
  end

  def index
    business = Business.all
    render json: business.as_json
  end 

  def show
    the_id = params[:id]
    business = Business.find_by(id: the_id)
    render json: business.as_json
  end

  def update 
    the_id = params[:id]
    business = Business.find_by(id: the_id)
    business.update(
      name: params[:name],
      address: params[:address],
      zip:params[:zip],
      website: params[:website], 
    )
    render json: business.as_json
  end 

  def destroy
    the_id = params[:id]
    business = Business.find_by(id: the_id)
    business.destroy
    render json: {message:"This business has been deleted"}
  end
end
