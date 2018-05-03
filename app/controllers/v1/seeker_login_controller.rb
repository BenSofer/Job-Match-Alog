class V1::SeekerLoginController < ApplicationController
def create
    seeker = SeekerLogin.new(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    if seeker.save
      render json: {message: 'User created successfully'}, status: :created
    else
      render json: {errors: seeker.errors.full_messages}, status: :bad_request
    end
  end

end
