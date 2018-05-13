class V1::JobsController < ApplicationController

  def create
    job1 = Job.new(
      occupation: params[:occupation],
      experience: params[:experience],
      work_value: params[:work_value],
      awesomeness: params[:awesomeness],
      file_upload: params[:file_upload],
      status: params[:status]
    )
    job1.save 
    
    jobseekers = JobSeeker.where(occupation: job1.occupation, experience:job1.experience, status:job1.status, zip:job1.business.zip)
    p jobseekers
    render json: job1.as_json
  end

  def index
    jobs = Job.all
    sofer = params[:z] 
    if sofer == "jobs8"  
      jobs = Job.last(8)
    end 
    render json: jobs.as_json
  end 

  def show
    the_id = params[:id]
    job = Job.find_by(id: the_id)
    render json: job.as_json
  end

    def update
    job = Job.find(params[:id])

    job.occupation = params[:occupation] || job.occupation
    job.experience = params[:experience] || job.experience
    job.work_value = params[:work_value] || job.work_value
    job.awesomeness = params[:awesomeness] || job.awesomeness
    job.file_upload = params[:file_upload] || job.file_upload
    if job.save!
      render json: job.as_json
    else
      render json: {errors: job.errors.full_messages}
    end
  end

  # def update 
  #   the_id = params[:id]
  #   job = Job.find_by(id: the_id)
  #   job.update(
  #     occupation: params[:occupation],
  #     experience: params[:experience],
  #     work_value: params[:work_value],
  #     awesomeness: params[:awesomeness],
  #     file_upload: params[:file_upload],
  #     status: params[:status]
  #   )
  #   render json: job.as_json
  # end 

  def destroy
    the_id = params[:id]
    job = Job.find_by(id: the_id)
    job.destroy
    render json: {message:"This job has been deleted"}
  end
end   
