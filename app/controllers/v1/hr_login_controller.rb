class V1::HrLoginController < ApplicationController
  def create
    hr = HrLogin.new(
        name: params[:name],
        email: params[:email],
        password: params[:password],
        password_confirmation: params[:password_confirmation]
      )
        if hr.save
          render json: {message: 'User created successfully'}, status: :created
        else
          render json: {errors: hr.errors.full_messages}, status: :bad_request
      end
    end

end
