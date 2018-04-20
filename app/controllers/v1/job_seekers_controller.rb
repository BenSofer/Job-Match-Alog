class V1::JobSeekersController < ApplicationController
  def create
    job_seeker1 = JobSeeker.new(
      name: params[:name],
      email: params[:email],
      phone: params[:phone],
      zip:params[:zip],
      status: params[:status],
      occupation: params[:occupation],
      experience: params[:experience],
      work_value: params[:work_value],
      awesomeness: params[:awesomeness],
      file_upload: params[:file_upload]   
    )
    job_seeker1.save
    render json: job_seeker1.as_json
  end

  def index
    job_seekers = JobSeeker.all
    render json: job_seekers.as_json
  end 

  def show
    the_id = params[:id]
    job_seeker = JobSeeker.find_by(id: the_id)
    render json: job_seeker.as_json
  end

  def update 
    the_id = params[:id]
    job_seeker = JobSeeker.find_by(id: the_id)
    job_seeker.update(
      name: params[:name],
      email: params[:email],
      phone: params[:phone],
      zip:params[:zip],
      status: params[:status],
      occupation: params[:occupation],
      experience: params[:experience],
      work_value: params[:work_value],
      awesomeness: params[:awesomeness],
      file_upload: params[:file_upload] 
    )
    render json: job_seeker.as_json
  end 

  def destroy
    the_id = params[:id]
    job_seeker = JobSeeker.find_by(id: the_id)
    job_seeker.destroy
    render json: {message:"This job_seeker has been deleted"}
  end
end
