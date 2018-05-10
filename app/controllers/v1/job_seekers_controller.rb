class V1::JobSeekersController < ApplicationController
    def create
    job_seeker1 = JobSeeker.new(
       # database name ----- index.js
      name: params[:seeker_name],
      email: params[:seeker_email],
      password: params[:seeker_password],
      password_confirmation: params[:seeker_password_confirmation],
      phone: params[:seeker_phone],
      zip:params[:seeker_zip],
      # status: params[:seeker_status],
      occupation: params[:seeker_occupation],
      experience: params[:seeker_experience],
      work_value: params[:seeker_work_value],
      awesomeness: params[:seeker_awesomeness],
      file_upload: params[:seeker_file_upload]   
    )
    if job_seeker1.save
      # render json: job_seeker1.as_json
      render json: {message: 'Job Seeker created successfully'}, status: :created
    else
      render json: {errors: job_seeker.errors.full_messages}, status: :bad_request
    end
  end

  def index
    job_seekers = JobSeeker.all
    ben = params[:q] 
    if ben == "seekers3"  
      job_seekers = JobSeeker.last(3)
    end 
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
