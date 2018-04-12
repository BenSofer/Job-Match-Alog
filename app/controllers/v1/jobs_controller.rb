class V1::JobsController < ApplicationController

  def create
    job1 = Job.new(
      occupation: params[:occupation],
      experience: params[:experience],
      work_value: params[:work_value],
      job_awesomeness: params[:awesomeness],
      file_upload: params[:file_upload],
      status: params[:status]
    )
    job1.save
    render json: job1.as_json
  end

  def index
    jobs = Job.all
    render json: jobs.as_json
  end 

  def show
    the_id = params[:id]
    job = Job.find_by(id: the_id)
    render json: job.as_json
  end

  def update 
    the_id = params[:id]
    job = Job.find_by(id: the_id)
    job.update(
      occupation: params[:occupation],
      experience: params[:experience],
      work_value: params[:work_value],
      job_awesomeness: params[:awesomeness],
      file_upload: params[:file_upload],
      status: params[:status]
    )
    render json: job.as_json
  end 

  def destroy
    the_id = params[:id]
    job = Job.find_by(id: the_id)
    job.destroy
    render json: {message:"This job has been deleted"}
  end
end   
