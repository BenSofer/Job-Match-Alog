class V1::BusinessesController < ApplicationController
  def create
    business1 = Business.new(
   # database name ----- index.js
      name: params[:name],
      address: params[:address],
      zip:params[:zip],
      website: params[:website]
    )
    business1.save

    hr_rep1 = HrRep.new(
       title: params[:hr_title],
       name: params[:hr_name],
       phone_1: params[:hr_phone1],
       phone_2: params[:hr_phone2],       
       email:params[:hr_email],
       business_id: business1.id
      )
    hr_rep1.save

    job1 = Job.new(
      occupation: params[:job_occupation],
      experience: params[:job_experience],
      work_value: params[:job_work_value],
      awesomeness: params[:job_awesomeness],
      file_upload: params[:job_file_upload],
      status: params[:job_status],
      business_id: business1.id
    )
    job1.save 

    # jobseekers = JobSeeker.where(occupation: job1.occupation, experience:job1.experience, status:job1.status, zip:job1.business.zip)
    # p jobseekers
    # render json: job1.as_json
    # we need to put job seekers into an array
   
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
