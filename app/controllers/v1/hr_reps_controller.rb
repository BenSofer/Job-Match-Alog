class V1::HrRepsController < ApplicationController
  def create
    hr_rep1 = HrRep.new(
      title: params[:title],
      name: params[:name],
      phone_1: params[:phone_1],
      phone_2: params[:phone_2],
      email: params[:email], 
    )
    hr_rep1.save
    render json: hr_rep1.as_json
  end

  def index
    hr_reps = HrRep.all
    render json: hr_reps.as_json
  end 

  def show
    the_id = params[:id]
    hr_rep = HrRep.find_by(id: the_id)
    render json: hr_rep.as_json
  end

  def update 
    the_id = params[:id]
    hr_rep = HrRep.find_by(id: the_id)
    hr_rep.update(
      title: params[:title],
      name: params[:name],
      phone_1: params[:phone_1],
      phone_2: params[:phone_2],
      email: params[:email], 
    )
    render json: hr_rep.as_json
  end 

  def destroy
    the_id = params[:id]
    hr_rep = HrRep.find_by(id: the_id)
    hr_rep.destroy
    render json: {message:"This hr_rep has been deleted"}
  end
end